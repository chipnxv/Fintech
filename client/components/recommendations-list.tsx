"use client"

import { motion } from "framer-motion"
import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const recommendations = [
  {
    title: "AAPL",
    description: "Strong buy signal based on technical analysis",
    change: "+2.5%",
    isPositive: true,
  },
  {
    title: "TSLA",
    description: "Consider taking profits at current levels",
    change: "-1.2%",
    isPositive: false,
  },
  {
    title: "MSFT",
    description: "Accumulate on dips, strong fundamentals",
    change: "+1.8%",
    isPositive: true,
  },
]

export function RecommendationsList() {
  return (
    <Card className="bg-background/95 backdrop-blur-sm border-purple-900/20">
      <CardHeader>
        <CardTitle>Today's Recommendations</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-3">
        {recommendations.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-background/95 backdrop-blur-sm border-purple-900/20">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className={`flex items-center ${item.isPositive ? "text-green-500" : "text-red-500"}`}>
                    {item.isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                    <span className="ml-1">{item.change}</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  )
}

