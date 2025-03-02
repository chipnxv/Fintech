import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { PortfolioOverview } from "@/components/dashboard/portfolio-overview"
import { MarketTrends } from "@/components/dashboard/market-trends"
import { RecommendationsList } from "@/components/dashboard/recommendations-list"

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

