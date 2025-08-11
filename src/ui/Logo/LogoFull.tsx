import React from 'react';
import { cn } from '../../lib/utils';
import LogoDefault from './LogoDefault';

interface LogoFullProps {
  className?: string;
}

const LogoFull: React.FC<LogoFullProps> = ({ className }) => {
  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <LogoDefault />
      <span className="text-xs font-medium">
        AI Ecosystem for Education
      </span>
    </div>
  );
};

export default LogoFull;