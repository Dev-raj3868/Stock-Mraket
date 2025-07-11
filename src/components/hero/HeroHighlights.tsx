
import { useEffect, useState, useRef } from 'react';

interface HeroHighlightsProps {
  studentsCount: number;
}

const HeroHighlights = ({ studentsCount }: HeroHighlightsProps) => {
  const [animatedStudentsCount, setAnimatedStudentsCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationStarted = useRef(false);

  const highlights = [
    { icon: '🎥', text: '100+ Pre-recorded Sessions', animation: 'fade-left' },
    { icon: '⏱', text: '75+ Hours of Content', animation: 'fade-right' },
    { icon: '📚', text: '20+ Comprehensive Modules', animation: 'fade-left' },
    { icon: '📅', text: 'Course Validity: 1 Year', animation: 'fade-right' },
    { icon: '🌐', text: 'Language: Hindi', animation: 'fade-left' },
    { icon: '👨‍🎓', text: `${animatedStudentsCount}+ students are enrolled`, animation: 'fade-right' },
  ];

  // Optimized Intersection Observer - only trigger once
  useEffect(() => {
    if (animationStarted.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted.current) {
          setIsVisible(true);
          animationStarted.current = true;
          observer.disconnect(); // Disconnect after first trigger
        }
      },
      { threshold: 0.3, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter animation for students count - only run once
  useEffect(() => {
    if (isVisible && studentsCount > 0 && animatedStudentsCount === 0) {
      let start = 0;
      const duration = 2000;
      const increment = studentsCount / (duration / 16);

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
  }, [isVisible, studentsCount, animatedStudentsCount]);

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
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
  );
};

export default HeroHighlights;
