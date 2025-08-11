import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';
import { cn } from '../lib/utils';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ 
  message, 
  type = 'success', 
  onClose,
  duration = 3000
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={cn(
      "fixed bottom-4 left-4 z-50", // Changed from right-4 to left-4
      "flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg",
      "animate-in slide-in-from-left-full duration-300", // Changed from slide-in-from-right-full
      type === 'success' ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
    )}>
      {type === 'success' ? (
        <CheckCircle className="h-5 w-5 text-green-500" />
      ) : (
        <XCircle className="h-5 w-5 text-red-500" />
      )}
      <p className="text-sm font-medium">{message}</p>
      <button 
        onClick={onClose}
        className="ml-2 p-1 rounded-full hover:bg-black/5 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Toast;