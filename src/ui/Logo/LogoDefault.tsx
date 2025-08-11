import React from 'react';
import { cn } from '../../lib/utils';

interface LogoDefaultProps {
  className?: string;
}

const LogoDefault: React.FC<LogoDefaultProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <img 
        src="https://i.imgur.com/HM5aJDB.png" 
        alt="Logo"
        className="h-8 w-auto"
      />
    </div>
  );
};

export default LogoDefault;