
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  TrendingUp, 
  Brain, 
  Shield, 
  Target, 
  Users,
  FileText,
  BarChart3,
  Settings,
  Monitor,
  Calculator,
  LineChart,
  Coins,
  Globe,
  Receipt,
  PieChart,
  Heart,
  Briefcase,
  AlertTriangle,
  Trophy
} from 'lucide-react';

const ProgramCoverageSection = () => {
  const modules = [
    {
      id: "module1",
      title: "Introduction to the Stock Market",
      icon: BookOpen,
      tag: "Foundation",
      description: "Understanding the basics of stock markets, exchanges, and trading mechanisms",
      topics: [
        "What is the Stock Market? - Definition, purpose, and key participants",
        "How Does the Stock Market Work? - Primary vs secondary markets",
        "Key Terms and Concepts - Stocks, shares, bonds, indices, market cap"
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
        "IPO Investment Risks - Understanding potential downsides"
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
        "Advanced Orders - Bracket orders, cover orders, GTC, GTD"
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
        "Reviewing Mock Trades - Analyzing performance and strategies"
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
        "News and Research Resources - Market updates and global trends"
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
    },
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

  const tagColors = {
    Foundation: "bg-blue-900/30 text-blue-300 border-blue-700/50",
    Investment: "bg-green-900/30 text-green-300 border-green-700/50",
    Trading: "bg-purple-900/30 text-purple-300 border-purple-700/50",
    Practical: "bg-cyan-900/30 text-cyan-300 border-cyan-700/50",
    Technical: "bg-orange-900/30 text-orange-300 border-orange-700/50",
    Analysis: "bg-red-900/30 text-red-300 border-red-700/50",
    Derivatives: "bg-pink-900/30 text-pink-300 border-pink-700/50",
    Technology: "bg-indigo-900/30 text-indigo-300 border-indigo-700/50",
    Markets: "bg-yellow-900/30 text-yellow-300 border-yellow-700/50",
    Forex: "bg-teal-900/30 text-teal-300 border-teal-700/50",
    Crypto: "bg-violet-900/30 text-violet-300 border-violet-700/50",
    Global: "bg-sky-900/30 text-sky-300 border-sky-700/50",
    Tax: "bg-rose-900/30 text-rose-300 border-rose-700/50",
    Planning: "bg-emerald-900/30 text-emerald-300 border-emerald-700/50",
    Psychology: "bg-amber-900/30 text-amber-300 border-amber-700/50",
    Career: "bg-lime-900/30 text-lime-300 border-lime-700/50",
    Safety: "bg-red-900/30 text-red-300 border-red-700/50",
    Success: "bg-gold-900/30 text-yellow-300 border-yellow-700/50"
  };

  return (
    <section className="py-16 px-4 bg-slate-900">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            What You'll Learn
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive curriculum designed to take you from beginner to confident trader
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <AccordionItem 
                key={module.id} 
                value={module.id}
                className="feature-card border border-slate-700/50 rounded-lg"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-white">
                          Module {index + 1}: {module.title}
                        </h3>
                        <Badge 
                          variant="outline" 
                          className={tagColors[module.tag as keyof typeof tagColors]}
                        >
                          {module.tag}
                        </Badge>
                      </div>
                      <p className="text-slate-400 text-sm">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <ul className="space-y-3 mt-4">
                    {module.topics.map((topic, topicIndex) => (
                      <li 
                        key={topicIndex}
                        className="flex items-start gap-3 text-slate-300"
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0 mt-2"></div>
                        <span className="text-sm leading-relaxed">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default ProgramCoverageSection;
