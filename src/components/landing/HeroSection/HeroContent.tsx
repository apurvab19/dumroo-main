import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Button from '../../../ui/Button';

interface HeroContentProps {
  onWatchDemo?: () => void;
}

const HeroContent: React.FC<HeroContentProps> = ({ onWatchDemo }) => {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState('');
  const fullText =
    "Dumroo.ai is revolutionizing education with an AI-powered ecosystem that unites educators, students, administrators, and parents. Empower innovation, foster excellence, and create limitless possibilities—where technology meets learning.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 25);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left: Text Section */}
      <div className="space-y-8 text-left">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-100 text-brand-700 text-sm font-medium shadow-sm animate-fade-in-up animation-delay-100">
          <PlayCircle className="w-4 h-4" />
          <span>AI-Powered Education Platform</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 animate-fade-in-up animation-delay-200">
          Revolutionize Learning
          <span className="block text-brand-600">With Intelligent Innovation</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed animate-fade-in-up animation-delay-300">
          {typedText}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
          <Button
            size="lg"
            onClick={() => navigate('/register')}
            className="bg-brand-600 hover:bg-brand-700 text-white rounded-full px-6 py-3 shadow-md transition-all group"
          >
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>

          <Button
  variant="outline"
  size="lg"
  onClick={() =>
    window.open(
      "https://www.loom.com/embed/68884a8305f644b9a2b5ae2413fbf755?sid=97644856-7a8c-494c-a3c7-cde7e8098fde&hide_share=true&hideEmbedTopBar=true&hide_title=true&hide_owner=true&hideBrowserUI=true&hideControls=true&autoplay=0&muted=0",
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="border border-brand-600 text-brand-600 hover:bg-brand-50 rounded-full px-6 py-3 transition-all"
>
  Watch Demo
</Button>
        </div>
      </div>

      
    </div>
  );
};

export default HeroContent;
