import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { cn } from '../lib/utils';

interface BackButtonProps {
  className?: string;
  label?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ 
  className,
  label = 'Back'
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={cn(
        "inline-flex items-center text-gray-600 hover:text-gray-900 group",
        className
      )}
    >
      <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
      {label}
    </button>
  );
};

export default BackButton;