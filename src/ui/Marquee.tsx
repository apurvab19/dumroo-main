import React from 'react';
import { cn } from '../lib/utils';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: 'slow' | 'normal' | 'fast';
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  direction = 'left',
  speed = 'normal',
  className 
}) => {
  const speedClass = {
    slow: '[animation-duration:60s]',
    normal: '[animation-duration:40s]',
    fast: '[animation-duration:20s]'
  }[speed];

  return (
    <div className="overflow-hidden">
      <div className={cn(
        "flex min-w-full gap-8",
        "animate-marquee",
        speedClass,
        direction === 'right' && '[animation-direction:reverse]',
        className
      )}>
        {children}
        {children} {/* Duplicate content for seamless loop */}
      </div>
    </div>
  );
}

export default Marquee;