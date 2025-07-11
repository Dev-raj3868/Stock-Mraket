
import { useState, useEffect } from 'react';

export const useTypingAnimation = (text: string, speed: number = 80) => {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setShowCursor(false);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { typedText, showCursor };
};
