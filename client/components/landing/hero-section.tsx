"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <motion.div
        className="text-center space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-purple-200 to-purple-400 bg-clip-text text-transparent">
          Your Future,
          <br />
          Engineered with Precision
        </h1>
        <p className="text-xl md:text-2xl text-purple-200/80 max-w-3xl mx-auto">
          Where AI-driven insights meet human expertise, creating a new era of intelligent investing
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/auth">
            <Button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-6 text-lg rounded-lg">
              Get Started <ChevronRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

