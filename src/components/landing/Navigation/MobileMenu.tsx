import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming useNavigate is used elsewhere
import { ChevronDown } from 'lucide-react';
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
    <div className="lg:hidden p-4 animate-in slide-in-from-top-4 fade-in duration-300 ease-in-out">
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <div key={link.id} className="flex flex-col">
            {link.children ? (
              <>
                {/* Accordion toggle button */}
                <button
                  onClick={() => setExpandedItem(expandedItem === link.label ? null : link.label)}
                  className={cn(
                    "flex w-full items-center justify-between",
                    // Changed text to white for dark backgrounds
                    "text-sm text-white/80 hover:text-white",
                    // Subtle hover for a glowing effect on dark backgrounds
                    "hover:bg-white/10",
                    "py-2 px-4 rounded-md transition-all duration-200"
                  )}
                >
                  <span>{link.label}</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-300",
                      expandedItem === link.label && "rotate-180"
                    )}
                  />
                </button>

                {/* Dropdown content with a sleek zoom-in animation */}
                {expandedItem === link.label && (
                  <div
                    className={cn(
                      "mt-2 ml-4 space-y-1 border-l-2 border-white/20 pl-3", // Border color adapted for dark background
                      "animate-in fade-in zoom-in-95 duration-200 ease-out" // Sleeker "reveal" animation
                    )}
                  >
                    {link.children.map((child) => (
                      <NavLink
                        key={child.id}
                        href={child.href}
                        label={child.label}
                        external={child.external}
                        onClick={() => {
                          setExpandedItem(null);
                          onClose();
                        }}
                        className={cn(
                          // Text color changed to white/light gray
                          "block w-full text-left text-sm text-white/70",
                          "hover:text-white hover:bg-white/10",
                          "py-2 px-3 rounded-md transition-colors duration-200"
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
                onClick={onClose}
                className={cn(
                  // Changed text to white for dark backgrounds
                  "block text-sm text-white/80 hover:text-white",
                  "hover:bg-white/10",
                  "py-2 px-4 rounded-md transition-all duration-200"
                )}
              />
            )}
          </div>
        ))}

        {/* Wrapper to center the auto-width "Sign In" button */}
        <div className="mt-4 flex justify-center">
          <NavLink
            href="/login"
            label="Sign In"
            onClick={onClose}
            className={cn(
              // Styles matched with desktop button
              "bg-brand-aux1 text-brand-bg text-sm",
              "shadow-md hover:shadow-lg",
              "px-4 py-2 rounded-md",
              "transition-all duration-300 hover:-translate-y-0.5"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
