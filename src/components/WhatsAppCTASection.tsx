import { MessageCircle } from 'lucide-react';
import { Button } from './ui/button';

const WhatsAppCTASection = () => {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = '+919876543210';
    const message = 'Hi! I have questions about the Stock Market Foundation Program. Can you help me?';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 animate-gradient-shift"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left side - Text content (75% width) */}
          <div className="lg:col-span-2 text-left animate-fade-up">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Still confused?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6">
              Connect with us on WhatsApp and get all your doubts cleared!
            </p>
            
            {/* Pricing without box */}
            <div className="animate-fade-up animate-delay-200">
              <p className="text-lg text-slate-300 mb-2">Enroll Now @</p>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-2xl md:text-3xl text-slate-400 relative inline-block strike-animation">
                  ₹9,999
                </span>
                <span className="text-4xl md:text-5xl font-bold gradient-text animate-glow-text">
                  ₹999/-
                </span>
                <span className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg animate-pulse ml-2">
                  Limited Time Offer
                </span>
              </div>
            </div>
          </div>

          {/* Right side - WhatsApp CTA Button */}
          <div className="lg:col-span-1 flex justify-center lg:justify-end animate-fade-up animate-delay-300">
            <Button
              onClick={handleWhatsAppClick}
              className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="mr-3 h-6 w-6 group-hover:animate-pulse" />
              Chat with Us on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCTASection;