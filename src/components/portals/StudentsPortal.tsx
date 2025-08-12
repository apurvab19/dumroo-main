import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, BookOpen, Brain, Target, Users, 
  ChevronRight, Star, Trophy, Zap,
  FileText, Lightbulb, MessageSquare, Sparkles, Gamepad
} from 'lucide-react';
import { cn } from '../../lib/utils';
import Navigation from '../landing/Navigation';
import Footer from '../landing/Footer';

const features = [
  {
    title: "AI Study Assistant",
    description: "Get instant help with homework and study materials",
    icon: Brain,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Interactive Learning",
    description: "Engage with gamified lessons and activities",
    icon: Gamepad,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Progress Tracking",
    description: "Monitor your academic growth and achievements",
    icon: Target,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Personalized Support",
    description: "Receive tailored guidance and feedback",
    icon: Users,
    color: "from-orange-500 to-orange-600"
  }
];

const tools = [
  {
    name: "Study Helper",
    description: "AI-powered homework assistance",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Practice Tests",
    description: "Prepare for exams with smart quizzes",
    icon: FileText,
    color: "bg-purple-100 text-purple-600"
  },
  {
    name: "Learning Games",
    description: "Make learning fun and engaging",
    icon: Gamepad,
    color: "bg-green-100 text-green-600"
  },
  {
    name: "Chat Support",
    description: "24/7 AI tutoring assistance",
    icon: MessageSquare,
    color: "bg-orange-100 text-orange-600"
  }
];

const benefits = [
  {
    title: "Better Grades",
    description: "Average grade improvement",
    icon: Star,
    stat: "25%",
    color: "text-yellow-600"
  },
  {
    title: "Study Efficiency",
    description: "More effective study time",
    icon: Zap,
    stat: "40%",
    color: "text-purple-600"
  },
  {
    title: "Subject Mastery",
    description: "Increased understanding",
    icon: Trophy,
    stat: "85%",
    color: "text-green-600"
  },
  {
    title: "Learning Joy",
    description: "Enhanced engagement",
    icon: Lightbulb,
    stat: "95%",
    color: "text-blue-600"
  }
];

const StudentsPortal: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-2 bg-brand-50 rounded-xl mb-8">
                <GraduationCap className="h-8 w-8 text-brand-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Your AI Study Companion
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Experience a smarter way to learn with personalized AI assistance that helps you achieve your academic goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className={cn(
                    "px-8 py-4 rounded-xl text-white font-medium",
                    "bg-brand-600 hover:bg-brand-700",
                    "shadow-lg shadow-brand-600/20",
                    "transform transition-all duration-200",
                    "hover:-translate-y-0.5 hover:shadow-xl"
                  )}
                >
                  Get Started
                </Link>
        
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Smart Learning Features
            </h2>
            <p className="text-xl text-gray-600">
              Tools designed to help you learn better and faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  "bg-gradient-to-br blur-xl",
                  feature.color
                )} />
                <div className="relative">
                  <div className={cn(
                    "inline-flex p-3 rounded-xl mb-6",
                    "bg-gradient-to-br shadow-lg",
                    feature.color,
                    "transform transition-all duration-300",
                    "group-hover:scale-110 group-hover:rotate-3"
                  )}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Learning Tools
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to succeed in your studies
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={cn(
                    "inline-flex p-3 rounded-xl mb-4",
                    tool.color
                  )}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              See how students are improving with Dumroo AI
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={cn(
                    "p-3 rounded-xl",
                    "bg-opacity-10",
                    benefit.color.replace('text-', 'bg-')
                  )}>
                    <benefit.icon className={cn("h-6 w-6", benefit.color)} />
                  </div>
                  <span className={cn("text-2xl font-bold", benefit.color)}>
                    {benefit.stat}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand-600 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center max-w-3xl mx-auto">
                <Sparkles className="h-12 w-12 text-brand-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Excel in Your Studies?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join thousands of students already using Dumroo AI to improve their academic performance.
                  Start your journey today!
                </p>
                <Link
                  to="/register"
                  className={cn(
                    "inline-flex items-center gap-2",
                    "px-8 py-4 rounded-xl text-white font-medium",
                    "bg-brand-600 hover:bg-brand-700",
                    "shadow-lg shadow-brand-600/20",
                    "transform transition-all duration-200",
                    "hover:-translate-y-0.5 hover:shadow-xl"
                  )}
                >
                  Get Started
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StudentsPortal;