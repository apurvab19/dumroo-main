import React from "react";
import { Check } from "lucide-react";

const VideoS: React.FC = () => {
  return (
    <section className="relative py-12 bg-white">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Video */}
        <div className="relative w-full rounded-xl overflow-hidden shadow-lg">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/U1lwAlcKvWY?si=s4mlsMYCJ5jKhvp1"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              title="Platform Overview"
              className="absolute top-0 left-0 w-full h-full rounded-xl"
            ></iframe>
          </div>
        </div>

        {/* Right Side Text */}
        <div className="text-left space-y-4">
          <h2 className="text-3xl font-extrabold text-black tracking-tight ">
            Revolutionize Learning with Dumroo.ai
          </h2>
          <p className="text-sm text-gray-700">
            📚 Whether you’re planning lessons, tracking student progress, or supporting learning at home, Dumroo.ai gives you:
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium">
              <Check className="w-3.5 h-3.5" />
              AI-powered lesson planning
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 text-indigo-700 border border-indigo-200 rounded-full text-xs font-medium">
              <Check className="w-3.5 h-3.5" />
              Real-time voice assistant for classrooms
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-medium">
              <Check className="w-3.5 h-3.5" />
              Smart grading & assessments
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-medium">
              <Check className="w-3.5 h-3.5" />
              Personalized learning paths
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-50 text-rose-700 border border-rose-200 rounded-full text-xs font-medium">
              <Check className="w-3.5 h-3.5" />
              Instant analytics & parent tools
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VideoS;
