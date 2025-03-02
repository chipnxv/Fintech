"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
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
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
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

