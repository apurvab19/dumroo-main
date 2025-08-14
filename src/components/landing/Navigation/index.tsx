import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import DesktopNav from './DesktopNav';
import MobileMenu from './MobileMenu';
import Logo from '../../../ui/Logo';
import type { NavItem } from './types';

// Navigation links
const navLinks: NavItem[] = [
  {
    id: 'about',
    href: '#',
    label: 'About Us',
    children: [
      { id: 'about-page', href: '/about', label: 'About Us' },
      {
        id: 'foundation',
        href: 'https://foundation.dumroo.ai',
        label: 'Join the Mission',
        external: true,
      },
      { id: 'features', href: '#features2', label: 'Features' },
      { id: 'testimonials', href: '#testimonials', label: 'Testimonials' },
      { id: 'news', href: '/news', label: 'News' },
      { id: 'blog', href: '/blog', label: 'Blog' },
      { id: 'contact', href: '/contact', label: 'Contact Us' },
    ],
  },
  {
    id: 'products',
    href: '#',
    label: 'Micro-Apps',
    children: [
      { id: 'content-ai', href: '/products/content-ai', label: 'Content AI' },
      { id: 'progression-ai', href: '/products/progress-ai', label: 'Progression AI' },
      { id: 'performance-ai', href: '/products/performance-ai', label: 'Performance AI' },
      { id: 'personalize-ai', href: '/products/personalize-ai', label: 'Personalize AI' },
      { id: 'analytics-ai', href: '/products/analytics-ai', label: 'Analytics AI' },
      { id: 'companion-ai', href: '/products/rooboo-ai', label: 'Rooboo AI' },
    ],
  },
  {
  id: 'portals',
  href: '#',
  label: 'Portals',
  children: [
    { id: 'teacher-portal', href: '/portals/teachers', label: 'Teacher Portal' },
    { id: 'student-portal', href: '/portals/students', label: 'Student Portal' },
    { id: 'admin-portal', href: '/portals/admins', label: 'Admin Portal' },
    { id: 'parent-portal', href: '/portals/parents', label: 'Parent Portal' },
    { id: 'homeschooling-portal', href: '/portals/homeschooling', label: 'Homeschooling Portal' },
  ],
},
  { id: 'events', href: '/events', label: 'Events' },
  { id: 'gallery', href: '/gallery', label: 'Gallery' },
  { id: 'pricing', href: '/pricing', label: 'Pricing' },
  { id: 'privacy', href: '/privacy', label: 'Privacy & Security' },
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
    <nav
      className={`fixed top-0 w-full z-[1000] transition-all duration-300 overflow-visible ${
        isScrolled ? 'bg-brand-bg/95 backdrop-blur-sm shadow-lg' : 'bg-brand-bg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center w-full">
          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 min-w-0 w-auto max-w-[160px] sm:max-w-[200px] md:max-w-[240px] transform transition-transform duration-300 hover:scale-105"
          >
            <Logo variant="default" />
          </Link>

          {/* Desktop Navigation */}
          <DesktopNav links={navLinks} />

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-brand-main p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-main"
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

        {/* Mobile Menu */}
        <MobileMenu isOpen={isMenuOpen} links={navLinks} onClose={() => setIsMenuOpen(false)} />
      </div>
    </nav>
  );
};

export default Navigation;
