// Announcement.tsx
import React from 'react';
import { Megaphone } from 'lucide-react';

const Announcement: React.FC = () => {
  return (
    <div className="bg-brand-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative flex items-center h-10"> {/* Added a fixed height for consistency */}
        {/* Gradient fade on left */}
        <div className="absolute left-0 w-8 sm:w-12 h-full bg-gradient-to-r from-brand-600 to-transparent z-10" /> {/* Responsive width */}
        
        {/* Icon and text container */}
        <div className="flex-shrink-0 px-3 sm:px-4 py-2.5 bg-brand-600 flex items-center gap-2 z-20"> {/* Adjusted padding */}
          <Megaphone className="h-4 w-4 animate-pulse" /> {/* Changed to pulse for a softer animation */}
          <span className="font-medium hidden sm:inline text-sm">Event:</span> {/* Smaller text on small screens */}
        </div>

        {/* Scrolling text container */}
        <div className="overflow-hidden flex-1">
          <div className="flex whitespace-nowrap animate-marquee">
            {/* Repeat the text multiple times to ensure continuous scrolling */}
            {[...Array(5)].map((_, i) => ( /* Increased repetitions for longer continuous scroll */
              <React.Fragment key={i}>
                <span className="inline-block px-4 text-sm sm:text-base"> {/* Responsive font size */}
                  Dumroo.ai is exhibiting at The AI Show @ ASU+GSV, San Diego, California. April 5-7, 2025. VISIT US AT BOOTH G26 (K12 ZONE)!
                </span>
                <span className="inline-block px-4 text-sm sm:text-base">•</span>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Gradient fade on right */}
        <div className="absolute right-0 w-8 sm:w-12 h-full bg-gradient-to-l from-brand-600 to-transparent z-10" /> {/* Responsive width */}
      </div>
    </div>
  );
};

export default Announcement;