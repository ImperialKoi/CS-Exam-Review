"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle, RotateCcw, BookOpen, Trophy, Target, Check, Loader2, X } from "lucide-react"
import { type Question, questions } from "../data/questions"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

interface GeminiResponse {
  isCorrect: boolean
  correctAnswer?: string
  explanation?: string
}

interface LeaderboardUser {
  _id?: string
  name: string
  questionsAnswered: number
  correctAnswers: number
  accuracyRate: number
  lastUpdated: string
}

export default function QuizSystem() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set())
  const [score, setScore] = useState({ correct: 0, total: 0 })
  const [isCheckingAnswer, setIsCheckingAnswer] = useState(false)
  const [geminiResponse, setGeminiResponse] = useState<GeminiResponse | null>(null)
  const [showLeaderboard, setShowLeaderboard] = useState(false)
  const [userName, setUserName] = useState("")
  const [isNameSet, setIsNameSet] = useState(false)
  const [leaderboardData, setLeaderboardData] = useState<LeaderboardUser[]>([])
  const [isLoadingLeaderboard, setIsLoadingLeaderboard] = useState(false)

  // Fetch leaderboard data from MongoDB
  const fetchLeaderboard = async () => {
    try {
      setIsLoadingLeaderboard(true)
      const response = await fetch("/api/leaderboard")
      if (response.ok) {
        const data = await response.json()
        setLeaderboardData(data)
      }
    } catch (error) {
      console.error("Error fetching leaderboard:", error)
    } finally {
      setIsLoadingLeaderboard(false)
    }
  }

  // Update user stats in MongoDB
  const updateUserStats = async (name: string, isCorrect: boolean) => {
    try {
      const response = await fetch("/api/leaderboard/increment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, isCorrect }),
      })

      if (response.ok) {
        const result = await response.json()
        if (result.user) {
          setScore({
            correct: result.user.correctAnswers,
            total: result.user.questionsAnswered,
          })
        }
        // Refresh leaderboard
        fetchLeaderboard()
      }
    } catch (error) {
      console.error("Error updating user stats:", error)
    }
  }

  // Mark question as correct in MongoDB
  const markAsCorrectInDB = async (name: string) => {
    try {
      const response = await fetch("/api/leaderboard/mark-correct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      })

      if (response.ok) {
        const result = await response.json()
        if (result.user) {
          setScore({
            correct: result.user.correctAnswers,
            total: result.user.questionsAnswered,
          })
        }
        // Refresh leaderboard
        fetchLeaderboard()
      }
    } catch (error) {
      console.error("Error marking as correct:", error)
    }
  }

  // Load user stats from MongoDB
  const loadUserStats = async (name: string) => {
    try {
      const response = await fetch("/api/leaderboard")
      if (response.ok) {
        const data = await response.json()
        const existingUser = data.find((user: LeaderboardUser) => user.name === name)

        if (existingUser) {
          setScore({
            correct: existingUser.correctAnswers,
            total: existingUser.questionsAnswered,
          })
        }
      }
    } catch (error) {
      console.error("Error loading user stats:", error)
    }
  }

  const getRandomQuestion = () => {
    const availableQuestions = questions.filter((q) => !usedQuestions.has(q.question))

    if (availableQuestions.length === 0) {
      setUsedQuestions(new Set())
      if (questions.length === 0) return null
      const newQuestion = questions[Math.floor(Math.random() * questions.length)]
      setUsedQuestions((prev) => new Set([...prev, newQuestion.question]))
      return newQuestion
    }

    const newQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    setUsedQuestions((prev) => new Set([...prev, newQuestion.question]))
    return newQuestion
  }

  const loadNewQuestion = () => {
    const newQuestion = getRandomQuestion()
    setCurrentQuestion(newQuestion)
    setUserAnswer("")
    setShowFeedback(false)
    setIsCorrect(false)
    setGeminiResponse(null)
  }

  useEffect(() => {
    loadNewQuestion()
    fetchLeaderboard()
  }, [])

  useEffect(() => {
    // Add global function to window for console access
    ;(window as any).addCustomScore = async (name: string, correct: number, total: number) => {
      if (!name || typeof correct !== "number" || typeof total !== "number") {
        console.error('Usage: addCustomScore("PlayerName", correctAnswers, totalQuestions)')
        console.error('Example: addCustomScore("Alice", 25, 30)')
        return
      }

      if (correct < 0 || total < 0 || correct > total) {
        console.error("Invalid scores: correct answers cannot be negative or greater than total questions")
        return
      }

      try {
        const response = await fetch("/api/leaderboard", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            correctAnswers: correct,
            questionsAnswered: total,
          }),
        })

        if (response.ok) {
          console.log(`✅ Updated ${name}'s stats: ${correct}/${total} (${Math.round((correct / total) * 100)}%)`)
          fetchLeaderboard()

          // If this is the current user, update their displayed score
          if (name === userName && isNameSet) {
            setScore({ correct, total })
          }
        } else {
          console.error("Failed to update leaderboard")
        }
      } catch (error) {
        console.error("Error updating leaderboard:", error)
      }
    }

    // Add helper function to view current leaderboard
    ;(window as any).viewLeaderboard = async () => {
      try {
        const response = await fetch("/api/leaderboard")
        if (response.ok) {
          const data = await response.json()
          console.log("📊 Current Leaderboard:")
          console.table(
            data.map((user: LeaderboardUser, index: number) => ({
              Rank: index + 1,
              Name: user.name,
              Correct: user.correctAnswers,
              Total: user.questionsAnswered,
              Accuracy: `${user.accuracyRate}%`,
              "Last Updated": new Date(user.lastUpdated).toLocaleDateString(),
            })),
          )
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error)
      }
    }

    // Add function to clear leaderboard (this would need a new API endpoint)
    ;(window as any).clearLeaderboard = () => {
      console.log("⚠️ Clear leaderboard function not implemented for MongoDB version")
      console.log("This would require database admin access")
    }

    // Show available console commands
    console.log("🎮 CS Exam Review Console Commands (MongoDB Version):")
    console.log('• addCustomScore("Name", correct, total) - Add/update user scores')
    console.log("• viewLeaderboard() - View current leaderboard")
    console.log('Example: addCustomScore("TestUser", 45, 50)')

    // Cleanup function
    return () => {
      delete (window as any).addCustomScore
      delete (window as any).viewLeaderboard
      delete (window as any).clearLeaderboard
    }
  }, [userName, isNameSet])

  const checkShortAnswer = (userAnswer: string, correctAnswers: string[] | string): boolean => {
    if (!Array.isArray(correctAnswers)) {
      correctAnswers = Array.of(correctAnswers)
    }
    const normalizedUserAnswer = userAnswer.toLowerCase().trim()
    return correctAnswers.some(
      (correct) =>
        normalizedUserAnswer.includes(correct.toLowerCase()) || correct.toLowerCase().includes(normalizedUserAnswer),
    )
  }

  const checkWithGemini = async (
    question: string,
    userAnswer: string,
    correctAnswers: string[] | string,
  ): Promise<GeminiResponse> => {
    if (!Array.isArray(correctAnswers)) {
      correctAnswers = Array.of(correctAnswers)
    }
    try {
      const response = await fetch("/api/check-answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question,
          userAnswer,
          correctAnswers,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to check answer with Gemini")
      }

      return await response.json()
    } catch (error) {
      console.error("Error checking answer with Gemini:", error)
      return {
        isCorrect: false,
        correctAnswer: "Unable to verify answer. Please try again.",
        explanation: "There was an error checking your answer.",
      }
    }
  }

  const handleSubmitAnswer = async () => {
    if (!currentQuestion || !userAnswer.trim()) return

    let correct = false
    let geminiResult: GeminiResponse | null = null

    if (currentQuestion.type === "short-answer") {
      setIsCheckingAnswer(true)
      try {
        geminiResult = await checkWithGemini(
          currentQuestion.question,
          userAnswer,
          currentQuestion.correctAnswer as string[],
        )
        correct = geminiResult.isCorrect
        setGeminiResponse(geminiResult)
      } catch (error) {
        correct = checkShortAnswer(userAnswer, currentQuestion.correctAnswer as string[])
      }
      setIsCheckingAnswer(false)
    } else {
      correct = userAnswer === currentQuestion.correctAnswer
    }

    setIsCorrect(correct)
    setShowFeedback(true)

    // Update stats in MongoDB if user name is set
    if (isNameSet && userName) {
      await updateUserStats(userName, correct)
    } else {
      // Update local score if no user name
      setScore((prev) => ({
        correct: prev.correct + (correct ? 1 : 0),
        total: prev.total + 1,
      }))
    }
  }

  const handleNextQuestion = () => {
    loadNewQuestion()
  }

  const resetQuiz = () => {
    setUsedQuestions(new Set())
    setScore({ correct: 0, total: 0 })
    loadNewQuestion()
  }

  const handleMarkAsCorrect = async () => {
    if (showFeedback && !isCorrect && currentQuestion?.type === "short-answer") {
      setIsCorrect(true)

      // Update in MongoDB if user name is set
      if (isNameSet && userName) {
        await markAsCorrectInDB(userName)
      } else {
        // Update local score if no user name
        setScore((prev) => ({
          correct: prev.correct + 1,
          total: prev.total,
        }))
      }
    }
  }

  const getQuestionTypeIcon = (type: string) => {
    switch (type) {
      case "multiple-choice":
        return <Target className="h-4 w-4" />
      case "true-false":
        return <CheckCircle className="h-4 w-4" />
      case "short-answer":
        return <BookOpen className="h-4 w-4" />
      default:
        return <BookOpen className="h-4 w-4" />
    }
  }

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case "multiple-choice":
        return "Multiple Choice"
      case "true-false":
        return "True/False"
      case "short-answer":
        return "Short Answer"
      default:
        return "Question"
    }
  }

  const getScoreColor = () => {
    if (score.total === 0) return "text-gray-600"
    const percentage = (score.correct / score.total) * 100
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getProgressPercentage = () => {
    if (score.total === 0) return 0
    return (score.correct / score.total) * 100
  }

  if (!currentQuestion) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-gray-600">Loading your next question...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Trophy className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CS Exam Review
            </h1>
          </div>
          <p className="text-gray-600 text-lg">Master your Java programming concepts</p>
          {isNameSet && (
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="text-sm text-gray-600">
                Welcome back, <span className="font-semibold">{userName}</span>!
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setShowLeaderboard(true)
                  fetchLeaderboard()
                }}
                className="gap-2"
              >
                <Trophy className="h-4 w-4" />
                Leaderboard
              </Button>
            </div>
          )}
        </div>

        {/* Score Card */}
        <Card className="mb-6 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor()}`}>
                    {score.correct}/{score.total}
                  </div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${getScoreColor()}`}>
                    {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
                  </div>
                  <div className="text-sm text-gray-500">Accuracy</div>
                </div>
              </div>
              <Button variant="outline" onClick={resetQuiz} className="gap-2">
                <RotateCcw className="h-4 w-4" />
                Reset Quiz
              </Button>
            </div>
            <Progress value={getProgressPercentage()} className="h-2" />
          </CardContent>
        </Card>

        {/* Name Input Dialog */}
        {!isNameSet && (
          <Card className="mb-6 border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center">Welcome to CS Exam Review!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center text-gray-600">Enter your name to track your progress on the leaderboard</div>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && userName.trim()) {
                      setIsNameSet(true)
                      loadUserStats(userName)
                    }
                  }}
                />
                <Button
                  onClick={() => {
                    setIsNameSet(true)
                    loadUserStats(userName)
                  }}
                  disabled={!userName.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Start Quiz ✨
                </Button>
              </div>
              <div className="text-center">
                <Button
                  variant="ghost"
                  onClick={() => {
                    setIsNameSet(true)
                    setUserName("Anonymous")
                    loadUserStats("Anonymous")
                  }}
                  className="text-slate-500 hover:text-slate-700 hover:bg-white/50"
                >
                  Continue as Guest 👤
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Leaderboard Modal */}
        {showLeaderboard && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                    Leaderboard {isLoadingLeaderboard && <Loader2 className="h-4 w-4 animate-spin" />}
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setShowLeaderboard(false)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="overflow-y-auto">
                <div className="space-y-4">
                  {/* Stats Legend */}
                  <div className="bg-blue-50 p-3 rounded-lg text-sm">
                    <div className="font-medium text-blue-800 mb-2">Ranking System (Real-time MongoDB):</div>
                    <div className="text-blue-700 space-y-1">
                      <div>
                        • <strong>Primary:</strong> Most Correct Answers
                      </div>
                      <div>
                        • <strong>Secondary:</strong> Highest Accuracy Rate
                      </div>
                      <div>
                        • <strong>Tertiary:</strong> Most Questions Answered
                      </div>
                    </div>
                  </div>

                  {/* Leaderboard List */}
                  <div className="space-y-2">
                    {leaderboardData.map((user: LeaderboardUser, index: number) => (
                      <div
                        key={user.name}
                        className={`p-4 rounded-lg border-2 ${
                          user.name === userName ? "border-blue-500 bg-blue-50" : "border-gray-200 bg-white"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                                index === 0
                                  ? "bg-yellow-500 text-white"
                                  : index === 1
                                    ? "bg-gray-400 text-white"
                                    : index === 2
                                      ? "bg-amber-600 text-white"
                                      : "bg-gray-200 text-gray-700"
                              }`}
                            >
                              {index + 1}
                            </div>
                            <div>
                              <div className="font-semibold">{user.name}</div>
                              <div className="text-sm text-gray-500">
                                Last active: {new Date(user.lastUpdated).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="grid grid-cols-3 gap-4 text-sm">
                              <div className="text-center">
                                <div className="font-bold text-green-600">{user.correctAnswers}</div>
                                <div className="text-gray-500">Correct</div>
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-blue-600">{user.questionsAnswered}</div>
                                <div className="text-gray-500">Total</div>
                              </div>
                              <div className="text-center">
                                <div className="font-bold text-purple-600">{user.accuracyRate}%</div>
                                <div className="text-gray-500">Accuracy</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    {leaderboardData.length === 0 && !isLoadingLeaderboard && (
                      <div className="text-center py-8 text-gray-500">
                        No stats recorded yet. Complete some questions to appear on the leaderboard!
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Question Card */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="gap-1">
                {getQuestionTypeIcon(currentQuestion.type)}
                {getQuestionTypeLabel(currentQuestion.type)}
              </Badge>
              <div className="text-sm text-gray-500">Question {score.total + 1}</div>
            </div>
            <CardTitle className="text-l leading-relaxed" style={{ whiteSpace: "pre-line" }}>
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            {!showFeedback && (
              <>
                {currentQuestion.type === "multiple-choice" || currentQuestion.type === "true-false" ? (
                  <RadioGroup value={userAnswer} onValueChange={setUserAnswer} className="space-y-3">
                    {(currentQuestion.options ?? ["True", "False"]).map((option, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <RadioGroupItem value={option} id={`option-${index}`} />
                        <Label htmlFor={`option-${index}`} className="cursor-pointer flex-1 text-base">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="answer-input" className="text-base font-medium">
                      Your Answer:
                    </Label>
                    <Textarea
                      id="answer-input"
                      placeholder="Type your answer here..."
                      value={userAnswer}
                      onChange={(e) => setUserAnswer(e.target.value)}
                      className="min-h-[120px] text-base resize-none"
                    />
                  </div>
                )}

                <Button
                  onClick={handleSubmitAnswer}
                  disabled={!userAnswer.trim() || isCheckingAnswer}
                  className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isCheckingAnswer ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Checking Answer...
                    </>
                  ) : (
                    "Submit Answer"
                  )}
                </Button>
              </>
            )}

            {showFeedback && (
              <div className="space-y-6">
                <div
                  className={`p-6 rounded-xl border-2 ${
                    isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {isCorrect ? (
                      <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                    )}
                    <div className="flex-1 space-y-3">
                      <div>
                        <p className={`font-semibold text-lg ${isCorrect ? "text-green-800" : "text-red-800"}`}>
                          {isCorrect ? "Correct! Well done!" : "Not quite right"}
                        </p>
                        <p className={`text-sm ${isCorrect ? "text-green-700" : "text-red-700"}`}>
                          <span className="font-medium">Your answer:</span> {userAnswer}
                        </p>
                      </div>

                      {!isCorrect && (
                        <div className="p-3 bg-white/60 rounded-lg">
                          <p className="text-sm font-medium text-green-800 mb-1">Suggested Answer:</p>
                          <p className="text-sm text-green-700">
                            {geminiResponse?.correctAnswer
                              ? geminiResponse.correctAnswer
                              : currentQuestion.type === "short-answer"
                                ? Array.isArray(currentQuestion.correctAnswer)
                                  ? currentQuestion.correctAnswer[0]
                                  : currentQuestion.correctAnswer
                                : currentQuestion.correctAnswer}
                          </p>
                        </div>
                      )}

                      {(geminiResponse?.explanation || currentQuestion.explanation) && (
                        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="text-sm font-medium text-blue-800 mb-1">Explanation:</p>
                          <p className="text-sm text-blue-700" style={{ whiteSpace: "pre-wrap" }}>
                            {geminiResponse?.explanation || currentQuestion.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {showFeedback && !isCorrect && currentQuestion.type === "short-answer" && (
                  <Button
                    onClick={handleMarkAsCorrect}
                    variant="outline"
                    className="w-full gap-2 border-green-200 text-green-700 hover:bg-green-50"
                  >
                    <Check className="h-4 w-4" />
                    Mark as Correct
                  </Button>
                )}

                <Button
                  onClick={handleNextQuestion}
                  className="w-full h-12 text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Next Question
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
