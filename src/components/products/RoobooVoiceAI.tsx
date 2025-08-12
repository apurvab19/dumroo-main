import React from 'react';
import { Mic, MessageSquare, Brain, Sparkles } from 'lucide-react';
import PublicLayout from '../layout/PublicLayout';

const ConversationalAI: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Rooboo Voice AI</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Natural voice and text interactions that make education more accessible and engaging
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Voice-Enabled Learning Assistant
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience the future of education with our advanced conversational AI. Use natural voice commands or text chat to accomplish tasks, get help, and navigate the platform effortlessly.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-50 rounded-lg">
                    <Mic className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Voice Commands</h3>
                    <p className="text-gray-600">Natural voice interaction for hands-free control</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <MessageSquare className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Text Chat</h3>
                    <p className="text-gray-600">Intuitive text-based conversations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Context Awareness</h3>
                    <p className="text-gray-600">Understands context and maintains conversation flow</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <Sparkles className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Smart Actions</h3>
                    <p className="text-gray-600">Execute complex tasks through simple commands</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-transparent rounded-xl" />
              <img 
                src="https://i.imgur.com/XMwuJOC.png"
                alt="Voice interaction"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: "Voice Recognition",
                description: "Advanced speech recognition for accurate commands"
              },
              {
                icon: Brain,
                title: "Natural Language",
                description: "Understanding of conversational language and context"
              },
              {
                icon: MessageSquare,
                title: "Multi-Modal",
                description: "Seamless switching between voice and text interaction"
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

export default ConversationalAI;