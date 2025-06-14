"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Users, TrendingUp, Medal, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/ui/navigation"

// Mock leaderboard data
const generateLeaderboardData = () => {
  const pacts = []
  for (let i = 1; i <= 37; i++) {
    const consistency = Math.floor(Math.random() * 40) + 60 // 60-100%
    const themes = [
      "AI Enthusiasts",
      "React Masters",
      "Python Pros",
      "Web3 Builders",
      "Mobile Devs",
      "Backend Legends",
      "Frontend Wizards",
      "DevOps Heroes",
      "Data Scientists",
      "Game Developers",
      "Security Experts",
      "Full Stack",
    ]

    pacts.push({
      number: i,
      name: themes[Math.floor(Math.random() * themes.length)],
      consistency: consistency,
      totalSessions: 16,
      completedSessions: Math.floor((consistency / 100) * 16),
      members: 7,
      trend: Math.random() > 0.5 ? "up" : "down",
    })
  }

  return pacts.sort((a, b) => b.consistency - a.consistency)
}

export default function LeaderboardPage() {
  const pacts = generateLeaderboardData()
  const userPactNumber = 12 // Mock user's pact

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-400" />
      case 2:
        return <Medal className="w-6 h-6 text-gray-300" />
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />
      default:
        return <span className="w-6 h-6 flex items-center justify-center text-gray-400 font-bold">{rank}</span>
    }
  }

  const getRankColor = (rank: number) => {
    if (rank <= 3) return "bg-gradient-to-r from-yellow-600/20 to-yellow-400/20 border-yellow-500/30"
    if (rank <= 10) return "bg-gradient-to-r from-blue-600/20 to-blue-400/20 border-blue-500/30"
    return "bg-gray-900/50 border-gray-800"
  }

  const getConsistencyColor = (consistency: number) => {
    if (consistency >= 90) return "text-green-400"
    if (consistency >= 80) return "text-blue-400"
    if (consistency >= 70) return "text-yellow-400"
    return "text-red-400"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
            The Nexus
          </h1>
          <p className="text-xl text-gray-400 mb-2">Global Pact Leaderboard</p>
          <p className="text-gray-500">Ranked by overall consistency across all 37 Pacts</p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4 text-center">
              <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">{pacts[0]?.consistency}%</p>
              <p className="text-sm text-gray-400">Top Pact</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">259</p>
              <p className="text-sm text-gray-400">Total Members</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">
                {Math.round(pacts.reduce((acc, pact) => acc + pact.consistency, 0) / pacts.length)}%
              </p>
              <p className="text-sm text-gray-400">Avg Consistency</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4 text-center">
              <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-400 font-bold">
                  {pacts.findIndex((p) => p.number === userPactNumber) + 1}
                </span>
              </div>
              <p className="text-2xl font-bold text-white">Your Rank</p>
              <p className="text-sm text-gray-400">Pact {userPactNumber}</p>
            </CardContent>
          </Card>
        </div>

        {/* Leaderboard */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Pact Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pacts.map((pact, index) => {
                const rank = index + 1
                const isUserPact = pact.number === userPactNumber

                return (
                  <div
                    key={pact.number}
                    className={`p-4 rounded-lg border transition-all duration-200 ${
                      isUserPact ? "bg-blue-600/10 border-blue-500/30 ring-2 ring-blue-500/20" : getRankColor(rank)
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-12 h-12">{getRankIcon(rank)}</div>

                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className={`font-bold text-lg ${isUserPact ? "text-blue-400" : "text-white"}`}>
                              Pact {pact.number}
                              {isUserPact && (
                                <span className="text-sm font-normal text-blue-300 ml-2">(Your Pact)</span>
                              )}
                            </h3>
                            <Badge variant="outline" className="border-gray-600 text-gray-400">
                              {pact.name}
                            </Badge>
                          </div>

                          <div className="flex items-center gap-4 mt-2">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-400">{pact.members} members</span>
                            </div>
                            <div className="text-sm text-gray-400">
                              {pact.completedSessions}/{pact.totalSessions} sessions
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className={`text-2xl font-bold ${getConsistencyColor(pact.consistency)}`}>
                          {pact.consistency}%
                        </div>
                        <div className="w-32 mt-2">
                          <Progress value={pact.consistency} className="h-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Back to Dashboard */}
        <div className="text-center mt-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            ← Back to Pact Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}