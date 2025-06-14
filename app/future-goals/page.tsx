import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, Globe, Users, Zap, Target, TrendingUp, Star, Calendar } from "lucide-react"
import Link from "next/link"

export default function FutureGoalsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-black to-black" />
        <div className="relative container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 text-lg px-4 py-2">
              Roadmap 2025-2026
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
              The Future of DevPact
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              From Genesis Cohort to global platform: Our vision for revolutionizing developer accountability and learning.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Development Roadmap</h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Phase 1 */}
          <div className="relative">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Genesis Cohort (Q1 2025)</h3>
                <p className="text-green-400">✓ Currently Active</p>
              </div>
            </div>
            
            <div className="ml-18 mb-12">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Launch with 37 Pacts (259 developers)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Validate core accountability loop</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Gather user feedback and success metrics</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span>Build foundational community</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="relative">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Platform Evolution (Q2-Q3 2025)</h3>
                <p className="text-blue-400">In Development</p>
              </div>
            </div>
            
            <div className="ml-18 mb-12">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-3">Enhanced Features</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Multiple simultaneous cohorts</li>
                        <li>• Advanced progress tracking</li>
                        <li>• In-platform messaging</li>
                        <li>• Mobile applications (iOS/Android)</li>
                        <li>• Integration with GitHub, LinkedIn</li>
                        <li>• Customizable Pact schedules</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-300 mb-3">Community Growth</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Expand to 100+ Pacts per cohort</li>
                        <li>• Alumni network and mentorship</li>
                        <li>• Success story showcases</li>
                        <li>• Partner with coding bootcamps</li>
                        <li>• Corporate team challenges</li>
                        <li>• Regional time zone optimization</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="relative">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Global Scale (Q4 2025 - Q2 2026)</h3>
                <p className="text-purple-400">Planned</p>
              </div>
            </div>
            
            <div className="ml-18 mb-12">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">Platform Intelligence</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• AI-powered Pact matching</li>
                        <li>• Personalized learning paths</li>
                        <li>• Predictive consistency analytics</li>
                        <li>• Smart goal recommendations</li>
                        <li>• Automated progress insights</li>
                        <li>• Risk detection for dropouts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-300 mb-3">Ecosystem Expansion</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• 1000+ active Pacts globally</li>
                        <li>• Multi-language support</li>
                        <li>• Industry-specific tracks</li>
                        <li>• University partnerships</li>
                        <li>• Certification programs</li>
                        <li>• Developer conference presence</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Phase 4 */}
          <div className="relative">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center mr-6">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Innovation Lab (2026+)</h3>
                <p className="text-yellow-400">Vision</p>
              </div>
            </div>
            
            <div className="ml-18">
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-300 mb-3">Next-Gen Features</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• VR/AR collaborative spaces</li>
                        <li>• Blockchain-based achievements</li>
                        <li>• Real-time code collaboration</li>
                        <li>• AI pair programming sessions</li>
                        <li>• Gamified skill trees</li>
                        <li>• Cross-platform integrations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-yellow-300 mb-3">Market Leadership</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Industry standard for dev accountability</li>
                        <li>• 10,000+ active developers</li>
                        <li>• Global developer conferences</li>
                        <li>• Research partnerships</li>
                        <li>• Open source contributions</li>
                        <li>• Developer advocacy program</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics Goals */}
      <div className="bg-gradient-to-r from-blue-900/20 to-black py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Success Metrics & Goals</h2>
          
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">85%</div>
                <p className="text-gray-400">Goal Completion Rate</p>
                <p className="text-xs text-gray-500 mt-2">vs 15% industry average</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">10K+</div>
                <p className="text-gray-400">Active Developers</p>
                <p className="text-xs text-gray-500 mt-2">by end of 2026</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">50+</div>
                <p className="text-gray-400">Countries</p>
                <p className="text-xs text-gray-500 mt-2">global reach</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900/50 border-gray-800 text-center">
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">4.9</div>
                <p className="text-gray-400">User Satisfaction</p>
                <p className="text-xs text-gray-500 mt-2">out of 5 stars</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Innovation Areas */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Innovation Focus Areas</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
            <CardContent className="p-8">
              <Zap className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">AI-Powered Matching</h3>
              <p className="text-gray-400 mb-4">
                Advanced algorithms will match developers based on learning styles, goals, time zones, 
                and personality compatibility for optimal Pact formation.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Personality assessment integration</li>
                <li>• Learning style analysis</li>
                <li>• Goal compatibility scoring</li>
                <li>• Success prediction modeling</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-green-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Adaptive Learning Paths</h3>
              <p className="text-gray-400 mb-4">
                Dynamic curriculum adjustment based on individual progress, industry trends, 
                and career objectives to maximize learning outcomes.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Real-time difficulty adjustment</li>
                <li>• Industry trend integration</li>
                <li>• Skill gap analysis</li>
                <li>• Career path optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800 hover:border-blue-500/50 transition-colors">
            <CardContent className="p-8">
              <Rocket className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-white">Immersive Collaboration</h3>
              <p className="text-gray-400 mb-4">
                Virtual and augmented reality spaces for collaborative coding sessions, 
                pair programming, and immersive learning experiences.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• VR coding environments</li>
                <li>• Spatial audio collaboration</li>
                <li>• 3D data visualization</li>
                <li>• Haptic feedback integration</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Join the Journey */}
      <div className="bg-gradient-to-r from-gray-900/50 to-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Be Part of the Future</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The Genesis Cohort is just the beginning. Join us now and help shape the future of developer accountability and learning.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all duration-300"
              >
                Apply for Genesis Cohort
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-4 text-lg font-semibold"
              >
                View The Nexus
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-gray-400">
            <Calendar className="w-5 h-5" />
            <span>Genesis Cohort launches Q1 2025</span>
          </div>
        </div>
      </div>
    </div>
  )
}