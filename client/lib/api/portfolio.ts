import type { PortfolioSummary } from "@/types/portfolio-types"

export async function getPortfolioSummary(token: string): Promise<PortfolioSummary> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio/summary`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!response.ok) {
    throw new Error("Failed to fetch portfolio")
  }

  return response.json()
}

