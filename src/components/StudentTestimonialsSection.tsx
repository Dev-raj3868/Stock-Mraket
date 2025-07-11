
import { Card, CardContent } from '@/components/ui/card';
import { Star, Play } from 'lucide-react';

const StudentTestimonialsSection = () => {
  // Sample testimonial videos from the playlist
  const testimonialVideos = [
    {
      id: "sample1", // Replace with actual video IDs from the playlist
      studentName: "Rajesh Kumar",
      location: "Mumbai",
      rating: 5,
      quote: "This course completely changed my trading approach",
      thumbnail: "https://img.youtube.com/vi/sample1/maxresdefault.jpg"
    },
    {
      id: "sample2",
      studentName: "Priya Sharma", 
      location: "Delhi",
      rating: 5,
      quote: "Amazing mentorship and practical learning",
      thumbnail: "https://img.youtube.com/vi/sample2/maxresdefault.jpg"
    },
    {
      id: "sample3",
      studentName: "Amit Patel",
      location: "Bangalore",
      rating: 5,
      quote: "Best investment I've made for my trading career",
      thumbnail: "https://img.youtube.com/vi/sample3/maxresdefault.jpg"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Hear From Our Students
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Real success stories from our trading community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {testimonialVideos.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="feature-card group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video rounded-t-lg overflow-hidden bg-slate-800">
                  {/* Placeholder for video thumbnail */}
                  <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="text-center">
                      <Play className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                      <p className="text-slate-400 text-sm">Student Testimonial</p>
                    </div>
                  </div>
                  
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-slate-300 italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-slate-700 pt-4">
                    <h4 className="text-white font-semibold">
                      {testimonial.studentName}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://www.youtube.com/playlist?list=PLWTjbls1JHiFSAiVtJtpnP7iZ12hdFJ2e"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
          >
            <Play className="w-5 h-5" />
            Watch More Student Success Stories
          </a>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonialsSection;
