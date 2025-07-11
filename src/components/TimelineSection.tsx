
import { UserPlus, BookOpen, TrendingUp, Target, DollarSign, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const TimelineSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);

  const steps = [
    {
      icon: UserPlus,
      title: 'Enroll Instantly',
      description: 'Quick registration and immediate access to all course materials',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BookOpen,
      title: 'Understand Market Basics',
      description: 'Learn fundamental concepts and market terminology',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: TrendingUp,
      title: 'Master Technical & Fundamental Analysis',
      description: 'Deep dive into chart patterns and company analysis',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Target,
      title: 'Simulated Practice & Real-World Projects',
      description: 'Apply your knowledge with virtual trading exercises',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: DollarSign,
      title: 'Start Real Trading with Confidence',
      description: 'Begin your journey as a confident, informed trader',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = rect.height;
      
      // Calculate progress based on how much of the timeline is visible
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const visibleStart = Math.max(0, windowHeight - rect.top);
        const visibleEnd = Math.min(timelineHeight, windowHeight - rect.top);
        const progress = Math.min(1, Math.max(0, visibleStart / (timelineHeight * 0.8)));
        setScrollProgress(progress);
      }
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setVisibleSteps(prev => {
            const newState = [...prev];
            const stepIndex = parseInt(entry.target.getAttribute('data-step-index') || '0');
            newState[stepIndex] = true;
            return newState;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.3,
      rootMargin: '-50px'
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Observe step elements
    const stepElements = document.querySelectorAll('[data-step-index]');
    stepElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">Your Learning</span>
            <br />
            <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Follow our proven 5-step process to become a successful stock market trader
          </p>
        </div>

        {/* Desktop Timeline - Vertical */}
        <div className="hidden lg:block max-w-6xl mx-auto" ref={timelineRef}>
          <div className="relative">
            {/* Background Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-700 rounded-full"></div>
            
            {/* Animated Progress Line */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
            
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              const isEven = index % 2 === 0;
              const isVisible = visibleSteps[index];
              
              return (
                <div 
                  key={index} 
                  data-step-index={index}
                  className={`relative flex items-center mb-20 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${isEven ? 'justify-start' : 'justify-end'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Node with Pulse Animation */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-4 border-slate-800 z-20 transition-all duration-500 ${
                    scrollProgress > index / steps.length 
                      ? `bg-gradient-to-br ${step.color} shadow-lg animate-pulse` 
                      : 'bg-slate-700'
                  }`}>
                    <div className={`absolute inset-1 rounded-full transition-all duration-500 ${
                      scrollProgress > index / steps.length 
                        ? `bg-gradient-to-br ${step.color}` 
                        : 'bg-slate-600'
                    }`}></div>
                  </div>
                  
                  {/* Arrow Connector */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 z-10 ${isEven ? '-translate-x-16' : 'translate-x-16'}`}>
                    <ChevronRight className={`w-6 h-6 text-slate-500 transition-all duration-500 ${
                      isVisible ? 'text-blue-400 scale-125' : ''
                    } ${isEven ? 'rotate-180' : ''}`} />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`timeline-step p-8 rounded-3xl max-w-sm relative transition-all duration-500 hover:scale-105 group ${
                    isEven ? 'mr-20' : 'ml-20'
                  } ${isVisible ? 'shadow-2xl shadow-blue-500/10' : ''}`}
                  style={{
                    background: isVisible 
                      ? `linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.8) 100%)`
                      : `linear-gradient(135deg, rgba(30, 41, 59, 0.7) 0%, rgba(51, 65, 85, 0.5) 100%)`
                  }}>
                    
                    {/* Card Arrow */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-0 h-0 ${
                      isEven 
                        ? 'right-0 translate-x-full border-l-[20px] border-l-slate-800 border-y-[15px] border-y-transparent' 
                        : 'left-0 -translate-x-full border-r-[20px] border-r-slate-800 border-y-[15px] border-y-transparent'
                    }`}></div>
                    
                    <div className="flex items-start gap-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg group-hover:scale-110 transition-all duration-300 animate-float`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-blue-400 mb-2 tracking-wider">STEP {index + 1}</div>
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300 leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Progress Indicator */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        scrollProgress > index / steps.length 
                          ? `bg-gradient-to-br ${step.color} animate-pulse` 
                          : 'bg-slate-600'
                      }`}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline - Enhanced */}
        <div className="lg:hidden">
          <div className="relative">
            <div className="flex gap-8 overflow-x-auto pb-8 px-6 -mx-6 scrollbar-hide">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                
                return (
                  <div 
                    key={index}
                    data-step-index={index}
                    className="timeline-step p-6 rounded-3xl min-w-[300px] relative transition-all duration-500 hover:scale-105 group shadow-lg"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      background: `linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.8) 100%)`
                    }}
                  >
                    <div className="text-center">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-lg inline-block mb-4 group-hover:scale-110 transition-all duration-300 animate-float`}>
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                      <div className="text-sm font-bold text-blue-400 mb-2 tracking-wider">STEP {index + 1}</div>
                      <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {step.description}
                      </p>
                    </div>
                    
                    {/* Mobile Step Connector */}
                    {index < steps.length - 1 && (
                      <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-blue-400" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
