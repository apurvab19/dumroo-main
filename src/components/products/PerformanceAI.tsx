import React from 'react';
import { BarChart2, Star, Target, Award, TrendingUp } from 'lucide-react';
import PublicLayout from '../layout/PublicLayout';

const PerformanceAI: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Performance AI</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Advanced analytics and insights into student performance and achievement
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Student Performance Analytics
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get deep insights into student performance with our comprehensive analytics system. Track grades, identify trends, and understand learning patterns to make data-driven decisions for better educational outcomes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-50 rounded-lg">
                    <BarChart2 className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Performance Metrics</h3>
                    <p className="text-gray-600">Comprehensive analysis of student achievement</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Star className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Achievement Tracking</h3>
                    <p className="text-gray-600">Monitor grades and academic milestones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Target className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Goal Setting</h3>
                    <p className="text-gray-600">Set and track academic goals and objectives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Award className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Performance Recognition</h3>
                    <p className="text-gray-600">Celebrate achievements and improvements</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-transparent rounded-xl" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Performance analytics"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: BarChart2,
                title: "Performance Dashboard",
                description: "Intuitive dashboards showing key performance indicators"
              },
              {
                icon: TrendingUp,
                title: "Growth Analysis",
                description: "Track academic growth and identify areas for improvement"
              },
              {
                icon: Target,
                title: "Smart Goals",
                description: "AI-powered goal recommendations based on performance data"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="p-3 bg-brand-50 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default PerformanceAI;