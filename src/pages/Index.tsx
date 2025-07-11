import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import TimelineSection from '@/components/TimelineSection';
import MentorsSection from '@/components/MentorsSection';
import WhoCanJoinSection from '@/components/WhoCanJoinSection';
import WhatYouLearnSection from '@/components/WhatYouLearnSection';
import CertificationSection from '@/components/CertificationSection';
import LimitedTimeOfferSection from '@/components/LimitedTimeOfferSection';
import WhyTradingSection from '@/components/WhyTradingSection';
import GallerySection from '@/components/GallerySection';
import PrestigiousAwardSection from '@/components/PrestigiousAwardSection';
import VideoTestimonialsSection from '@/components/VideoTestimonialsSection';
import FAQSection from '@/components/FAQSection';
import WhatsAppCTASection from '@/components/WhatsAppCTASection';
import FixedBottomCTA from '@/components/FixedBottomCTA';
import FOMONotifications from '@/components/FOMONotifications';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import StockMarketLoader from '@/components/StockMarketLoader';


const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);


  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Simulate additional loading time for demo purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        handleLoadingComplete();
      }
    }, 4000); // Minimum 4 seconds loading

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading) {
    return <StockMarketLoader onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 font-inter transition-opacity duration-500 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
      <FOMONotifications />
      <WhatsAppFloat />
      
      <div>
        <HeroSection />
      </div>
      
      <div>
        <FeaturesSection />
      </div>
      
      <div>
        <TimelineSection />
      </div>
      
      <div>
        <MentorsSection />
      </div>
      
      <div>
        <WhoCanJoinSection />
      </div>
      
      <div>
        <WhatYouLearnSection />
      </div>
      
      <div>
        <CertificationSection />
      </div>
      
      <div>
        <LimitedTimeOfferSection />
      </div>
      
      <div>
        <WhyTradingSection />
      </div>
      
      <div>
        <GallerySection />
      </div>
      
      <div>
        <PrestigiousAwardSection />
      </div>
      
      <div>
        <VideoTestimonialsSection />
      </div>
      
      <div>
        <FAQSection />
      </div>
      
      <div>
        <WhatsAppCTASection />
      </div>
      
      <FixedBottomCTA />
      
      {/* Add bottom padding to account for fixed CTA */}
      <div className="h-12 md:h-16"></div>
    </div>
  );
};

export default Index;