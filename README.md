# Crypto Market Intelligence Dashboard (Demo)

A demonstration implementation of a multi-layer crypto market intelligence dashboard using deterministic mock data and modern visualization patterns.

## ⚠️ IMPORTANT DISCLAIMER

**THIS IS A DEMONSTRATION PROJECT FOR EDUCATIONAL PURPOSES ONLY**

- **NOT FINANCIAL ADVICE**: This dashboard is for informational and educational purposes only. It does not constitute financial, investment, trading, or any other type of advice.
- **MOCK DATA ONLY**: All data displayed is generated using deterministic mock data generators. No live market data or real trading information is used.
- **NO TRADING**: This application is not connected to any trading platforms and cannot execute trades.
- **DO YOUR OWN RESEARCH**: Always conduct your own research and consult with qualified financial advisors before making any investment decisions.
- **USE AT YOUR OWN RISK**: The creators and contributors of this project are not responsible for any financial losses or damages incurred from using this software.

## Features

- 📊 Real-time mock crypto market data visualization
- 📈 Price charts with historical data (mock)
- 💹 Market sentiment indicators (mock)
- 🔍 Multi-asset analysis dashboard
- 📱 Responsive design for desktop and mobile

## Technology Stack

- **Frontend**: React 19 + Vite
- **Data**: Deterministic mock data generators (no APIs)
- **Styling**: CSS3
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jasminefosque/crypto-intel-dashboard-demo.git
cd crypto-intel-dashboard-demo
```

2. Install dependencies:
```bash
npm install
```

3. (Optional) Copy environment variables:
```bash
cp .env.example .env
```
Note: The app uses mock data only. Environment variables are for future reference.

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
crypto-intel-dashboard-demo/
├── src/
│   ├── components/      # React components
│   ├── utils/          # Mock data generators and utilities
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Application entry point
├── public/             # Static assets
├── .env.example        # Environment variables template
└── package.json        # Dependencies and scripts
```

## Mock Data

This application uses **deterministic mock data generators** to simulate cryptocurrency market data. No API keys, credentials, or connections to live data sources are required or used.

## Contributing

This is a demo project. Feel free to fork and experiment, but remember: this is for educational purposes only.

## License

MIT License - See LICENSE file for details

## Legal Notice

By using this software, you acknowledge that:
1. You understand this is a demonstration project using mock data
2. You will not use this for actual trading or investment decisions
3. You accept full responsibility for any actions taken based on information from this demo
4. The authors and contributors provide this software "as is" without warranty of any kind
