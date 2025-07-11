
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock } from 'lucide-react';

const FixedBottomCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 14,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700/50 backdrop-blur-sm">
      <div className="container mx-auto px-2 py-2 md:px-4 md:py-3">
        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between gap-2">
          {/* Left Side: Timer & Pricing */}
          <div className="flex flex-col gap-1 text-white flex-1">
            {/* Timer Row */}
            <div className="flex items-center gap-1 text-xs">
              <Clock className="h-3 w-3 text-red-400" />
              <span className="font-medium">Offer ends:</span>
              <div className="flex gap-0.5 font-mono font-bold">
                <span className="bg-red-600 px-1 py-0.5 rounded text-white">
                  {formatTime(timeLeft.hours)}
                </span>
                <span className="text-red-400">:</span>
                <span className="bg-red-600 px-1 py-0.5 rounded text-white">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span className="text-red-400">:</span>
                <span className="bg-red-600 px-1 py-0.5 rounded text-white">
                  {formatTime(timeLeft.seconds)}
                </span>
              </div>
            </div>
            {/* Pricing Row */}
            <div className="flex items-center gap-1 text-xs">
              <span className="text-gray-400">Just</span>
              <span className="text-gray-400 font-semibold strike-animation">₹9,999</span>
              <span className="text-green-400 text-sm font-bold">₹999/-</span>
            </div>
          </div>

          {/* Right Side: CTA Button */}
          <Button 
            variant="glow"
            size="sm"
            className="flex-shrink-0 text-xs py-2 px-4 h-9"
          >
            Join Now
          </Button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {/* Timer & Pricing */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-white text-center md:text-left">
            {/* Timer */}
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 md:h-5 md:w-5 text-red-400" />
              <span className="text-sm md:text-base font-medium">Offer ends in:</span>
              <div className="flex gap-1 font-mono text-sm md:text-lg font-bold">
                <span className="bg-red-600 px-2 py-1 rounded text-white">
                  {formatTime(timeLeft.hours)}
                </span>
                <span className="text-red-400">:</span>
                <span className="bg-red-600 px-2 py-1 rounded text-white">
                  {formatTime(timeLeft.minutes)}
                </span>
                <span className="text-red-400">:</span>
                <span className="bg-red-600 px-2 py-1 rounded text-white">
                  {formatTime(timeLeft.seconds)}
                </span>
              </div>
            </div>
            
            {/* Pricing */}
            <div className="flex items-center gap-2 text-center">
              <span className="text-gray-400 text-sm">Just</span>
              <span className="text-gray-400 text-lg font-semibold strike-animation">₹9,999</span>
              <span className="text-green-400 text-xl md:text-2xl font-bold">₹999/-</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            variant="glow"
            size="lg"
            className="flex-shrink-0 text-base py-3 px-6"
          >
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FixedBottomCTA;
