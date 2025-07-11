
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

const DemoSessionsSection = () => {
  const demoVideos = [
    {
      id: "QlYE6lFdcXs",
      title: "Stock Market Basics",
      description: "Learn the fundamentals of stock market trading"
    },
    {
      id: "0z5XP4mVZrg",
      title: "Technical Analysis Demo",
      description: "Live technical analysis session with real examples"
    },
    {
      id: "yF_XihERwuM",
      title: "Risk Management Strategies",
      description: "Essential risk management techniques for traders"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Watch Demo Sessions
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Get a preview of our comprehensive course content
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {demoVideos.map((video, index) => (
            <Card 
              key={video.id}
              className="feature-card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <div className="flex items-center gap-2 text-white">
                        <Play className="w-4 h-4" />
                        <span className="text-sm font-medium">Watch Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-slate-400 text-sm">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="glow"
            size="lg"
            className="glow-button text-white px-8 py-4 font-semibold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Enroll Now – Limited Time Price
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DemoSessionsSection;
