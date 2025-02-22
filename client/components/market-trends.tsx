"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 700 },
  { name: "Jun", value: 900 },
]

export function MarketTrends() {
  return (
    <Card className="bg-background/95 backdrop-blur-sm border-purple-900/20">
      <CardHeader>
        <CardTitle>Market Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#888888" />
              <YAxis stroke="#888888" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#9333ea" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

