import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertTriangle, X, Crown } from 'lucide-react';
import Navigation from './Navigation';
import Announcement from './Announcement';
import Hero from './HeroSection';
import Products from './Products';
import RoleFeatures from './Features/RoleFeatures';
import Features2 from './Features2';
import WhyChoose from './WhyChoose';
import Testimonials from './Testimonials';
import VideoS from './VideoSection/VideoSection';
import CallToAction from './CallToAction';
import Footer from './Footer';
import { useScrollTo } from '../../hooks/useScrollTo';

const Landing: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scrollTo = useScrollTo();
  const [showJulyNotification, setShowJulyNotification] = useState(false);

  // Handle scroll to section after navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      // Small delay to ensure content is rendered
      setTimeout(() => {
        scrollTo(location.state.scrollTo);
      }, 100);
    }
  }, [location.state?.scrollTo, scrollTo]);

  // Check for July discount notification on component mount
  useEffect(() => {
    const hasSeenJulyNotification = sessionStorage.getItem('july_discount_notification_seen');
    if (!hasSeenJulyNotification) {
      // Show popup after a short delay to ensure page is loaded
      setTimeout(() => {
        setShowJulyNotification(true);
      }, 2000);
    }
  }, []);

  const handleCloseJulyNotification = () => {
    setShowJulyNotification(false);
    sessionStorage.setItem('july_discount_notification_seen', 'true');
  };

  return (
    <div className="min-h-screen overflow-x-hidden"> {/* Prevent horizontal scroll on all screens */}
      <Navigation />
      <Announcement />
      <Hero />
      <VideoS />
      <Products />
      <RoleFeatures />
      <Features2 />
      <WhyChoose />
      <Testimonials />
      <CallToAction />
      <Footer />

      {/* July Discount Notification Popup */}
      {showJulyNotification && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 rounded-3xl shadow-2xl max-w-lg w-full border-2 border-red-200/50 relative overflow-hidden animate-in zoom-in-95 duration-500">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-bl from-red-200/30 to-transparent rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-tr from-orange-200/30 to-transparent rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12"></div>
            
            <div className="relative p-8">
              {/* Header with close button */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                    <AlertTriangle className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-red-700 to-orange-600 bg-clip-text text-transparent">
                      🔥 July Special Pricing!
                    </h3>
                    <p className="text-red-600 text-sm font-medium">Limited time offer • Act fast!</p>
                  </div>
                </div>
                <button
                  onClick={handleCloseJulyNotification}
                  className="text-red-400 hover:text-red-600 transition-all duration-200 p-2 hover:bg-red-100 rounded-xl"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Content */}
              <div className="space-y-4 mb-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-5 border border-red-200/50 shadow-sm">
                  <p className="text-red-700 font-bold text-xl text-center">
                    🔥 <span className="text-3xl">60% OFF</span> July Special
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 border border-blue-200/50">
                  <p className="text-blue-700 font-semibold text-center">
                    📅 <span className="bg-blue-200 px-2 py-1 rounded-lg">14 Days Free Trial</span>
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200/50">
                  <p className="text-green-700 font-semibold text-center">
                    🎯 Start now & get same price for entire year
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-3 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-white/10"></div>
                  <p className="text-white font-bold text-sm relative z-10 flex items-center justify-center gap-2">
                    <span className="animate-pulse">⏰</span>
                    Limited time - Act fast!
                    <span className="animate-pulse">🚀</span>
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    handleCloseJulyNotification();
                    navigate('/pricing');
                  }}
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 justify-center group"
                >
                  <Crown className="h-5 w-5 group-hover:animate-bounce" />
                  Start Free Trial
                </button>
                <button
                  onClick={() => {
                    handleCloseJulyNotification();
                    navigate('/pricing');
                  }}
                  className="bg-white/80 backdrop-blur-sm hover:bg-white text-red-700 border-2 border-red-300 hover:border-red-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  More Info
                </button>
              </div>
              
              {/* Trust indicators */}
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span>Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;