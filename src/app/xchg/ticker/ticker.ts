export interface Ticker {
    symbol: string;
    companyName: string;
    price: number;
    change: number;
    changePercent: number;
    volume: number;
    open: number;
    high: number;
    low: number;
    previousClose: number;
    marketCap?: number;
    lastUpdated: string;
    exchange: string;
    currency: string;
    sector?: string;
    industry?: string;
    color?: string;
    trendIcon?: string;
    sparkline?: number[];
    historicalPrices?: {
        date: string;
        close: number;
    }[];
}

