"use client"

import { useState, useEffect, useCallback } from "react"
import type { PortfolioSummary } from "@/types/portfolio-types"
import * as portfolioApi from "@/lib/api/portfolio"

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState<PortfolioSummary | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchPortfolio = useCallback(async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("token")
      if (!token) throw new Error("No authentication token")

      const data = await portfolioApi.getPortfolioSummary(token)
      setPortfolio(data)
      setError(null)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPortfolio()
  }, [fetchPortfolio])

  return {
    portfolio,
    loading,
    error,
    refetch: fetchPortfolio,
  }
}

