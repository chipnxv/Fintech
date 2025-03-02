"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingNavbar() {
  return (
    <motion.nav
      className="bg-black/80 backdrop-blur-sm border-b border-purple-500/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"
                  fill="url(#gradient)"
                />
                <path d="M12 8v4l3 3" stroke="url(#gradient)" strokeWidth="2" strokeLinecap="round" />
                <defs>
                  <linearGradient id="gradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#A855F7" />
                    <stop offset="1" stopColor="#6B21A8" />
                  </linearGradient>
                </defs>
              </svg>
              Vestern
            </motion.div>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/auth">
              <Button
                variant="ghost"
                className="text-purple-300 hover:text-purple-100 hover:bg-purple-500/20 relative group"
              >
                <span>Login / Sign Up</span>
                <motion.div
                  className="absolute inset-0 rounded-md bg-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
                  }}
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

