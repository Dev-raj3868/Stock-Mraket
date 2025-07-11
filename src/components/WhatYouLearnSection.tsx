import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
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
  Trophy,
  ChevronRight,
  ChevronDown
} from 'lucide-react';

const WhatYouLearnSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const [visibleModules, setVisibleModules] = useState<Set<number>>(new Set());

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-module-index') || '0');
            setVisibleModules(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const moduleElements = document.querySelectorAll('[data-module-index]');
    moduleElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const firstSixModules = [
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

  const allModules = [
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

  const tagColors = {
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

  const toggleModuleExpanded = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <section className="py-16 px-4 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-32 w-24 h-24 bg-primary/15 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-40 w-16 h-16 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>
        
        {/* Gradient overlays with animation */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl opacity-60 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-accent/5 to-primary/5 rounded-full blur-3xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Moving background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px] animate-[movePattern_20s_linear_infinite]"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
            What You'll Learn
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive curriculum designed to transform you from beginner to confident trader
          </p>
        </div>

        {/* Responsive Grid for modules */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {firstSixModules.map((module, index) => {
              const IconComponent = module.icon;
              const isVisible = visibleModules.has(index);
              const isExpanded = expandedModule === module.id;
              const animationClass = index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right';
              
              return (
                <div
                  key={module.id}
                  data-module-index={index}
                  className={`bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer hover:border-primary/50 hover:scale-[1.02] ${
                    isVisible ? animationClass : 'opacity-0'
                  }`}
                  onClick={() => toggleModuleExpanded(module.id)}
                >
                  {/* Module Header - Always Visible */}
                  <div className="p-4 md:p-6">
                    {/* Desktop Layout: Icon and title together */}
                    <div className="hidden lg:block">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                          <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                            Module {index + 1}: {module.title}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      <div className="flex items-center gap-3 ml-16">
                        <Badge 
                          variant="outline" 
                          className={`${tagColors[module.tag as keyof typeof tagColors]} text-sm`}
                        >
                          #{module.tag}
                        </Badge>
                      </div>
                    </div>

                    {/* Mobile Layout: Title on first line, icon and tag on second line */}
                    <div className="lg:hidden">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
                          Module {index + 1}: {module.title}
                        </h3>
                        <ChevronDown 
                          className={`w-4 h-4 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-2 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <Badge 
                          variant="outline" 
                          className={`${tagColors[module.tag as keyof typeof tagColors]} text-xs`}
                        >
                          #{module.tag}
                        </Badge>
                      </div>
                    </div>

                    {/* Description - Hidden by default, shown on toggle/click */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="border-t border-border/50 pt-4">
                        <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                          {module.description}
                        </p>
                        <div>
                          <h4 className="text-primary font-semibold mb-3 text-sm">Key Topics:</h4>
                          <ul className="space-y-2">
                            {module.topics.slice(0, 4).map((topic, topicIndex) => (
                              <li key={topicIndex} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground text-xs leading-relaxed">{topic}</span>
                              </li>
                            ))}
                            {module.topics.length > 4 && (
                              <li className="text-primary/70 text-xs font-medium">
                                +{module.topics.length - 4} more topics...
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="glow"
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="glow-button text-primary-foreground px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Show All {allModules.length} Modules
            <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Modal for All Modules */}
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-background to-card border border-border">
            <DialogHeader>
              <DialogTitle className="text-xl md:text-2xl font-bold gradient-text">
                Complete Course Modules ({allModules.length})
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-base md:text-lg">
                Comprehensive curriculum covering all aspects of stock market trading and investment
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-6">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {allModules.map((module, index) => {
                  const IconComponent = module.icon;
                  return (
                    <AccordionItem 
                      key={module.id} 
                      value={module.id}
                      className="bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 rounded-lg"
                    >
                      <AccordionTrigger className="px-4 py-3 hover:no-underline group text-sm">
                        <div className="flex items-center gap-3 w-full">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 h-4 text-primary" />
                          </div>
                          <div className="flex-1 text-left">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-mono text-muted-foreground">Module {index + 1}</span>
                              <Badge 
                                variant="outline" 
                                className={`${tagColors[module.tag as keyof typeof tagColors]} text-xs`}
                              >
                                #{module.tag}
                              </Badge>
                            </div>
                            <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                              {module.title}
                            </h4>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3">
                        <div className="pt-2 border-t border-border/50">
                          <p className="text-muted-foreground text-sm mb-3">{module.description}</p>
                          {module.topics && (
                            <ul className="space-y-1">
                              {module.topics.map((topic, topicIndex) => (
                                <li key={topicIndex} className="flex items-start gap-2">
                                  <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                                  <span className="text-muted-foreground text-xs leading-relaxed">{topic}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </DialogContent>
        </Dialog>
      </div>

    </section>
  );
};

export default WhatYouLearnSection;