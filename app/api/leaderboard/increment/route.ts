import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const { name, isCorrect } = await request.json()

    if (!name || typeof isCorrect !== "boolean") {
      return NextResponse.json({ error: "Invalid data provided" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("cs-exam-review")
    const collection = db.collection("leaderboard")

    // Increment questions answered and correct answers (if correct)
    const updateDoc = {
      $inc: {
        questionsAnswered: 1,
        ...(isCorrect && { correctAnswers: 1 }),
      },
      $set: {
        lastUpdated: new Date().toISOString(),
      },
    }

    // Update the user's stats
    const result = await collection.updateOne({ name }, updateDoc, { upsert: true })

    // If this was an upsert (new user), we need to set initial values
    if (result.upsertedCount > 0) {
      await collection.updateOne(
        { name },
        {
          $set: {
            name,
            correctAnswers: isCorrect ? 1 : 0,
            questionsAnswered: 1,
            accuracyRate: isCorrect ? 100 : 0,
            lastUpdated: new Date().toISOString(),
          },
        },
      )
    } else {
      // Recalculate accuracy rate for existing user
      const user = await collection.findOne({ name })
      if (user) {
        const accuracyRate =
          user.questionsAnswered > 0 ? Math.round((user.correctAnswers / user.questionsAnswered) * 100) : 0

        await collection.updateOne({ name }, { $set: { accuracyRate } })
      }
    }

    // Return updated user data
    const updatedUser = await collection.findOne({ name })
    return NextResponse.json({ success: true, user: updatedUser })
  } catch (error) {
    console.error("Error incrementing leaderboard:", error)
    return NextResponse.json({ error: "Failed to increment leaderboard" }, { status: 500 })
  }
}
