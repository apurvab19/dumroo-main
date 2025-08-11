import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import { cn } from '../lib/utils';

interface EventPopupProps {
  onClose: () => void;
}

const EventPopup: React.FC<EventPopupProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={cn(
        "relative bg-white rounded-2xl shadow-2xl w-full max-w-lg",
        "transform transition-all duration-500",
        "animate-in fade-in slide-in-from-bottom-5"
      )}>
        {/* Event Image */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80" 
            alt="AI Education Summit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                AI Education Summit 2025
              </h2>
              <p className="text-gray-600">
                Join us for a transformative event exploring the future of AI in education. 
                Connect with educators, tech leaders, and innovators.
              </p>
            </div>

            <div className="space-y-3">
              {/* Date */}
              <div className="flex items-center gap-3 text-gray-600">
                <Calendar className="h-5 w-5 text-brand-600" />
                <span>March 25-27, 2025</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="h-5 w-5 text-brand-600" />
                <span>San Francisco Convention Center</span>
              </div>

              {/* Time */}
              <div className="flex items-center gap-3 text-gray-600">
                <Clock className="h-5 w-5 text-brand-600" />
                <span>9:00 AM - 5:00 PM PST</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-3 pt-4">
              <a
                href="/events"
                className={cn(
                  "flex-1 px-4 py-2 rounded-lg text-sm font-medium text-center",
                  "bg-brand-600 text-white",
                  "hover:bg-brand-700 transition-colors",
                  "shadow-lg shadow-brand-600/20"
                )}
              >
                Learn More
              </a>
              <a
                href="https://www.eventbrite.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-center gap-2",
                  "px-4 py-2 rounded-lg text-sm font-medium",
                  "border border-gray-200 text-gray-700",
                  "hover:bg-gray-50 transition-colors"
                )}
              >
                Register
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPopup;