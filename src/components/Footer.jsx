import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="disclaimer-footer">
      <div className="disclaimer-content">
        <div className="disclaimer-icon">⚠️</div>
        <div className="disclaimer-text">
          <strong>DISCLAIMER:</strong> This is a demonstration project for educational purposes only. 
          All data is mock/simulated. Not financial advice. Not for trading. 
          Do your own research and consult qualified financial advisors before making any investment decisions.
        </div>
      </div>
      <div className="footer-meta">
        <span>© 2024 Crypto Intel Dashboard Demo</span>
        <span className="separator">|</span>
        <span>Mock Data Only - No Real Trading</span>
      </div>
    </footer>
  );
}

export default Footer;
