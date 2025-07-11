import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';
import { tagColors } from './moduleData';

interface Module {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  description: string;
  topics: string[];
}

interface ModuleCardProps {
  module: Module;
  index: number;
  isVisible: boolean;
  isExpanded: boolean;
  onToggle: (moduleId: string) => void;
}

export const ModuleCard = ({ module, index, isVisible, isExpanded, onToggle }: ModuleCardProps) => {
  const IconComponent = module.icon;
  const animationClass = index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right';
  
  return (
    <div
      data-module-index={index}
      className={`bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 group cursor-pointer hover:border-primary/50 hover:scale-[1.02] ${
        isVisible ? animationClass : 'opacity-0'
      }`}
      onClick={() => onToggle(module.id)}
    >
      <div className="p-4 md:p-6">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
              <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-300" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                Module {index + 1}: {module.title}
              </h3>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </div>
          <div className="flex items-center gap-3 ml-16">
            <Badge 
              variant="outline" 
              className={`${tagColors[module.tag as keyof typeof tagColors]} text-sm`}
            >
              #{module.tag}
            </Badge>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
              Module {index + 1}: {module.title}
            </h3>
            <ChevronDown 
              className={`w-4 h-4 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-2 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
              <IconComponent className="w-5 h-5 text-primary" />
            </div>
            <Badge 
              variant="outline" 
              className={`${tagColors[module.tag as keyof typeof tagColors]} text-xs`}
            >
              #{module.tag}
            </Badge>
          </div>
        </div>

        {/* Expandable Content */}
        <div className={`transition-all duration-500 overflow-hidden ${
          isExpanded ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="border-t border-border/50 pt-4">
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
              {module.description}
            </p>
            <div>
              <h4 className="text-primary font-semibold mb-3 text-sm">Key Topics:</h4>
              <ul className="space-y-2">
                {module.topics.slice(0, 4).map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground text-xs leading-relaxed">{topic}</span>
                  </li>
                ))}
                {module.topics.length > 4 && (
                  <li className="text-primary/70 text-xs font-medium">
                    +{module.topics.length - 4} more topics...
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};