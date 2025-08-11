import React from 'react';
import { cn } from '../../lib/utils';
import { LogoProps } from './types';
import LogoSymbol from './LogoSymbol';
import LogoDefault from './LogoDefault';
import LogoFull from './LogoFull';

const Logo: React.FC<LogoProps> = ({ variant = 'default', className }) => {
  const renderLogo = () => {
    switch (variant) {
      case 'symbol':
        return <LogoSymbol />;
      case 'full':
        return <LogoFull />;
      default:
        return <LogoDefault />;
    }
  };

  return (
    <div className={cn("text-brand-600", className)}>
      {renderLogo()}
    </div>
  );
};

export default Logo;