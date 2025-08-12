import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../../../ui/Button';

const FeaturesCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-16 text-center">
      <Button 
        size="lg"
        className="bg-brand-600 text-white hover:bg-brand-600/90 shadow-lg hover:shadow-xl transition-all"
        onClick={() => navigate('/register')}
      >
        Start Transforming Your Teaching
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="mt-4 text-sm text-gray-600">
        Join thousands of educators already using our platform
      </p>
    </div>
  );
};

export default FeaturesCTA;