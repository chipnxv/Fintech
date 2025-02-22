"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const stats = [
  {
    title: "Portfolio Value",
    value: "$124,532.23",
    change: "+2.5%",
    isPositive: true,
  },
  {
    title: "Today's Return",
    value: "$1,233.12",
    change: "+1.2%",
    isPositive: true,
  },
  {
    title: "Total Return",
    value: "$23,532.11",
    change: "-0.8%",
    isPositive: false,
  },
]

export function DashboardHeader() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="p-4 bg-background/95 backdrop-blur-sm border-purple-900/20">
            <p className="text-sm text-muted-foreground">{stat.title}</p>
            <p className="mt-2 text-2xl font-bold">{stat.value}</p>
            <p className={`mt-1 text-sm ${stat.isPositive ? "text-green-500" : "text-red-500"}`}>{stat.change}</p>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

