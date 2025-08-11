import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ChevronRight } from 'lucide-react';
import PublicLayout from './layout/PublicLayout';
import { cn } from '../lib/utils';

interface SitemapSection {
  title: string;
  links: {
    label: string;
    href: string;
    description?: string;
  }[];
}

const sitemapData: SitemapSection[] = [
  {
    title: 'Main Pages',
    links: [
      { label: 'Home', href: '/', description: 'Welcome to Dumroo AI' },
      { label: 'About Us', href: '/about', description: 'Learn about our mission and team' },
      { label: 'Contact', href: '/contact', description: 'Get in touch with us' },
      { label: 'Help Center', href: '/help', description: 'Find answers and support' },
      { label: 'Dumroo University', href: '/university', description: 'AI training and education' }
    ]
  },
  {
    title: 'Products',
    links: [
      { label: 'Planning AI', href: '/products/planning-ai', description: 'AI-powered lesson planning' },
      { label: 'Progress AI', href: '/products/progress-ai', description: 'Track student progress' },
      { label: 'Performance AI', href: '/products/performance-ai', description: 'Monitor academic performance' },
      { label: 'Personalize AI', href: '/products/personalize-ai', description: 'Personalized learning experiences' },
      { label: 'Engagement AI', href: '/products/engagement-ai', description: 'Boost student engagement' },
      { label: 'Attendance AI', href: '/products/attendance-ai', description: 'Smart attendance tracking' },
      { label: 'Analytics AI', href: '/products/analytics-ai', description: 'Educational data analytics' },
      { label: 'Navigation AI', href: '/products/navigation-ai', description: 'Voice-powered navigation' },
      { label: 'Tutor AI', href: '/products/tutor-ai', description: 'AI tutoring assistance' },
      { label: 'Companion AI', href: '/products/companion-ai', description: 'Personal learning companion' },
      { label: 'Conversational AI', href: '/products/conversational-ai', description: 'Natural language interaction' },
      { label: 'Community AI', href: '/products/community-ai', description: 'Build educational communities' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'News', href: '/news', description: 'Latest updates and announcements' },
      { label: 'Blog', href: '/blog', description: 'Educational insights and articles' },
      { label: 'Gallery', href: '/gallery', description: 'Photos and media' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy', description: 'Our privacy practices' },
      { 
        label: 'Terms of Service', 
        href: 'https://qtiknlfjwgcshfrcqznk.supabase.co/storage/v1/object/sign/companyassets/Terms%20of%20Service%20v1.0.pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb21wYW55YXNzZXRzL1Rlcm1zIG9mIFNlcnZpY2UgdjEuMC5wZGYiLCJpYXQiOjE3NDIyMDAxNTIsImV4cCI6MTgwNTI3MjE1Mn0.X1MgpS7g3Zj1Mpe513as_KMH5ak_pIWBNUQaEcE8aOo',
        description: 'Terms and conditions' 
      }
    ]
  }
];

const Sitemap: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-xl mb-6">
              <Map className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Sitemap</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find everything you need on Dumroo.ai
            </p>
          </div>
        </div>

        {/* Sitemap Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {sitemapData.map((section) => (
              <div key={section.title} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {section.links.map((link) => (
                      <div key={link.label}>
                        {link.href.startsWith('http') ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "flex items-center justify-between group",
                              "p-4 rounded-lg hover:bg-gray-50 transition-colors"
                            )}
                          >
                            <div>
                              <h3 className="font-medium text-gray-900 group-hover:text-brand-600">
                                {link.label}
                              </h3>
                              {link.description && (
                                <p className="text-sm text-gray-500">{link.description}</p>
                              )}
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-transform" />
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className={cn(
                              "flex items-center justify-between group",
                              "p-4 rounded-lg hover:bg-gray-50 transition-colors"
                            )}
                          >
                            <div>
                              <h3 className="font-medium text-gray-900 group-hover:text-brand-600">
                                {link.label}
                              </h3>
                              {link.description && (
                                <p className="text-sm text-gray-500">{link.description}</p>
                              )}
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Sitemap;