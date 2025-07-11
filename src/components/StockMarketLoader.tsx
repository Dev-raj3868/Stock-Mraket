import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StockMarketLoader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [currentTicker, setCurrentTicker] = useState(0);
  const [graphData, setGraphData] = useState<number[]>([]);
  const [isUptrend, setIsUptrend] = useState(true);

  const tickers = [
    { name: "NIFTY", change: "+0.45%", trend: "up", icon: "🔼" },
    { name: "SENSEX", change: "-0.32%", trend: "down", icon: "🔽" },
    { name: "BANKNIFTY", change: "+1.23%", trend: "up", icon: "🔼" },
    { name: "RELIANCE", change: "+2.15%", trend: "up", icon: "🔼" },
    { name: "TCS", change: "-0.87%", trend: "down", icon: "🔽" },
  ];

  const motivationalQuotes = [
    "Invest in yourself — Loading opportunities…",
    "Building wealth, one trade at a time…",
    "Your financial journey starts here…",
    "Preparing market insights…",
  ];

  // Generate random stock graph data
  useEffect(() => {
    const generateGraphData = () => {
      const data = [];
      let currentValue = 100;
      const trend = Math.random() > 0.5;
      setIsUptrend(trend);

      for (let i = 0; i < 50; i++) {
        const volatility = 0.5 + Math.random() * 2;
        const direction = trend ? 1 : -1;
        const change = (Math.random() - 0.3) * volatility * direction;
        currentValue += change;
        data.push(Math.max(50, Math.min(150, currentValue)));
      }
      return data;
    };

    setGraphData(generateGraphData());
    const interval = setInterval(() => {
      setGraphData(generateGraphData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onLoadingComplete, 500);
          }, 1000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  // Cycle through tickers
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTicker(prev => (prev + 1) % tickers.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Generate SVG path for compact stock graph
  const generatePath = (data: number[]) => {
    if (data.length === 0) return '';
    
    const width = 250;
    const height = 120;
    const stepX = width / (data.length - 1);
    
    let path = `M 0 ${height - ((data[0] - 50) / 100) * height}`;
    
    for (let i = 1; i < data.length; i++) {
      const x = i * stepX;
      const y = height - ((data[i] - 50) / 100) * height;
      path += ` L ${x} ${y}`;
    }
    
    return path;
  };

  // Generate compact candles
  const generateCandles = () => {
    const candles = [];
    for (let i = 0; i < 6; i++) {
      const isGreen = Math.random() > 0.5;
      const height = 15 + Math.random() * 25;
      const delay = i * 0.2;
      
      candles.push(
        <div
          key={i}
          className={`w-2 rounded-sm animate-pulse ${
            isGreen ? 'bg-green-500' : 'bg-red-500'
          }`}
          style={{
            height: `${height}px`,
            animationDelay: `${delay}s`,
            animationDuration: '2s'
          }}
        />
      );
    }
    return candles;
  };

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transition-opacity duration-500 ${!isVisible ? 'opacity-0' : 'opacity-100'} overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div
                key={i}
                className="border-r border-b border-blue-400/20 animate-pulse"
                style={{ animationDelay: `${i * 0.05}s` }}
              />
            ))}
          </div>
        </div>

        {/* Moving Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent animate-shimmer"></div>
      </div>

      {/* Background particles with different movements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 3 === 0 ? 'bg-blue-400/30' : i % 3 === 1 ? 'bg-cyan-400/30' : 'bg-purple-400/30'
            }`}
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating Financial Icons */}
      <div className="absolute inset-0">
        {['₹', '$', '€', '£', '¥'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-blue-400/20 text-4xl font-bold animate-bounce"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="relative text-center p-8 max-w-2xl mx-auto">
        {/* Loading Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-8 animate-fade-up">
          <span className="text-white">Stock Market Foundation Program</span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-6 animate-fade-up animate-delay-100">
          Loading
        </p>

        {/* Compact Stock Graph */}
        <div className="relative mb-6 flex justify-center animate-fade-up animate-delay-200">
          <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4">
            <svg
              width="250"
              height="120"
              viewBox="0 0 250 120"
              className="w-full max-w-xs h-auto"
            >
              <defs>
                <linearGradient id="graphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={isUptrend ? "#10b981" : "#ef4444"} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={isUptrend ? "#06d6a0" : "#f87171"} stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* Grid lines */}
              {[...Array(3)].map((_, i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 30 + 15}
                  x2="250"
                  y2={i * 30 + 15}
                  stroke="rgba(148, 163, 184, 0.1)"
                  strokeWidth="1"
                />
              ))}
              
              {/* Stock graph line */}
              <path
                d={generatePath(graphData)}
                fill="none"
                stroke="url(#graphGradient)"
                strokeWidth="3"
                filter="url(#glow)"
                className="animate-pulse"
              />
              
              {/* Trend indicator */}
              <foreignObject x="220" y="5" width="25" height="25">
                <div className="flex items-center justify-center">
                  {isUptrend ? (
                    <TrendingUp className="h-4 w-4 text-green-400 animate-bounce" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-400 animate-bounce" />
                  )}
                </div>
              </foreignObject>
            </svg>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs mx-auto animate-fade-up animate-delay-300">
          <div className="w-full bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 rounded-full transition-all duration-300 ease-out relative animate-glow-infinite"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
            </div>
          </div>
          
          {/* Progress Percentage */}
          <div className="text-center mt-2">
            <span className="text-sm text-slate-300 font-mono">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockMarketLoader;