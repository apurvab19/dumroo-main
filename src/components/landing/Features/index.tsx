import React from 'react';
import { features } from './data';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Education
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how our AI-powered platform transforms the educational experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const gradients = [
              'from-brand-600 to-purple-600',
              'from-blue-500 to-sky-500',
              'from-green-500 to-teal-500',
              'from-yellow-500 to-orange-500',
              'from-red-500 to-pink-500',
              'from-indigo-500 to-violet-500',
            ];
            const gradient = gradients[index % gradients.length];

            return (
              <div 
                key={feature.title}
                className="relative h-[320px] bg-white rounded-xl shadow-lg overflow-hidden group"
              >
                {/* Face 1: Content */}
                <div className="p-6 box-border h-full">
                  <div className="bg-brand-50 p-3 rounded-lg w-fit mb-4 transition-colors group-hover:bg-brand-100">
                    <feature.icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <div className="mt-20">
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>

                {/* Face 2: Title Overlay */}
                <div className={`absolute bottom-0 left-0 w-full h-full bg-gradient-to-br ${gradient} flex justify-center items-center transition-all duration-500 ease-in-out group-hover:h-[80px] rounded-t-xl`}>
                  <h3 className="text-white text-center p-4 text-4xl font-bold transition-all duration-500 ease-in-out group-hover:text-2xl">
                    {feature.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;