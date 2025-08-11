import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming useNavigate is used elsewhere
import { ChevronDown, ChevronUp } from 'lucide-react';
// import NavLink from './NavLink'; // Removed original import
import { NavItem } from './types';
// import { cn } from '../../../lib/utils'; // Removed original import

// Placeholder for NavLink component to resolve import error
// In a real application, you would import your actual NavLink component
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
  const navigate = useNavigate(); // Using useNavigate here as a placeholder for actual navigation
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (external) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.startsWith('/')) {
      navigate(href); // Use useNavigate for internal routes
    } else {
      // For internal anchor links within the same page context if no Router is present
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

// Placeholder for cn utility function to resolve import error
// In a real application, you would import your actual cn utility
const cn = (...classes: (string | boolean | undefined | null)[]) => {
  return classes.filter(Boolean).join(' ');
};


interface MobileMenuProps {
  isOpen: boolean;
  links: NavItem[];
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, links, onClose }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null); // State to manage expanded dropdown in mobile menu

  // If menu is not open, render nothing
  if (!isOpen) return null;

  return (
    // Mobile menu container, visible only on small screens (changed from md:hidden)
    <div className="lg:hidden py-4 border-t border-white/10 animate-in slide-in-from-top-4 fade-in duration-300 ease-out"> {/* Added entry animation */}
      <div className="flex flex-col gap-2"> {/* Vertical stack of navigation items */}
        {links.map((link) => (
          <div key={link.id} className="flex flex-col">
            {link.children ? (
              <>
                {/* Button to toggle dropdown for items with children */}
                <button
                  onClick={() => setExpandedItem(expandedItem === link.label ? null : link.label)}
                  className={cn(
                    "flex items-center justify-between",
                    "text-brand-main/80 hover:text-brand-main transition-colors duration-200", // Text color transition
                    "px-4 py-2 rounded-lg transform hover:-translate-y-0.5", // Added subtle text lift on hover
                    expandedItem === link.label && "text-brand-main" // Keep text color consistent when expanded
                  )}
                >
                  <span className="font-medium">{link.label}</span>
                  {expandedItem === link.label ? (
                    <ChevronUp className="h-4 w-4 transform rotate-180 transition-transform duration-200" /> // Rotates when expanded
                  ) : (
                    <ChevronDown className="h-4 w-4 transform transition-transform duration-200" /> // Default state
                  )}
                </button>
                {/* Dropdown content, animated to slide in from left */}
                {expandedItem === link.label && (
                  <div className={cn(
                    "mt-1 ml-4 space-y-1 border-l-2 border-brand-100 pl-4",
                    "animate-in slide-in-from-left-4 fade-in duration-200 ease-out" // Added entry animation
                  )}>
                    {link.children.map((child) => (
                      <NavLink
                        key={child.id}
                        href={child.href}
                        label={child.label}
                        external={child.external}
                        onClick={() => {
                          setExpandedItem(null); // Collapse dropdown
                          onClose(); // Close mobile menu
                        }}
                        className={cn(
                          "block text-brand-main/70 hover:text-brand-main transition-colors duration-200", // Text color transition
                          "px-2 py-1.5 rounded-lg" // NavLink now handles the transform
                        )}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              // Regular NavLink without children
              <NavLink
                href={link.href}
                label={link.label}
                external={link.external}
                onClick={onClose} // Close mobile menu on link click
                className={cn(
                  "text-brand-main/80 hover:text-brand-main transition-colors duration-200", // Text color transition
                  "px-4 py-2 rounded-lg" // NavLink now handles the transform
                )}
              />
            )}
          </div>
        ))}
        {/* Sign In button for mobile menu */}
        <NavLink
          href="/login"
          label="Sign In"
          onClick={onClose}
          className={cn(
            "bg-brand-aux1 text-brand-bg hover:bg-brand-aux1/90",
            "px-4 py-2 rounded-full text-center mt-4",
            "animate-in fade-in-50 duration-200 ease-out transform hover:scale-105 shadow-md hover:shadow-lg" // Enhanced button hover effects
          )}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
