"use client"

import type React from "react"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        className="w-full max-w-lg"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-900 blur-3xl opacity-20" />
          <div className="relative bg-background/80 backdrop-blur-xl rounded-2xl border border-purple-900/20 shadow-2xl">
            {children}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

