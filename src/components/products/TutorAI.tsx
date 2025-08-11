import React from 'react';
import { GraduationCap, BookOpen, Brain, MessageSquare, Clock } from 'lucide-react';
import PublicLayout from '../layout/PublicLayout';

const TutorAI: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Tutor AI</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your personal AI tutor available 24/7 to help with homework and learning
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Intelligent Homework Help
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Get instant help with homework, assignments, and studying. Our AI tutor provides step-by-step explanations, practice problems, and personalized learning support whenever you need it.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-50 rounded-lg">
                    <Brain className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Explanations</h3>
                    <p className="text-gray-600">Clear, step-by-step problem solving guidance</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <BookOpen className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Practice Problems</h3>
                    <p className="text-gray-600">Custom practice sets for any subject</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Interactive Help</h3>
                    <p className="text-gray-600">Real-time answers to your questions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">24/7 Availability</h3>
                    <p className="text-gray-600">Get help anytime, anywhere</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-transparent rounded-xl" />
              <img 
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
                alt="AI Tutoring"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: "Subject Expertise",
                description: "Comprehensive help across all academic subjects"
              },
              {
                icon: Brain,
                title: "Adaptive Learning",
                description: "Personalized help based on your understanding"
              },
              {
                icon: MessageSquare,
                title: "Interactive Support",
                description: "Natural conversation-based learning assistance"
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

export default TutorAI;