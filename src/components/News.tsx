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
  },
  {
    id: 5,
    title: 'Dumroo AI at TECHSPO 2024',
    date: '2024-02-20',
    category: 'Events',
    image: 'https://i.imgur.com/WbDAZ7C.jpg',
    excerpt: 'Showcasing our latest AI innovations at TECHSPO 2024 in Atlantic City, NJ.',
    link: '/gallery'
  },
  {
    id: 6,
    title: 'Expanding Global Reach: Now in 150+ Countries',
    date: '2024-02-15',
    category: 'Growth',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Dumroo AI continues global expansion, now serving educators in over 150 countries.',
    link: '/about'
  },
  {
    id: 7,
    title: 'Introducing Dumroo Academy for Educators',
    date: '2024-02-10',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    excerpt: 'Launch of comprehensive AI training courses for educators through Dumroo Academy.',
    link: '/university'
  },
  {
    id: 8,
    title: 'AI K12 Deeper Learning Summit Success',
    date: '2024-02-05',
    category: 'Events',
    image: 'https://i.imgur.com/7ZeWKhA.jpg',
    excerpt: 'Dumroo AI presents groundbreaking educational AI solutions at the K12 Deeper Learning Summit in Anaheim, CA.',
    link: '/gallery'
  },
  {
    id: 9,
    title: 'Partnership with El Salvador Ministry of Education',
    date: '2024-02-01',
    category: 'International',
    image: 'https://i.imgur.com/gFurpiW.jpg',
    excerpt: 'Expanding educational AI access through partnership with El Salvador\'s Ministry of Education.',
    link: '/gallery'
  },
  {
    id: 10,
    title: 'Dumroo AI at UnboundEd Conference',
    date: '2024-01-25',
    category: 'Events',
    image: 'https://i.imgur.com/HjMT03t.jpg',
    excerpt: 'Sharing insights on AI in education at the UnboundEd Conference.',
    link: '/gallery'
  }
];

const News: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Latest News</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest developments and announcements from Dumroo AI
            </p>
          </div>
        </div>

        {/* Featured News */}
        {newsItems.filter(item => item.featured).map(featured => (
          <div key={featured.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-[16/9] md:aspect-auto overflow-hidden">
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-brand-50 text-brand-600">
                      {featured.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(featured.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">{featured.title}</h2>
                  <p className="text-gray-600 mb-6">{featured.excerpt}</p>
                  <a
                    href={featured.link}
                    className={cn(
                      "inline-flex items-center gap-2 text-brand-600 font-medium",
                      "hover:text-brand-700 transition-colors"
                    )}
                  >
                    Read More
                    <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* News Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.filter(item => !item.featured).map((item) => (
              <div
                key={item.id}
                className={cn(
                  "bg-white rounded-xl shadow-sm border border-gray-100",
                  "transform transition-all duration-300",
                  "hover:shadow-xl hover:-translate-y-1"
                )}
              >
                <div className="aspect-[16/9] overflow-hidden rounded-t-xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={cn(
                      "w-full h-full object-cover",
                      "transform transition-transform duration-300",
                      "hover:scale-110"
                    )}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      "bg-brand-50 text-brand-600"
                    )}>
                      {item.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(item.date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a
                    href={item.link}
                    className={cn(
                      "inline-flex items-center gap-2",
                      "text-brand-600 font-medium",
                      "hover:text-brand-700 transition-colors",
                      "group"
                    )}
                  >
                    {item.link.startsWith('http') ? (
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
        </div>
      </div>
    </PublicLayout>
  );
};

export default News;