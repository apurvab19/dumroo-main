import React from 'react';
import { CheckCircle, Brain, Zap, Clock, BarChart as ChartBar, FileText, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const GradingAI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center p-3 bg-green-50 rounded-xl mb-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <CheckCircle className="h-8 w-8 text-green-600 relative animate-bounce" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-8">
              Intelligent Grading with
              <span className="block text-green-600">Grading AI</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-500">
              Save time and provide better feedback with AI-powered assessment and grading.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Smart Auto-Grading',
              description: 'Automatically grade multiple choice, short answer, and essay questions with AI accuracy.',
              icon: Brain,
              color: 'from-green-500 to-green-600'
            },
            {
              title: 'Instant Feedback',
              description: 'Provide detailed, constructive feedback to students in real-time.',
              icon: Zap,
              color: 'from-blue-500 to-blue-600'
            },
            {
              title: 'Time-Saving',
              description: 'Reduce grading time by up to 90% while maintaining quality and consistency.',
              icon: Clock,
              color: 'from-purple-500 to-purple-600'
            },
            {
              title: 'Analytics & Insights',
              description: 'Get detailed analytics on student performance and identify learning gaps.',
              icon: ChartBar,
              color: 'from-orange-500 to-orange-600'
            },
            {
              title: 'Rubric Builder',
              description: 'Create and customize grading rubrics with AI assistance.',
              icon: FileText,
              color: 'from-pink-500 to-pink-600'
            },
            {
              title: 'Personalized Learning',
              description: 'Generate tailored study recommendations based on assessment results.',
              icon: CheckCircle,
              color: 'from-indigo-500 to-indigo-600'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className={cn(
                "absolute inset-0 rounded-xl blur-sm opacity-50 transition-opacity duration-300",
                "group-hover:opacity-75",
                `bg-gradient-to-br ${feature.color}`
              )} />

              <div className={cn(
                "relative p-6 rounded-xl",
                "bg-white shadow-lg",
                "transform transition-all duration-300",
                "group-hover:scale-105 group-hover:-translate-y-1 group-hover:rotate-1"
              )}>
                <div className={cn(
                  "p-3 rounded-xl mb-4 w-fit",
                  "bg-gradient-to-br shadow-lg",
                  feature.color,
                  "transform transition-all duration-300",
                  "group-hover:scale-110 group-hover:rotate-3"
                )}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Grading Process?
          </h2>
          <a
            href="/register"
            className={cn(
              "inline-flex items-center gap-2 px-8 py-4",
              "bg-white text-green-600 rounded-xl",
              "font-semibold text-lg",
              "transform transition-all duration-200",
              "hover:scale-105 hover:shadow-xl",
              "active:scale-95"
            )}
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GradingAI;