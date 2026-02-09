import { getCurrentMarketData, CRYPTO_ASSETS, generateHistoricalData } from '../utils/mockData';
import MarketCard from './MarketCard';
import PriceChart from './PriceChart';
import './ContentPanel.css';

function ContentPanel({ activeNode }) {
  const marketData = getCurrentMarketData();

  // Default content for top-level or parent nodes
  const renderDefaultContent = () => (
    <div className="content-section">
      <div className="content-header">
        <h2>{activeNode.label}</h2>
        <div className="content-badge">Mock Data</div>
      </div>
      
      <div className="info-box">
        <strong>ℹ️ Information:</strong> This section demonstrates the navigation structure. 
        In a production system, this would display {activeNode.label.toLowerCase()} analytics with live data feeds.
      </div>

      {/* Show some sample visualizations for demonstration */}
      <div className="sample-visualizations">
        <h3>Sample Market Data</h3>
        <div className="market-grid">
          {marketData.slice(0, 3).map((asset) => (
            <MarketCard key={asset.symbol} asset={asset} />
          ))}
        </div>
      </div>
    </div>
  );

  // Specific content for key sections
  const renderSpecificContent = () => {
    switch (activeNode.id) {
      case 'spot-price-levels-returns':
        return (
          <div className="content-section">
            <div className="content-header">
              <h2>Price Levels and Returns (BTC, ETH, Majors)</h2>
              <div className="content-badge">Mock Data - Demo Only</div>
            </div>
            
            <div className="info-box">
              <strong>📊 Analysis:</strong> Comprehensive price level tracking and return analysis across major crypto assets.
            </div>

            <div className="charts-grid">
              {CRYPTO_ASSETS.slice(0, 3).map((asset) => (
                <PriceChart key={asset.symbol} asset={asset} />
              ))}
            </div>

            <div className="market-grid">
              {marketData.map((asset) => (
                <MarketCard key={asset.symbol} asset={asset} />
              ))}
            </div>
          </div>
        );

      case 'futures-oi-by-venue':
        return (
          <div className="content-section">
            <div className="content-header">
              <h2>Open Interest (By Venue and Asset)</h2>
              <div className="content-badge">Mock Data - Demo Only</div>
            </div>
            
            <div className="info-box">
              <strong>📈 Analysis:</strong> Open interest distribution across venues provides insight into leverage concentration and market positioning.
            </div>

            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Venue</th>
                    <th>BTC OI</th>
                    <th>ETH OI</th>
                    <th>24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Binance</td>
                    <td>$4.2B</td>
                    <td>$1.8B</td>
                    <td className="positive">+2.4%</td>
                  </tr>
                  <tr>
                    <td>CME</td>
                    <td>$2.8B</td>
                    <td>$890M</td>
                    <td className="positive">+1.2%</td>
                  </tr>
                  <tr>
                    <td>Bybit</td>
                    <td>$3.1B</td>
                    <td>$1.2B</td>
                    <td className="negative">-0.8%</td>
                  </tr>
                  <tr>
                    <td>OKX</td>
                    <td>$2.5B</td>
                    <td>$980M</td>
                    <td className="positive">+0.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'active-addresses':
        return (
          <div className="content-section">
            <div className="content-header">
              <h2>Active Addresses</h2>
              <div className="content-badge">Mock Data - Demo Only</div>
            </div>
            
            <div className="info-box">
              <strong>🔗 On-Chain Metric:</strong> Daily active addresses indicate network usage and adoption trends.
            </div>

            <div className="metrics-grid">
              <div className="metric-card">
                <div className="metric-label">BTC Active Addresses</div>
                <div className="metric-value">924,582</div>
                <div className="metric-change positive">+3.2% (24h)</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">ETH Active Addresses</div>
                <div className="metric-value">456,721</div>
                <div className="metric-change positive">+1.8% (24h)</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">7-Day Average</div>
                <div className="metric-value">892,341</div>
                <div className="metric-change negative">-2.1% vs avg</div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Peak (30d)</div>
                <div className="metric-value">1,125,443</div>
                <div className="metric-change">Jan 28, 2026</div>
              </div>
            </div>
          </div>
        );

      case 'tvl':
        return (
          <div className="content-section">
            <div className="content-header">
              <h2>TVL by Chain and Protocol Category</h2>
              <div className="content-badge">Mock Data - Demo Only</div>
            </div>
            
            <div className="info-box">
              <strong>💎 DeFi Metrics:</strong> Total Value Locked across different blockchain ecosystems and protocol types.
            </div>

            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Chain</th>
                    <th>TVL</th>
                    <th>Protocols</th>
                    <th>24h Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Ethereum</td>
                    <td>$58.2B</td>
                    <td>342</td>
                    <td className="positive">+1.5%</td>
                  </tr>
                  <tr>
                    <td>BSC</td>
                    <td>$4.8B</td>
                    <td>128</td>
                    <td className="negative">-0.3%</td>
                  </tr>
                  <tr>
                    <td>Solana</td>
                    <td>$2.1B</td>
                    <td>67</td>
                    <td className="positive">+4.2%</td>
                  </tr>
                  <tr>
                    <td>Arbitrum</td>
                    <td>$2.9B</td>
                    <td>89</td>
                    <td className="positive">+2.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      default:
        return renderDefaultContent();
    }
  };

  if (!activeNode) {
    return (
      <div className="content-section">
        <div className="content-header">
          <h2>Welcome to Market Intelligence Dashboard</h2>
          <div className="content-badge">Portfolio Demo</div>
        </div>
        
        <div className="info-box">
          <strong>👈 Navigate:</strong> Select an item from the navigation tree to view detailed analytics and visualizations.
        </div>

        <div className="welcome-content">
          <h3>Overview</h3>
          <p>
            This dashboard demonstrates comprehensive information architecture for crypto market intelligence.
            Navigate through the tree to explore different analytical categories and data visualizations.
          </p>
          <ul>
            <li>📊 Market Intelligence - Spot, derivatives, options, and ETF flows</li>
            <li>🔗 On-Chain Fundamentals - Network activity, mining economics, supply dynamics</li>
            <li>🌐 Ecosystems - DeFi, stablecoins, NFTs, gaming, and emerging sectors</li>
            <li>⚠️ Risk Monitoring - Market regime, custody risk, threat actors</li>
            <li>📜 Policy & Regulation - Global policy, legislation, institutional adoption</li>
            <li>⛏️ Mining Operations - Infrastructure, supply chain, energy costs</li>
            <li>🌍 Global Risk - Macro and geopolitical risk overlay</li>
          </ul>
        </div>
      </div>
    );
  }

  return renderSpecificContent();
}

export default ContentPanel;
