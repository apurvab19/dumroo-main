import React from 'react';
import { cn } from '../../lib/utils';
import type { MarqueeProps } from './types';

const Marquee: React.FC<MarqueeProps> = ({ 
  children, 
  direction = 'left',
  speed = 'normal',
  className 
}) => {
  const duration = {
    slow: 60,
    normal: 40,
    fast: 20
  }[speed];

  return (
    <div className="relative overflow-hidden">
      <div className="flex whitespace-nowrap">
        <div 
          className={cn(
            "flex min-w-full gap-6 animate-marquee",
            direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee',
            className
          )}
          style={{ animationDuration: `${duration}s` }}
        >
          {children}
        </div>
        <div 
          className={cn(
            "flex min-w-full gap-6 animate-marquee",
            direction === 'right' ? 'animate-marquee-reverse' : 'animate-marquee',
            className
          )}
          style={{ animationDuration: `${duration}s` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;