"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Target,
  Check,
  Loader2,
  X,
  Star,
  Zap,
  Award,
  Code,
  Terminal,
  Cpu,
} from "lucide-react"
import { type Question, questions } from "../data/questions"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"

interface GeminiResponse {
  isCorrect: boolean
  correctAnswer?: string
  explanation?: string
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

  const saveUserStats = (name: string, correct: number, total: number) => {
    const stats = {
      name,
      questionsAnswered: total,
      correctAnswers: correct,
      accuracyRate: total > 0 ? Math.round((correct / total) * 100) : 0,
      lastUpdated: new Date().toISOString(),
    }

    const existingStats = JSON.parse(localStorage.getItem("csQuizLeaderboard") || "[]")
    const existingUserIndex = existingStats.findIndex((user: any) => user.name === name)

    if (existingUserIndex >= 0) {
      // Update existing user stats
      existingStats[existingUserIndex] = {
        ...existingStats[existingUserIndex],
        questionsAnswered:
          existingStats[existingUserIndex].questionsAnswered +
          (total - existingStats[existingUserIndex].questionsAnswered),
        correctAnswers:
          existingStats[existingUserIndex].correctAnswers + (correct - existingStats[existingUserIndex].correctAnswers),
        accuracyRate: Math.round(
          ((existingStats[existingUserIndex].correctAnswers +
            (correct - existingStats[existingUserIndex].correctAnswers)) /
            (existingStats[existingUserIndex].questionsAnswered +
              (total - existingStats[existingUserIndex].questionsAnswered))) *
            100,
        ),
        lastUpdated: new Date().toISOString(),
      }
    } else {
      // Add new user
      existingStats.push(stats)
    }

    localStorage.setItem("csQuizLeaderboard", JSON.stringify(existingStats))
  }

