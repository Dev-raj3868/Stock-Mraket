
import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, HeadphonesIcon, Shield, BookOpen } from 'lucide-react';

const FeaturesSection = () => {
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>([]);
  const [counters, setCounters] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationTriggered = useRef(false);

  const features = [
    {
      icon: TrendingUp,
      title: 'Live Market Strategies',
      description: 'Learn real-time trading strategies and market analysis techniques from experienced professionals.',
      number: null
    },
    {
      icon: Users,
      title: 'Lifetime Community Access',
      description: 'Join an exclusive community of traders and get ongoing support from peers and mentors.',
      number: null
    },
    {
      icon: Award,
      title: 'Quizzes + Certification',
      description: 'Test your knowledge with interactive quizzes and earn a recognized certification upon completion.',
      number: null
    },
    {
      icon: HeadphonesIcon,
      title: 'Doubt Solving Support',
      description: 'Get your questions answered quickly with dedicated support and weekly doubt-clearing sessions.',
      number: null
    },
    {
      icon: Shield,
      title: '99% Success Rate',
      description: 'Our proven methodology has helped thousands of students achieve consistent profits in trading.',
      number: 99
    },
    {
      icon: BookOpen,
      title: '50+ Trading Tools',
      description: 'Access to premium trading tools, calculators, and market analysis software.',
      number: 50
    }
  ];

  // Optimized counter animation
  const animateCounter = (targetValue: number, index: number, duration: number = 1500) => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(progress * targetValue);
      
      setCounters(prev => {
        const newCounters = [...prev];
        newCounters[index] = currentValue;
        return newCounters;
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  };

  // Optimized Intersection Observer - trigger only once
  useEffect(() => {
    if (animationTriggered.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationTriggered.current) {
            animationTriggered.current = true;
            const initialCounters = features.map(() => 0);
            
            // Animate boxes with stagger delay
            features.forEach((feature, index) => {
              setTimeout(() => {
                setVisibleBoxes(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
                
                // Start counter animation if number exists
                if (feature.number !== null) {
                  animateCounter(feature.number, index, 1500);
                }
              }, index * 150);
            });
            
            setCounters(initialCounters);
            observer.disconnect(); // Disconnect after triggering
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize states only once
  useEffect(() => {
    if (visibleBoxes.length === 0) {
      setVisibleBoxes(Array(features.length).fill(false));
      setCounters(Array(features.length).fill(0));
    }
  }, [visibleBoxes.length]);

  return (
    <section ref={sectionRef} className="py-20 bg-slate-900/50 animate-fade-up animate-delay-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose Our</span>
            <br />
            <span className="text-white">Foundation Program?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to master stock market trading and build long-term wealth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const isVisible = visibleBoxes[index];
            const counterValue = counters[index];
            
            // Format title with animated counter for numbers
            const formatTitle = (title: string, number: number | null, counter: number) => {
              if (number === null) return title;
              
              if (title.includes("99% Success Rate")) return `${counter}% Success Rate`;
              if (title.includes("50+ Trading Tools")) return `${counter}+ Trading Tools`;
              
              return title;
            };

            return (
              <div 
                key={index}
                className={`feature-card p-6 md:p-8 rounded-2xl group transition-all duration-700 transform ${
                  isVisible 
                    ? index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
                    : 'opacity-0 translate-y-8'
                } hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20`}
              >
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 md:p-4 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 flex-shrink-0">
                    <IconComponent className="w-8 h-8 md:w-10 md:h-10 text-white transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-300 transition-colors duration-300 leading-tight">
                      {formatTitle(feature.title, feature.number, counterValue)}
                    </h3>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors duration-300 hidden md:block">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
