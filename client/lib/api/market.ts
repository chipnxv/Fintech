import type { MarketTrend, StockRecommendation } from "@/types/market"

export async function getMarketTrends(): Promise<MarketTrend[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/market/trends`)

  if (!response.ok) {
    throw new Error("Failed to fetch market trends")
  }

  return response.json()
}

export async function getRecommendations(): Promise<StockRecommendation[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/market/recommendations`)

  if (!response.ok) {
    throw new Error("Failed to fetch recommendations")
  }

  return response.json()
}

