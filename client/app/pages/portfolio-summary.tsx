import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PortfolioSummary() {
  const portfolioData = {
    totalValue: "125,430.67",
    dayChange: "+2,341.52",
    dayChangePercent: "+1.9%",
    positions: [
      {
        name: "AAPL",
        value: "45,230.00",
        change: "+3.2%",
        isPositive: true,
      },
      {
        name: "MSFT",
        value: "38,450.00",
        change: "+2.1%",
        isPositive: true,
      },
      {
        name: "GOOGL",
        value: "41,750.67",
        change: "-0.8%",
        isPositive: false,
      },
    ],
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Summary</CardTitle>
        <CardDescription>Your investment portfolio overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Total Value</p>
            <div className="flex items-baseline gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span className="text-3xl font-bold">{portfolioData.totalValue}</span>
              <span className="text-green-500 text-sm">
                {portfolioData.dayChange} ({portfolioData.dayChangePercent})
              </span>
            </div>
          </div>
          <div className="space-y-4">
            {portfolioData.positions.map((position) => (
              <div key={position.name} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{position.name}</p>
                  <p className="text-sm text-muted-foreground">${position.value}</p>
                </div>
                <div className={cn("flex items-center gap-1", position.isPositive ? "text-green-500" : "text-red-500")}>
                  {position.isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
                  {position.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
