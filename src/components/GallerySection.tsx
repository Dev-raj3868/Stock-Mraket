import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ZoomIn, X } from 'lucide-react';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: '/lovable-uploads/982178f5-6b84-415e-9574-cbe52a8f62f7.png',
      alt: 'Interactive Trading Workshop - Group Learning Session',
      title: 'Interactive Learning Environment'
    },
    {
      src: '/lovable-uploads/ff071d39-efe6-4803-a8c2-80739195ce0d.png',
      alt: 'Payoff Graph Analysis - Options Trading Strategy Explanation',
      title: 'Advanced Chart Analysis'
    },
    {
      src: '/lovable-uploads/2f4e4413-a4e0-4e40-a80f-68a78c1a8226.png',
      alt: 'Live Trading Platform Demo - Strategy Implementation',
      title: 'Real-Time Trading Platform'
    },
    {
      src: '/lovable-uploads/eb5a8f62-8857-4f62-b32f-4c5a7c76ce94.png',
      alt: 'Options Strategy Workshop - Risk Management Training',
      title: 'Options Strategy Workshop'
    },
    {
      src: '/lovable-uploads/6107b165-571b-40d9-9533-c16f1291b085.png',
      alt: 'Technical Analysis Session - Payoff Graph Presentation',
      title: 'Technical Analysis Training'
    },
    {
      src: '/lovable-uploads/ce7dac36-0ee3-4a40-9d2c-5266b9f750dc.png',
      alt: 'Strategy Implementation Workshop - Live Trading Session',
      title: 'Strategy Implementation'
    },
    {
      src: '/lovable-uploads/22d1c7d3-0178-4f17-bf8e-39a7016f46b4.png',
      alt: 'Professional Trading Mentorship - Expert Guidance Session',
      title: 'Mentorship Sessions'
    },
    {
      src: '/lovable-uploads/75691159-0620-4e26-8e97-9b1baceb8742.png',
      alt: 'Collaborative Learning - Team Discussion and Analysis',
      title: 'Collaborative Learning'
    },
    {
      src: '/lovable-uploads/d5d788ba-ff5e-4c82-b5f8-ac7b1294c8fb.png',
      alt: 'Professional Conference Room - Advanced Trading Education',
      title: 'Professional Training Environment'
    },
    {
      src: '/lovable-uploads/921448f3-4c5a-40e8-9d9e-4bd04e812003.png',
      alt: 'Expert Guidance Session - Personalized Trading Education',
      title: 'Expert Guidance'
    }
  ];

  // Duplicate images for seamless scrolling
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-background to-secondary/10 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4 md:mb-6">
            Training Gallery
          </h2>
          <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Experience our comprehensive trading education through real classroom moments and live trading sessions
          </p>
        </div>

        {/* Marquee Gallery */}
        <div className="relative">
          {/* First Row - Left to Right */}
          <div className="marquee-container mb-4 md:mb-8">
            <div className="marquee-content">
              {duplicatedImages.map((image, index) => (
                <Dialog key={`row1-${index}`}>
                  <DialogTrigger asChild>
                    <div 
                      className="marquee-item group cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-card to-card/80 
                                      transform transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                                      hover:shadow-primary/20">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover transition-transform duration-700 
                                     group-hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent 
                                        to-transparent opacity-0 group-hover:opacity-100 transition-opacity 
                                        duration-300 flex items-end justify-between p-3 md:p-6">
                          <div>
                            <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1">
                              {image.title}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">Click to view full size</p>
                          </div>
                          <ZoomIn className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                        </div>

                        {/* Animated border effect */}
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 
                                        to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                        bg-[length:200%_200%] animate-[gradient-shift_3s_ease-in-out_infinite]" />
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-7xl w-[95vw] h-[90vh] md:h-[95vh] p-2 border-0 bg-background/95 backdrop-blur-sm">
                    <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      />
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 text-center bg-background/80 
                                      backdrop-blur-sm rounded-lg p-2 md:p-4">
                        <h3 className="text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                          {image.title}
                        </h3>
                        <p className="text-xs md:text-base text-muted-foreground">{image.alt}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="marquee-container-reverse">
            <div className="marquee-content-reverse">
              {duplicatedImages.reverse().map((image, index) => (
                <Dialog key={`row2-${index}`}>
                  <DialogTrigger asChild>
                    <div 
                      className="marquee-item group cursor-pointer"
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <div className="relative overflow-hidden rounded-xl md:rounded-2xl bg-gradient-to-br from-card to-card/80 
                                      transform transition-all duration-500 hover:scale-105 hover:shadow-2xl 
                                      hover:shadow-primary/20">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-32 sm:h-40 md:h-48 lg:h-64 object-cover transition-transform duration-700 
                                     group-hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent 
                                        to-transparent opacity-0 group-hover:opacity-100 transition-opacity 
                                        duration-300 flex items-end justify-between p-3 md:p-6">
                          <div>
                            <h3 className="text-sm md:text-lg font-semibold text-foreground mb-1">
                              {image.title}
                            </h3>
                            <p className="text-xs md:text-sm text-muted-foreground hidden sm:block">Click to view full size</p>
                          </div>
                          <ZoomIn className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                        </div>

                        {/* Animated border effect */}
                        <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-primary/20 via-accent/20 
                                        to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                        bg-[length:200%_200%] animate-[gradient-shift_3s_ease-in-out_infinite]" />
                      </div>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-7xl w-[95vw] h-[90vh] md:h-[95vh] p-2 border-0 bg-background/95 backdrop-blur-sm">
                    <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                      />
                      <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 right-2 md:right-4 text-center bg-background/80 
                                      backdrop-blur-sm rounded-lg p-2 md:p-4">
                        <h3 className="text-sm md:text-xl font-semibold text-foreground mb-1 md:mb-2">
                          {image.title}
                        </h3>
                        <p className="text-xs md:text-base text-muted-foreground">{image.alt}</p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 md:mt-16 px-4">
          <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6">
            Join our interactive sessions and learn from industry experts
          </p>
          <Button 
            variant="glow"
            size="lg"
            className="px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 text-sm md:text-base"
          >
            View All Training Sessions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;