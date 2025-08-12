// CallToAction.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../../ui/Button';

// const roadmap = [
//   { phase: "Now", detail: "Personalized AI-powered lessons" },
//   { phase: "Next", detail: "AI grading & feedback assistant" },
//   { phase: "Future", detail: "Global educator collaboration network" },
// ];

const CallToAction: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-brand-bg py-16 sm:py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
    
    {/* Left Side */}
    <div className="text-center"> {/* Center align text and children */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-4 leading-snug text-brand-main">
        Ready to Transform Your Teaching?
      </h2>
      <p className="text-sm sm:text-base text-brand-main/80 mb-8 max-w-lg mx-auto">
        Join us early and shape the future of AI-powered education. Your feedback will help us build tools that empower every educator worldwide.
      </p>
      <Button
        size="lg"
        className="bg-brand-aux1 text-brand-bg hover:bg-brand-aux1/90 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg mx-auto text-white"
        onClick={() => navigate('/register')}
      >
        Get Started Now
        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>

  

  </div>
</div>

  );
};

export default CallToAction;
