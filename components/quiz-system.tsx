"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle, RotateCcw, BookOpen, Trophy, Target, Check, Loader2 } from "lucide-react"
import { type Question, questions } from "../data/questions"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

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

  const checkWithGemini = async (question: string, userAnswer: string, correctAnswers: string[] | string): Promise<GeminiResponse> => {
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
        geminiResult = await checkWithGemini(currentQuestion.question, userAnswer, )
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
    setScore((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }))
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
            <CardTitle className="text-l leading-relaxed" style={{whiteSpace: "pre-line"}}>{currentQuestion.question}</CardTitle>
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

                      {/* START: MODIFIED SECTION */}
                      {!isCorrect && (
                        <div className="p-3 bg-white/60 rounded-lg">
                          <p className="text-sm font-medium text-green-800 mb-1">Suggested Answer:</p>
                          <p className="text-sm text-green-700">
                            {geminiResponse?.correctAnswer // Use Gemini's answer if available
                              ? geminiResponse.correctAnswer
                              : currentQuestion.type === "short-answer" // Fallback to static answer
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
                      {/* END: MODIFIED SECTION */}
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