  const getLeaderboardData = () => {
    const stats = JSON.parse(localStorage.getItem("csQuizLeaderboard") || "[]")
    return stats.sort((a: any, b: any) => b.correctAnswers - a.correctAnswers)
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
  }, [])

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
    const newScore = {
      correct: score.correct + (correct ? 1 : 0),
      total: score.total + 1,
    }
    setScore(newScore)

    // Save stats if user name is set
    if (isNameSet && userName) {
      saveUserStats(userName, newScore.correct, newScore.total)
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

  const handleMarkAsCorrect = () => {
    if (showFeedback && !isCorrect && currentQuestion?.type === "short-answer") {
      setIsCorrect(true)
      setScore((prev) => ({
        correct: prev.correct + 1,
        total: prev.total,
      }))
    }
  }

  const getQuestionTypeIcon = (type: string) => {
    switch (type) {
      case "multiple-choice":
        return <Target className="h-4 w-4" />
      case "true-false":
        return <CheckCircle className="h-4 w-4" />
      case "short-answer":
        return <Terminal className="h-4 w-4" />
      default:
        return <Code className="h-4 w-4" />
    }
  }

  const getQuestionTypeLabel = (type: string) => {
    switch (type) {
      case "multiple-choice":
        return "MULTIPLE_CHOICE"
      case "true-false":
        return "BOOLEAN_LOGIC"
      case "short-answer":
        return "CODE_INPUT"
      default:
        return "QUERY"
    }
  }

  const getScoreColor = () => {
    if (score.total === 0) return "text-gray-400"
    const percentage = (score.correct / score.total) * 100
    if (percentage >= 80) return "text-green-400"
    if (percentage >= 60) return "text-yellow-400"
    return "text-red-400"
  }

  const getProgressPercentage = () => {
    if (score.total === 0) return 0
    return (score.correct / score.total) * 100
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-black flex justify-center items-center relative overflow-hidden">
        {/* Cyber grid background */}
        <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10"></div>

        <div className="text-center relative z-10">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <Loader2 className="relative h-16 w-16 animate-spin mx-auto mb-6 text-cyan-400" />
          </div>
          <div className="cyber-text text-xl font-mono">LOADING_NEXT_QUERY...</div>
          <div className="mt-2 text-gray-500 font-mono text-sm">INITIALIZING</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Cyber background elements */}
      <div className="absolute inset-0 bg-cyber-grid opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5"></div>

      {/* Animated neon lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-pulse animation-delay-1000"></div>
      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-green-400 to-transparent animate-pulse animation-delay-2000"></div>
      <div className="absolute right-0 top-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse animation-delay-3000"></div>

      {/* Floating cyber elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full animate-ping animation-delay-1000"></div>
      <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-purple-400 rounded-full animate-ping animation-delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping animation-delay-3000"></div>

      <div className="relative z-10 p-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 pt-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="relative">
                <Cpu className="h-12 w-12 text-cyan-400 drop-shadow-lg animate-pulse" />
                <div className="absolute inset-0 bg-cyan-400 rounded-full blur-lg opacity-50"></div>
              </div>
              <div className="relative">
                <h1 className="text-6xl font-bold font-mono bg-gradient-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg cyber-glow">
                  CS_EXAM_REVIEW
                </h1>
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              </div>
              <div className="relative">
                <Zap className="h-12 w-12 text-purple-400 drop-shadow-lg animate-pulse animation-delay-1000" />
                <div className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-50"></div>
              </div>
            </div>
            <div className="cyber-text text-xl mb-2">JAVA_PROGRAMMING_PROTOCOL</div>
            {isNameSet && (
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="cyber-panel px-6 py-3">
                  <span className="text-gray-400 font-mono">USER: </span>
                  <span className="text-cyan-400 font-mono font-bold">{userName}</span>
                  <span className="text-green-400 font-mono"> [ONLINE]</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowLeaderboard(true)}
                  className="cyber-button gap-2"
                >
                  <Trophy className="h-4 w-4 text-yellow-400" />
                  <span className="font-mono">RANKINGS</span>
                </Button>
              </div>
            )}
          </div>

          {/* Score Card */}
          <Card className="mb-8 cyber-card">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-12">
                  <div className="text-center">
                    <div className={`text-5xl font-bold font-mono ${getScoreColor()} cyber-glow`}>
                      {score.correct}/{score.total}
                    </div>
                    <div className="text-sm text-gray-400 font-mono mt-1">SCORE_RATIO</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-5xl font-bold font-mono ${getScoreColor()} cyber-glow`}>
                      {score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%
                    </div>
                    <div className="text-sm text-gray-400 font-mono mt-1">ACCURACY_RATE</div>
                  </div>
                  {score.total > 0 && (
                    <div className="flex gap-1">
                      {Array.from({ length: Math.min(5, Math.floor((score.correct / score.total) * 5)) }).map(
                        (_, i) => (
                          <Star key={i} className="h-6 w-6 text-yellow-400 fill-current cyber-glow animate-pulse" />
                        ),
                      )}
                    </div>
                  )}
                </div>
                <Button onClick={resetQuiz} className="cyber-button gap-2">
                  <RotateCcw className="h-4 w-4" />
                  <span className="font-mono">RESET_SYSTEM</span>
                </Button>
              </div>
              <div className="relative">
                <Progress value={getProgressPercentage()} className="h-4 bg-gray-800 cyber-progress" />
              </div>
            </CardContent>
          </Card>

          {/* Name Input Dialog */}
          {!isNameSet && (
            <Card className="mb-8 cyber-card">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-mono text-cyan-400 cyber-glow">
                  SYSTEM_INITIALIZATION
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center text-gray-300 font-mono">ENTER_USER_IDENTIFIER</div>
                <div className="flex gap-3">
                  <Input
                    placeholder="USER_IDENTIFIER"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter" && userName.trim()) {
                        setIsNameSet(true)
                      }
                    }}
                    className="cyber-input font-mono"
                  />
                  <Button
                    onClick={() => setIsNameSet(true)}
                    disabled={!userName.trim()}
                    className="cyber-button-primary font-mono"
                  >
                    INITIALIZE
                  </Button>
                </div>
                <div className="text-center">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      setIsNameSet(true)
                      setUserName("ANONYMOUS_USER")
                    }}
                    className="text-gray-500 hover:text-black font-mono text-sm"
                  >
                    CONTINUE_AS_GUEST
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Leaderboard Modal */}
          {showLeaderboard && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-3xl max-h-[85vh] overflow-hidden cyber-card">
                <CardHeader className="pb-4 border-b border-gray-700">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 text-2xl font-mono text-yellow-400 cyber-glow">
                      <Trophy className="h-8 w-8" />
                        RANKINGS
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowLeaderboard(false)}
                      className="hover:bg-gray-800 rounded-full text-gray-400 hover:text-white"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="overflow-y-auto">
                  <div className="space-y-6">
                    {/* Stats Legend */}
                    <div className="cyber-panel p-4">
                      <div className="font-bold text-cyan-400 mb-3 flex items-center gap-2 font-mono">
                        <Award className="h-5 w-5" />
                        RANKING_ALGORITHM:
                      </div>
                      <div className="text-gray-300 space-y-2 text-sm font-mono">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                          PRIMARY: CORRECT_ANSWERS_COUNT
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse animation-delay-500"></div>
                          SECONDARY: ACCURACY_PERCENTAGE
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-1000"></div>
                          TERTIARY: TOTAL_QUERIES_PROCESSED
                        </div>
                      </div>
                    </div>

                    {/* Leaderboard List */}
                    <div className="space-y-3">
                      {getLeaderboardData().map((user: any, index: number) => (
                        <div
                          key={user.name}
                          className={`cyber-panel p-6 transition-all duration-300 hover:border-cyan-400/50 ${
                            user.name === userName ? "border-cyan-400 bg-cyan-400/5" : ""
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div
                                className={`w-12 h-12 rounded border-2 flex items-center justify-center font-bold text-lg font-mono ${
                                  index === 0
                                    ? "border-yellow-400 text-yellow-400 bg-yellow-400/10 cyber-glow"
                                    : index === 1
                                      ? "border-gray-400 text-gray-400 bg-gray-400/10"
                                      : index === 2
                                        ? "border-amber-600 text-amber-600 bg-amber-600/10"
                                        : "border-gray-600 text-gray-400 bg-gray-600/10"
                                }`}
                              >
                                #{index + 1}
                              </div>
                              <div>
                                <div className="font-bold text-lg text-white font-mono">{user.name}</div>
                                <div className="text-sm text-gray-400 font-mono">
                                  LAST_SYNC: {new Date(user.lastUpdated).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="grid grid-cols-3 gap-6 text-sm">
                                <div className="text-center">
                                  <div className="font-bold text-2xl text-green-400 font-mono cyber-glow">
                                    {user.correctAnswers}
                                  </div>
                                  <div className="text-gray-400 font-mono text-xs">CORRECT</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-bold text-2xl text-cyan-400 font-mono cyber-glow">
                                    {user.questionsAnswered}
                                  </div>
                                  <div className="text-gray-400 font-mono text-xs">TOTAL</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-bold text-2xl text-purple-400 font-mono cyber-glow">
                                    {user.accuracyRate}%
                                  </div>
                                  <div className="text-gray-400 font-mono text-xs">ACCURACY</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      {getLeaderboardData().length === 0 && (
                        <div className="text-center py-12 text-gray-400">
                          <Trophy className="h-16 w-16 mx-auto mb-4 text-gray-600" />
                          <div className="text-lg font-mono">NO_DATA_RECORDED</div>
                          <div className="font-mono text-sm">COMPLETE_QUERIES_TO_ENTER_RANKINGS</div>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Question Card */}
          <Card className="cyber-card">
            <CardHeader className="pb-6">
              <div className="flex items-center justify-between mb-4">
                <Badge className="cyber-badge gap-2 px-4 py-2">
                  {getQuestionTypeIcon(currentQuestion.type)}
                  <span className="font-mono">{getQuestionTypeLabel(currentQuestion.type)}</span>
                </Badge>
                <div className="cyber-panel px-4 py-2">
                  <span className="text-sm text-gray-400 font-mono">QUERY_{score.total + 1}</span>
                </div>
              </div>
              <CardTitle className="text-xl leading-relaxed text-white font-mono" style={{ whiteSpace: "pre-line" }}>
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">
              {!showFeedback && (
                <>
                  {currentQuestion.type === "multiple-choice" || currentQuestion.type === "true-false" ? (
                    <RadioGroup value={userAnswer} onValueChange={setUserAnswer} className="space-y-4">
                      {(currentQuestion.options ?? ["True", "False"]).map((option, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-4 rounded-lg border border-gray-700 hover:border-cyan-400/50 transition-all duration-300 hover:bg-gray-800/50 cyber-option"
                        >
                          <RadioGroupItem
                            value={option}
                            id={`option-${index}`}
                            className="border-gray-600 text-cyan-400"
                          />
                          <Label
                            htmlFor={`option-${index}`}
                            className="cursor-pointer flex-1 text-base font-mono text-gray-200"
                          >
                            {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  ) : (
                    <div className="space-y-3">
                      <Label htmlFor="answer-input" className="text-base font-mono text-cyan-400">
                        INPUT_RESPONSE:
                      </Label>
                      <Textarea
                        id="answer-input"
                        placeholder="Enter your response here..."
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        className="cyber-input min-h-[140px] text-base resize-none font-mono"
                      />
                    </div>
                  )}

                  <Button
                    onClick={handleSubmitAnswer}
                    disabled={!userAnswer.trim() || isCheckingAnswer}
                    className="w-full h-14 text-lg font-mono cyber-button-primary"
                  >
                    {isCheckingAnswer ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-3 animate-spin" />
                        PROCESSING...
                      </>
                    ) : (
                      <>EXECUTE_QUERY</>
                    )}
                  </Button>
                </>
              )}

              {showFeedback && (
                <div className="space-y-8">
                  <div
                    className={`p-8 rounded-lg border-2 ${
                      isCorrect
                        ? "bg-green-900/20 border-green-400 cyber-success"
                        : "bg-red-900/20 border-red-400 cyber-error"
                    }`}
                  >
                    <div className="flex items-start gap-6">
                      {isCorrect ? (
                        <div className="relative">
                          <CheckCircle className="h-8 w-8 text-green-400 flex-shrink-0 mt-1 cyber-glow animate-pulse" />
                        </div>
                      ) : (
                        <div className="relative">
                          <XCircle className="h-8 w-8 text-red-400 flex-shrink-0 mt-1 cyber-glow animate-pulse" />
                        </div>
                      )}
                      <div className="flex-1 space-y-4">
                        <div>
                          <p
                            className={`font-bold text-xl font-mono ${isCorrect ? "text-green-400" : "text-red-400"} cyber-glow`}
                          >
                            {isCorrect ? "QUERY_SUCCESSFUL" : "QUERY_FAILED"}
                          </p>
                          <p className={`text-sm mt-2 font-mono ${isCorrect ? "text-green-300" : "text-red-300"}`}>
                            <span className="text-gray-400">INPUT: </span>
                            {userAnswer}
                          </p>
                        </div>

                        {!isCorrect && (
                          <div className="cyber-panel p-4">
                            <p className="text-sm font-mono text-green-400 mb-2">EXPECTED_OUTPUT:</p>
                            <p className="text-sm text-green-300 font-mono">
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
                          <div className="cyber-panel p-4 border-cyan-400/30">
                            <p className="text-sm font-mono text-cyan-400 mb-2">EXPLANATION:</p>
                            <p className="text-sm text-cyan-300 font-mono" style={{ whiteSpace: "pre-wrap" }}>
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
                      className="w-full gap-3 h-12 cyber-button border-green-400/50 text-green-400 hover:bg-green-400/10"
                    >
                      <Check className="h-5 w-5" />
                      <span className="font-mono">OVERRIDE_VALIDATION</span>
                    </Button>
                  )}

                  <Button onClick={handleNextQuestion} className="w-full h-14 text-lg font-mono cyber-button-primary">
                    NEXT_QUERY
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
