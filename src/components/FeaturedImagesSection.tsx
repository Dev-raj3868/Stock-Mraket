import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ZoomIn } from 'lucide-react';
const FeaturedImagesSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const images = [{
    src: '/lovable-uploads/02457344-025a-44ee-9b64-cab233bd8e84.png',
    alt: 'Live Trading Session - Market Analysis and Strategy Discussion',
    title: 'Interactive Learning Sessions'
  }, {
    src: '/lovable-uploads/fc6eaa00-f34d-479a-9c4b-6c3773db50b4.png',
    alt: 'Payoff Graph Analysis - Options Trading Strategy',
    title: 'Advanced Chart Analysis'
  }, {
    src: '/lovable-uploads/48769cd1-c4b5-4975-a317-d157e3f60813.png',
    alt: 'Strategy Positions Dashboard - Real Trading Platform',
    title: 'Live Trading Platform'
  }, {
    src: '/lovable-uploads/5748e7b8-c433-46f9-afca-d40c9881d39d.png',
    alt: 'Options Trading Interface - Strategy Implementation',
    title: 'Options Strategy Implementation'
  }, {
    src: '/lovable-uploads/f9ed95c2-7649-4345-9924-61e1337bc09d.png',
    alt: 'Payoff Graph Presentation - Risk Management',
    title: 'Risk Management Training'
  }, {
    src: '/lovable-uploads/5c0d1a97-0076-4536-b13c-f02f97f16a4f.png',
    alt: 'Strategy Workshop - Technical Analysis',
    title: 'Technical Analysis Workshop'
  }, {
    src: '/lovable-uploads/02ca79f4-9ecd-47b6-8f17-6211d5bdada3.png',
    alt: 'Professional Trading Session - Group Learning',
    title: 'Group Learning Sessions'
  }, {
    src: '/lovable-uploads/3ec8d9bd-8406-47a4-8ccb-3c34676685a4.png',
    alt: 'Trading Mentorship - One-on-One Guidance',
    title: 'Personal Mentorship'
  }];
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Live Learning Environment
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Experience our interactive trading sessions and real-time market analysis
          </p>
        </div>
        
        <Carousel className="max-w-6xl mx-auto">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="featured-image-card group cursor-pointer p-4">
                      <div className="relative overflow-hidden rounded-lg bg-slate-800 transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-48 object-cover transition-all duration-300 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
                          <div className="flex items-center gap-2 text-sm">
                            <ZoomIn className="w-4 h-4" />
                            <span>Click to expand</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
export default FeaturedImagesSection;