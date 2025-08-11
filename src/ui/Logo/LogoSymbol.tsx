import React from 'react';
import { cn } from '../../lib/utils';

interface LogoSymbolProps {
  className?: string;
}

const LogoSymbol: React.FC<LogoSymbolProps> = ({ className }) => {
  return (
    <div className={cn("w-8 h-8", className)}>
      <img 
        src="https://imgur.com/5n0H1bC.png" 
        alt="Logo"
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default LogoSymbol;