import React from 'react';
import './MarketCard.css';

function MarketCard({ asset }) {
  const isPositive = asset.change24h >= 0;
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };
  
  const formatLargeNumber = (num) => {
    if (num >= 1e9) {
      return `$${(num / 1e9).toFixed(2)}B`;
    } else if (num >= 1e6) {
      return `$${(num / 1e6).toFixed(2)}M`;
    }
    return `$${num.toLocaleString()}`;
  };
  
  const getSentimentLabel = (sentiment) => {
    if (sentiment >= 70) return 'Bullish';
    if (sentiment >= 50) return 'Neutral';
    return 'Bearish';
  };
  
  const getSentimentClass = (sentiment) => {
    if (sentiment >= 70) return 'sentiment-bullish';
    if (sentiment >= 50) return 'sentiment-neutral';
    return 'sentiment-bearish';
  };
  
  return (
    <div className="market-card">
      <div className="market-card-header">
        <div className="asset-info">
          <div className="asset-symbol">{asset.symbol}</div>
          <div className="asset-name">{asset.name}</div>
        </div>
        <div className={`change-badge ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? '▲' : '▼'} {Math.abs(asset.change24h).toFixed(2)}%
        </div>
      </div>
      
      <div className="market-card-price">
        {formatPrice(asset.price)}
      </div>
      
      <div className="market-card-stats">
        <div className="stat-row">
          <span className="stat-label">24h Volume:</span>
          <span className="stat-value">{formatLargeNumber(asset.volume24h)}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Market Cap:</span>
          <span className="stat-value">{formatLargeNumber(asset.marketCap)}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Sentiment:</span>
          <span className={`stat-value ${getSentimentClass(asset.sentiment)}`}>
            {getSentimentLabel(asset.sentiment)} ({asset.sentiment})
          </span>
        </div>
      </div>
    </div>
  );
}

export default MarketCard;
