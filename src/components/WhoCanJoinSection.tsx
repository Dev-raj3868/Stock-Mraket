import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

const WhoCanJoinSection = () => {
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

  const whoCanJoin = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Students who want to understand stock market functioning early in their careers",
      items: [
        "Students who want to understand stock market functioning early in their careers",
        "CA, CFA, MBA Aspirants or Finance Students aiming to gain practical stock market insights"
      ]
    },
    {
      icon: Briefcase,
      title: "Professionals", 
      description: "Working professionals and entrepreneurs",
      items: [
        "Working Professionals planning to create an additional income stream through smart investing or trading",
        "Entrepreneurs & Business Owners looking to diversify their capital and manage their funds effectively"
      ]
    },
    {
      icon: TrendingUp,
      title: "Aspiring Traders & Investors",
      description: "Those looking to enter the markets with proper knowledge",
      items: [
        "Aspiring Traders & Investors who want structured learning before entering the markets",
        "Self-learners who've tried YouTube or social media but need structured mentorship"
      ]
    }
  ];

  const additionalItems = [
    "Home-makers & Retirees interested in building wealth through disciplined investing",
    "Anyone confused by market noise and seeking a clear, step-by-step approach to learn"
  ];

  return (
    <div ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Who Can Join This Program?</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            This program is designed for anyone who wants to build a solid foundation in the stock market — whether you're a complete beginner or someone looking to strengthen your basics.
          </p>
        </div>

        {/* Main 3-column cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {whoCanJoin.map((category, index) => (
            <Card 
              key={index}
              className={`p-8 bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/20 group transform hover:-translate-y-2 ${
                isVisible 
                  ? index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-0">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional items in a separate section */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Also Perfect For:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {additionalItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center mt-12 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <p className="text-xl text-blue-300 font-medium">
            Ready to start your stock market journey? Join thousands of successful students!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoCanJoinSection;