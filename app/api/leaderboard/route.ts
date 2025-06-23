import { type NextRequest, NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("cs-exam-review")
    const collection = db.collection("leaderboard")

    const leaderboard = await collection
      .find({})
      .sort({ correctAnswers: -1, accuracyRate: -1, questionsAnswered: -1 })
      .toArray()

    return NextResponse.json(leaderboard)
  } catch (error) {
    console.error("Error fetching leaderboard:", error)
    return NextResponse.json({ error: "Failed to fetch leaderboard" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, correctAnswers, questionsAnswered } = await request.json()

    if (!name || typeof correctAnswers !== "number" || typeof questionsAnswered !== "number") {
      return NextResponse.json({ error: "Invalid data provided" }, { status: 400 })
    }

    const accuracyRate = questionsAnswered > 0 ? Math.round((correctAnswers / questionsAnswered) * 100) : 0

    const client = await clientPromise
    const db = client.db("cs-exam-review")
    const collection = db.collection("leaderboard")

    // Update or insert user
    const result = await collection.updateOne(
      { name },
      {
        $set: {
          name,
          correctAnswers,
          questionsAnswered,
          accuracyRate,
          lastUpdated: new Date().toISOString(),
        },
      },
      { upsert: true },
    )

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error("Error updating leaderboard:", error)
    return NextResponse.json({ error: "Failed to update leaderboard" }, { status: 500 })
  }
}
