import React from 'react';
import { cn } from '../lib/utils';
import PublicLayout from './layout/PublicLayout';

const images = [
  {
    src: 'https://i.imgur.com/XMwuJOC.png',
    title: 'Dumroo Teacher Assistant',
    description: 'Engaging AI Assistant for our Educators'
  },
  {
    src: 'https://i.imgur.com/JNtNPTH.png',
    title: 'Dumroo Admin Assistant',
    description: 'Highly Efficient AI Assistant for Admins'
  },
  {
    src: 'https://i.imgur.com/dQFyG7Q.jpg',
    title: 'Dumroo with KYA Group',
    description: 'Engaging discussion on future of learning with AI'
  },
  {
    src: 'https://i.imgur.com/WbDAZ7C.jpg',
    title: 'Dumroo at Techspo25',
    description: 'Dumroo at Techspo-25 Atlantic City, NJ'
  },
  {
    src: 'https://i.imgur.com/MQ5EvjB.jpg',
    title: 'Dumroo at Techspo25',
    description: 'Dumroo at Techspo-25 Atlantic City, NJ'
  },
  {
    src: 'https://i.imgur.com/KhbgV3A.jpg',
    title: 'Dumroo with NJCC',
    description: 'Dumroo with NJCC'
  },
   {
    src: 'https://i.imgur.com/7ZeWKhA.jpg',
    title: 'Dumroo at AI K12 Deeper Learning Summit',
    description: 'AI K12 Deeper Learning Summit at Anaheim, CA'
  },
 {
    src: 'https://i.imgur.com/MyhtLKx.jpg',
    title: 'Dumroo presenting in Anaheim, CA',
    description: 'Dumroo presenting in Anaheim, CA'
  },
 {
    src: 'https://i.imgur.com/YPXdJUD.jpg',
    title: 'Dumroo with School Partners',
    description: 'Dumroo with Burch Charter School of Excellence'
  },
 {
    src: 'https://i.imgur.com/r2PylxM.jpg',
    title: 'Dumroo with School Partners',
    description: 'Dumroo with Burch Charter School of Excellence'
  },
 {
    src: 'https://i.imgur.com/HjMT03t.jpg',
    title: 'Dumroo at UnboundEd',
    description: 'Dumroo at UnboundEd'
  },
 {
    src: 'https://i.imgur.com/gFurpiW.jpg',
    title: 'Dumroo presenting to El Salvador Ministry of Education',
    description: 'Dumroo presenting to El Salvador Ministry of Education'
  }
];

const Gallery: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Explore our collection of images showcasing the impact of AI in education
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-xl",
                  "transform transition-all duration-300",
                  "hover:shadow-xl hover:-translate-y-1"
                )}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={image.src}
                    alt={image.title}
                    className={cn(
                      "w-full h-full object-cover",
                      "transform transition-transform duration-300",
                      "group-hover:scale-110"
                    )}
                  />
                </div>

                {/* Overlay */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
                  "flex flex-col justify-end p-6",
                  "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                )}>
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-white/90">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Gallery;