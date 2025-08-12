import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Bell, Menu, Sun, Moon, Clock, Mic, Loader2, X } from 'lucide-react';
import Button from '../../ui/Button';
import Dropdown from '../../ui/Dropdown';
import NotificationDropdown from './NotificationDropdown';
import TasksDropdown from './TasksDropdown';
import useAuthStore from '../../stores/auth';
import useThemeStore from '../../stores/theme';
import { cn } from '../../lib/utils';
import { useRealtimeVoice } from '../../hooks/useRealtimeVoice';
import { useMediaQuery } from '../../hooks/useMediaQuery';

interface TopBarProps {
  onLeftHoverStart: () => void;
  onLeftHoverEnd: () => void;
  onRightHoverStart: () => void;
  onRightHoverEnd: () => void;
  onMobileMenuToggle: () => void;
  isMobileMenuOpen: boolean;
  isRightMenuOpen: boolean;
  onRightMenuToggle: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ 
  onLeftHoverStart, 
  onLeftHoverEnd,
  onRightHoverStart,
  onRightHoverEnd,
  onMobileMenuToggle,
  isMobileMenuOpen,
  isRightMenuOpen,
  onRightMenuToggle
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const { isDark, toggleTheme } = useThemeStore();
  const isMobile = useMediaQuery('(max-width: 640px)');

  const { isConnecting, isConnected, connect, disconnect } = useRealtimeVoice({
  onMessage: (message: unknown) => {
    console.log("Voice message:", message);
  }
});
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleRightMenuToggle = () => {
    if (isMobile) {
      onRightMenuToggle();
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.notification-dropdown') && !target.closest('.notification-trigger')) {
        setShowNotifications(false);
      }
      if (!target.closest('.tasks-dropdown') && !target.closest('.tasks-trigger')) {
        setShowTasks(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Check if we're on the welcome page
  const isWelcomePage = location.pathname === '/';

  return (
    <header className={cn(
      "border-b sticky top-0 z-40",
      isDark ? "bg-gray-900 border-gray-800" : "bg-brand-600 border-brand-500"
    )}>
      <div className="h-16 px-4 flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            onClick={onMobileMenuToggle}
            className={cn(
              "p-2 rounded-lg md:hidden transition-colors",
              isDark ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-brand-500"
            )}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Menu Hover Button */}
          <div
            onMouseEnter={onLeftHoverStart}
            onMouseLeave={onLeftHoverEnd}
            className={cn(
              "hidden md:flex p-2 rounded-lg cursor-pointer transition-colors",
              isDark ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-brand-500"
            )}
          >
            <Menu className="h-6 w-6" />
          </div>
          
          {/* Logo with click handler */}
          <button 
            onClick={() => navigate('/')}
            className="flex items-center focus:outline-none"
          >
            <img 
              src="https://i.imgur.com/HM5aJDB.png" 
              alt="Logo"
              className={cn(
                "w-auto transition-transform duration-200",
                isMobile ? "h-7" : "h-9",
                "transform hover:scale-105"
              )}
            />
          </button>
        </div>

        {/* Center - Voice Button (Desktop only) */}
        {!isMobile && !isWelcomePage && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="sm"
              onClick={isConnected ? disconnect : connect}
              disabled={isConnecting}
              className={cn(
                "transition-colors p-2",
                isDark ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-brand-500",
                isConnected && "text-red-500"
              )}
            >
              {isConnecting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Mic className="h-5 w-5" />
              )}
            </Button>
          </div>
        )}
        
        {/* Right side */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle - Hide on mobile */}
          {!isMobile && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleTheme}
              className={cn(
                "transition-colors",
                isDark ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-brand-500"
              )}
            >
              {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          )}

          {/* Treasure Chest Icon */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/gamifyai')}
            className={cn(
              "transition-colors",
              isDark ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-brand-500"
            )}
          >
            {/* <Trophy className="h-5 w-5" /> */}
          </Button>
          
          {/* Tasks Button - Show only on desktop */}
          <div className="hidden md:block relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "transition-colors tasks-trigger",
                isDark ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-brand-500"
              )}
              onClick={() => {
                setShowTasks(!showTasks);
                setShowNotifications(false);
              }}
            >
              <Clock className="h-5 w-5" />
            </Button>
            {showTasks && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 tasks-dropdown">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Upcoming Tasks</h3>
                </div>
                <TasksDropdown onClose={() => setShowTasks(false)} />
              </div>
            )}
          </div>

          {/* Notifications - Show only on desktop */}
          <div className="hidden md:block relative">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                "transition-colors notification-trigger",
                isDark ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-brand-500"
              )}
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowTasks(false);
              }}
            >
              <Bell className="h-5 w-5" />
            </Button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-100 notification-dropdown">
                <div className="p-4 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
                </div>
                <NotificationDropdown onClose={() => setShowNotifications(false)} />
              </div>
            )}
          </div>

          {/* Voice Button - Show only on mobile and not on welcome page */}
          {isMobile && !isWelcomePage && (
            <Button
              variant="ghost"
              size="sm"
              onClick={isConnected ? disconnect : connect}
              disabled={isConnecting}
              className={cn(
                "transition-colors p-2",
                isDark ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-brand-500",
                isConnected && "text-red-500"
              )}
            >
              {isConnecting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Mic className="h-5 w-5" />
              )}
            </Button>
          )}

          {/* Right Panel Toggle */}
          <button
            onClick={handleRightMenuToggle}
            onMouseEnter={isMobile ? undefined : onRightHoverStart}
            onMouseLeave={isMobile ? undefined : onRightHoverEnd}
            className={cn(
              "p-2 rounded-lg cursor-pointer transition-colors",
              isDark ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-brand-500"
            )}
          >
            {isRightMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
          
          {/* User Menu */}
          <div className="hidden md:block">
            <Dropdown 
              trigger={
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={cn(
                    "transition-colors",
                    isDark ? "text-gray-200 hover:bg-gray-800" : "text-white hover:bg-brand-500",
                    "flex items-center gap-2"
                  )}
                >
                  <span className="font-medium">
                    {user?.firstName} {user?.lastName}
                  </span>
                </Button>
              }
              items={[
                {
                  label: `${user?.firstName} ${user?.lastName}` || 'Profile',
                  onClick: () => navigate('/profile'),
                },
                {
                  label: 'Settings',
                  onClick: () => navigate('/settings'),
                },
                {
                  label: 'Logout',
                  onClick: handleLogout,
                  className: 'text-red-600 hover:text-red-700',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;