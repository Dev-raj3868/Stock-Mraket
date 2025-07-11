
import { useState } from 'react';
import HeroContent from './hero/HeroContent';
import HeroHighlights from './hero/HeroHighlights';
import VideoModal from './hero/VideoModal';
import { useTypingAnimation } from './hero/useTypingAnimation';
import { useStudentCount } from './hero/useStudentCount';

const HeroSection = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const studentsCount = useStudentCount();
  const { typedText, showCursor } = useTypingAnimation('A Complete Course on Stock Market');

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden animate-fade-up">
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
        <HeroContent 
          typedText={typedText}
          showCursor={showCursor}
          onVideoModalOpen={() => setVideoModalOpen(true)}
        />
        
        <HeroHighlights studentsCount={studentsCount} />
      </div>

      <VideoModal 
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
