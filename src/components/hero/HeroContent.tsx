
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Play, Check } from 'lucide-react';

interface HeroContentProps {
  typedText: string;
  showCursor: boolean;
  onVideoModalOpen: () => void;
}

const HeroContent = ({ typedText, showCursor, onVideoModalOpen }: HeroContentProps) => {
  return (
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
          onClick={onVideoModalOpen}
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
  );
};

export default HeroContent;
