import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import type { Testimonial } from './types';

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerSlide]);
  
  const totalSlides = useMemo(() => 
    Math.ceil(testimonials.length / itemsPerSlide), 
    [testimonials.length, itemsPerSlide]
  );
  
  const currentSlide = useMemo(() => 
    Math.floor(currentIndex / itemsPerSlide), 
    [currentIndex, itemsPerSlide]
  );

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((current) => {
        const nextIndex = current + itemsPerSlide;
        return (nextIndex >= testimonials.length) ? 0 : nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, itemsPerSlide]);

  const handleManualNavigation = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    setCurrentIndex((current) => {
      let newIndex;
      if (direction === 'next') {
        newIndex = current + itemsPerSlide;
        return (newIndex >= testimonials.length) ? 0 : newIndex;
      } else {
        newIndex = current - itemsPerSlide;
        return (newIndex < 0) ? (totalSlides - 1) * itemsPerSlide : newIndex;
      }
    });
  };

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="overflow-hidden px-10 md:px-12 py-10">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="flex-shrink-0 px-2 md:px-3"
              style={{ flexBasis: `${100 / itemsPerSlide}%` }}
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
      
      <button 
        onClick={() => handleManualNavigation('prev')}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 hover:scale-110 group"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-600 group-hover:text-brand-600" />
      </button>
      
      <button 
        onClick={() => handleManualNavigation('next')}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-all duration-200 hover:scale-110 group"
        aria-label="Next testimonials"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-600 group-hover:text-brand-600" />
      </button>

      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index * itemsPerSlide);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-brand-600 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;