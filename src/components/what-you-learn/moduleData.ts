import { 
  BookOpen, 
  FileText, 
  Settings, 
  Monitor, 
  Target,
  Calculator,
  TrendingUp,
  BarChart3,
  Brain,
  Coins,
  Globe,
  PieChart,
  Receipt,
  Shield,
  Briefcase,
  AlertTriangle,
  Trophy
} from 'lucide-react';

export interface Module {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  description: string;
  topics: string[];
}

export const firstSixModules: Module[] = [
  {
    id: "module1",
    title: "Introduction to the Stock Market",
    icon: BookOpen,
    tag: "Foundation",
    description: "Understanding the basics of stock markets, exchanges, and trading mechanisms",
    topics: [
      "What is the Stock Market? - Definition, purpose, and key participants",
      "How Does the Stock Market Work? - Primary vs secondary markets",
      "Key Terms and Concepts - Stocks, shares, bonds, indices, market cap",
      "Stock exchanges in India (NSE, BSE)",
      "Types of securities traded",
      "Overview of stock trading platforms and DEMAT accounts"
    ]
  },
  {
    id: "module2",
    title: "Initial Public Offerings (IPO)",
    icon: FileText,
    tag: "Investment",
    description: "Complete guide to understanding and analyzing IPOs",
    topics: [
      "What is an IPO? - Concept and application process",
      "How to Analyze IPOs - Evaluating prospectus and financial metrics",
      "IPO Investment Risks - Understanding potential downsides",
      "Why companies go public",
      "The process of applying for an IPO in India"
    ]
  },
  {
    id: "module3",
    title: "Types of Orders in the Stock Market",
    icon: Settings,
    tag: "Trading",
    description: "Master different order types for effective trading",
    topics: [
      "Market Orders - When and how to use market orders",
      "Limit Orders - Definition, pros and cons",
      "Stop Loss and Stop Limit Orders - Risk protection strategies",
      "Advanced Orders - Bracket orders, cover orders, GTC, GTD",
      "Risk management with bracket orders and cover orders"
    ]
  },
  {
    id: "module4",
    title: "Virtual Trading",
    icon: Monitor,
    tag: "Practical",
    description: "Practice trading with real-time market simulations",
    topics: [
      "Live Market Simulations - Mock trading setup and practice",
      "Reviewing Mock Trades - Analyzing performance and strategies",
      "Using real-time data to simulate trades and track performance"
    ]
  },
  {
    id: "module5",
    title: "Trading Tools, Software, and Websites",
    icon: Target,
    tag: "Technical",
    description: "Essential tools and platforms for successful trading",
    topics: [
      "Trading Platforms - DEMAT accounts, Zerodha, Upstox, Angel Broking",
      "Charting and Analysis Tools - TradingView, StockEdge, screeners",
      "News and Research Resources - Market updates and global trends",
      "How to use trading terminals (Kite, Pi, TradingView)",
      "Backtesting strategies and paper trading tools"
    ]
  },
  {
    id: "module6",
    title: "Fundamental Analysis",
    icon: Calculator,
    tag: "Analysis",
    description: "Evaluate companies using financial data and business metrics",
    topics: [
      "What is Fundamental Analysis? - Intrinsic value vs market price",
      "Financial Statements - Balance sheet, P&L, cash flow statements",
      "Key Financial Ratios - EPS, P/E, ROE, debt-to-equity, current ratio",
      "Qualitative Analysis - Management, business model, competitive advantage",
      "Tools and Resources - Screener.in, annual reports, analyst recommendations"
    ]
  }
];

