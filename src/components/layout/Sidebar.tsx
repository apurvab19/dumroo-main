import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  BarChart3,
  BookOpen,
  Calendar,
  GraduationCap,
  Home,
  Settings,
  Users,
  Sparkles,
  X,
  User,
  LogOut,
  HelpCircle
} from 'lucide-react';
import { cn } from '../../lib/utils';
import useAuthStore from '../../stores/auth';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  // const { isDark } = useThemeStore();

  // const isSuperAdmin = user?.role === 'super_admin';

  const navigationItems = [
    { name: "Teacher's AI Toolkit", icon: Sparkles, href: '/toolkit' },
    { name: 'Personal AI', icon: Home, href: '/home' },
    { name: 'AI Analytics', icon: BarChart3, href: '/analytics' },
    { name: 'Classes', icon: BookOpen, href: '/classes' },
    { name: 'Students', icon: GraduationCap, href: '/students' },
    { name: 'Calendar', icon: Calendar, href: '/calendar' },
    { name: 'Users', icon: Users, href: '/users', roles: ['admin'] },
    { name: 'Settings', icon: Settings, href: '/settings' },
    { name: 'Help', icon: HelpCircle, href: '/help' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
    onClose?.();
  };

  return (
    <div className="h-full bg-white border-r border-gray-200 shadow-lg flex flex-col">
      {/* Mobile Close Button */}
      {onClose && (
        <div className="p-4 flex justify-end md:hidden">
          <button
            onClick={onClose}
            className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
      )}

      {/* Mobile Profile Section */}
      {user && (
        <div className="p-4 border-b border-gray-200 md:hidden">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center">
              <User className="h-6 w-6 text-brand-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-medium text-gray-900 truncate">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-sm text-gray-500 truncate">{user.email}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navigationItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                'hover:bg-gray-50',
                {
                  'bg-blue-50 text-blue-700': isActive,
                  'text-gray-700': !isActive,
                }
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}

        {/* Sign Out Button - Moved up for mobile */}
        <div className="md:hidden">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </nav>

      {/* Sign Out Button - Desktop Only */}
      <div className="hidden md:block p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2 w-full text-left text-sm font-medium text-red-600 hover:bg-red-50 rounded-md transition-colors"
        >
          <LogOut className="h-5 w-5" />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;