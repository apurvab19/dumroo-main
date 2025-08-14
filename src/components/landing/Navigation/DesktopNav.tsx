import React, { useState, useRef } from 'react';
// import { useNavigate } from 'react-router-dom'; // Removed as it's not directly used in DesktopNav's JSX

// Placeholder for NavLink component (self-contained for compilation)
interface NavLinkProps {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  href, 
  label, 
  className = '', 
  onClick,
  external = false
}) => {
  // Removed useNavigate from here to prevent "useNavigate() may be used only in the context of a <Router> component." error
  // This placeholder will now use direct window navigation.
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      // For internal routes, directly navigate using window.location for this placeholder
      // In a full React Router setup, you would use `navigate(href);` if a Router context is present.
      window.location.href = href; 
    }
    onClick?.();
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      className={`${className} transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 inline-block`} 
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {label}
    </a>
  );
};


// Placeholder for cn utility function (self-contained for compilation)
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Ensure ChevronDown is imported for use in this file's scope
import { ChevronDown } from 'lucide-react';


interface NavItem {
  id: string;
  href: string;
  label: string;
  children?: NavItem[];
  external?: boolean;
}

interface DesktopNavProps {
  links: NavItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Handles mouse entering a navigation item to open dropdown
  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  // Handles mouse leaving a navigation item or dropdown to close dropdown after a delay
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  // Prevents dropdown from closing immediately when mouse enters the dropdown itself
  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="hidden lg:flex items-center gap-2">
      {links &&
        links.map((link) => (
          <div
            key={link.id}
            className="relative"
            onMouseEnter={() => handleMouseEnter(link.label)}
            onMouseLeave={handleMouseLeave}
          >
            {link.children ? (
              <>
                <button
                  className={cn(
                    "flex items-center gap-1.5 group",
                    "text-sm text-brand-main/80 hover:text-brand-main",
                    "hover:bg-black/5 dark:hover:bg-white/5",
                    "py-2 px-3 rounded-md transition-all duration-200"
                  )}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      activeDropdown === link.label ? "rotate-180" : "group-hover:translate-y-0.5"
                    )}
                  />
                </button>
                {activeDropdown === link.label && (
                  <div
                    ref={dropdownRef}
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 p-1.5",
                      "bg-white rounded-xl shadow-xl border border-gray-100",
                      "animate-in fade-in slide-in-from-top-2 duration-200 ease-out z-[999]"
                    )}
                  >
                    {link.children.map((child) => (
                      <NavLink
                        key={child.id}
                        href={child.href}
                        label={child.label}
                        external={child.external}
                        onClick={() => setActiveDropdown(null)}
                        className={cn(
                          "block w-full text-left text-sm text-gray-700",
                          "hover:text-brand-600 hover:bg-gray-100", 
                          "py-2 px-3 rounded-md transition-colors duration-200"
                        )}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <NavLink
                href={link.href}
                label={link.label}
                external={link.external}
                className="text-sm text-brand-main/80 hover:text-brand-main hover:bg-black/5 dark:hover:bg-white/5 py-2 px-3 rounded-md transition-all duration-200"
              />
            )}
          </div>
        ))}
      {/* Sign In button */}
      <NavLink
        href="/login"
        label="Sign In"
        className={cn(
          "ml-2", 
          "bg-brand-aux1 text-brand-bg text-sm", 
          "shadow-md hover:shadow-lg",
          "px-4 py-2 rounded-md",
          "transition-all duration-300 hover:-translate-y-0.5" 
        )}
      />
    </div>
  );
};

export default DesktopNav;
