"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsLoading(false)
  }

  return (
    <div className="px-8 py-12">
      <div className="flex items-center gap-2 mb-8">
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 bg-purple-500 blur-lg opacity-50" />
          <div className="relative h-full w-full bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
        </div>
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-purple-200 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Finvest
        </motion.h1>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="space-y-2">
          <Label htmlFor="email">Email or Phone Number</Label>
          <Input
            id="email"
            type="text"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="bg-background/50"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="bg-background/50"
            required
          />
        </div>

        <Button
          type="submit"
          className={cn("w-full relative overflow-hidden transition-all", isLoading && "cursor-not-allowed")}
          disabled={isLoading}
        >
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </div>
          )}
          <span className={cn("flex items-center justify-center gap-2", isLoading && "opacity-0")}>
            Login <ChevronRight className="h-4 w-4" />
          </span>
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

        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don&apos;t have an account? </span>
          <Link href="/auth/signup" className="text-purple-500 hover:text-purple-400 font-medium transition-colors">
            Sign up
          </Link>
        </div>
      </motion.form>
    </div>
  )
}

