import React from 'react';
import { BookOpen, BarChart, Brain, Users, Navigation2, Lightbulb } from 'lucide-react';
import './Features2.css'; // Import the new CSS file

const features = [
  {
    icon: BookOpen,
    title: 'Smart Planning',
    description: 'Easily create and manage lessons, assignments, and assessments with AI.',
  },
  {
    icon: BarChart,
    title: 'Intelligent Analytics',
    description: 'Track performance, identify trends, and make data-driven decisions.',
  },
  {
    icon: Brain,
    title: 'Differentiated Learning',
    description: 'Automatically adjust content and pacing to meet individual student needs.',
  },
  {
    icon: Users,
    title: 'Community Connection',
    description: 'Enable seamless communication between families and educators.',
  },
  {
    icon: Navigation2,
    title: 'AI-Enhanced Navigation',
    description: 'Smarter, faster access to platform features with intuitive AI tools.',
  },
  {
    icon: Lightbulb,
    title: 'Dynamic IEPs',
    description: 'Empower special education with adaptive, AI-driven plans that track progress and suggest support.',
  },
];

const Features2: React.FC = () => {
  return (
    <section id="features2" className="min-h-screen py-24 bg-slate-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="text-center mb-16">
  <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 text-gray-900 leading-tight">
    Powerful Features for <span className="text-brand-600">Modern Education</span>
  </h2>
  <p className="text-base text-gray-600 max-w-3xl mx-auto">
    Discover how our AI-powered platform transforms the educational experience for everyone involved.
  </p>
</div>



        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              // The main container for the card with background image and hover state
              className={`feature-card feature-card-${index % 6}`}
            >
              {/* Initially visible content */}
              <div className="default-content">
                <div className="bg-white/20 p-3 rounded-xl w-fit mb-4 backdrop-blur-sm">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow-lg">{feature.title}</h3>
              </div>

              {/* Content visible on hover */}
              <div className="hover-content">
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/90 leading-relaxed text-center">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features2;