export const allModules: Module[] = [
  ...firstSixModules,
  {
    id: "module7",
    title: "Technical Analysis",
    icon: TrendingUp,
    tag: "Technical",
    description: "Master chart patterns, indicators, and technical analysis tools",
    topics: [
      "What is Technical Analysis? - Price charts and market behavior",
      "Understanding Charts - Line, bar, and candlestick charts",
      "Important Concepts - Market phases, support/resistance, trends, patterns",
      "Timeframes in Analysis - Intraday, swing trading, long-term charts",
      "Tools and Platforms - TradingView, Investing.com, Chartink"
    ]
  },
  {
    id: "module8",
    title: "Futures & Options (F&O)",
    icon: BarChart3,
    tag: "Derivatives",
    description: "Advanced trading with derivatives and leverage",
    topics: [
      "Introduction to Derivatives - Futures, options, and leverage concepts",
      "Futures Trading - Contract specs, margins, hedging, risks",
      "Options Trading - Strike price, premium, expiry, buying vs writing",
      "Risk Management - Understanding risks and rewards in F&O"
    ]
  },
  {
    id: "module9",
    title: "Introduction to Algo Trading",
    icon: Brain,
    tag: "Technology",
    description: "Automated trading systems and algorithmic strategies",
    topics: [
      "What is Algorithmic Trading? - Advantages and platforms",
      "Simple Algorithms - Creating basic trading bots and automated systems"
    ]
  },
  {
    id: "module10",
    title: "Commodity Market",
    icon: Coins,
    tag: "Markets",
    description: "Trading in metals, energy, and agricultural commodities",
    topics: [
      "Introduction to Commodities - Metals, energy, agriculture (MCX, NCDEX)",
      "Commodity Trading Basics - Physical vs futures markets",
      "Popular Commodities - Gold, crude oil, natural gas, agricultural products"
    ]
  },
  {
    id: "module11",
    title: "Currency Market",
    icon: Globe,
    tag: "Forex",
    description: "Foreign exchange trading and currency derivatives",
    topics: [
      "Introduction to Currency Trading - Forex market and currency pairs",
      "Factors Affecting Prices - Inflation, interest rates, geopolitical events",
      "Currency Derivatives - Trading currency futures, risks and benefits"
    ]
  },
  {
    id: "module12",
    title: "Mutual Funds",
    icon: PieChart,
    tag: "Investment",
    description: "Understanding and investing in mutual funds",
    topics: [
      "What are Mutual Funds? - Types, SIPs vs lump-sum investments",
      "Choosing Mutual Funds - Performance evaluation, risk profile, goals",
      "Mutual Funds vs Direct Stocks - Pros, cons, and when to choose each"
    ]
  },
  {
    id: "module13",
    title: "Crypto Trading",
    icon: Coins,
    tag: "Crypto",
    description: "Cryptocurrency trading and blockchain technology",
    topics: [
      "Understanding Cryptocurrency - Blockchain, Bitcoin, Ethereum, coins vs tokens",
      "Trading on Crypto Exchanges - CEX vs DEX, wallets, private keys",
      "Crypto Trading Strategies - Spot trading, swing trading, staking",
      "Regulatory Outlook - Global regulations and crypto taxation in India"
    ]
  },
  {
    id: "module14",
    title: "Global Indices and Their Impact",
    icon: Globe,
    tag: "Global",
    description: "Understanding international market influences",
    topics: [
      "Major Global Stock Indices - S&P 500, Dow Jones, NASDAQ, FTSE, Nikkei",
      "Global-Indian Market Correlation - Impact of global trends on Indian markets"
    ]
  },
  {
    id: "module15",
    title: "Investing in International Markets",
    icon: Globe,
    tag: "Global",
    description: "Diversifying with international investments",
    topics: [
      "Introduction to Global Investing - ETFs, mutual funds, direct platforms",
      "Currency Risk - Impact of currency fluctuations on global investments"
    ]
  },
  {
    id: "module16",
    title: "Taxation in Stock Market",
    icon: Receipt,
    tag: "Tax",
    description: "Understanding tax implications of trading and investing",
    topics: [
      "Capital Gains Tax - Short-term vs long-term, dividend taxation",
      "Tax-Saving Strategies - ELSS, filing taxes on trading income"
    ]
  },
  {
    id: "module17",
    title: "Financial Planning and Asset Allocation",
    icon: PieChart,
    tag: "Planning",
    description: "Strategic portfolio management and goal-based investing",
    topics: [
      "Introduction to Asset Allocation - Balancing risk across asset classes",
      "Goal-Based Investing - Investment strategy for retirement, education goals"
    ]
  },
  {
    id: "module18",
    title: "Risk Management and Investor Psychology",
    icon: Shield,
    tag: "Psychology",
    description: "Develop the right mindset for successful trading",
    topics: [
      "Risk Management - Diversification, stop loss, position sizing",
      "Investor Psychology - Overcoming fear, greed, overconfidence"
    ]
  },
  {
    id: "module19",
    title: "Career Opportunities in Stock Market",
    icon: Briefcase,
    tag: "Career",
    description: "Building a career in finance and trading",
    topics: [
      "Stock Market as a Career - Trader, analyst, advisor, portfolio manager roles",
      "NISM Certifications - Series VIII, V-A, XV and their importance in finance careers"
    ]
  },
  {
    id: "module20",
    title: "Awareness and Protection from Frauds",
    icon: AlertTriangle,
    tag: "Safety",
    description: "Protecting yourself from trading and investment scams",
    topics: [
      "Common Types of Frauds - Ponzi schemes, insider trading, pump-and-dump",
      "Identifying Potential Scams - Red flags and verification methods",
      "Protecting Yourself - SEBI registration checks, reporting frauds"
    ]
  },
  {
    id: "module21",
    title: "Becoming Self-Dependent through Trading",
    icon: Trophy,
    tag: "Success",
    description: "Achieving financial independence through smart investing",
    topics: [
      "Developing a Trading Mindset - Long-term strategy for financial independence",
      "Building Passive Income - Diversified portfolio for wealth creation",
      "Becoming a Full-time Trader - Transition strategies and risk management"
    ]
  }
];

export const tagColors = {
  Foundation: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Investment: "bg-green-500/20 text-green-300 border-green-500/30",
  Trading: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Practical: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  Technical: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Analysis: "bg-red-500/20 text-red-300 border-red-500/30",
  Derivatives: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Technology: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  Markets: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  Forex: "bg-teal-500/20 text-teal-300 border-teal-500/30",
  Crypto: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  Global: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  Tax: "bg-rose-500/20 text-rose-300 border-rose-500/30",
  Planning: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  Psychology: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  Career: "bg-lime-500/20 text-lime-300 border-lime-500/30",
  Safety: "bg-red-500/20 text-red-300 border-red-500/30",
  Success: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
};