import { useState, useEffect } from 'react';
import { getCurrentMarketData } from './utils/mockData';
import { NAV_TREE } from './utils/navigationTree';
import NavigationSidebar from './components/NavigationSidebar';
import ContentPanel from './components/ContentPanel';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [lastUpdate, setLastUpdate] = useState(new Date());
  const [activeNode, setActiveNode] = useState(null);

  // Simulate real-time updates every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      getCurrentMarketData(); // Keep data fresh
      setLastUpdate(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleNavSelect = (node) => {
    setActiveNode(node);
  };

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

        <div className="dashboard-layout">
          <aside className="dashboard-sidebar">
            <NavigationSidebar 
              tree={NAV_TREE} 
              activeId={activeNode?.id}
              onSelect={handleNavSelect}
            />
          </aside>

          <div className="dashboard-content">
            <ContentPanel activeNode={activeNode} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
