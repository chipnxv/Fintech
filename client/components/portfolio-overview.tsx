"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts"

const data = [
  { name: "Stocks", value: 60 },
  { name: "Bonds", value: 20 },
  { name: "Crypto", value: 10 },
  { name: "Cash", value: 10 },
]

const COLORS = ["#9333ea", "#a855f7", "#c084fc", "#e9d5ff"]

export function PortfolioOverview() {
  return (
    <Card className="bg-background/95 backdrop-blur-sm border-purple-900/20">
      <CardHeader>
        <CardTitle>Portfolio Allocation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full" style={{ backgroundColor: COLORS[index] }} />
              <span className="text-sm text-muted-foreground">
                {item.name} ({item.value}%)
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

