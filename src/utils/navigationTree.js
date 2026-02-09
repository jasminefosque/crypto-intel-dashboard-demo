/**
 * Navigation Tree for Crypto Market Intelligence Dashboard
 * Comprehensive information architecture for portfolio demonstration
 */

export const NAV_TREE = [
  {
    id: "market-intelligence",
    label: "Market Intelligence",
    children: [
      {
        id: "spot-market-structure",
        label: "Spot Market Structure",
        children: [
          {
            id: "spot-market-overview",
            label: "Market Overview",
            children: [
              { id: "spot-price-levels-returns", label: "Price Levels and Returns (BTC, ETH, Majors)" },
              { id: "spot-market-breadth", label: "Market Breadth (Advancers, Decliners, Dominance)" },
              { id: "spot-correlation-map", label: "Correlation Map (Crypto vs Equities vs Rates vs USD)" },
            ],
          },
          {
            id: "spot-liquidity-execution",
            label: "Liquidity and Execution Quality",
            children: [
              { id: "spot-orderbook-depth-slippage", label: "Order Book Depth and Slippage (By Venue)" },
              { id: "spot-spread-fragmentation", label: "Spread Regime and Fragmentation" },
              { id: "spot-price-discovery", label: "Price Discovery Leadership" },
            ],
          },
          {
            id: "spot-volume-anatomy",
            label: "Volume Anatomy",
            children: [
              { id: "spot-total-volume", label: "Total Spot Volume (By Asset and Venue)" },
              { id: "spot-real-volume", label: "Real Volume vs Wash Risk Proxies" },
              { id: "spot-venue-concentration", label: "Venue Concentration and Liquidity Migration" },
            ],
          },
          {
            id: "spot-exchange-flows",
            label: "Exchange Inflow and Outflow",
            children: [
              { id: "spot-net-deposits", label: "Net Deposits (By Asset and Venue)" },
              { id: "spot-large-transfer-alerts", label: "Large Transfer Alerts and Clustering" },
              { id: "spot-stablecoin-exchange-balances", label: "Stablecoin Exchange Balances as Buying Power" },
            ],
          },
        ],
      },
      {
        id: "derivatives-complex",
        label: "Derivatives Complex",
        children: [
          {
            id: "futures-perps",
            label: "Futures and Perpetuals",
            children: [
              {
                id: "futures-oi-volume",
                label: "Open Interest and Volume",
                children: [
                  { id: "futures-oi-by-venue", label: "Open Interest (By Venue and Asset)" },
                  { id: "futures-leverage-proxy", label: "Leverage Proxy (OI Relative to Market Cap)" },
                ],
              },
              {
                id: "funding-rates",
                label: "Funding Rates",
                children: [
                  { id: "funding-level-trend", label: "Level, Trend, Dispersion (Across Venues)" },
                  { id: "funding-stress-regime", label: "Funding Stress Regime (Persistent Extremes)" },
                ],
              },
              {
                id: "liquidations",
                label: "Liquidations",
                children: [
                  { id: "liq-volume-direction", label: "Liquidation Volume, Direction, Cascade Detection" },
                  { id: "liq-squeeze-classification", label: "Long Squeeze vs Short Squeeze Classification" },
                ],
              },
              {
                id: "term-structure-basis",
                label: "Term Structure and Basis",
                children: [
                  { id: "basis-term-structure", label: "Term Structure Curve (Contango vs Backwardation)" },
                  { id: "basis-rolling", label: "Rolling Basis and Implied Carry" },
                  { id: "basis-dispersion", label: "Basis Dispersion (Across Venues)" },
                ],
              },
              {
                id: "microstructure-stress",
                label: "Microstructure Stress Tests",
                children: [
                  { id: "stress-orderbook-thinning", label: "Order Book Thinning During Volatility" },
                  { id: "stress-funding-vol-gap", label: "Funding Volatility and Gap Risk" },
                ],
              },
            ],
          },
          {
            id: "venue-lenses",
            label: "Venue Lenses",
            children: [
              {
                id: "venue-hyperliquid",
                label: "Hyperliquid",
                children: [
                  { id: "hl-depth-liq-funding", label: "Perp Depth, Liquidation Clusters, Funding Extremes" },
                  { id: "hl-trader-concentration", label: "Trader Concentration Indicators" },
                ],
              },
              {
                id: "venue-cme",
                label: "CME",
                children: [
                  { id: "cme-oi-volume", label: "Institutional Positioning Proxy via OI and Volume" },
                  { id: "cme-basis-vs-offshore", label: "Basis vs Offshore Venues" },
                  { id: "cme-session-effects", label: "Session Effects (US Hours Impact)" },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "options-vol-surface",
        label: "Options and Volatility Surface",
        children: [
          {
            id: "options-oi-volume",
            label: "Open Interest and Volume",
            children: [
              { id: "options-calls-puts", label: "Calls vs Puts, Tenor Buckets, Strike Concentration" },
              { id: "options-dealer-positioning", label: "Dealer Positioning Proxies (Gamma Exposure Concepts)" },
            ],
          },
          {
            id: "implied-volatility",
            label: "Implied Volatility",
            children: [
              { id: "iv-term-structure", label: "Term Structure of IV" },
              { id: "iv-skew-smile", label: "Skew and Smile Dynamics" },
              { id: "iv-realized-spread", label: "Realized vs Implied Spread" },
            ],
          },
          {
            id: "options-pulse",
            label: "Options Pulse",
            children: [
              { id: "options-block-flow", label: "Large Block Flow Detection" },
              { id: "options-put-call-walls", label: "Put Wall and Call Wall Zones" },
              { id: "options-pin-risk", label: "Pin Risk and Expiry Magnets" },
            ],
          },
          {
            id: "premiums-risk-reversals",
            label: "Premiums and Risk Reversals",
            children: [
              { id: "rr-trends", label: "Risk Reversal Trends" },
              { id: "tail-pricing", label: "Tail Pricing and Crash Premia" },
              { id: "vol-of-vol", label: "Vol of Vol Proxies" },
            ],
          },
        ],
      },
      {
        id: "etf-tradfi",
        label: "ETF Flow and Tradfi Interface",
        children: [
          {
            id: "etf-balances-flows",
            label: "Balances and Flows (BTC and ETH)",
            children: [
              { id: "etf-creations-redemptions", label: "Daily Creations and Redemptions" },
              { id: "etf-cumulative-flow", label: "Cumulative Flow Trend and Flow Velocity" },
              { id: "etf-premium-discount", label: "Premium and Discount Dynamics (When Applicable)" },
            ],
          },
          {
            id: "tradfi-spillovers",
            label: "Tradfi Spillovers",
            children: [
              { id: "tradfi-equity-corr", label: "Equity Proxy Correlations" },
              { id: "tradfi-rates-sensitivity", label: "Rates Sensitivity (Risk Off Duration Like Behavior)" },
              { id: "tradfi-macro-calendar", label: "Macro Event Calendar Impact Map" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "onchain-fundamentals",
    label: "Network and On-Chain Fundamentals",
    children: [
      {
        id: "network-activity",
        label: "Network Activity",
        children: [
          {
            id: "network-stats",
            label: "Network Statistics",
            children: [
              { id: "active-addresses", label: "Active Addresses" },
              { id: "transaction-count", label: "Transaction Count" },
              { id: "transfer-volume", label: "Transfer Volume (Native and USD Equivalent)" },
            ],
          },
          {
            id: "settlement-health",
            label: "Settlement Health",
            children: [
              { id: "finality-congestion", label: "Finality and Congestion Signals" },
              { id: "tx-size", label: "Mean and Median Transaction Size" },
              { id: "whale-share", label: "Whale Share of Activity" },
            ],
          },
        ],
      },
      {
        id: "mining-validator-econ",
        label: "Mining and Validator Economics",
        children: [
          {
            id: "hashrate-security",
            label: "Hash Rate and Security",
            children: [
              { id: "hashrate-trend", label: "Hash Rate Trend and Volatility" },
              { id: "hashprice-profitability", label: "Hash Price and Profitability" },
            ],
          },
          {
            id: "miners-validators",
            label: "Miners and Validators",
            children: [
              { id: "minrev", label: "Revenue" },
              { id: "miner-outflow", label: "Outflow Patterns (Miner Selling Pressure)" },
              { id: "validator-performance", label: "Validator Performance and Penalties (Where Relevant)" },
            ],
          },
          {
            id: "difficulty-cycles",
            label: "Difficulty and Adjustment Cycles",
            children: [
              { id: "difficulty-trend", label: "Difficulty Trend" },
              { id: "adjustment-shock-risk", label: "Adjustment Shock Risk" },
            ],
          },
        ],
      },
      {
        id: "mempool-fees",
        label: "Mempool and Fee Regime",
        children: [
          {
            id: "mempool-state",
            label: "Mempool State",
            children: [
              { id: "unconfirmed", label: "Unconfirmed Transactions" },
              { id: "backlog-estimates", label: "Backlog Duration Estimates" },
            ],
          },
          {
            id: "fee-rates",
            label: "Fee Rates",
            children: [
              { id: "fee-regime", label: "Fee Market Regime (Normal vs Stressed)" },
              { id: "fee-composition", label: "Fee Composition and Priority Dynamics" },
            ],
          },
          {
            id: "congestion",
            label: "Congestion Diagnostics",
            children: [
              { id: "throughput-bursts", label: "Throughput Limits and Burst Behavior" },
              { id: "congestion-vol-link", label: "Congestion Driven Volatility Link" },
            ],
          },
        ],
      },
      {
        id: "supply-ownership",
        label: "Supply and Ownership Structure",
        children: [
          {
            id: "unspent-spent",
            label: "Unspent and Spent Supply",
            children: [
              { id: "coin-age", label: "Coin Age Distribution" },
              { id: "dormancy-reactivation", label: "Dormancy and Reactivation Events" },
            ],
          },
          {
            id: "gov-company-holdings",
            label: "Government and Company Holdings",
            children: [
              { id: "public-disclosures", label: "Public Disclosures and Known Wallets (When Attributable)" },
              { id: "strategic-reserves", label: "Strategic Reserves and Treasury Behavior" },
            ],
          },
          {
            id: "investor-behavior",
            label: "Investor Behavior",
            children: [
              { id: "hodl-waves", label: "HODL Waves" },
              { id: "lth-sth", label: "Long Term Holder vs Short Term Holder Supply" },
              { id: "exchange-vs-selfcustody", label: "Exchange Held Supply vs Self Custody Supply" },
            ],
          },
        ],
      },
      {
        id: "pnl-diagnostics",
        label: "Profit and Loss Diagnostics",
        children: [
          {
            id: "nupl",
            label: "Unrealized Profit and Loss (NUPL)",
            children: [{ id: "nupl-regimes", label: "Regime Classification and Turning Points" }],
          },
          {
            id: "realized-pnl",
            label: "Realized Profit and Loss",
            children: [{ id: "realization-spikes", label: "Realization Spikes and Capitulation Markers" }],
          },
          {
            id: "cost-basis",
            label: "Cost Basis Distribution",
            children: [
              { id: "realized-price-cohorts", label: "Realized Price and Cohort Cost Basis" },
              { id: "cb-support-resistance", label: "Support and Resistance Zones from Cost Clusters" },
              { id: "supply-profit-loss", label: "Supply in Profit vs Supply in Loss" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ecosystems",
    label: "Ecosystems and Sector Intelligence",
    children: [
      {
        id: "asset-ecosystems",
        label: "Asset Ecosystems",
        children: [
          {
            id: "stablecoins",
            label: "Stablecoins",
            children: [
              { id: "stable-supply", label: "Supply Growth by Issuer" },
              { id: "stable-velocity", label: "On-Chain Velocity and Exchange Concentration" },
              { id: "stable-depeg-risk", label: "Depeg Risk Monitoring and Collateral Transparency Signals" },
            ],
          },
          {
            id: "defi",
            label: "DeFi",
            children: [
              { id: "tvl", label: "TVL by Chain and Protocol Category" },
              { id: "lending-liquidations", label: "Lending Rates, Liquidation Risk, Collateral Composition" },
              { id: "dex-volumes", label: "DEX Volumes and Routing Concentration" },
            ],
          },
          {
            id: "rwa",
            label: "Tokenized Assets (Real World Assets)",
            children: [
              { id: "rwa-issuance", label: "Issuance and Settlement Rails" },
              { id: "rwa-custody", label: "Custody Structure and Redemption Mechanics" },
              { id: "rwa-jurisdiction", label: "Jurisdictional Concentration Risk" },
            ],
          },
          {
            id: "nfts",
            label: "NFTs and Metaverse",
            children: [
              { id: "nft-volume-buyers", label: "Volume and Unique Buyers" },
              { id: "nft-liquidity-floor", label: "Liquidity Depth and Floor Fragility" },
            ],
          },
          {
            id: "gaming",
            label: "Gaming (GameFi)",
            children: [
              { id: "game-retention", label: "User Retention, Transaction Intensity, Token Emission Pressure" },
            ],
          },
          {
            id: "ai-bigdata",
            label: "AI and Big Data",
            children: [
              { id: "ai-utility-beta", label: "Token Utility vs Speculative Beta Separation" },
              { id: "ai-compute-narrative", label: "Compute Linked Narratives and Revenue Reality Checks" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "risk-integrity",
    label: "Risk, Integrity, and Stress Monitoring",
    children: [
      {
        id: "market-regime",
        label: "Market Regime and Cycle Signals",
        children: [
          {
            id: "market-cycle",
            label: "Market Cycle",
            children: [
              { id: "momentum-breadth", label: "Momentum and Breadth Regime" },
              { id: "vol-corr-breakdown", label: "Volatility Regime and Correlation Breakdown" },
            ],
          },
          {
            id: "cycle-tops-bottoms",
            label: "Cycle Tops and Bottoms",
            children: [
              { id: "euphoria-markers", label: "Euphoria Markers (Leverage, Funding, Options Skew)" },
              { id: "capitulation-markers", label: "Capitulation Markers (Realized Losses, Liquidation Cascades)" },
            ],
          },
          {
            id: "fear-greed",
            label: "Fear and Greed Index",
            children: [
              { id: "sentiment-overlay", label: "Use as Sentiment Overlay, Not Primary Signal" },
              { id: "divergence-tracking", label: "Divergence Tracking vs Price and Leverage" },
            ],
          },
        ],
      },
      {
        id: "exchange-custody-risk",
        label: "Exchange and Custody Risk",
        children: [
          {
            id: "proof-of-reserves",
            label: "Proof of Reserves",
            children: [
              { id: "attestation-cadence", label: "Attestation Cadence and Coverage" },
              { id: "liability-quality", label: "Liability Disclosure Quality Flags" },
            ],
          },
          {
            id: "exchange-balances",
            label: "Exchange Balances",
            children: [
              { id: "concentration-migration", label: "Concentration and Migration Across Venues" },
              { id: "hotwallet-anomalies", label: "Hot Wallet Activity Anomalies" },
            ],
          },
          {
            id: "operational-risk",
            label: "Operational Risk",
            children: [
              { id: "outage-tracking", label: "Outage Tracking and Incident Log" },
              { id: "withdrawal-delays", label: "Withdrawal Delays and Solvency Rumor Indicators" },
            ],
          },
        ],
      },
      {
        id: "illicit-finance",
        label: "Illicit Finance and Threat Actor Monitoring",
        children: [
          {
            id: "sanctions",
            label: "Sanctions and Designations",
            children: [
              { id: "new-designations", label: "Newly Designated Entities and Wallet Clusters" },
              { id: "exposure-mapping", label: "Exposure Mapping by Venue and Protocol" },
            ],
          },
          {
            id: "threat-actors",
            label: "Threat Actor Monitoring",
            children: [
              { id: "exploit-tracking", label: "Exploit Tracking and Stolen Fund Flows" },
              { id: "mixer-exposure", label: "Mixer Exposure, Bridge Compromise Indicators" },
            ],
          },
          {
            id: "national-security",
            label: "National Security Lens",
            children: [
              { id: "state-corridors", label: "State Aligned Finance Corridors" },
              { id: "accumulation-bypass", label: "Strategic Accumulation and Settlement Bypass Attempts" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "policy-adoption",
    label: "Policy, Regulation, and Institutional Adoption",
    children: [
      {
        id: "global-policy",
        label: "Global Policy and Regulatory Architecture",
        children: [
          {
            id: "reg-frameworks",
            label: "Regulatory Frameworks",
            children: [
              { id: "licensing-regimes", label: "Licensing Regimes by Jurisdiction" },
              { id: "stablecoin-custody-integrity", label: "Stablecoin Rules, Custody Requirements, Integrity Mandates" },
            ],
          },
          {
            id: "guidance-standards",
            label: "Guidance and Standards",
            children: [
              { id: "financial-stability-guidance", label: "Financial Stability and Market Conduct Standards" },
              { id: "accounting-disclosure", label: "Accounting and Disclosure Rules Shaping Adoption" },
            ],
          },
          {
            id: "supervisory-bodies",
            label: "Supervisory Bodies",
            children: [
              { id: "enforcement-posture", label: "Enforcement Posture and Supervisory Priorities" },
              { id: "coordination-signals", label: "Coordination Signals Across Agencies" },
            ],
          },
        ],
      },
      {
        id: "legislation",
        label: "Legislation Intelligence",
        children: [
          {
            id: "bills-tracker",
            label: "Bills Tracker",
            children: [{ id: "pipeline-status", label: "Pipeline Status by Committee and Chamber" }],
          },
          {
            id: "hearings",
            label: "Hearings",
            children: [{ id: "witness-positioning", label: "Witness Positioning and Narrative Drift" }],
          },
          {
            id: "votes",
            label: "Votes",
            children: [{ id: "whip-count", label: "Whip Count Signals and Probability of Passage" }],
          },
        ],
      },
      {
        id: "adoption-infrastructure",
        label: "Adoption and Infrastructure",
        children: [
          {
            id: "cbdc",
            label: "CBDC Developments",
            children: [{ id: "pilot-scope", label: "Pilot Scope, Design Choices, Privacy Model, Programmability" }],
          },
          {
            id: "payment-rails",
            label: "Payment Rails",
            children: [
              { id: "stablecoin-corridors", label: "Stablecoin Settlement Corridors" },
              { id: "bank-fintech-integrations", label: "Bank and Fintech Integrations" },
              { id: "onramp-offramp-friction", label: "On-Ramp and Off-Ramp Friction Indicators" },
            ],
          },
          {
            id: "licensing-compliance",
            label: "Licensing and Compliance Regimes",
            children: [
              { id: "vasp-travel-rule", label: "VASP Licensing and Travel Rule Implementation" },
              { id: "aml-cft-changes", label: "AML and CFT Rule Changes Affecting Liquidity and Access" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "mining-ops",
    label: "Mining Operations and Physical Infrastructure",
    children: [
      {
        id: "mining-org-supply-chain",
        label: "Mining Organization and Supply Chain",
        children: [
          {
            id: "pool-concentration",
            label: "Mining Organization",
            children: [
              { id: "pool-centralization", label: "Pool Concentration and Centralization Risk" },
              { id: "geo-distribution", label: "Geographic Distribution and Jurisdiction Exposure" },
            ],
          },
          {
            id: "energy-cost",
            label: "Energy and Cost Structure",
            children: [
              { id: "power-price", label: "Power Price Sensitivity and Hedging Behavior" },
              { id: "curtailment-grid", label: "Curtailment Risk and Grid Policy Shocks" },
            ],
          },
          {
            id: "hardware-supply",
            label: "Hardware and Supply Chain",
            children: [
              { id: "asic-availability", label: "ASIC Availability and Upgrade Cycles" },
              { id: "vendor-concentration", label: "Vendor Concentration" },
              { id: "facility-pipeline", label: "Facility Build Pipeline and Financing Conditions" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "global-risk",
    label: "Global Risk Overlay",
    children: [
      {
        id: "macro-geopolitical",
        label: "Macro and Geopolitical Risk Map",
        children: [
          {
            id: "macro-catalysts",
            label: "Macro Catalysts",
            children: [
              { id: "rates-decisions", label: "Rates Decisions and Inflation Surprises" },
              { id: "dollar-stress", label: "Dollar Stress and Liquidity Shifts" },
            ],
          },
          {
            id: "geo-catalysts",
            label: "Geopolitical Catalysts",
            children: [
              { id: "conflict-escalation", label: "Conflict Escalation" },
              { id: "sanctions-expansion", label: "Sanctions Expansion" },
              { id: "capital-controls", label: "Capital Control Events" },
            ],
          },
          {
            id: "crisis-channels",
            label: "Crisis Transmission Channels",
            children: [
              { id: "stablecoin-redemption", label: "Stablecoin Redemption Runs" },
              { id: "exchange-rumors", label: "Exchange Solvency Rumors and Liquidity Spirals" },
              { id: "basis-blowouts", label: "Basis Blowouts and Forced Deleveraging" },
            ],
          },
        ],
      },
    ],
  },
];
