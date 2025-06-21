"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle, RotateCcw } from "lucide-react"
import { Question, questions } from "../data/questions"
// Import additional icon for "Mark as Correct" button
import { Check } from "lucide-react" 

export default function QuizSystem() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [userAnswer, setUserAnswer] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [usedQuestions, setUsedQuestions] = useState<Set<string>>(new Set())
  const [score, setScore] = useState({ correct: 0, total: 0 })

  const getRandomQuestion = () => {
    const availableQuestions = questions.filter((q) => !usedQuestions.has(q.question))

    if (availableQuestions.length === 0) {
      // Reset if all questions have been used
      setUsedQuestions(new Set())
      // Ensure we don't pick the same question twice in a row if only one is available after reset
      if (questions.length === 0) return null; // Handle empty questions array
      const newQuestion = questions[Math.floor(Math.random() * questions.length)];
      setUsedQuestions((prev) => new Set([...prev, newQuestion.question])); // Add to used right away
      return newQuestion;
    }

    const newQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    setUsedQuestions((prev) => new Set([...prev, newQuestion.question])); // Add to used right away
    return newQuestion;
  }

  const loadNewQuestion = () => {
    const newQuestion = getRandomQuestion()
    setCurrentQuestion(newQuestion)
    setUserAnswer("")
    setShowFeedback(false)
    setIsCorrect(false)
    // usedQuestions is updated inside getRandomQuestion now
  }

  useEffect(() => {
    loadNewQuestion()
  }, [])

  const checkShortAnswer = (userAnswer: string, correctAnswers: string[] | string): boolean => {
    if (!Array.isArray(correctAnswers)) {
      correctAnswers = [correctAnswers]
    }
    const normalizedUserAnswer = userAnswer.toLowerCase().trim()
    return correctAnswers.some(
      (correct) =>
        normalizedUserAnswer.includes(correct.toLowerCase()) || correct.toLowerCase().includes(normalizedUserAnswer),
    )
  }

  const handleSubmitAnswer = () => {
    if (!currentQuestion || !userAnswer.trim()) return

    let correct = false

    if (currentQuestion.type === "short-answer") {
      correct = checkShortAnswer(userAnswer, currentQuestion.correctAnswer as string[])
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

  // New handler for manually marking as correct
  const handleMarkAsCorrect = () => {
    // Only allow if it was previously marked incorrect and it's a short-answer question
    if (showFeedback && !isCorrect && currentQuestion?.type === "short-answer") {
      setIsCorrect(true)
      // If it was already counted as incorrect, we need to increment correct by 1 without changing total
      setScore((prev) => ({
        correct: prev.correct + 1,
        total: prev.total, // total remains the same as it was already incremented in handleSubmitAnswer
      }))
    }
  }

  if (!currentQuestion) {
    return <div className="flex justify-center items-center h-64">Loading...</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Score: {score.correct}/{score.total} ({score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}
          %)
        </div>
        <Button variant="outline" size="sm" onClick={resetQuiz}>
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Java Quiz Question</CardTitle>
          <CardDescription>Answer the question below</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg">{currentQuestion.question}</p>

          {!showFeedback && (
            <>
              {currentQuestion.type === "multiple-choice" || currentQuestion.type === "true-false" ? (
                <RadioGroup value={userAnswer} onValueChange={setUserAnswer}>
                  {(currentQuestion.options ?? ["True", "False"]).map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`option-${index}`} />
                      <Label htmlFor={`option-${index}`} className="cursor-pointer">
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              ) : (
                <Textarea
                  placeholder="Enter your answer here..."
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  className="min-h-[100px]"
                />
              )}

              <Button onClick={handleSubmitAnswer} disabled={!userAnswer.trim()} className="w-full">
                Submit Answer
              </Button>
            </>
          )}

          {showFeedback && (
            <div className="space-y-4">
              <div
                className={`flex items-center gap-3 p-4 rounded-lg ${
                  isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
                }`}
              >
                {isCorrect ? (
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="h-6 w-6 text-red-500 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className={`font-medium ${isCorrect ? "text-green-800" : "text-red-800"}`}>
                    {isCorrect ? "Correct!" : "Incorrect"}
                  </p>
                  <p className={`text-sm ${isCorrect ? "text-green-600" : "text-red-600"}`}>
                    Your answer: {userAnswer}
                  </p>
                  {!isCorrect && (
                    <p className="text-sm text-green-600 mt-1">
                      Correct answer:{" "}
                      {currentQuestion.type === "short-answer"
                        ? (currentQuestion.correctAnswer as string[])[0] // Show first correct answer
                        : currentQuestion.correctAnswer}
                    </p>
                  )}
                  {currentQuestion.explanation && (
                    <p className="text-sm text-blue-600 mt-2">{currentQuestion.explanation}</p>
                  )}
                </div>
              </div>

              {/* Mark as Correct Button */}
              {showFeedback && !isCorrect && currentQuestion.type === "short-answer" && (
                <Button onClick={handleMarkAsCorrect} variant="outline" className="w-full">
                  <Check className="h-4 w-4 mr-2" /> Mark as Correct
                </Button>
              )}

              <Button onClick={handleNextQuestion} className="w-full">
                Next Question
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}