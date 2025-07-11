
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Check } from 'lucide-react';

const HeroSection = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [studentsCount, setStudentsCount] = useState(0);
  const [animatedStudentsCount, setAnimatedStudentsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const fullText = 'A Complete Course on Stock Market';

  const highlights = [
    { icon: '🎥', text: '100+ Pre-recorded Sessions', animation: 'fade-left' },
    { icon: '⏱', text: '75+ Hours of Content', animation: 'fade-right' },
    { icon: '📚', text: '20+ Comprehensive Modules', animation: 'fade-left' },
    { icon: '📅', text: 'Course Validity: 1 Year', animation: 'fade-right' },
    { icon: '🌐', text: 'Language: Hindi', animation: 'fade-left' },
    { icon: '👨‍🎓', text: `${animatedStudentsCount}+ students are enrolled`, animation: 'fade-right' },
  ];

  // Generate random student count on component mount
  useEffect(() => {
    const baseCount = 2875;
    const randomIncrease = Math.floor(Math.random() * 24) + 2; // 2-25
    const finalCount = baseCount + randomIncrease;
    setStudentsCount(finalCount);
  }, []);

  // Typing animation
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation for students count
  useEffect(() => {
    if (isVisible && studentsCount > 0) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const increment = studentsCount / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= studentsCount) {
          setAnimatedStudentsCount(studentsCount);
          clearInterval(timer);
        } else {
          setAnimatedStudentsCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isVisible, studentsCount]);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden animate-fade-up">
      {/* Background Chart Animation */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          <path
            d="M50,500 Q200,300 400,350 T750,200"
            stroke="url(#chartGradient)"
            strokeWidth="3"
            fill="none"
            className="chart-animation"
          />
          <defs>
            <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-up">
            <span className="text-white">Stock Market Foundation Program</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 font-medium">
            <span className="gradient-text">{typedText}</span>
            {showCursor && <span className="animate-pulse border-r-2 border-blue-400 ml-1"></span>}
          </p>

          {/* Video Section */}
          <div className="relative mb-12 animate-slide-up">
            <div 
              className="relative bg-slate-800/80 rounded-2xl p-8 border border-slate-700/50 backdrop-blur-sm cursor-pointer group hover:border-blue-500/50 transition-all duration-300"
              onClick={() => setVideoModalOpen(true)}
            >
              <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20"></div>
                <Button 
                  variant="glow"
                  size="lg"
                  className="relative z-10 bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm animate-glow"
                >
                  <Play className="mr-2 h-6 w-6" />
                  Watch Course Preview
                </Button>
              </div>
            </div>
          </div>

          {/* Course Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {highlights.map((highlight, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-3 bg-slate-800/60 p-4 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:bg-slate-700/60 hover:scale-105 hover:border-blue-500/30 transition-all duration-500 cursor-pointer group ${
                  isVisible 
                    ? highlight.animation === 'fade-left' 
                      ? 'animate-[slideInLeft_0.8s_ease-out_forwards]' 
                      : 'animate-[slideInRight_0.8s_ease-out_forwards]'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ 
                  animationDelay: isVisible ? `${index * 0.2}s` : '0s',
                  transform: isVisible ? 'none' : highlight.animation === 'fade-left' ? 'translateX(-50px)' : 'translateX(50px)'
                }}
              >
                <span className="text-2xl transition-transform duration-300 group-hover:scale-110">{highlight.icon}</span>
                <span className="text-slate-200 font-medium group-hover:text-white transition-colors duration-300">{highlight.text}</span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up">
            <Button 
              variant="glow"
              size="lg"
              className="glow-button text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-semibold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 w-full md:w-auto"
            >
              <Check className="mr-2 h-5 w-5" />
              Start Learning Now – Limited Time Offer
            </Button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div 
            className="bg-slate-800 rounded-2xl p-6 max-w-4xl w-full border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-slate-700 rounded-xl flex items-center justify-center">
              <p className="text-slate-300 text-lg">Course Preview Video</p>
            </div>
            <Button 
              variant="ghost" 
              className="mt-4 text-slate-300 hover:text-white"
              onClick={() => setVideoModalOpen(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
