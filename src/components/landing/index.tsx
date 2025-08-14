import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertTriangle, X, Crown, CreditCard, RefreshCcw } from 'lucide-react';
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
      setTimeout(() => {
        scrollTo(location.state.scrollTo);
      }, 100);
    }
  }, [location.state?.scrollTo, scrollTo]);

  // Check for July discount notification on component mount
  useEffect(() => {
    const hasSeenJulyNotification = sessionStorage.getItem('july_discount_notification_seen');
    if (!hasSeenJulyNotification) {
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
    <div className="min-h-screen overflow-x-hidden font-sans">
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

      {/* Redesigned Notification Popup */}
      {showJulyNotification && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-xl mx-auto border border-gray-200 relative animate-in zoom-in-95 duration-500">
            <button
              onClick={handleCloseJulyNotification}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#ffbd4a] rounded-full flex items-center justify-center text-white shadow-md">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    July Special Pricing!
                  </h3>
                  <p className="text-sm text-gray-500">Limited time offer</p>
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-4xl font-extrabold text-[#325bff] tracking-tight">
                  <span className="text-6xl">60% OFF</span>
                </p>
                <p className="text-lg font-medium text-gray-600 mt-1">
                  Limited-time offer for the entire year
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg">
                  <Crown className="h-4 w-4 text-yellow-500" />
                  <span>14 Days Free Trial</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg">
                  <CreditCard className="h-4 w-4 text-blue-500" />
                  <span>No Credit Card</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg">
                  <RefreshCcw className="h-4 w-4 text-green-500" />
                  <span>Cancel Anytime</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    handleCloseJulyNotification();
                    navigate('/pricing');
                  }}
                  className="bg-[#325bff] hover:-translate-y-1 hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold flex-1 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                >
                  <Crown className="h-5 w-5" />
                  Start Free Trial
                </button>
                <button
                  onClick={handleCloseJulyNotification}
                  className="bg-gray-100 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-lg text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors flex-1"
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;