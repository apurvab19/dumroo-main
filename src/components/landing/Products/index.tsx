import React from "react";
import {
  Brain,
  TrendingUp,
  Activity,
  Users,
  BarChart2,
  Bot
} from "lucide-react";

const products = [
  {
    name: "Content AI",
    description: "AI-powered content creation and lesson planning.",
    icon: Brain,
    link: "/products/content-ai",
    color: "text-blue-500",
    bgColor: "bg-blue-100",
  },
  {
    name: "Progression AI",
    description: "Track and optimize student learning progress.",
    icon: TrendingUp,
    link: "/products/progress-ai",
    color: "text-green-500",
    bgColor: "bg-green-100",
  },
  {
    name: "Performance AI",
    description: "Monitor and analyze student performance.",
    icon: Activity,
    link: "/products/performance-ai",
    color: "text-red-500",
    bgColor: "bg-red-100",
  },
  {
    name: "Personalize AI",
    description: "Customize learning for each student.",
    icon: Users,
    link: "/products/personalize-ai",
    color: "text-purple-500",
    bgColor: "bg-purple-100",
  },
  {
    name: "Analytics AI",
    description: "Data-driven insights for better decisions.",
    icon: BarChart2,
    link: "/products/analytics-ai",
    color: "text-yellow-500",
    bgColor: "bg-yellow-100",
  },
  {
    name: "Rooboo AI",
    description: "Your intelligent teaching companion.",
    icon: Bot,
    link: "/products/rooboo-ai",
    color: "text-indigo-500",
    bgColor: "bg-indigo-100",
  }
];

export const Component = () => {
  return (
    <div className="bg-white">
  {/* Section Header */}
  <div className="text-center mb-8 max-w-xl mx-auto py-8 px-4">
    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight text-gray-900">
      AI Solutions
    </h2>
    <p className="text-sm sm:text-base text-gray-600 mb-10 max-w-2xl mx-auto">
      Explore our cutting-edge AI-powered tools designed to enhance every aspect of education.
    </p>
  </div>

  {/* Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-11 max-w-5xl mx-auto px-4">
    {products.map((product) => (
      <div
        key={product.name}
        className="relative bg-white p-4 sm:p-5 rounded-xl border border-gray-200 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 flex flex-col items-center"
      >
        {/* Icon container */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className={`w-12 h-12 sm:w-16 sm:h-16 ${product.bgColor} rounded-full flex items-center justify-center`}
          >
            <product.icon
              className={`w-6 h-6 sm:w-8 sm:h-8 ${product.color}`}
            />
          </div>
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <h3 className="font-semibold text-base sm:text-lg text-gray-900 mb-1">
            {product.name}
          </h3>
          <p className="text-gray-500 text-xs sm:text-sm mb-4 flex-grow">
            {product.description}
          </p>

          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex self-start items-center gap-1.5 sm:gap-2 px-2.5 py-1 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Explore
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 sm:h-3.5 sm:w-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Component;
