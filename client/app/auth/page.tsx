"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronRight, Sparkles } from "lucide-react"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      router.push("/dashboard")
    } catch (error) {
      console.error("Authentication error:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage:
          "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6de68a73f82bf5dac4ca283f787d21d5%20(1)-IhlWWIfHfZAOk2kPzx5FP6pmJhRVij.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-4xl">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-900 blur-3xl opacity-20" />
          <div className="relative bg-black/80 backdrop-blur-xl rounded-2xl border border-purple-900/20 shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row h-full">
              {/* Left Panel - Always visible */}
              <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
                <div className="flex items-center gap-2 mb-8">
                  <div className="relative h-10 w-10">
                    <div className="absolute inset-0 bg-purple-500 blur-lg opacity-50" />
                    <div className="relative h-full w-full bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                    Vestern
                  </h1>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isLogin ? "login" : "signup"}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {!isLogin && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              type="text"
                              value={formData.name}
                              onChange={handleInputChange}
                              className="bg-white/5"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="pan">PAN Card Number</Label>
                            <Input
                              id="pan"
                              type="text"
                              value={formData.pan}
                              onChange={handleInputChange}
                              className="bg-white/5"
                              required
                            />
                          </div>
                        </>
                      )}
                      <div className="space-y-2">
                        <Label htmlFor="email">Email or Phone Number</Label>
                        <Input
                          id="email"
                          type="text"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="bg-white/5"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="bg-white/5"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full relative overflow-hidden" disabled={isLoading}>
                        {isLoading ? (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="h-8 w-8 rounded-full border-2 border-t-transparent border-white animate-spin" />
                          </div>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            {isLogin ? "Login" : "Create Account"} <ChevronRight className="h-4 w-4" />
                          </span>
                        )}
                        {!isLoading && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0"
                            animate={{
                              x: ["0%", "200%"],
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                          />
                        )}
                      </Button>
                    </form>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-purple-400 hover:text-purple-300 text-sm transition-colors"
                  >
                    {isLogin ? "Need an account? Sign up" : "Already have an account? Login"}
                  </button>
                </div>
              </div>

              {/* Right Panel - Animation */}
              <div className="hidden md:block w-1/2 p-8 bg-gradient-to-br from-purple-900/50 to-black relative overflow-hidden">
                <div className="h-full flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                    }}
                    className="absolute inset-0 opacity-30"
                  >
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" stroke="url(#gradient)" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="30" stroke="url(#gradient)" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="20" stroke="url(#gradient)" strokeWidth="0.5" />
                      <defs>
                        <linearGradient id="gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#A855F7" />
                          <stop offset="1" stopColor="#6B21A8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                  <div className="relative text-center space-y-4">
                    <h2 className="text-2xl font-bold text-purple-200">{isLogin ? "Welcome Back" : "Join Vestern"}</h2>
                    <p className="text-purple-300/80">
                      {isLogin
                        ? "Access your portfolio and continue your investment journey"
                        : "Start your journey towards smarter investing"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

