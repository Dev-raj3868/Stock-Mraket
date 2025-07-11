import { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How will I get access to the classes after enrolling?",
    answer: "After enrolling in any of our programs, you will receive an email on your registered email ID with a link to the SSEI Markets Learning Platform. Click on the link, install the app or software if required, and log in using your registered mobile number. Once logged in, you can start watching the classes immediately."
  },
  {
    question: "How are doubts resolved during the course?",
    answer: "If you have any doubts or questions while attending the class, you can directly ask them through the \"Ask a Question\" option available on the SSEI Markets Learning Platform. Our expert faculty team will review your query and provide a detailed response within 48 hours."
  },
  {
    question: "Is it okay if I have no finance or stock market background?",
    answer: "Absolutely! This program is specifically designed for those with no prior experience or knowledge. Everything is explained from the very basics."
  },
  {
    question: "In which language is the program taught?",
    answer: "The program is delivered in a mix of English and Hindi, with predominantly Hindi explanation for better understanding."
  },
  {
    question: "Can I access the course on mobile or laptop?",
    answer: "Yes, the course is compatible with all major devices — including mobile phones, laptops, tablets, Windows PCs, MacBooks, Android, and iOS."
  }
];

const FAQSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 animate-fade-right animate-delay-300"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl"></div>
        <div className="floating-orb-delayed absolute bottom-20 right-10 w-40 h-40 bg-gradient-secondary rounded-full blur-3xl"></div>
        <div className="floating-orb-slow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-accent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Frequently Asked
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Got questions? We've got answers. Find everything you need to know about our trading program.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={`group border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm transition-all duration-700 hover:bg-white/10 hover:border-white/20 ${
                  isVisible 
                    ? index % 2 === 0 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-100 translate-x-0'
                    : index % 2 === 0 
                      ? 'opacity-0 -translate-x-8' 
                      : 'opacity-0 translate-x-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 200}ms` 
                }}
              >
                <AccordionTrigger className="px-6 py-6 text-left hover:no-underline group-hover:text-primary transition-colors">
                  <span className="text-lg md:text-xl font-semibold text-white group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-gray-300 text-base md:text-lg leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Bottom decoration */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;