import React from 'react';
import FeatureCard from './FeatureCard';
import { features } from './data';

const FeaturesGrid: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature) => (
        <FeatureCard
          key={feature.title}
          {...feature}
        />
      ))}
    </div>
  );
};

export default FeaturesGrid;