import React, { useState, useEffect, useRef } from 'react';
// import { Link } from 'react-router-dom'; // Removed Link import
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react'; // Import all necessary icons
import type { NavItem } from './types';

// Placeholder for DesktopNav component
const DesktopNav: React.FC<{ links: NavItem[] }> = ({ links }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const handleDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Placeholder for cn utility function
  const cn = (...classes: (string | boolean | undefined | null)[]) => {
    return classes.filter(Boolean).join(' ');
  };

  return (
    <div className="hidden xl-custom:flex items-center gap-6 xl:gap-8">
      {links && links.map((link) => (
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
                  "text-brand-main/80 hover:text-brand-main transition-colors duration-300",
                  "flex items-center gap-1 group",
                  "py-2 px-2 rounded-lg transform hover:-translate-y-0.5"
                )}
              >
                <span className="inline-block">{link.label}</span>
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5",
                  activeDropdown === link.label && "rotate-180"
                )} />
              </button>
              {activeDropdown === link.label && (
                <div
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-2 py-2 z-[60]",
                    "bg-white rounded-xl shadow-xl border border-gray-100",
                    "animate-in fade-in slide-in-from-top-2 duration-200 ease-out",
                    "w-56 p-2 flex flex-col space-y-1"
                  )}
                >
                  {link.children.map((child) => (
                    <a // Changed to <a> tag for isolated compilation
                      key={child.id}
                      href={child.href}
                      target={child.external ? "_blank" : "_self"}
                      rel={child.external ? "noopener noreferrer" : undefined}
                      className={cn(
                        "block text-left text-sm text-gray-700",
                        "hover:text-brand-600",
                        "transition-colors duration-200 rounded-lg",
                        "py-2 px-3 transform hover:-translate-y-0.5 inline-block"
                      )}
                      onClick={() => setActiveDropdown(null)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </>
          ) : (
            <a // Changed to <a> tag for isolated compilation
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-brand-main/80 hover:text-brand-main transition-colors duration-300 py-2 px-2 rounded-lg transform hover:-translate-y-0.5 inline-block"
            >
              {link.label}
            </a>
          )}
        </div>
      ))}
      <a // Changed to <a> tag for isolated compilation
        href="/login"
        className="bg-brand-aux1 text-brand-bg hover:bg-brand-aux1/90 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
      >
        Sign In
      </a>
    </div>
  );
};

// Placeholder for MobileMenu component
const MobileMenu: React.FC<{ isOpen: boolean; links: NavItem[]; onClose: () => void }> = ({ isOpen, links, onClose }) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  // Placeholder for cn utility function
  const cn = (...classes: (string | boolean | undefined | null)[]) => {
    return classes.filter(Boolean).join(' ');
  };

  if (!isOpen) return null;
  return (
    <div className="lg:hidden py-4 border-t border-white/10 animate-in slide-in-from-top-4 fade-in duration-300 ease-out">
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <div key={link.id} className="flex flex-col">
            {link.children ? (
              <>
                <button
                  onClick={() => setExpandedItem(expandedItem === link.label ? null : link.label)}
                  className={cn(
                    "flex items-center justify-between",
                    "text-brand-main/80 hover:text-brand-main transition-colors duration-200",
                    "px-4 py-2 rounded-lg transform hover:-translate-y-0.5",
                    expandedItem === link.label && "text-brand-main"
                  )}
                >
                  <span className="font-medium">{link.label}</span>
                  {expandedItem === link.label ? (
                    <ChevronUp className="h-4 w-4 transform rotate-180 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="h-4 w-4 transform transition-transform duration-200" />
                  )}
                </button>
                {expandedItem === link.label && (
                  <div className={cn(
                    "mt-1 ml-4 space-y-1 border-l-2 border-brand-100 pl-4",
                    "animate-in slide-in-from-left-4 fade-in duration-200 ease-out"
                  )}>
                    {link.children.map((child) => (
                      <a // Changed to <a> tag for isolated compilation
                        key={child.id}
                        href={child.href}
                        target={child.external ? "_blank" : "_self"}
                        rel={child.external ? "noopener noreferrer" : undefined}
                        onClick={onClose}
                        className={cn(
                          "block text-brand-main/70 hover:text-brand-main transition-colors duration-200",
                          "px-2 py-1.5 rounded-lg transform hover:-translate-y-0.5 inline-block"
                        )}
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a // Changed to <a> tag for isolated compilation
                href={link.href}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : undefined}
                onClick={onClose}
                className={cn(
                  "text-brand-main/80 hover:text-brand-main transition-colors duration-200",
                  "px-4 py-2 rounded-lg transform hover:-translate-y-0.5 inline-block"
                )}
              >
                {link.label}
              </a>
            )}
          </div>
        ))}
        <a // Changed to <a> tag for isolated compilation
          href="/login"
          onClick={onClose}
          className={cn(
            "bg-brand-aux1 text-brand-bg hover:bg-brand-aux1/90",
            "px-4 py-2 rounded-lg text-center mt-4",
            "animate-in fade-in-50 duration-200 ease-out transform hover:scale-105 shadow-md hover:shadow-lg"
          )}
        >
          Sign In
        </a>
      </div>
    </div>
  );
};

