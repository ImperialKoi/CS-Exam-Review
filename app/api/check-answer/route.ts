"use server"

import { generateText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_API_KEY!,
})

export async function POST(request: Request) {
  try {
    const { question, userAnswer } = await request.json()

    const prompt = `You are a Java programming instructor evaluating a student's answer to a quiz question.

Question: ${question}
Student's Answer: ${userAnswer}

Please evaluate if the student's answer is correct or incorrect. Consider partial credit for answers that demonstrate understanding even if not perfectly worded.

Respond in the following JSON format:
{
  "isCorrect": true/false,
  "correctAnswer": "The correct answer if the student was wrong",
  "explanation": "Brief explanation of why the answer is correct/incorrect"
}

Be strict but fair in your evaluation. For programming questions, focus on the core concepts rather than exact wording.`

    const result = await generateText({
      model: google("gemini-1.5-flash"),
      prompt,
      temperature: 0.7,
    })

    // Parse the JSON response from Gemini
    let response
    try {
      response = JSON.parse(result.text)
    } catch (parseError) {
      // If JSON parsing fails, create a fallback response
      response = {
        isCorrect: false,
        correctAnswer: "Unable to parse AI response",
        explanation: "There was an error processing the evaluation.",
      }
    }

    return Response.json(response)
  } catch (error) {
    console.error("Error in check-answer API:", error)
    return Response.json(
      {
        isCorrect: false,
        correctAnswer: "Error occurred during evaluation",
        explanation: "There was a technical error. Please try again.",
      },
      { status: 500 },
    )
  }
}