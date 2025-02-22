"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "../../components/ui/badge"
import { ArrowRight, Sparkles, TrendingUp, BarChart } from "lucide-react"

const suggestions = [
  {
    title: "Growth Portfolio",
    description: "AI-recommended mix of high-growth tech stocks",
    risk: "High",
    expectedReturn: "12-15%",
    confidence: 85,
    tags: ["Tech", "Growth", "Innovation"],
  },
  {
    title: "Balanced Fund",
    description: "Diversified portfolio of stocks and bonds",
    risk: "Medium",
    expectedReturn: "8-10%",
    confidence: 92,
    tags: ["Balanced", "Diversified", "Stable"],
  },
  {
    title: "Dividend Income",
    description: "Focus on stable companies with high dividend yields",
    risk: "Low",
    expectedReturn: "5-7%",
    confidence: 95,
    tags: ["Dividend", "Income", "Stable"],
  },
]

export default function AIAdvisor() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center gap-3 mb-6">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-purple-500 opacity-75 blur-sm animate-pulse" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-purple-500">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold">AI Investment Advisor</h1>
            <p className="text-muted-foreground">Personalized investment suggestions based on market analysis</p>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {suggestions.map((suggestion, index) => (
          <motion.div
            key={suggestion.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full bg-background/95 backdrop-blur-sm border-purple-900/20">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{suggestion.title}</span>
                  <Badge
                    className={`
                      ${suggestion.risk === "High" && "bg-red-500/10 text-red-500"}
                      ${suggestion.risk === "Medium" && "bg-yellow-500/10 text-yellow-500"}
                      ${suggestion.risk === "Low" && "bg-green-500/10 text-green-500"}
                      badge-secondary
                    `}
                  >
                    {suggestion.risk} Risk
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{suggestion.description}</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">Expected Return: {suggestion.expectedReturn}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart className="h-4 w-4 text-purple-500" />
                    <span className="text-sm">AI Confidence: {suggestion.confidence}%</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {suggestion.tags.map((tag) => (
                      <Badge key={tag} className="bg-purple-500/5">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full mt-4 bg-purple-500 hover:bg-purple-600">
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

