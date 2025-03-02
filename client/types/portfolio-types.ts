export interface PortfolioSummary {
  id: string;
  name: string;
  totalValue: number;
  cashBalance: number;
  investments: {
      stocks: number;
      bonds: number;
      crypto: number;
  };
  performance: {
      daily: number;
      weekly: number;
      monthly: number;
      yearly: number;
  };
}