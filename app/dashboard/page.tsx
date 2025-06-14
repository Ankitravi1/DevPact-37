"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, Calendar, Trophy, MessageCircle, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/ui/navigation"

// Mock user data
const mockUser = {
  name: "Sarah Chen",
  pact: {
    number: 12,
    name: "AI Enthusiasts",
    goal: "Master machine learning fundamentals and build practical AI applications",
    schedule: "Mon/Wed/Fri at 7:00 PM GMT",
    discordLink: "https://discord.gg/devpact12",
  },
  role: "Learner",
  members: [
    { name: "Sarah Chen", role: "Learner", isCurrentUser: true },
    { name: "Marcus Johnson", role: "Admin", isCurrentUser: false },
    { name: "Alex Rivera", role: "Supporter", isCurrentUser: false },
    { name: "Emma Davis", role: "Learner", isCurrentUser: false },
    { name: "James Wilson", role: "Learner", isCurrentUser: false },
    { name: "Lisa Park", role: "Supporter", isCurrentUser: false },
    { name: "David Kim", role: "Learner", isCurrentUser: false },
  ],
}

// Mock session data (37 days, 3 sessions per week = ~16 sessions)
const generateSessionData = () => {
  const sessions = []
  const startDate = new Date("2024-01-15")

  for (let week = 0; week < 6; week++) {
    // Mon, Wed, Fri sessions
    const days = [1, 3, 5] // Monday, Wednesday, Friday
    days.forEach((day) => {
      const sessionDate = new Date(startDate)
      sessionDate.setDate(startDate.getDate() + week * 7 + day - 1)
      sessions.push({
        date: sessionDate,
        isActive: false,
        isCompleted: Math.random() > 0.3, // Random completion for demo
      })
    })
  }

  return sessions.slice(0, 16) // Limit to ~37 days worth
}

export default function PactDashboard() {
  const [sessions] = useState(generateSessionData())
  const [currentTime, setCurrentTime] = useState(new Date())
  const [canCheckIn, setCanCheckIn] = useState(false)
  const [hasCheckedIn, setHasCheckedIn] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Check if current time is within check-in window
  useEffect(() => {
    const now = new Date()
    const today = now.getDay() // 0 = Sunday, 1 = Monday, etc.
    const hour = now.getHours()
    const minute = now.getMinutes()

    // Check if today is Mon(1), Wed(3), or Fri(5) and time is between 6:45 PM and 8:00 PM
    const isSessionDay = [1, 3, 5].includes(today)
    const currentMinutes = hour * 60 + minute
    const sessionStart = 19 * 60 + 0 // 7:00 PM
    const checkInStart = sessionStart - 15 // 6:45 PM
    const sessionEnd = sessionStart + 60 // 8:00 PM

    setCanCheckIn(isSessionDay && currentMinutes >= checkInStart && currentMinutes <= sessionEnd)
  }, [currentTime])

  const handleCheckIn = () => {
    setHasCheckedIn(true)
    // In a real app, this would make an API call
  }

  const getConsistencyPercentage = () => {
    const completedSessions = sessions.filter((s) => s.isCompleted).length
    return Math.round((completedSessions / sessions.length) * 100)
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-purple-600/20 text-purple-300 border-purple-600/30"
      case "Supporter":
        return "bg-green-600/20 text-green-300 border-green-600/30"
      case "Learner":
        return "bg-blue-600/20 text-blue-300 border-blue-600/30"
      default:
        return "bg-gray-600/20 text-gray-300 border-gray-600/30"
    }
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
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Pact {mockUser.pact.number} Dashboard
              </h1>
              <p className="text-gray-400 mt-2">{mockUser.pact.name}</p>
            </div>
            <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/30 text-lg px-4 py-2">
              {mockUser.pact.number} / 37
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Check-in Section */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Session Check-in
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  {hasCheckedIn ? (
                    <div>
                      <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">✓</span>
                      </div>
                      <h3 className="text-2xl font-bold text-green-400 mb-2">Checked In!</h3>
                      <p className="text-gray-400">Great job staying consistent with your commitment.</p>
                    </div>
                  ) : canCheckIn ? (
                    <div>
                      <div className="w-20 h-20 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <Clock className="w-8 h-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Session Active</h3>
                      <p className="text-gray-400 mb-6">Click to confirm your attendance</p>
                      <Button
                        onClick={handleCheckIn}
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
                      >
                        Check In Now
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <div className="w-20 h-20 bg-gray-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="w-8 h-8 text-gray-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-400 mb-2">No Active Session</h3>
                      <p className="text-gray-500">Next session: {mockUser.pact.schedule}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Consistency Grid */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Consistency Grid</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <div className="min-w-[600px]">
                    {/* Header with session numbers */}
                    <div className="grid grid-cols-17 gap-1 mb-2">
                      <div className="text-xs text-gray-400 font-medium">Member</div>
                      {sessions.map((_, index) => (
                        <div key={index} className="text-xs text-gray-400 text-center">
                          {index + 1}
                        </div>
                      ))}
                    </div>

                    {/* Member rows */}
                    {mockUser.members.map((member, memberIndex) => (
                      <div key={member.name} className="grid grid-cols-17 gap-1 mb-2 items-center">
                        <div
                          className={`text-sm truncate ${member.isCurrentUser ? "text-blue-400 font-medium" : "text-gray-300"}`}
                        >
                          {member.name}
                        </div>
                        {sessions.map((session, sessionIndex) => {
                          const isCompleted = Math.random() > 0.3 // Random for demo
                          return (
                            <div
                              key={sessionIndex}
                              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                                isCompleted ? "bg-blue-500 border-blue-400" : "bg-gray-800 border-gray-600"
                              }`}
                            >
                              {isCompleted && <div className="w-2 h-2 bg-white rounded-full" />}
                            </div>
                          )
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Pact Info */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Pact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-gray-400">Goal</Label>
                  <p className="text-white text-sm mt-1">{mockUser.pact.goal}</p>
                </div>

                <div>
                  <Label className="text-gray-400">Schedule</Label>
                  <p className="text-white text-sm mt-1">{mockUser.pact.schedule}</p>
                </div>

                <div>
                  <Label className="text-gray-400">Your Consistency</Label>
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-medium">{getConsistencyPercentage()}%</span>
                      <span className="text-gray-400 text-sm">
                        {sessions.filter((s) => s.isCompleted).length} / {sessions.length} sessions
                      </span>
                    </div>
                    <Progress value={getConsistencyPercentage()} className="h-2" />
                  </div>
                </div>

                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <a href={mockUser.pact.discordLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Discord
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Pact Members */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Pact Members
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockUser.members.map((member) => (
                    <div
                      key={member.name}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        member.isCurrentUser ? "bg-blue-600/10 border border-blue-600/20" : "bg-gray-800/50"
                      }`}
                    >
                      <span className={`font-medium ${member.isCurrentUser ? "text-blue-400" : "text-white"}`}>
                        {member.name}
                        {member.isCurrentUser && " (You)"}
                      </span>
                      <Badge className={getRoleColor(member.role)}>{member.role}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/leaderboard">
                  <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                    <Trophy className="w-4 h-4 mr-2" />
                    View Nexus Leaderboard
                  </Button>
                </Link>

                <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Schedule
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function Label({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={`text-sm font-medium ${className}`}>{children}</div>
}