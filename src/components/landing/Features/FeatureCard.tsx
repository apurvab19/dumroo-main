import React from 'react';
import { cn } from '../../lib/utils';
import type { FeatureCardProps } from './types';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div
      className={cn(
        'relative rounded-3xl bg-white/70 backdrop-blur-md border border-gray-200 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group'
      )}
    >
      {/* Icon */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-brand-100 to-brand-200 text-brand-600 group-hover:scale-105 transition-transform duration-300 shadow-sm">
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
