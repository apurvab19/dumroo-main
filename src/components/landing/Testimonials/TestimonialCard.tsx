import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import type { TestimonialCardProps } from './types';
import { cn } from '../../../lib/utils';
import { motion } from 'framer-motion';

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = testimonial.quote.length > 150;
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div 
      className="relative h-full"
      variants={cardVariants}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      <div className="max-w-lg rounded-lg shadow-lg border bg-white p-6 space-y-2 flex flex-col h-full ">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 flex-shrink-0 rounded-full overflow-hidden text-white text-lg font-semibold flex items-center justify-center">
            {testimonial.image ? (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-full w-full object-cover"
              />
            ) : (
              testimonial.name
                .split(' ')
                .map((n) => n[0])
                .join('')
                .toUpperCase()
            )}
          </div>
          <div>
            <h4 className="text-gray-900 font-medium">{testimonial.name}</h4>
            <p className="text-gray-600 text-sm">{testimonial.role}</p>
          </div>
        </div>

        {/* Stars */}
        <div className="flex text-red-500 text-xl">
          {'★'.repeat(testimonial.rating)}
          {'☆'.repeat(5 - testimonial.rating)}
        </div>

        {/* Quote */}
        <blockquote
          className={cn(
            "text-gray-700 flex-grow",
            !isExpanded && shouldTruncate && "line-clamp-4"
          )}
        >
          "{testimonial.quote}"
        </blockquote>

        {/* Read more */}
        {shouldTruncate && (
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#325bff] font-medium cursor-pointer hover:underline"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </div>
        )}
      </div>

    </motion.div>
  );
};

export default TestimonialCard;