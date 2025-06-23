"use server"

import { GoogleGenAI, Type } from "@google/genai";

const google = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY!,
})

export async function POST(request: Request) {
  try {
    const { question, userAnswer, correctAnswers } = await request.json()

    const prompt = `You are a Java programming instructor evaluating a student's answer to a quiz question.

Question: ${question}
Student's Answer: ${userAnswer}
Answer Key:
- ${correctAnswers.join("\n- ")}

Please evaluate if the student's answer is correct or incorrect. Consider partial credit for answers that demonstrate understanding even if not perfectly worded.

Respond in the following JSON format:
explanation: Why the answer is right or wrong, the student will see this, so address them directly. Should be about 1-2 sentences max.
isCorrect: Is the answer right (true) or wrong (false)
correctAnswer: A sample correct answer for the student.

Be strict but fair in your evaluation. For programming questions, focus on the core concepts rather than exact wording.`

    const result = await google.models.generateContent({
      model: "gemini-2.5-flash-lite-preview-06-17",
      contents: prompt,
      config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: 
          Type.OBJECT,
        properties: {
          explanation: { type: Type.STRING },
          isCorrect: { type: Type.BOOLEAN },
          correctAnswer: { type: Type.STRING }
        }
        }
      }
    }
    )

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