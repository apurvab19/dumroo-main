import React from "react";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="text-white py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left Section */}
          <div className="mb-10 lg:mb-0">
            <div className="text-left space-y-6 my-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-600/10 rounded-full text-brand-600 text-xs font-medium">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-sparkles h-3.5 w-3.5"
                >
                  <path d="M12 3l-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                  <path d="M5 3v4" />
                  <path d="M19 17v4" />
                  <path d="M3 5h4" />
                  <path d="M17 19h4" />
                </svg>
                <span>AI-Powered Education Platform</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-snug text-black text-left">
              Transform Education With
              <br />
              <span className="inline-block text-blue-600 ">
                AI Innovation
              </span>
            </h1>
            <p className="text-black py-4">Dumroo.ai is revolutionizing education with an AI-powered ecosystem that unites educators, students, administrators, and parents. Empower innovation, foster excellence, and create limitless possibilities where technology meets learning.</p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-wrap gap-3">
              <button
                className="bg-[#325bff] text-white hover:bg-[#274ccc] px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                onClick={() => {
                  window.location.href = "/register";
                }}
              >
                Get Started
              </button>
              </div>
              <button
                className="border border-[#325bff] text-[#325bff] hover:bg-[#325bff] hover:text-[#ffffff] px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1 hover:shadow-lg"
                onClick={() =>
                  window.open(
                    "https://www.loom.com/embed/68884a8305f644b9a2b5ae2413fbf755?sid=97644856-7a8c-494c-a3c7-cde7e8098fde&hide_share=true&hideEmbedTopBar=true&hide_title=true&hide_owner=true&hideBrowserUI=true&hideControls=true&autoplay=0&muted=0",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
              <span>Watch Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            </div>

            {/* Avatars */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
                  "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
                  "https://images.unsplash.com/photo-1492366254240-43affaefc3e3"
                ].map((url, i) => (
                  <img
                    key={i}
                    src={`${url}?w=60&q=80`}
                    alt="Early user"
                    className="w-9 h-9 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-xs text-gray-600">
                Backed by our <span className="font-semibold">early users</span>
              </p>
            </div>
          </div>

          {/* Right Section - Image Grid */}
          <div className="relative px-4">
            <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[460px]">
              {/* Big image (2x2) */}
              <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl">
                <img
                  src="https://img.freepik.com/free-photo/happy-black-teacher-schoolgirl-using-digital-tablet-classroom_637285-9450.jpg"
                  alt="Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Wide top-right image (2x1) */}
              <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl">
                <img
                  src="https://media.assettype.com/deccanherald%2F2024-12-13%2Fe6mk8i41%2Ffile7wzentnxtxxrnvwwi72.jpg"
                  alt="Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Small square images */}
              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl">
                <img
                  src="https://images.prismic.io/bakertilly/ZxAvs4F3NbkBXmmQ_Artificialintelligenceinpalmofmanshand.jpg"
                  alt="Presentation"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/030/710/111/small_2x/happy-male-teacher-in-an-elementary-school-classroom-generative-ai-photo.jpg"
                  alt="Coding"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Wide bottom image (2x1) */}
              <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl">
                <img
                  src="https://www.shutterstock.com/image-photo/elearning-technology-webinar-online-education-600nw-2473841673.jpg"
                  alt="Workspace"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Final bottom-right image (2x1) */}
              <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden transition-transform transform hover:scale-[1.02] hover:shadow-xl">
                <img
                  src="https://media.istockphoto.com/id/1783743772/photo/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.jpg?s=612x612&w=0&k=20&c=T0Sit9sSbrafPXlY0vjadvEf-dyI8-t4uTY5W1TFzWU="
                  alt="Innovation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
