import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';

const CertificationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-slate-800/95 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23475569' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="gradient-text">Certificate of Completion</span>
          </h2>
          
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            All students will receive a professionally designed Certificate of Completion upon successful completion of the Stock Market Foundation Program.
          </p>

          {/* Certificate Image Container */}
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`} style={{ animationDelay: '300ms' }}>
            <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/e745f3bb-672a-41a2-bd7f-c0e183550503.png" 
                  alt="Stock Market Foundation Program Certificate" 
                  className="w-full h-auto object-contain rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </Card>
          </div>

          {/* Additional Information */}
          <div className={`mt-12 grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Official Recognition</h3>
              <p className="text-slate-300">Professionally designed certificate recognized in the industry</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Completion Criteria</h3>
              <p className="text-slate-300">Complete all modules and pass the final assessment</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Digital & Physical</h3>
              <p className="text-slate-300">Receive both digital copy and physical certificate by mail</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationSection;