import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { ModuleCard } from './what-you-learn/ModuleCard';
import { ModulesModal } from './what-you-learn/ModulesModal';
import { AnimatedBackground } from './what-you-learn/AnimatedBackground';
import { useVisibleModules } from './what-you-learn/useVisibleModules';
import { firstSixModules, allModules } from './what-you-learn/moduleData';

const WhatYouLearnSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedModule, setExpandedModule] = useState<string | null>(null);
  const visibleModules = useVisibleModules();

  const toggleModuleExpanded = (moduleId: string) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <section className="py-16 px-4 bg-background relative overflow-hidden">
      <AnimatedBackground />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
            What You'll Learn
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive curriculum designed to transform you from beginner to confident trader
          </p>
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {firstSixModules.map((module, index) => (
              <ModuleCard
                key={module.id}
                module={module}
                index={index}
                isVisible={visibleModules.has(index)}
                isExpanded={expandedModule === module.id}
                onToggle={toggleModuleExpanded}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button 
            variant="glow"
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="glow-button text-primary-foreground px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 group"
          >
            Show All {allModules.length} Modules
            <ChevronRight className="ml-2 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        <ModulesModal 
          isOpen={isModalOpen} 
          onClose={setIsModalOpen} 
        />
      </div>
    </section>
  );
};

export default WhatYouLearnSection;