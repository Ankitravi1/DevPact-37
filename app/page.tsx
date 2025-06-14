import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Trophy, Clock } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-black to-black" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 text-lg px-4 py-2">
              Genesis Cohort • Limited to 37 Pacts
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              DevPact 37
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              The exclusive accountability platform for serious developers.
              <br />
              Turn your learning goals into consistent habits through peer-driven commitment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center gap-2 text-blue-300">
                <Users className="w-5 h-5" />
                <span>37 Pacts • 7 Members Each</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <Clock className="w-5 h-5" />
                <span>37-Day Challenge</span>
              </div>
              <div className="flex items-center gap-2 text-blue-300">
                <Trophy className="w-5 h-5" />
                <span>Global Leaderboard</span>
              </div>
            </div>

            <Link href="/apply">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
              >
                Apply for the Genesis Cohort
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">How DevPact 37 Works</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Set Your Goal</h3>
              <p className="text-gray-400">
                Define your 37-day learning commitment. Whether it's mastering React, completing a course, or building a
                project.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Join Your Pact</h3>
              <p className="text-gray-400">
                Get assigned to a curated group of 7 like-minded developers. Connect via Discord and support each other.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Stay Consistent</h3>
              <p className="text-gray-400">
                Check in during scheduled sessions. Track progress on the consistency grid and compete on the global
                leaderboard.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* The Exclusivity */}
      <div className="bg-gradient-to-r from-blue-900/20 to-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Why Only 37 Pacts?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Exclusivity breeds commitment. By limiting the Genesis Cohort to just 259 developers (37 × 7), we ensure
            every member is serious about their goals and creates a tight-knit, high-quality community.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Social Pressure</h3>
              <p className="text-gray-400">
                When only 259 spots exist globally, every member feels the weight of their commitment. No one wants to
                be the weak link in their Pact.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-4 text-blue-300">Quality Over Quantity</h3>
              <p className="text-gray-400">
                Small groups mean real relationships. You'll know your 6 Pact members personally, creating genuine
                accountability and support.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Join the Genesis Cohort?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Applications are reviewed manually. Only serious developers with clear 37-day goals will be accepted.
        </p>

        <Link href="/apply">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
          >
            Apply Now
          </Button>
        </Link>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 DevPact 37. Building the future of developer accountability.</p>
        </div>
      </footer>
    </div>
  )
}
