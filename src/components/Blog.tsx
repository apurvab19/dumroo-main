import React from 'react';
import { Calendar, ChevronRight, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';
import PublicLayout from './layout/PublicLayout';

const newsItems = [
  {
    id: 1,
    title: 'Dumroo AI Launches Revolutionary Voice Navigation Feature',
    date: '2024-03-15',
    category: 'Product Launch',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Introducing our new AI-powered voice navigation system that transforms how users interact with educational platforms.',
    link: '/products/navigation-ai',
    featured: true
  },
  {
    id: 2,
    title: 'Partnership with Leading New Jersey School Districts',
    date: '2024-03-10',
    category: 'Partnerships',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Dumroo AI partners with top school districts in New Jersey to bring AI-powered learning to more students.',
    link: '/about'
  },
  {
    id: 3,
    title: 'Dumroo AI Recognized for Innovation in EdTech',
    date: '2024-03-05',
    category: 'Awards',
    image: 'https://images.unsplash.com/photo-1496469888073-80de7e952517?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Our platform receives recognition for innovative use of AI in education at the 2024 EdTech Innovation Awards.',
    link: '/about'
  },
  {
    id: 4,
    title: 'New AI Features for Personalized Learning',
    date: '2024-02-28',
    category: 'Features',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Latest update brings advanced personalization features to enhance student learning experiences.',
    link: '/products/personalize-ai'
  }
];

const Blog: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Dumroo AI Blog</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Insights, tips, and updates from the forefront of AI in education
            </p>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsItems.map((post) => (
              <div
                key={post.id}
                className={cn(
                  "bg-white rounded-xl shadow-lg border border-gray-100",
                  "transform transition-all duration-300",
                  "hover:shadow-xl hover:-translate-y-1"
                )}
              >
                <div className="aspect-[16/9] overflow-hidden rounded-t-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className={cn(
                      "w-full h-full object-cover",
                      "transform transition-transform duration-300",
                      "hover:scale-110"
                    )}
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      "bg-brand-50 text-brand-600"
                    )}>
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <a
                    href={post.link}
                    className={cn(
                      "inline-flex items-center gap-2",
                      "text-brand-600 font-medium",
                      "hover:text-brand-700 transition-colors",
                      "group"
                    )}
                  >
                    {post.link.startsWith('http') ? (
                      <>
                        Visit Link
                        <ExternalLink className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    ) : (
                      <>
                        Read More
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Categories</h2>
            <div className="flex flex-wrap gap-3">
              {['Education Technology', 'Teaching Tips', 'Case Studies', 'Data & Analytics', 'Best Practices', 'Research'].map((category) => (
                <button
                  key={category}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium",
                    "bg-white border border-gray-200",
                    "hover:bg-brand-50 hover:border-brand-200 hover:text-brand-600",
                    "transition-colors"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-brand-50 rounded-xl p-8 border border-brand-100">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Subscribe to Our Blog
              </h2>
              <p className="text-gray-600 mb-6">
                Get the latest insights and updates delivered directly to your inbox.
              </p>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600"
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Blog;