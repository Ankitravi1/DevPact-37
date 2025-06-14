"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/ui/navigation"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to dashboard
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="flex items-center justify-center p-4 min-h-[80vh]">
        <div className="w-full max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                Welcome Back
              </CardTitle>
              <p className="text-gray-400">Sign in to your DevPact 37 account</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="email" className="text-white">
                    Email
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

                <div>
                  <Label htmlFor="password" className="text-white">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                    className="bg-gray-800 border-gray-700 text-white"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>

              <div className="text-center mt-6">
                <Link href="/auth/forgot-password" className="text-blue-400 hover:text-blue-300 text-sm">
                  Forgot your password?
                </Link>
              </div>

              <div className="text-center mt-4">
                <p className="text-gray-400 text-sm">
                  Don't have an account?{" "}
                  <Link href="/auth/signup" className="text-blue-400 hover:text-blue-300">
                    Sign up here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}