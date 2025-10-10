'use client';

import React, { useState, useEffect, useRef, forwardRef } from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TypingTextProps extends TypographyProps {
  text: string;
  delay?: number;
  speed?: number;
  trigger?: 'load' | 'scroll';
  onComplete?: () => void;
}

const TypingText = forwardRef<HTMLSpanElement, TypingTextProps>(({ 
  text, 
  delay = 0, 
  speed = 100,
  trigger = 'scroll',
  onComplete,
  ...typographyProps 
}, forwardedRef) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(trigger === 'load');
  const innerRef = useRef<HTMLSpanElement>(null);
  const ref = (forwardedRef as React.RefObject<HTMLSpanElement>) || innerRef;

  useEffect(() => {
    if (trigger === 'scroll' && ref.current) {
      const observer = ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 80%',
        once: true,
        onEnter: () => setIsVisible(true),
      });

      return () => observer.kill();
    }
  }, [trigger, ref]);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed, isVisible, onComplete]);

  return (
    <Typography ref={ref} {...typographyProps}>
      {displayText}
      {displayText.length < text.length && (
        <span style={{ opacity: 0.5 }}>|</span>
      )}
    </Typography>
  );
});

TypingText.displayName = 'TypingText';

export default TypingText;

