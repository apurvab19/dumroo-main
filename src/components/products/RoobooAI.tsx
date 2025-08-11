import React from 'react';
import { Heart, Brain, MessageSquare, Star, Users } from 'lucide-react';
import PublicLayout from '../layout/PublicLayout';

const CompanionAI: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Rooboo AI</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Your personalized AI learning companion that understands and grows with you
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Personal Learning Assistant
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Meet your AI companion that adapts to your learning style, remembers your preferences, and becomes your trusted educational partner. Get personalized support, encouragement, and guidance throughout your learning journey.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-50 rounded-lg">
                    <Brain className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Adaptive Intelligence</h3>
                    <p className="text-gray-600">Learns and adapts to your unique needs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Emotional Support</h3>
                    <p className="text-gray-600">Provides encouragement and motivation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Natural Interaction</h3>
                    <p className="text-gray-600">Conversational interface that feels natural</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Star className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Experience</h3>
                    <p className="text-gray-600">Tailored assistance based on your history</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-transparent rounded-xl" />
              <img 
                src="https://i.imgur.com/JNtNPTH.png"
                alt="AI Companion"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Memory & Context",
                description: "Remembers past interactions and preferences"
              },
              {
                icon: Users,
                title: "Personality Match",
                description: "Adapts communication style to your preferences"
              },
              {
                icon: Star,
                title: "Growth Together",
                description: "Evolves and improves with each interaction"
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

export default CompanionAI;