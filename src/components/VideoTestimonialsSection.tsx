import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Play, X } from 'lucide-react';

const VideoTestimonialsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoTestimonials = [
    { id: '58nEeeMTbDs', title: 'Student Success Story - Trading Transformation' },
    { id: 'cvELyKsJWTg', title: 'Financial Freedom Journey - Real Results' },
    { id: 'KW6DYzDhBnc', title: 'From Beginner to Expert - Success Story' },
    { id: 'lBWpX-eZ4x8', title: 'Life Changing Trading Experience' },
    { id: 'WNpzQ52o_64', title: 'Investment Mastery Achievement' },
    { id: 'wbeqtyu407w', title: 'Career Change Through Trading' },
    { id: 'ymzIPkL9db4', title: 'Professional Trading Success' },
    { id: 'unU3iIXwrrA', title: 'Market Analysis Expertise Gained' },
    { id: 'Gh5Nn-PWucY', title: 'Financial Independence Story' },
    { id: 'ub7-6HSVk-I', title: 'Trading Skills Development' },
    { id: '4EbvPU88plE', title: 'Profitable Trading Journey' },
    { id: 'MBVVSQIK2j0', title: 'Risk Management Success' },
    { id: 'BSsQvGBRrTo', title: 'Options Trading Mastery' },
    { id: 'XQDuxsVveKk', title: 'Technical Analysis Expert' },
    { id: 'ioSMbtqpsbg', title: 'Fundamental Analysis Success' },
    { id: 'x7fmXt8MAmc', title: 'Portfolio Management Skills' },
    { id: 'VzWzudGvNkk', title: 'Derivative Trading Expertise' },
    { id: 'G5XR58KS3dE', title: 'Market Timing Mastery' },
    { id: 'SWe4mcgYofc', title: 'Swing Trading Success' },
    { id: 'WXv7br_vaO8', title: 'Day Trading Proficiency' },
    { id: 'Tkh1ls9_86I', title: 'Investment Strategy Excellence' },
    { id: 'tOoW-TCG67w', title: 'Market Psychology Understanding' },
    { id: 'lzki3Z9vqw8', title: 'Advanced Trading Techniques' },
    { id: 'bQaEeFGNzb8', title: 'Crypto Trading Success' },
    { id: 'Wsr9Rs_PcIM', title: 'Commodity Trading Expertise' },
    { id: 'wh8e_nuh6XU', title: 'Currency Trading Skills' },
    { id: 'nZgVZp0yfQU', title: 'Global Market Analysis' },
    { id: 'X98yhzXEc_k', title: 'Wealth Building Strategy' },
    { id: 'Pn7Oz20gz7Q', title: 'Long-term Investment Success' },
  ];

  const displayedVideos = videoTestimonials.slice(0, 4);
  const remainingVideos = videoTestimonials.slice(4);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Real Stories, Real Success
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Listen to our students share their incredible transformation journeys from beginners to confident traders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayedVideos.map((video, index) => (
            <div 
              key={index} 
              className="feature-card rounded-lg overflow-hidden p-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
            </div>
          ))}
        </div>

        {remainingVideos.length > 0 && (
          <div className="text-center mt-12">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="glow"
                  size="lg"
                  className="glow-button text-white border-blue-500/50 hover:border-blue-400/70 px-8 py-3"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Show More Videos ({remainingVideos.length} more)
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-7xl max-h-[90vh] overflow-hidden p-0">
                <div className="relative">
                  <div className="p-6 border-b border-slate-700 bg-slate-800">
                    <h3 className="text-2xl font-bold text-white mb-2">More Success Stories</h3>
                    <p className="text-slate-300">Watch more testimonials from our successful students</p>
                  </div>
                  
                  <div className="p-6 overflow-y-auto max-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {remainingVideos.map((video, index) => (
                        <div 
                          key={index + 4} 
                          className="feature-card rounded-lg overflow-hidden p-3 hover:scale-105 transition-transform duration-300"
                        >
                          <div className="aspect-video rounded-lg overflow-hidden mb-3">
                            <iframe
                              src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                              title={video.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              className="w-full h-full"
                            />
                          </div>
                          <h4 className="text-sm font-semibold text-white">{video.title}</h4>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;