import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { allModules, tagColors } from './moduleData';

interface ModulesModalProps {
  isOpen: boolean;
  onClose: (open: boolean) => void;
}

export const ModulesModal = ({ isOpen, onClose }: ModulesModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-background to-card border border-border">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold gradient-text">
            Complete Course Modules ({allModules.length})
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base md:text-lg">
            Comprehensive curriculum covering all aspects of stock market trading and investment
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {allModules.map((module, index) => {
              const IconComponent = module.icon;
              return (
                <AccordionItem 
                  key={module.id} 
                  value={module.id}
                  className="bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 rounded-lg"
                >
                  <AccordionTrigger className="px-4 py-3 hover:no-underline group text-sm">
                    <div className="flex items-center gap-3 w-full">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-mono text-muted-foreground">Module {index + 1}</span>
                          <Badge 
                            variant="outline" 
                            className={`${tagColors[module.tag as keyof typeof tagColors]} text-xs`}
                          >
                            #{module.tag}
                          </Badge>
                        </div>
                        <h4 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors">
                          {module.title}
                        </h4>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-3">
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-muted-foreground text-sm mb-3">{module.description}</p>
                      {module.topics && (
                        <ul className="space-y-1">
                          {module.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start gap-2">
                              <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                              <span className="text-muted-foreground text-xs leading-relaxed">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </DialogContent>
    </Dialog>
  );
};