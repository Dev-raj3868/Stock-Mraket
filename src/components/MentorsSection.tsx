
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, Users, TrendingUp, X } from 'lucide-react';

const MentorsSection = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
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

  const mentors = [
    {
      id: 'sanjay-saraf',
      name: 'Sanjay Saraf',
      title: 'A Visionary Leader in Finance, Trading, and Investment',
      summary: '25+ years of experience in trading, finance & investment. SEBI-registered Research Analyst with global credentials.',
      image: '/lovable-uploads/f0c2df31-4c39-4d7f-a753-8f6fc65f8e98.png',
      fullBio: {
        intro: 'With over 25 years of distinguished experience in trading, finance, and investment, Sanjay Saraf stands as a beacon of expertise and integrity in the financial world.',
        qualifications: [
          'CFA® (Chartered Financial Analyst)',
          'FRM® (Financial Risk Manager)',
          'CIIA (Certified International Investment Analyst)',
          'SEBI Registration: INH000013882',
          'Research Analyst credentials'
        ],
        achievements: [
          'Multiple gold and silver medals from MS Finance',
          'Recognized by Prime Minister Dr. Manmohan Singh',
          'SEBI-registered Research Analyst',
          'Global financial credentials holder'
        ],
        mission: 'Empower individuals through transparent financial education and practical market insights.',
        experience: 'Having navigated through multiple market cycles, Sanjay brings unparalleled expertise in risk management, portfolio optimization, and strategic investment planning. His approach combines theoretical knowledge with practical market experience to deliver comprehensive financial education.'
      }
    },
    {
      id: 'guddu-kumar',
      name: 'Guddu Kumar (G.K. Shaw)',
      title: 'Trading with Expertise, Mentoring with Heart',
      summary: '10+ years of experience in derivatives trading. Co-founder of SSEI Markets, trained 10,000+ students.',
      image: '/lovable-uploads/7fe67e40-57c7-471c-b2e3-cc505782ba84.png',
      fullBio: {
        intro: 'A derivatives expert with over 10 years of real-market trading experience, Guddu Kumar has transformed the way trading education is delivered in India.',
        qualifications: [
          'Derivatives Trading Specialist',
          'Co-founder of SSEI Markets',
          'Real-time Trading Desk Experience',
          'Advanced Technical Analysis Certification'
        ],
        achievements: [
          'Trained over 10,000+ students',
          'Co-founder of SSEI Markets',
          'Expert in live strategy building',
          'Real-time market application specialist'
        ],
        mission: 'Build confident, independent traders who can navigate the markets with skill and discipline.',
        experience: 'Known for his ability to simplify complex trading concepts into actionable insights, Guddu focuses on practical application and live strategy development. His hands-on approach ensures students gain real-world trading experience alongside theoretical knowledge.'
      }
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Meet Your Mentors
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Learn from industry experts with decades of experience in trading and financial markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {mentors.map((mentor, index) => (
            <Card 
              key={mentor.id} 
              className={`feature-card group hover:scale-105 transition-all duration-700 transform ${
                isVisible 
                  ? index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500/30 group-hover:border-blue-400/50 transition-colors duration-300">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-white mb-2">
                  {mentor.name}
                </CardTitle>
                <CardDescription className="text-cyan-400 font-medium text-sm">
                  {mentor.title}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {mentor.summary}
                </p>
                
                <Dialog open={openModal === mentor.id} onOpenChange={(open) => setOpenModal(open ? mentor.id : null)}>
                  <DialogTrigger asChild>
                    <Button variant="glow" className="w-full">
                      Read More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700">
                    <DialogHeader className="relative">
                      <button
                        onClick={() => setOpenModal(null)}
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center justify-center transition-colors duration-200"
                      >
                        <X className="w-4 h-4 text-slate-300" />
                      </button>
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500/50">
                        <img 
                          src={mentor.image} 
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <DialogTitle className="text-2xl font-bold gradient-text text-center">
                        {mentor.name}
                      </DialogTitle>
                      <p className="text-cyan-400 text-center font-medium">
                        {mentor.title}
                      </p>
                    </DialogHeader>
                    
                    <div className="space-y-6 mt-6">
                      <p className="text-slate-300 leading-relaxed">
                        {mentor.fullBio.intro}
                      </p>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <GraduationCap className="w-5 h-5 text-blue-400" />
                          Qualifications & Certifications
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {mentor.fullBio.qualifications.map((qual, index) => (
                            <Badge key={index} variant="secondary" className="bg-blue-900/30 text-blue-300 border border-blue-700/50">
                              {qual}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-yellow-400" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {mentor.fullBio.achievements.map((achievement, index) => (
                            <li key={index} className="text-slate-300 flex items-start gap-2">
                              <TrendingUp className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5 text-cyan-400" />
                          Experience & Expertise
                        </h4>
                        <p className="text-slate-300 leading-relaxed">
                          {mentor.fullBio.experience}
                        </p>
                      </div>
                      
                      <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-4 rounded-lg border border-blue-800/30">
                        <h4 className="text-lg font-semibold text-white mb-2">Mission</h4>
                        <p className="text-slate-300 italic">
                          "{mentor.fullBio.mission}"
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