// Placeholder for Logo component
const Logo: React.FC<{ variant: string }> = ({ variant }) => {
  return <div className="text-brand-main text-xl font-bold">Logo</div>;
};

const navLinks: NavItem[] = [
  {
    id: 'about',
    href: '#',
    label: 'About Us',
    children: [
      { id: 'about-page', href: '/about', label: 'About Us' },
      { id: 'features', href: '#features2', label: 'Features' },
      { id: 'testimonials', href: '#testimonials', label: 'Testimonials' },
      { id: 'news', href: '/news', label: 'News' },
      { id: '/blog', href: '/blog', label: 'Blog' } // Corrected href for blog
    ]
  },
  {
    id: 'products',
    href: '#',
    label: 'Products',
    children: [
      { id: 'content-ai', href: '/products/content-ai', label: 'Content AI' },
      { id: 'progression-ai', href: '/products/progress-ai', label: 'Progression AI' },
      { id: 'performance-ai', href: '/products/performance-ai', label: 'Performance AI' },
      { id: 'personalize-ai', href: '/products/personalize-ai', label: 'Personalize AI' },
      { id: 'engagement-ai', href: '/products/engagement-ai', label: 'Engagement AI' },
      { id: 'attendance-ai', href: '/products/attendance-ai', label: 'Attendance AI' },
      { id: 'analytics-ai', href: '/products/analytics-ai', label: 'Analytics AI' },
      { id: 'navigation-ai', href: '/products/navigation-ai', label: 'Navigation AI' },
      { id: 'tutor-ai', href: '/products/tutor-ai', label: 'Tutor AI' },
      { id: 'companion-ai', href: '/products/rooboo-ai', label: 'Rooboo AI' },
      { id: 'rooboovoice-ai', href: '/products/rooboovoice-ai', label: 'RoobooVoice AI' },
      { id: 'community-ai', href: '/products/community-ai', label: 'Community AI' }
    ]
  },
  { id: 'events', href: '/events', label: 'Events' },
  { id: 'gallery', href: '/gallery', label: 'Gallery' },
  { id: 'contact', href: '/contact', label: 'Contact' },
  { id: 'privacy', href: '/privacy', label: 'Privacy & Security' }
];

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 overflow-x-hidden ${
      isScrolled ? 'bg-brand-bg/95 backdrop-blur-sm shadow-lg' : 'bg-brand-bg'
    }`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center w-full">
          {/* Changed Link to <a> tag to avoid Router context error in this isolated placeholder */}
          <a href="/" className="flex-shrink-0 min-w-0 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] transform transition-transform duration-300 hover:scale-105">
            <Logo variant="default" />
          </a>
          
          <DesktopNav links={navLinks} /> 
          
          <button
            className="xl-custom:hidden text-brand-main p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-main"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 transform rotate-90 transition-transform duration-300" />
            ) : (
              <Menu className="h-6 w-6 transform transition-transform duration-300" />
            )}
          </button>
        </div>

        <MobileMenu 
          isOpen={isMenuOpen}
          links={navLinks}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navigation;
