import React from 'react';
import TestimonialCard from './TestimonialCard';
import type { Testimonial } from './types';

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

const TestimonialGrid: React.FC<TestimonialGridProps> = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
};

export default TestimonialGrid;