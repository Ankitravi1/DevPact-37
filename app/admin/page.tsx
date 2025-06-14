"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, Check, X, Users } from "lucide-react"

// Mock data for applications
const mockApplications = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah@example.com",
    github: "https://github.com/sarahchen",
    portfolio: "https://sarahchen.dev",
    interests: ["#react", "#ai", "#frontend"],
    goal: "Complete the fast.ai course and build a machine learning project that can classify images with 90% accuracy.",
    status: "pending",
    submittedAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    email: "marcus@example.com",
    github: "https://github.com/marcusj",
    portfolio: "",
    interests: ["#python", "#backend", "#devops"],
    goal: "Build and deploy a full-stack web application using Django and Docker, complete with CI/CD pipeline.",
    status: "pending",
    submittedAt: "2024-01-15T14:20:00Z",
  },
  {
    id: 3,
    name: "Alex Rivera",
    email: "alex@example.com",
    github: "https://github.com/alexr",
    portfolio: "https://alexrivera.com",
    interests: ["#javascript", "#web3", "#blockchain"],
    goal: "Learn Solidity and create a DeFi protocol with smart contracts, including comprehensive testing.",
    status: "accepted",
    submittedAt: "2024-01-14T09:15:00Z",
  },
]

const roles = ["Admin", "Supporter", "Learner"]
const pacts = Array.from({ length: 37 }, (_, i) => `Pact ${i + 1}`)

export default function AdminDashboard() {
  const [applications, setApplications] = useState(mockApplications)
  const [selectedApp, setSelectedApp] = useState<any>(null)
  const [assignmentData, setAssignmentData] = useState({
    pact: "",
    role: "",
  })

  const handleStatusChange = (id: number, status: string) => {
    setApplications((prev) => prev.map((app) => (app.id === id ? { ...app, status } : app)))
  }

  const handleAssignment = (application: any) => {
    // In a real app, this would make an API call
    console.log("Assigning:", application.name, "to", assignmentData.pact, "as", assignmentData.role)
    handleStatusChange(application.id, "accepted")
    setSelectedApp(null)
    setAssignmentData({ pact: "", role: "" })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-600/20 text-yellow-300 border-yellow-600/30"
      case "accepted":
        return "bg-green-600/20 text-green-300 border-green-600/30"
      case "rejected":
        return "bg-red-600/20 text-red-300 border-red-600/30"
      default:
        return "bg-gray-600/20 text-gray-300 border-gray-600/30"
    }
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-400">Manage Genesis Cohort applications</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Users className="w-8 h-8 text-blue-400" />
                <div>
                  <p className="text-2xl font-bold text-white">{applications.length}</p>
                  <p className="text-sm text-gray-400">Total Applications</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-600/20 rounded-full flex items-center justify-center">
                  <span className="text-yellow-300 font-bold">P</span>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {applications.filter((app) => app.status === "pending").length}
                  </p>
                  <p className="text-sm text-gray-400">Pending Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-300" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {applications.filter((app) => app.status === "accepted").length}
                  </p>
                  <p className="text-sm text-gray-400">Accepted</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-600/20 rounded-full flex items-center justify-center">
                  <X className="w-4 h-4 text-red-300" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">
                    {applications.filter((app) => app.status === "rejected").length}
                  </p>
                  <p className="text-sm text-gray-400">Rejected</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applications Table */}
        <Card className="bg-gray-900/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 px-4 text-gray-400">Name</th>
                    <th className="text-left py-3 px-4 text-gray-400">Email</th>
                    <th className="text-left py-3 px-4 text-gray-400">Interests</th>
                    <th className="text-left py-3 px-4 text-gray-400">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400">Submitted</th>
                    <th className="text-left py-3 px-4 text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} className="border-b border-gray-800/50">
                      <td className="py-3 px-4 text-white font-medium">{app.name}</td>
                      <td className="py-3 px-4 text-gray-300">{app.email}</td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {app.interests.slice(0, 2).map((interest) => (
                            <Badge key={interest} variant="outline" className="text-xs border-gray-600 text-gray-400">
                              {interest}
                            </Badge>
                          ))}
                          {app.interests.length > 2 && (
                            <Badge variant="outline" className="text-xs border-gray-600 text-gray-400">
                              +{app.interests.length - 2}
                            </Badge>
                          )}
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                      </td>
                      <td className="py-3 px-4 text-gray-400">{new Date(app.submittedAt).toLocaleDateString()}</td>
                      <td className="py-3 px-4">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedApp(app)}
                            className="border-gray-600 text-gray-300 hover:bg-gray-800"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          {app.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                onClick={() => handleStatusChange(app.id, "accepted")}
                                className="bg-green-600 hover:bg-green-700"
                              >
                                <Check className="w-4 h-4" />
                              </Button>
                              <Button
                                size="sm"
                                onClick={() => handleStatusChange(app.id, "rejected")}
                                className="bg-red-600 hover:bg-red-700"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Application Detail Modal */}
        {selectedApp && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <Card className="bg-gray-900 border-gray-800 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <CardHeader>
                <CardTitle className="text-white flex items-center justify-between">
                  Application Details
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedApp(null)}
                    className="text-gray-400 hover:text-white"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-400">Name</Label>
                    <p className="text-white font-medium">{selectedApp.name}</p>
                  </div>
                  <div>
                    <Label className="text-gray-400">Email</Label>
                    <p className="text-white">{selectedApp.email}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-gray-400">GitHub</Label>
                    <p className="text-blue-400">{selectedApp.github || "Not provided"}</p>
                  </div>
                  <div>
                    <Label className="text-gray-400">Portfolio</Label>
                    <p className="text-blue-400">{selectedApp.portfolio || "Not provided"}</p>
                  </div>
                </div>

                <div>
                  <Label className="text-gray-400">Interests</Label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedApp.interests.map((interest: string) => (
                      <Badge key={interest} className="bg-blue-600/20 text-blue-300 border-blue-600/30">
                        {interest}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-gray-400">37-Day Goal</Label>
                  <div className="bg-gray-800 p-4 rounded-lg mt-2">
                    <p className="text-white">{selectedApp.goal}</p>
                  </div>
                </div>

                {selectedApp.status === "pending" && (
                  <div className="border-t border-gray-800 pt-6">
                    <h3 className="text-white font-semibold mb-4">Assign to Pact</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-gray-400">Pact</Label>
                        <Select
                          value={assignmentData.pact}
                          onValueChange={(value) => setAssignmentData((prev) => ({ ...prev, pact: value }))}
                        >
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select Pact" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            {pacts.map((pact) => (
                              <SelectItem key={pact} value={pact} className="text-white">
                                {pact}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-gray-400">Role</Label>
                        <Select
                          value={assignmentData.role}
                          onValueChange={(value) => setAssignmentData((prev) => ({ ...prev, role: value }))}
                        >
                          <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                            <SelectValue placeholder="Select Role" />
                          </SelectTrigger>
                          <SelectContent className="bg-gray-800 border-gray-700">
                            {roles.map((role) => (
                              <SelectItem key={role} value={role} className="text-white">
                                {role}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="flex gap-3 mt-4">
                      <Button
                        onClick={() => handleAssignment(selectedApp)}
                        disabled={!assignmentData.pact || !assignmentData.role}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Accept & Assign
                      </Button>
                      <Button
                        onClick={() => handleStatusChange(selectedApp.id, "rejected")}
                        className="bg-red-600 hover:bg-red-700"
                      >
                        <X className="w-4 h-4 mr-2" />
                        Reject
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
