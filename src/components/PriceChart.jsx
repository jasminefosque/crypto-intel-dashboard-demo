import React from 'react';
import { generateHistoricalData } from '../utils/mockData';
import './PriceChart.css';

function PriceChart({ asset }) {
  const data = generateHistoricalData(asset, 30);
  
  // Calculate chart dimensions
  const width = 300;
  const height = 150;
  const padding = 20;
  
  // Find min and max prices for scaling
  const prices = data.map(d => d.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;
  
  // Create SVG path
  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * (width - 2 * padding);
    const y = height - padding - ((d.price - minPrice) / priceRange) * (height - 2 * padding);
    return `${x},${y}`;
  }).join(' ');
  
  // Determine if price is trending up or down
  const isUptrend = data[data.length - 1].price > data[0].price;
  
  return (
    <div className="price-chart">
      <div className="chart-header">
        <h3>{asset.name} - 30 Day Price History</h3>
        <span className={`trend-indicator ${isUptrend ? 'uptrend' : 'downtrend'}`}>
          {isUptrend ? '📈 Uptrend' : '📉 Downtrend'}
        </span>
      </div>
      
      <svg width={width} height={height} className="chart-svg">
        {/* Grid lines */}
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} 
              stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} 
              stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
        
        {/* Price line */}
        <polyline
          points={points}
          fill="none"
          stroke={isUptrend ? '#4caf50' : '#f44336'}
          strokeWidth="2"
        />
        
        {/* Area under line */}
        <polygon
          points={`${padding},${height - padding} ${points} ${width - padding},${height - padding}`}
          fill={isUptrend ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)'}
        />
      </svg>
      
      <div className="chart-legend">
        <span>High: ${maxPrice.toFixed(2)}</span>
        <span>Low: ${minPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default PriceChart;
