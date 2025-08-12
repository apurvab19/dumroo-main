import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import TopBar from './TopBar';
import RightPanel from './RightPanel';
import BottomBar from './BottomBar';
import { cn } from '../../lib/utils';
import useThemeStore from '../../stores/theme';
import { useMediaQuery } from '../../hooks/useMediaQuery';


const DashboardLayout: React.FC = () => {
  const [isLeftHovering, setIsLeftHovering] = useState(true); // Start with true for initial show
  const [isRightHovering, setIsRightHovering] = useState(false);
  const [isStatsHovering, setIsStatsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const { isDark } = useThemeStore();
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Auto-hide sidebar after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isMobile) {
        setIsLeftHovering(false);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []); // Only run once on mount

  // Apply dark mode class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Handle window resize
  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
      setIsRightMenuOpen(false);
      setIsRightHovering(false);
    }
  }, [isMobile]);

  // Only allow hover functionality on desktop
  const handleLeftHover = (hovering: boolean) => {
    if (!isMobile) {
      setIsLeftHovering(hovering);
    }
  };

  const handleRightHover = (hovering: boolean) => {
    if (!isMobile) {
      setIsRightHovering(hovering);
    }
  };

  const handleRightMenuToggle = () => {
    if (isMobile) {
      const newState = !isRightMenuOpen;
      setIsRightMenuOpen(newState);
      setIsRightHovering(newState);
    }
  };

  return (
    <div className={cn(
      "min-h-screen transition-colors duration-200",
      isDark ? "bg-gray-900" : "bg-gray-50"
    )}>
      <TopBar 
        onLeftHoverStart={() => handleLeftHover(true)} 
        onLeftHoverEnd={() => handleLeftHover(false)}
        onRightHoverStart={() => handleRightHover(true)}
        onRightHoverEnd={() => handleRightHover(false)}
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
        isRightMenuOpen={isRightMenuOpen}
        onRightMenuToggle={handleRightMenuToggle}
      />
      
      <div className="flex relative">
        {/* Mobile Menu Overlay */}
        {(isMobileMenuOpen || isRightHovering) && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsRightMenuOpen(false);
              setIsRightHovering(false);
            }}
          />
        )}

        {/* Left Sidebar Container */}
        <div 
          className={cn(
            "fixed h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out z-40",
            // Mobile styles
            "w-64 md:w-0",
            isMobileMenuOpen ? "left-0" : "-left-64",
            // Desktop styles
            "md:left-0",
            "md:block",
            isLeftHovering ? "md:w-64" : "md:w-0"
          )}
          onMouseEnter={() => handleLeftHover(true)}
          onMouseLeave={() => handleLeftHover(false)}
        >
          {/* Sidebar Content */}
          <div className={cn(
            "h-full bg-white border-r border-gray-200 shadow-lg overflow-hidden",
            // Desktop hover animation
            "md:transform md:transition-transform md:duration-300",
            isLeftHovering ? "md:translate-x-0" : "md:-translate-x-full"
          )}>
            <Sidebar onClose={() => setIsMobileMenuOpen(false)} />
          </div>
        </div>

        {/* Right Panel */}
        <div 
          className={cn(
            "fixed right-0 h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out z-40",
            // Desktop styles
            "md:w-0 md:overflow-hidden",
            isRightHovering && "md:w-96",
            // Mobile styles
            "w-full max-w-[24rem]",
            isRightHovering ? "translate-x-0" : "translate-x-full"
          )}
          onMouseEnter={() => handleRightHover(true)}
          onMouseLeave={() => handleRightHover(false)}
        >
          <RightPanel onClose={() => {
            setIsRightMenuOpen(false);
            setIsRightHovering(false);
          }} />
        </div>

        {/* Main Content */}
        <main className={cn(
          "flex-1 transition-all duration-300 ease-in-out pb-12",
          "px-4 md:px-6",
          // Desktop margins
          isLeftHovering ? "md:ml-64" : "md:ml-0",
          isRightHovering ? "md:mr-96" : "md:mr-0",
          // Mobile margins
          isMobileMenuOpen && "ml-64",
          isRightHovering && "mr-96"
        )}>
          <div className="py-4 md:py-6">
            <Outlet />
          </div>
        </main>

        {/* Bottom Bar with Stats */}
        <BottomBar
          onHoverStart={() => setIsStatsHovering(true)}
          onHoverEnd={() => setIsStatsHovering(false)}
          isHovering={isStatsHovering}
        />
      </div>
    </div>
  );
};

export default DashboardLayout;