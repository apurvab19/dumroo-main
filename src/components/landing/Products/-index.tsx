import React from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, TrendingUp, Activity, Users, Bell,
  BarChart2, Compass, GraduationCap, Bot, Mic, Users2,
  CheckCircle
} from 'lucide-react';
// Removed the problematic import for 'cn' utility
// import { cn } from '../../../lib/utils';

const products = [
  {
    name: 'Content AI',
    description: 'AI-powered content creation and lesson planning',
    icon: Brain,
    color: 'from-blue-500 to-blue-600',
    link: '/products/content-ai'
  },
  {
    name: 'Progression AI',
    description: 'Track and optimize student learning progress',
    icon: TrendingUp,
    color: 'from-green-500 to-green-600',
    link: '/products/progress-ai'
  },
  {
    name: 'Performance AI',
    description: 'Monitor and analyze student performance',
    icon: Activity,
    color: 'from-purple-500 to-purple-600',
    link: '/products/performance-ai'
  },
  {
    name: 'Personalize AI',
    description: 'Customize learning for each student',
    icon: Users,
    color: 'from-pink-500 to-pink-600',
    link: '/products/personalize-ai'
  },
  {
    name: 'Engagement AI',
    description: 'Boost student engagement and participation',
    icon: Bell,
    color: 'from-yellow-500 to-yellow-600',
    link: '/products/engagement-ai'
  },
  {
    name: 'Attendance AI',
    description: 'Smart attendance tracking and analytics',
    icon: Users2,
    color: 'from-red-500 to-red-600',
    link: '/products/attendance-ai'
  },
  {
    name: 'Analytics AI',
    description: 'Data-driven insights for better decisions',
    icon: BarChart2,
    color: 'from-indigo-500 to-indigo-600',
    link: '/products/analytics-ai'
  },
  {
    name: 'Navigation AI',
    description: 'Voice-controlled platform navigation',
    icon: Compass,
    color: 'from-cyan-500 to-cyan-600',
    link: '/products/navigation-ai'
  },
  {
    name: 'Tutor AI',
    description: 'Personal AI tutor for every student',
    icon: GraduationCap,
    color: 'from-emerald-500 to-emerald-600',
    link: '/products/tutor-ai'
  },
  {
    name: 'Rooboo AI',
    description: 'Your intelligent teaching companion',
    icon: Bot,
    color: 'from-violet-500 to-violet-600',
    link: '/products/rooboo-ai'
  },
  {
    name: 'Rooboo Voice AI',
    description: 'Voice-enabled AI teaching assistant',
    icon: Mic,
    color: 'from-fuchsia-500 to-fuchsia-600',
    link: '/products/rooboovoice-ai'
  },
  {
    name: 'Community AI',
    description: 'Connect and collaborate with educators',
    icon: Users2,
    color: 'from-rose-500 to-rose-600',
    link: '/products/community-ai'
  },
  // {
  //   name: 'Gamify AI',
  //   description: 'Make learning fun with gamification',
  //   icon: Trophy,
  //   color: 'from-yellow-500 to-yellow-600',
  //   link: '/products/gamify-ai'
  // },
  {
    name: 'Grading AI',
    description: 'Intelligent assessment and feedback',
    icon: CheckCircle,
    color: 'from-green-500 to-green-600',
    link: '/products/grading-ai'
  }
];

const Products: React.FC = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-gray-900">Our AI-Powered</span>{' '}
            <span className="text-brand-600">Solutions</span> {/* Changed heading color */}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive tools to transform education
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.name}
              to={product.link}
              className="group relative"
            >
              <div className={`absolute inset-0 rounded-xl blur-sm opacity-50 transition-opacity duration-300 group-hover:opacity-75 bg-gradient-to-br ${product.color}`} />

              <div className={`relative p-6 rounded-xl bg-white shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:rotate-1 flex flex-col min-h-[200px]`} >
                <div className={`p-3 rounded-xl mb-4 w-fit bg-gradient-to-br shadow-lg ${product.color} transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`} >
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 flex-grow"> {/* Added flex-grow */}
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
