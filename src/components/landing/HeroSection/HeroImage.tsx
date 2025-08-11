import React from 'react';

const HeroImage: React.FC = () => {
  return (
    <div className="mt-12 lg:mt-0 relative">
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-xl" />
      <img 
        src="https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg"
        alt="Children in a classroom learning together"
        className="rounded-xl shadow-2xl relative z-10"
      />
      <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-50 rounded-full z-0" />
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-full z-0" />
    </div>
  );
};

export default HeroImage;