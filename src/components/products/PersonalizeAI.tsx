import React from 'react';
import { Target, Brain, Route, Sparkles, Users } from 'lucide-react';
import PublicLayout from '../layout/PublicLayout';

const PersonalizeAI: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Personalize AI</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Tailored learning experiences that adapt to each student's unique needs and goals
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Personalized Learning Pathways
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI-driven personalization engine creates unique learning experiences for every student. By analyzing learning patterns, preferences, and goals, we deliver customized content and recommendations that optimize educational outcomes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-50 rounded-lg">
                    <Target className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Individual Learning Paths</h3>
                    <p className="text-gray-600">Custom learning journeys based on student needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Brain className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adaptive Content</h3>
                    <p className="text-gray-600">Materials that adjust to learning pace and style</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Route className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Custom Goals</h3>
                    <p className="text-gray-600">Personalized objectives and milestones</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Sparkles className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Recommendations</h3>
                    <p className="text-gray-600">AI-powered suggestions for optimal learning</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-transparent rounded-xl" />
              <img 
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&q=80"
                alt="Personalized learning"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Learning Style Analysis",
                description: "Identify and adapt to individual learning preferences"
              },
              {
                icon: Users,
                title: "Differentiated Instruction",
                description: "Tailored content delivery for diverse learning needs"
              },
              {
                icon: Target,
                title: "Personal Growth Tracking",
                description: "Monitor progress towards individualized goals"
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

export default PersonalizeAI;