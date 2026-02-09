/**
 * Deterministic Mock Data Generator for Crypto Market Intelligence Dashboard
 * 
 * This file contains ONLY mock data generators. No API calls or live data.
 * All data is generated deterministically using mathematical functions and seeds.
 */

// Seeded random number generator for deterministic results
class SeededRandom {
  constructor(seed) {
    this.seed = seed;
  }

  next() {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  range(min, max) {
    return min + this.next() * (max - min);
  }
}

// Crypto assets configuration
export const CRYPTO_ASSETS = [
  { symbol: 'BTC', name: 'Bitcoin', basePrice: 45000, volatility: 0.02 },
  { symbol: 'ETH', name: 'Ethereum', basePrice: 2500, volatility: 0.03 },
  { symbol: 'BNB', name: 'Binance Coin', basePrice: 350, volatility: 0.025 },
  { symbol: 'SOL', name: 'Solana', basePrice: 100, volatility: 0.04 },
  { symbol: 'ADA', name: 'Cardano', basePrice: 0.50, volatility: 0.035 },
  { symbol: 'XRP', name: 'Ripple', basePrice: 0.60, volatility: 0.03 },
];

/**
 * Generate mock price for a given timestamp using sine wave + noise
 */
export function generateMockPrice(asset, timestamp) {
  const rng = new SeededRandom(timestamp + asset.symbol.charCodeAt(0));
  const timeInDays = timestamp / (1000 * 60 * 60 * 24);
  
  // Sine wave for trend
  const trend = Math.sin(timeInDays * 0.1) * asset.basePrice * 0.1;
  
  // Random noise
  const noise = (rng.next() - 0.5) * asset.basePrice * asset.volatility;
  
  return Math.max(asset.basePrice + trend + noise, asset.basePrice * 0.5);
}

/**
 * Generate historical price data for charting
 */
export function generateHistoricalData(asset, days = 30) {
  const data = [];
  const now = Date.now();
  const msPerDay = 1000 * 60 * 60 * 24;
  
  for (let i = days; i >= 0; i--) {
    const timestamp = now - (i * msPerDay);
    const price = generateMockPrice(asset, timestamp);
    
    data.push({
      timestamp,
      date: new Date(timestamp).toISOString(),
      price: parseFloat(price.toFixed(2)),
      volume: generateMockVolume(asset, timestamp),
    });
  }
  
  return data;
}

/**
 * Generate mock trading volume
 */
export function generateMockVolume(asset, timestamp) {
  const rng = new SeededRandom(timestamp + asset.symbol.charCodeAt(1));
  const baseVolume = asset.basePrice * 1000000; // Base volume in USD
  return parseFloat((baseVolume * (0.5 + rng.next())).toFixed(0));
}

/**
 * Generate mock market sentiment (0-100)
 */
export function generateMockSentiment(asset, timestamp = Date.now()) {
  const rng = new SeededRandom(timestamp + asset.symbol.charCodeAt(2));
  const timeInHours = timestamp / (1000 * 60 * 60);
  
  // Oscillate between 30 and 70 with some randomness
  const base = 50 + Math.sin(timeInHours * 0.05) * 15;
  const noise = (rng.next() - 0.5) * 10;
  
  return Math.max(0, Math.min(100, Math.round(base + noise)));
}

/**
 * Generate mock 24h price change percentage
 */
export function generate24hChange(asset) {
  const now = Date.now();
  const yesterday = now - (24 * 60 * 60 * 1000);
  
  const currentPrice = generateMockPrice(asset, now);
  const yesterdayPrice = generateMockPrice(asset, yesterday);
  
  return parseFloat((((currentPrice - yesterdayPrice) / yesterdayPrice) * 100).toFixed(2));
}

/**
 * Generate mock market cap
 */
export function generateMockMarketCap(asset) {
  const price = generateMockPrice(asset, Date.now());
  const rng = new SeededRandom(asset.symbol.charCodeAt(0));
  const supply = 1000000 + rng.range(10000000, 100000000);
  
  return parseFloat((price * supply).toFixed(0));
}

/**
 * Get current mock market data for all assets
 */
export function getCurrentMarketData() {
  const now = Date.now();
  
  return CRYPTO_ASSETS.map(asset => ({
    symbol: asset.symbol,
    name: asset.name,
    price: parseFloat(generateMockPrice(asset, now).toFixed(2)),
    change24h: generate24hChange(asset),
    volume24h: generateMockVolume(asset, now),
    marketCap: generateMockMarketCap(asset),
    sentiment: generateMockSentiment(asset, now),
  }));
}

/**
 * Simulate real-time price updates
 * Returns a slightly different price based on volatility
 */
export function getRealtimePriceUpdate(asset) {
  const now = Date.now();
  const rng = new SeededRandom(now + asset.symbol.charCodeAt(0));
  const currentPrice = generateMockPrice(asset, now);
  const microChange = (rng.next() - 0.5) * asset.basePrice * 0.001; // 0.1% max change
  
  return parseFloat((currentPrice + microChange).toFixed(2));
}
