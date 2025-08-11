import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useScrollTo } from '../../../hooks/useScrollTo'; // Assuming this hook exists

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
  const scrollTo = useScrollTo(); // Hook for scrolling to sections
  const navigate = useNavigate(); // Hook for programmatic navigation
  const location = useLocation(); // Hook to get current location

  // Handles click event for navigation links
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default anchor link behavior
    
    if (external) {
      // Open external links in a new tab
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (href.startsWith('#')) {
      // Handle internal anchor links
      // If we're not on the landing page, navigate there first and then scroll
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: href.slice(1) } });
      } else {
        // If already on landing page, just scroll
        scrollTo(href.slice(1));
      }
    } else if (href.startsWith('/')) {
      // Handle regular internal route navigation
      navigate(href);
    }
    
    onClick?.(); // Call any provided onClick handler
  };

  return (
    <a 
      href={href}
      onClick={handleClick}
      // Added subtle text movement on hover and ensured no background hover
      // The `group` class is added for parent elements to control child hover states if needed.
      className={`${className} transition-all duration-200 ease-in-out transform hover:-translate-y-0.5 inline-block`} 
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} // Props for external links
    >
      {label}
    </a>
  );
};

export default NavLink;
