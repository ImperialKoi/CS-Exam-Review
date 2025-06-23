import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request: NextRequest) {
  try {
    const { name } = await request.json()

    if (!name) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 })
    }

    const client = await clientPromise
    const db = client.db("cs-exam-review")
    const collection = db.collection("leaderboard")

    // Increment correct answers by 1
    const result = await collection.updateOne(
      { name },
      {
        $inc: { correctAnswers: 1 },
        $set: { lastUpdated: new Date().toISOString() },
      },
    )

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 })
    }

    // Recalculate accuracy rate
    const user = await collection.findOne({ name })
    if (user) {
      const accuracyRate =
        user.questionsAnswered > 0 ? Math.round((user.correctAnswers / user.questionsAnswered) * 100) : 0

      await collection.updateOne({ name }, { $set: { accuracyRate } })
    }

    // Return updated user data
    const updatedUser = await collection.findOne({ name })
    return NextResponse.json({ success: true, user: updatedUser })
  } catch (error) {
    console.error("Error marking as correct:", error)
    return NextResponse.json({ error: "Failed to mark as correct" }, { status: 500 })
  }
}