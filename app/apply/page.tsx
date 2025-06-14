"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Github, Globe } from "lucide-react"
import Link from "next/link"

const interestTags = [
  "#javascript",
  "#python",
  "#react",
  "#ai",
  "#machine-learning",
  "#web3",
  "#mobile",
  "#backend",
  "#frontend",
  "#devops",
  "#data-science",
  "#cybersecurity",
  "#game-dev",
  "#ui-ux",
]

export default function ApplicationPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    portfolio: "",
    goal: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <Card className="bg-gray-900/50 border-gray-800 max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Application Submitted!</h2>
            <p className="text-gray-400 mb-6">
              Thank you for applying to the Genesis Cohort. We'll review your application and get back to you within 48
              hours.
            </p>
            <Link href="/">
              <Button className="bg-blue-600 hover:bg-blue-700">Return to Home</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
              Apply for Genesis Cohort
            </h1>
            <p className="text-gray-400">
              Join the exclusive first cohort of DevPact 37. Only serious developers need apply.
            </p>
          </div>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Application Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                      className="bg-gray-800 border-gray-700 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="github" className="text-white flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      GitHub Profile
                    </Label>
                    <Input
                      id="github"
                      value={formData.github}
                      onChange={(e) => setFormData((prev) => ({ ...prev, github: e.target.value }))}
                      placeholder="https://github.com/username"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolio" className="text-white flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Portfolio/Website
                    </Label>
                    <Input
                      id="portfolio"
                      value={formData.portfolio}
                      onChange={(e) => setFormData((prev) => ({ ...prev, portfolio: e.target.value }))}
                      placeholder="https://yoursite.com"
                      className="bg-gray-800 border-gray-700 text-white"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-white mb-3 block">Primary Interests</Label>
                  <div className="flex flex-wrap gap-2">
                    {interestTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant={selectedTags.includes(tag) ? "default" : "outline"}
                        className={`cursor-pointer transition-colors ${
                          selectedTags.includes(tag)
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-600 text-gray-400 hover:border-blue-500 hover:text-blue-400"
                        }`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <Label htmlFor="goal" className="text-white">
                    Your 37-Day Commitment Goal *
                  </Label>
                  <Textarea
                    id="goal"
                    value={formData.goal}
                    onChange={(e) => setFormData((prev) => ({ ...prev, goal: e.target.value }))}
                    placeholder="Describe what you want to accomplish in 37 days. Be specific about your learning goal, project, or skill you want to develop."
                    className="bg-gray-800 border-gray-700 text-white min-h-[120px]"
                    required
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    This is the most important part of your application. Be specific and realistic.
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
