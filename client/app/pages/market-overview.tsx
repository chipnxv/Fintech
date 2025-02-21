import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export default function MarketOverview() {
  const marketData = [
    {
      name: "S&P 500",
      value: "4,783.45",
      change: "+1.2%",
      isPositive: true,
    },
    {
      name: "NASDAQ",
      value: "14,982.11",
      change: "+0.9%",
      isPositive: true,
    },
    {
      name: "DOW",
      value: "37,221.78",
      change: "-0.3%",
      isPositive: false,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Real-time market indices and trends</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {marketData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">{item.name}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
              <div
                className={cn("flex items-center gap-1 text-sm", item.isPositive ? "text-green-500" : "text-red-500")}
              >
                {item.isPositive ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                {item.change}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
