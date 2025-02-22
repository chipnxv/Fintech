import { DashboardHeader } from "@/components/dashboard-header"
import { PortfolioOverview } from "@/components/portfolio-overview"
import { MarketTrends } from "@/components/market-trends"
import { RecommendationsList } from "@/components/recommendations-list"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6 p-6">
      <DashboardHeader />
      <div className="grid gap-6 md:grid-cols-2">
        <PortfolioOverview />
        <MarketTrends />
      </div>
      <RecommendationsList />
    </div>
  )
}

