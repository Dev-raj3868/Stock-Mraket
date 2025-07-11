
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Play, 
  Clock, 
  BookOpen, 
  Calendar, 
  Globe,
  RefreshCw
} from 'lucide-react';

const ProgramHighlightsSection = () => {
  const [visibleBoxes, setVisibleBoxes] = useState<boolean[]>([]);
  const [counters, setCounters] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const highlights = [
    {
      icon: Play,
      title: "100+ Pre-recorded Sessions",
      description: "Comprehensive video content covering all aspects of trading",
      number: 100
    },
    {
      icon: Clock,
      title: "75+ Hours of Content", 
      description: "In-depth learning material for complete mastery",
      number: 75
    },
    {
      icon: BookOpen,
      title: "20+ Comprehensive Modules",
      description: "Structured curriculum from basics to advanced",
      number: 20
    },
    {
      icon: Calendar,
      title: "Course Validity: 1 Year",
      description: "Extended access period for thorough learning",
      number: 1
    },
    {
      icon: Globe,
      title: "Language: Hindi",
      description: "Easy-to-understand content in Hindi language",
      number: null
    },
    {
      icon: RefreshCw,
      title: "📚 Lifetime Access to Updates",
      description: "Get all future updates and new content at no extra cost",
      number: null
    }
  ];

  // Count-up animation function
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

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const boxes = Array(highlights.length).fill(false);
            const initialCounters = highlights.map(() => 0);
            
            // Animate boxes with stagger delay
            highlights.forEach((highlight, index) => {
              setTimeout(() => {
                setVisibleBoxes(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
                
                // Start counter animation if number exists
                if (highlight.number !== null) {
                  animateCounter(highlight.number, index, 1500);
                }
              }, index * 200); // 200ms stagger delay
            });
            
            setCounters(initialCounters);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Initialize states
  useEffect(() => {
    setVisibleBoxes(Array(highlights.length).fill(false));
    setCounters(Array(highlights.length).fill(0));
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 animate-fade-up animate-delay-400">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-6">
            Program Highlights
          </h2>
          <p className="text-slate-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            Everything you need to master stock market trading with our comprehensive program
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            const isVisible = visibleBoxes[index];
            const counterValue = counters[index];
            
            // Format title with animated counter for numbers
            const formatTitle = (title: string, number: number | null, counter: number) => {
              if (number === null) return title;
              
              if (title.includes("100+")) return `${counter}+ Pre-recorded Sessions`;
              if (title.includes("75+")) return `${counter}+ Hours of Content`;
              if (title.includes("20+")) return `${counter}+ Comprehensive Modules`;
              if (title.includes("1 Year")) return `Course Validity: ${counter} Year`;
              
              return title;
            };

            return (
              <Card 
                key={index}
                className={`feature-card transition-all duration-700 transform ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                } hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20`}
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-600/20 to-cyan-600/20 flex items-center justify-center group">
                    <IconComponent className="w-9 h-9 md:w-11 md:h-11 text-blue-400 transition-all duration-300 group-hover:scale-110 group-hover:animate-bounce" />
                  </div>
                  
                  <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                    {formatTitle(highlight.title, highlight.number, counterValue)}
                  </h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlightsSection;
