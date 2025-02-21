import MarketOverview from "@/app/pages/market-overview"
import PortfolioSummary from "@/app/pages/portfolio-summary"
import RecommendationSection from "@/app/pages/recommendation-section"
import LearningResources from "@/app/pages/learning-resources"

export default function Page() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <MarketOverview />
        <PortfolioSummary />
      </div>
      <RecommendationSection />
      <LearningResources />
    </div>
  )
}
