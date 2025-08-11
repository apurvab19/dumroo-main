import React from 'react';
import { Users, MessageSquare, Shield, Heart, Globe } from 'lucide-react';
import PublicLayout from '../layout/PublicLayout';

const CommunityAI: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Community AI</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building stronger educational communities through AI-powered collaboration and engagement
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Intelligent Community Management
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our Community AI helps build and maintain vibrant educational communities. Foster collaboration, encourage participation, and create meaningful connections between students, teachers, and parents.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-50 rounded-lg">
                    <Users className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Building</h3>
                    <p className="text-gray-600">Foster meaningful connections and collaboration</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Discussions</h3>
                    <p className="text-gray-600">AI-moderated forums and discussion groups</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Shield className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Safe Environment</h3>
                    <p className="text-gray-600">AI-powered content moderation and safety</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Heart className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Engagement Tools</h3>
                    <p className="text-gray-600">Features to boost community participation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-transparent rounded-xl" />
              <img 
                src="https://i.imgur.com/iVhWcO6.jpg"
                alt="Community collaboration"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Connection",
                description: "Connect with educators worldwide"
              },
              {
                icon: Shield,
                title: "Safe Spaces",
                description: "Secure and moderated community spaces"
              },
              {
                icon: Users,
                title: "Collaborative Learning",
                description: "Foster peer-to-peer learning and support"
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

export default CommunityAI;