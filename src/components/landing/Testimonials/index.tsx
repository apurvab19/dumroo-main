import React from 'react';
import TestimonialCarousel from './TestimonialCarousel';
import { testimonials } from './data';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 scroll-mt-16 overflow-hidden bg-gradient-to-b from-blue-100 to-white">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            className="text-3xl lg:text-4xl font-extrabold mb-4 text-center leading-tight"
            variants={itemVariants}
          >
            <span className="text-gray-900">Loved by Educators</span>{' '}
            <span className="text-brand-600 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-400 after:rounded-full">
              Worldwide
            </span>
          </motion.h2>
          <motion.p
            className="text-base text-gray-600 mb-14 text-center max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Join thousands of educators who are transforming their teaching experience
          </motion.p>
        </div>

        
        <motion.div variants={itemVariants}>
          <TestimonialCarousel testimonials={testimonials} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Testimonials;