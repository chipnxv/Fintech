import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RecommendationSection() {
  const recommendations = [
    {
      title: "Growth Opportunity",
      description: "Technology sector showing strong momentum",
      risk: "Moderate",
      potential: "High",
      action: "Consider increasing exposure to tech sector ETFs",
      icon: TrendingUp,
    },
    {
      title: "Risk Management",
      description: "Market volatility expected to increase",
      risk: "Low",
      potential: "Medium",
      action: "Review portfolio diversification",
      icon: Shield,
    },
    {
      title: "Portfolio Balance",
      description: "Current allocation needs rebalancing",
      risk: "Low",
      potential: "Medium",
      action: "Adjust sector weights to target allocation",
      icon: Scale,
    },
  ]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Investment Recommendations</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {recommendations.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.title}>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </div>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{item.action}</p>
                  <Button variant="ghost" className="w-full justify-between">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
