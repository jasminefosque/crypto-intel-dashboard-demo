import { useState, useEffect } from 'react';
import { getCurrentMarketData, CRYPTO_ASSETS } from './utils/mockData';
import MarketCard from './components/MarketCard';
import PriceChart from './components/PriceChart';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [marketData, setMarketData] = useState(() => getCurrentMarketData());
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Simulate real-time updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = getCurrentMarketData();
      setMarketData(updatedData);
      setLastUpdate(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>📊 Crypto Market Intelligence Dashboard</h1>
          <div className="header-badge">DEMO - Mock Data Only</div>
        </div>
        <div className="last-update">
          Last Updated: {lastUpdate.toLocaleTimeString()}
        </div>
      </header>

      <main className="app-main">
        <div className="info-banner">
          <strong>ℹ️ Note:</strong> This dashboard displays deterministic mock data generated locally. 
          No API connections, no real market data, no trading capabilities.
        </div>

        <section className="market-overview">
          <h2>Market Overview</h2>
          <div className="market-grid">
            {marketData.map((asset) => (
              <MarketCard 
                key={asset.symbol} 
                asset={asset}
              />
            ))}
          </div>
        </section>

        <section className="chart-section">
          <h2>Price Charts (30-Day History)</h2>
          <div className="charts-container">
            {CRYPTO_ASSETS.slice(0, 3).map((asset) => (
              <PriceChart key={asset.symbol} asset={asset} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
