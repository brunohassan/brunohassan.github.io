import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  startDelay?: number;
  className?: string;
  cursor?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  text, 
  speed = 100, 
  startDelay = 0, 
  className = "",
  cursor = "_"
}) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const startTyping = () => {
      let currentIndex = 0;
      setDisplayText('');

      intervalId = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, speed);
    };

    timeoutId = setTimeout(startTyping, startDelay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return (
    <span className={className}>
      {displayText}
      <span className="text-teal-500 animate-pulse ml-1">{cursor}</span>
    </span>
  );
};