import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {Ticker} from './ticker/ticker';
import {TickerComponent} from './ticker/ticker.component';

@Component({
  selector: 'app-xchg',
  imports: [
    NgForOf,
    TickerComponent
  ],
  templateUrl: './xchg.component.html',
  standalone: true,
  styleUrl: './xchg.component.scss'
})
export class XchgComponent {

  public dummyTickers: Ticker[] = [
    {
      symbol: "AAPL",
      companyName: "Apple Inc.",
      price: 187.65,
      change: 2.35,
      changePercent: 1.27,
      volume: 56203422,
      open: 185.30,
      high: 188.12,
      low: 184.92,
      previousClose: 185.30,
      marketCap: 2923000000000,
      lastUpdated: "2025-04-12T15:45:00Z",
      exchange: "NASDAQ",
      currency: "USD",
      sector: "Technology",
      industry: "Consumer Electronics",
      color: "green",
      trendIcon: "arrow-up",
      sparkline: [183.22, 184.10, 185.30, 186.50, 187.00, 187.65],
      historicalPrices: [
        { date: "2025-04-11", close: 185.30 },
        { date: "2025-04-10", close: 182.75 },
        { date: "2025-04-09", close: 180.12 },
      ]
    },
    {
      symbol: "TSLA",
      companyName: "Tesla, Inc.",
      price: 244.22,
      change: -4.78,
      changePercent: -1.92,
      volume: 73459022,
      open: 249.00,
      high: 250.85,
      low: 242.60,
      previousClose: 249.00,
      marketCap: 776000000000,
      lastUpdated: "2025-04-12T15:45:00Z",
      exchange: "NASDAQ",
      currency: "USD",
      sector: "Consumer Cyclical",
      industry: "Auto Manufacturers",
      color: "red",
      trendIcon: "arrow-down",
      sparkline: [255.80, 253.60, 250.10, 247.00, 244.90, 244.22],
      historicalPrices: [
        { date: "2025-04-11", close: 249.00 },
        { date: "2025-04-10", close: 252.10 },
        { date: "2025-04-09", close: 256.75 },
      ]
    },
    {
      symbol: "AMZN",
      companyName: "Amazon.com, Inc.",
      price: 137.89,
      change: 1.45,
      changePercent: 1.06,
      volume: 30104523,
      open: 136.30,
      high: 138.40,
      low: 135.90,
      previousClose: 136.44,
      marketCap: 1422000000000,
      lastUpdated: "2025-04-12T15:45:00Z",
      exchange: "NASDAQ",
      currency: "USD",
      sector: "Consumer Cyclical",
      industry: "Internet Retail",
      color: "green",
      trendIcon: "arrow-up",
      sparkline: [134.55, 135.80, 136.44, 136.90, 137.20, 137.89],
      historicalPrices: [
        { date: "2025-04-11", close: 136.44 },
        { date: "2025-04-10", close: 133.88 },
        { date: "2025-04-09", close: 130.75 },
      ]
    },
    {
      symbol: "MSFT",
      companyName: "Microsoft Corporation",
      price: 315.74,
      change: -0.82,
      changePercent: -0.26,
      volume: 19800452,
      open: 316.50,
      high: 317.80,
      low: 314.50,
      previousClose: 316.56,
      marketCap: 2345000000000,
      lastUpdated: "2025-04-12T15:45:00Z",
      exchange: "NASDAQ",
      currency: "USD",
      sector: "Technology",
      industry: "Software—Infrastructure",
      color: "red",
      trendIcon: "arrow-down",
      sparkline: [319.10, 317.20, 316.56, 316.00, 315.80, 315.74],
      historicalPrices: [
        { date: "2025-04-11", close: 316.56 },
        { date: "2025-04-10", close: 318.00 },
        { date: "2025-04-09", close: 315.90 },
      ]
    },
    {
      symbol: "NVDA",
      companyName: "NVIDIA Corporation",
      price: 922.88,
      change: 6.15,
      changePercent: 0.67,
      volume: 45234121,
      open: 917.00,
      high: 925.60,
      low: 910.50,
      previousClose: 916.73,
      marketCap: 2270000000000,
      lastUpdated: "2025-04-12T15:45:00Z",
      exchange: "NASDAQ",
      currency: "USD",
      sector: "Technology",
      industry: "Semiconductors",
      color: "green",
      trendIcon: "arrow-up",
      sparkline: [900.20, 910.50, 916.73, 919.00, 921.30, 922.88],
      historicalPrices: [
        { date: "2025-04-11", close: 916.73 },
        { date: "2025-04-10", close: 905.10 },
        { date: "2025-04-09", close: 899.88 },
      ]
    },
    {
      symbol: "EUR/USD",
      companyName: "Euro / US Dollar",
      price: 1.0875,
      change: 0.0021,
      changePercent: 0.19,
      volume: 115002000,
      open: 1.0854,
      high: 1.0889,
      low: 1.0837,
      previousClose: 1.0854,
      lastUpdated: "2025-04-12T15:45:00Z",
      exchange: "Forex",
      currency: "USD",
      color: "green",
      trendIcon: "arrow-up",
      sparkline: [1.0835, 1.0842, 1.0850, 1.0858, 1.0867, 1.0875],
      historicalPrices: [
        { date: "2025-04-11", close: 1.0854 },
        { date: "2025-04-10", close: 1.0802 },
        { date: "2025-04-09", close: 1.0765 },
      ]
    },
    {
      symbol: "USD/JPY",
      companyName: "US Dollar / Japanese Yen",
      price: 151.92,
      change: -0.56,
      changePercent: -0.37,
      volume: 88345000,
      open: 152.48,
      high: 152.60,
      low: 151.70,
      previousClose: 152.48,
      lastUpdated: "2025-04-12T15:45:00Z",
      exchange: "Forex",
      currency: "JPY",
      color: "red",
      trendIcon: "arrow-down",
      sparkline: [152.20, 152.10, 151.95, 151.85, 151.75, 151.92],
      historicalPrices: [
        { date: "2025-04-11", close: 152.48 },
        { date: "2025-04-10", close: 152.95 },
        { date: "2025-04-09", close: 153.20 },
      ]
    },
    {
      symbol: "GBP/USD",
      companyName: "British Pound / US Dollar",
      price: 1.2698,
      change: 0.0042,
      changePercent: 0.33,
      volume: 75938000,
      open: 1.2656,
      high: 1.2705,
      low: 1.2630,
      previousClose: 1.2656,
      lastUpdated: "2025-04-12T15:45:00Z",
      exchange: "Forex",
      currency: "USD",
      color: "green",
      trendIcon: "arrow-up",
      sparkline: [1.2635, 1.2650, 1.2668, 1.2680, 1.2690, 1.2698],
      historicalPrices: [
        { date: "2025-04-11", close: 1.2656 },
        { date: "2025-04-10", close: 1.2603 },
        { date: "2025-04-09", close: 1.2580 },
      ]
    },
    {
      symbol: "USD/CHF",
      companyName: "US Dollar / Swiss Franc",
      price: 0.9032,
      change: -0.0018,
      changePercent: -0.20,
      volume: 50120000,
      open: 0.9050,
      high: 0.9067,
      low: 0.9020,
      previousClose: 0.9050,
      lastUpdated: "2025-04-12T15:45:00Z",
      exchange: "Forex",
      currency: "CHF",
      color: "red",
      trendIcon: "arrow-down",
      sparkline: [0.9065, 0.9058, 0.9050, 0.9042, 0.9036, 0.9032],
      historicalPrices: [
        { date: "2025-04-11", close: 0.9050 },
        { date: "2025-04-10", close: 0.9063 },
        { date: "2025-04-09", close: 0.9027 },
      ]
    }
  ];


}
