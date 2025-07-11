
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Zap } from 'lucide-react';

const LimitedTimeOfferSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 5,
    minutes: 23,
    seconds: 45,
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
    <section className="py-16 px-4 bg-gradient-to-r from-red-900/20 via-slate-900 to-red-900/20 border-y border-red-500/20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-red-600/20 px-4 py-2 rounded-full border border-red-500/30 mb-6">
            <Zap className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Limited Time Offer</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Enroll Now @ Just{' '}
            <span className="relative">
              <span className="text-red-400 text-2xl md:text-3xl strike-animation">₹9,999</span>
              <span className="gradient-text ml-4">₹999/-</span>
            </span>
          </h2>
          
          <p className="text-slate-300 text-lg mb-8">
            Save 90% on the complete Stock Market Foundation Program
          </p>

          {/* Countdown Timer */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-6 h-6 text-red-400" />
              <span className="text-red-400 font-semibold text-lg">Offer Ending In:</span>
            </div>
            
            <div className="flex justify-center gap-4">
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 rounded-lg text-2xl font-bold shadow-lg animate-pulse">
                  {formatTime(timeLeft.hours)}
                </div>
                <div className="text-slate-400 text-sm mt-2">Hours</div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 rounded-lg text-2xl font-bold shadow-lg animate-pulse">
                  {formatTime(timeLeft.minutes)}
                </div>
                <div className="text-slate-400 text-sm mt-2">Minutes</div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 rounded-lg text-2xl font-bold shadow-lg animate-pulse">
                  {formatTime(timeLeft.seconds)}
                </div>
                <div className="text-slate-400 text-sm mt-2">Seconds</div>
              </div>
            </div>
          </div>

          <Button 
            variant="glow"
            size="lg"
            className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-12 py-6 text-xl font-bold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 animate-glow"
          >
            <Zap className="w-6 h-6 mr-2" />
            Enroll Now
          </Button>
          
          <p className="text-slate-400 text-sm mt-4">
            ⚡ Instant access • 💳 Secure payment • 🔒 Lifetime validity
          </p>
        </div>
      </div>
    </section>
  );
};

export default LimitedTimeOfferSection;
