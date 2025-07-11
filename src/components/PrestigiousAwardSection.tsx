import { Award, Trophy } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const PrestigiousAwardSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const typingText = "🏆 National Recognition at the Highest Level";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && typingIndex < typingText.length) {
      const timer = setTimeout(() => {
        setTypingIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, typingIndex, typingText.length]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-400/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-blue-400/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-blue-300/10 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Laurel Border Decoration */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2 text-blue-400">
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          <Trophy className="w-6 h-6" />
          <div className="w-8 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30">
              <Award className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                National Recognition
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                {typingText.slice(0, typingIndex)}
                {typingIndex < typingText.length && <span className="animate-pulse">|</span>}
              </h2>
              
              <h3 className="text-2xl lg:text-3xl font-semibold gradient-text">
                Sanjay Saraf Sir was Honoured by the Prime Minister of India, Dr. Manmohan Singh
              </h3>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                A moment of pride and prestige — our founder, Sanjay Saraf Sir, was awarded by the then Prime Minister Dr. Manmohan Singh, recognizing his outstanding contribution to education and professional excellence.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                This honor stands as a testament to his dedication, brilliance, and impact in shaping future finance leaders.
              </p>
            </div>

            {/* Achievement Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-blue-500/30">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-300">Educational Excellence</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-lg border border-blue-500/30">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-300">National Recognition</span>
              </div>
            </div>
          </div>

          {/* Award Image */}
          <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Spotlight Effect */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-200/30 via-transparent to-transparent rounded-2xl"></div>
            
            {/* Blue Border Frame */}
            <div className="relative p-1 bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 rounded-2xl shadow-2xl">
              <div className="bg-slate-900 rounded-xl p-2">
                <img
                  src="/lovable-uploads/b49777f4-a887-4359-95f8-47bfd6390152.png"
                  alt="Sanjay Saraf Sir receiving award from Prime Minister Dr. Manmohan Singh"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Floating Trophy Icons */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-float">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1.5s' }}>
              <Award className="w-5 h-5 text-white" />
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-300/20 to-cyan-400/20 rounded-2xl blur-xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
    </section>
  );
};

export default PrestigiousAwardSection;