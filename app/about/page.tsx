import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Trophy, Clock, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-black to-black" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              About DevPact 37
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              The exclusive accountability platform designed for serious developers who want to transform their learning goals into consistent habits.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Mission</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">The Problem We Solve</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Every developer has experienced it: setting ambitious learning goals, starting with enthusiasm, 
                but gradually losing momentum. Traditional online courses have completion rates below 15%. 
                Self-directed learning often fails due to lack of accountability and social pressure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                DevPact 37 changes this by creating small, committed groups where your progress is visible 
                to peers who share similar goals. Social accountability transforms individual struggle into collective success.
              </p>
            </div>
            <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800">
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-400 mb-2">85%</div>
                <p className="text-gray-300">of developers abandon their learning goals within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="bg-gradient-to-r from-blue-900/20 to-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">How DevPact 37 Works</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Exclusive Access</h3>
                <p className="text-gray-400">
                  Only 259 developers (37 Pacts × 7 members) are accepted into each Genesis Cohort. 
                  Scarcity breeds commitment and ensures high-quality participants.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Small Groups</h3>
                <p className="text-gray-400">
                  Each Pact contains exactly 7 members with similar goals. Small enough for real relationships, 
                  large enough for diverse perspectives and mutual support.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Social Pressure</h3>
                <p className="text-gray-400">
                  Your consistency is visible to your Pact members through our real-time grid. 
                  Nobody wants to be the weak link in their group.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* The Science */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">The Science Behind DevPact</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">Behavioral Psychology</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Social Accountability:</strong> People are 65% more likely to complete goals when committed to another person</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Group Dynamics:</strong> Small groups (5-9 people) create optimal peer pressure without diffusion of responsibility</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Habit Formation:</strong> 37 days provides sufficient time to establish new neural pathways and behavioral patterns</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-300">Platform Design</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Transparency:</strong> Real-time consistency grids make progress visible to all Pact members</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Competition:</strong> Global leaderboard creates healthy competition between Pacts</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span><strong>Simplicity:</strong> One-click check-ins remove friction from the accountability process</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-gradient-to-r from-gray-900/50 to-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Values</h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Commitment</h3>
              <p className="text-gray-400 text-sm">We believe in the power of serious commitment over casual participation</p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Community</h3>
              <p className="text-gray-400 text-sm">Small, tight-knit groups create stronger bonds than large, anonymous communities</p>
            </div>
            
            <div className="text-center">
              <Trophy className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Excellence</h3>
              <p className="text-gray-400 text-sm">We attract developers who want to be the best version of themselves</p>
            </div>
            
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-white">Consistency</h3>
              <p className="text-gray-400 text-sm">Small, consistent actions compound into extraordinary results</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Learning?</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join the Genesis Cohort and experience the power of structured accountability with fellow serious developers.
        </p>

        <Link href="/apply">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
          >
            Apply for Genesis Cohort
          </Button>
        </Link>
      </div>
    </div>
  )
}