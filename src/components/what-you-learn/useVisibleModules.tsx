import { useState, useEffect } from 'react';

export const useVisibleModules = () => {
  const [visibleModules, setVisibleModules] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-module-index') || '0');
            setVisibleModules(prev => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.2 }
    );

    const moduleElements = document.querySelectorAll('[data-module-index]');
    moduleElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return visibleModules;
};