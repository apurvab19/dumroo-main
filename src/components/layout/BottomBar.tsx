import React from 'react';
import { Menu } from 'lucide-react';
import { cn } from '../../lib/utils';
import StatGroup from '../dashboard/stats/StatGroup';

interface BottomBarProps {
  onHoverStart: () => void;
  onHoverEnd: () => void;
  isHovering: boolean;
}

const BottomBar: React.FC<BottomBarProps> = ({
  onHoverStart,
  onHoverEnd,
  isHovering
}) => {
  return (
    <>
      <div className="fixed bottom-0 left-0 w-full h-12 bg-white border-t border-gray-200 z-30">
        <div 
          className="absolute bottom-0 left-0 p-3 cursor-pointer hover:bg-gray-100 rounded-tr-lg transition-colors"
          onMouseEnter={onHoverStart}
          onMouseLeave={onHoverEnd}
        >
          <Menu className="h-6 w-6 text-gray-600" />
        </div>
      </div>

      {/* Stats Panel */}
      <div 
        className={cn(
          "fixed bottom-12 left-0 w-full bg-white border-t border-gray-200 transition-all duration-300 ease-in-out z-20",
          "transform",
          isHovering ? "translate-y-0 shadow-lg" : "translate-y-full"
        )}
        onMouseEnter={onHoverStart}
        onMouseLeave={onHoverEnd}
      >
        <div className="p-6">
          <StatGroup />
        </div>
      </div>
    </>
  );
};

export default BottomBar;