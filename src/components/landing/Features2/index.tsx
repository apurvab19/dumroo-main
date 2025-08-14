import React from 'react';
import { BookOpen, BarChart, Brain, Users, Navigation2, Lightbulb } from 'lucide-react';
import './Features2.css'; // We will update this file next

const features = [
  {
    icon: BookOpen,
    title: 'Smart Planning',
    description: 'Easily create and manage lessons, assignments, and assessments with AI.',
    imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1470&auto=format&fit=crop',
  },
  {
    icon: BarChart,
    title: 'Intelligent Analytics',
    description: 'Track performance, identify trends, and make data-driven decisions.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
  },
  {
    icon: Brain,
    title: 'Differentiated Learning',
    description: 'Automatically adjust content and pacing to meet individual student needs.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop',
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Enable seamless communication between families and educators.',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1470&auto=format&fit=crop',
  },
  {
    icon: Navigation2,
    title: 'AI-Enhanced Navigation',
    description: 'Smarter, faster access to platform features with intuitive AI tools.',
    imageUrl: 'https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1374&auto=format&fit=crop',
  },
  {
    icon: Lightbulb,
    title: 'Dynamic IEPs',
    description: 'Empower special education with adaptive, AI-driven plans that track progress and suggest support.',
    imageUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1469&auto=format&fit=crop',
  },
];

const Features2: React.FC = () => {
  return (
    <section id="features2" className="min-h-screen py-24 bg-slate-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight">
            Powerful Features for <span className="text-brand-600 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-400 after:rounded-full">Modern Education</span>
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            Discover how our AI-powered platform transforms the educational experience for everyone involved.
          </p>
        </div>

        {/* The change for wider cards is here: lg:grid-cols-2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url("${feature.imageUrl}")`
              }}
            >
              <div className="card-content">
                <div className="icon-container">
                  <feature.icon className="h-4 w-4 text-white" /> {/* Smaller icon */}
                </div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="card-description">{feature.description}</p>
              </div>
            </div>
          ))}
      </div>

      </div>
    </section>
  );
};

export default Features2;