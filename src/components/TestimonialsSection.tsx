
import { Star } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'This course completely transformed my understanding of the stock market. The Hindi explanations made complex concepts easy to grasp. Highly recommended!',
    },
    {
      name: 'Priya Sharma',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'Excellent course structure and amazing community support. I went from zero knowledge to making my first profitable trades within 3 months.',
    },
    {
      name: 'Amit Patel',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'The practical approach and real-world examples helped me build confidence. The lifetime community access is invaluable for ongoing learning.',
    },
    {
      name: 'Sneha Gupta',
      role: 'CA Student',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b8cc?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: 'As someone studying finance, this course provided practical insights that textbooks never could. The doubt-solving sessions were incredibly helpful.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-white">What Our</span>
            <br />
            <span className="gradient-text">Students Say</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join thousands of successful traders who started their journey with us
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-slate-800/60 p-6 rounded-2xl border border-slate-700/50 backdrop-blur-sm animate-slide-up">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
              />
              <div>
                <h4 className="text-white font-semibold">{testimonials[currentIndex].name}</h4>
                <p className="text-slate-400 text-sm">{testimonials[currentIndex].role}</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">{testimonials[currentIndex].text}</p>
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-500' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-slate-800/60 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm animate-slide-up hover:bg-slate-700/60 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-slate-400">{testimonial.role}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
