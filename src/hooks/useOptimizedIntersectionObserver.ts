
import { useEffect, useRef, useCallback } from 'react';

interface UseOptimizedIntersectionObserverProps {
  callback: (isIntersecting: boolean) => void;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useOptimizedIntersectionObserver = ({
  callback,
  threshold = 0.2,
  rootMargin = '50px',
  triggerOnce = true
}: UseOptimizedIntersectionObserverProps) => {
  const elementRef = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasTriggered = useRef(false);

  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (triggerOnce && hasTriggered.current) return;
        
        callback(true);
        hasTriggered.current = true;
        
        if (triggerOnce && observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    });
  }, [callback, triggerOnce]);

  useEffect(() => {
    if (!elementRef.current) return;

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin
    });

    observerRef.current.observe(elementRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [handleIntersection, threshold, rootMargin]);

  return elementRef;
};
