
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, TrendingUp } from 'lucide-react';

const WhyTradingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-b from-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            Why Trading and Investment?
          </h2>
          <p className="text-slate-300 text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the power of financial markets and learn why trading and investing are essential skills for building long-term wealth and achieving financial independence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* YouTube Video Embed */}
          <div className="relative group mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700/50 backdrop-blur-sm">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/QlYE6lFdcXs?si=example&rel=0&modestbranding=1"
                  title="Why Trading and Investment by Sanjay Saraf Sir"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              
              {/* Video overlay info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-3 text-white">
                  <Play className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="font-semibold text-lg">Why Trading and Investment?</h3>
                    <p className="text-slate-300 text-sm">Learn from Sanjay Saraf Sir</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className={`text-center p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-green-500/50 transition-all duration-700 group transform ${
              isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '0ms' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-600/20 to-emerald-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Wealth Creation</h3>
              <p className="text-slate-400 text-sm">Build long-term wealth through smart investment strategies</p>
            </div>

            <div className={`text-center p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-700 group transform ${
              isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Financial Freedom</h3>
              <p className="text-slate-400 text-sm">Achieve independence from traditional employment constraints</p>
            </div>

            <div className={`text-center p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-700 group transform ${
              isVisible ? 'animate-fade-in-left' : 'opacity-0 translate-y-8'
            }`} style={{ animationDelay: '400ms' }}>
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Passive Income</h3>
              <p className="text-slate-400 text-sm">Generate income streams that work for you 24/7</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button 
              variant="glow"
              size="lg"
              className="glow-button text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <TrendingUp className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTradingSection;
