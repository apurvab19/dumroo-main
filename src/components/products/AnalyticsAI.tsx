import React from 'react';
import { BarChart2, PieChart, LineChart, Brain, Database } from 'lucide-react';
import PublicLayout from '../layout/PublicLayout';

const AnalyticsAI: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Analytics AI</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive data analytics across district, school, grade, and student levels
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Multi-Level Analytics
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Analytics AI provides deep insights at every level of your educational organization. From district-wide trends to individual student performance, make data-driven decisions with confidence.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-50 rounded-lg">
                    <BarChart2 className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">District Analytics</h3>
                    <p className="text-gray-600">Comprehensive district-wide performance metrics</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <PieChart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">School Insights</h3>
                    <p className="text-gray-600">School-level performance and trend analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <LineChart className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Grade Level Tracking</h3>
                    <p className="text-gray-600">Grade-specific performance and progress data</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Brain className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Student Analytics</h3>
                    <p className="text-gray-600">Individual student performance and growth metrics</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-transparent rounded-xl" />
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Data analytics"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Data Integration",
                description: "Unified analytics across all educational data sources"
              },
              {
                icon: Brain,
                title: "Predictive Analytics",
                description: "AI-powered predictions and recommendations"
              },
              {
                icon: BarChart2,
                title: "Custom Reports",
                description: "Generate detailed reports for any metrics"
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

export default AnalyticsAI;