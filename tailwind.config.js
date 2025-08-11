/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
    '!./src/prompts/**/*' // Exclude prompts directory
  ],
  darkMode: 'class',
  safelist: [
    'bg-gradient-to-br from-pink-500/80 via-pink-500/90 to-pink-600',
    'bg-gradient-to-br from-teal-500/80 via-teal-500/90 to-teal-600',
    'bg-gradient-to-br from-yellow-500/80 via-yellow-500/90 to-yellow-600',
    'bg-gradient-to-br from-indigo-500/80 via-indigo-500/90 to-indigo-600',
    'bg-gradient-to-br from-cyan-500/80 via-cyan-500/90 to-cyan-600',
    'bg-gradient-to-br from-emerald-500/80 via-emerald-500/90 to-emerald-600',
    'bg-gradient-to-br from-amber-500/80 via-amber-500/90 to-amber-600',
    'bg-gradient-to-br from-purple-500/80 via-purple-500/90 to-purple-600',
    'bg-gradient-to-br from-blue-500/80 via-blue-500/90 to-blue-600',
    'bg-gradient-to-br from-green-500/80 via-green-500/90 to-green-600',
    'bg-gradient-to-br from-orange-500/80 via-orange-500/90 to-orange-600',
    'group-hover:text-white',
    'text-white'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#325bff',
          main: '#ffffff',
          aux1: '#ffbd4a',
          aux2: '#325bff',
          50: '#f5f7ff',
          100: '#ebf0ff',
          600: '#325bff',
          700: '#2a4ee6'
        },
      },
      // Added the custom breakpoint here
      screens: {
        'xl-custom': '1142px',
      },
      
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        scroll: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' }
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        // Added fade-in-up keyframe
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
      },
      animation: {
        'marquee': 'marquee linear infinite',
        'marquee-reverse': 'marquee-reverse linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'scroll': 'scroll 5s linear infinite',
        'blob': 'blob 7s infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        // Added fade-in-up animation
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      }
    },
  },
  plugins: [
    // Existing plugins...
    // Added the custom utility plugin for animation delays
    function ({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-100': {
          'animation-delay': '0.1s',
        },
        '.animation-delay-200': {
          'animation-delay': '0.2s',
        },
        '.animation-delay-300': {
          'animation-delay': '0.3s',
        },
        '.animation-delay-400': {
          'animation-delay': '0.4s',
        },
        // Add more as needed
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
