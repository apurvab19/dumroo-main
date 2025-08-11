import React, { useState } from 'react';
import { Check, X, ArrowRight, Building2, User, Users, Zap, Sparkles, BookOpen, Calendar, MessageSquare, Mic, Brain, Accessibility } from 'lucide-react';
import { cn } from '../lib/utils';

// Define pricing tiers
const pricingTiers = [
  {
    name: 'Basic',
    description: 'Essential tools for individual teachers',
    price: 8,
    discountedPrice: 4.8,
    features: [
      { name: 'ContentAI', included: true, icon: <BookOpen className="h-4 w-4 text-brand-600" /> },
      { name: 'PlanningAI', included: true, icon: <Calendar className="h-4 w-4 text-brand-600" /> },
      { name: 'RoobooAI', included: true, icon: <Brain className="h-4 w-4 text-brand-600" /> },
      { name: 'SpecialAI', included: false, icon: <Accessibility className="h-4 w-4 text-gray-400" /> },
      { name: 'PersonalizeAI', included: false, icon: <Users className="h-4 w-4 text-gray-400" /> },
      { name: 'AttendanceAI', included: false, icon: <Check className="h-4 w-4 text-gray-400" /> },
      { name: 'Rooboo Voice AI', included: false, icon: <Mic className="h-4 w-4 text-gray-400" /> },
    ],
    cta: 'Get Started',
    color: 'blue',
    icon: <User className="h-6 w-6" />
  },
  {
    name: 'Premium',
    description: 'Advanced tools for enhanced teaching',
    price: 15,
    discountedPrice: 9,
    features: [
      { name: 'ContentAI', included: true, icon: <BookOpen className="h-4 w-4 text-brand-600" /> },
      { name: 'PlanningAI', included: true, icon: <Calendar className="h-4 w-4 text-brand-600" /> },
      { name: 'RoobooAI', included: true, icon: <Brain className="h-4 w-4 text-brand-600" /> },
      { name: 'SpecialAI', included: true, icon: <Accessibility className="h-4 w-4 text-brand-600" /> },
      { name: 'PersonalizeAI', included: true, icon: <Users className="h-4 w-4 text-brand-600" /> },
      { name: 'AttendanceAI', included: true, icon: <Check className="h-4 w-4 text-brand-600" /> },
      { name: 'Rooboo Voice AI', included: true, icon: <Mic className="h-4 w-4 text-brand-600" /> },
    ],
    cta: 'Upgrade Now',
    color: 'purple',
    popular: true,
    icon: <Zap className="h-6 w-6" />
  },
  {
    name: 'Enterprise',
    description: 'Custom solutions for schools & districts',
    price: null,
    features: [
      { name: 'All Premium features', included: true, icon: <Check className="h-4 w-4 text-brand-600" /> },
      { name: 'Custom integrations', included: true, icon: <Sparkles className="h-4 w-4 text-brand-600" /> },
      { name: 'Dedicated support', included: true, icon: <MessageSquare className="h-4 w-4 text-brand-600" /> },
      { name: 'Advanced analytics', included: true, icon: <Zap className="h-4 w-4 text-brand-600" /> },
      { name: 'Unlimited users', included: true, icon: <Users className="h-4 w-4 text-brand-600" /> },
      { name: 'Custom training', included: true, icon: <BookOpen className="h-4 w-4 text-brand-600" /> },
      { name: 'Priority feature requests', included: true, icon: <Sparkles className="h-4 w-4 text-brand-600" /> },
    ],
    cta: 'Contact Us',
    color: 'green',
    icon: <Building2 className="h-6 w-6" />
  }
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [showPromotion, setShowPromotion] = useState(true);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-5 text-xl text-gray-500">
            Choose the plan that's right for you and transform your teaching experience with AI.
          </p>
          
          {/* Promotion Banner */}
          {showPromotion && (
            <div className="mt-8 relative">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-4 rounded-xl shadow-lg animate-pulse">
                <button 
                  className="absolute top-2 right-2 text-white/80 hover:text-white"
                  onClick={() => setShowPromotion(false)}
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                  <span className="font-bold">Special May Offer:</span>
                  <span>Get 40% off all plans this month only!</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Billing Cycle Toggle */}
          <div className="mt-12 flex justify-center">
            <div className="relative bg-white p-1 rounded-lg shadow-sm inline-flex">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-all",
                  billingCycle === 'monthly'
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-all",
                  billingCycle === 'annual'
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                Annual
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => {
            // Calculate prices based on billing cycle
            const regularPrice = tier.price ? (billingCycle === 'annual' ? tier.price * 0.8 : tier.price) : null;
            const discountedPrice = tier.discountedPrice ? (billingCycle === 'annual' ? tier.discountedPrice * 0.8 : tier.discountedPrice) : null;
            
            // Format prices for display
            const priceDisplay = regularPrice ? `$${regularPrice.toFixed(2)}` : 'Custom';
            const discountedPriceDisplay = discountedPrice ? `$${discountedPrice.toFixed(2)}` : null;
            
            // Determine color classes
            const colorClasses = {
              blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                text: 'text-blue-700',
                button: 'bg-blue-600 hover:bg-blue-700',
                icon: 'bg-blue-100 text-blue-600'
              },
              purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                text: 'text-purple-700',
                button: 'bg-purple-600 hover:bg-purple-700',
                icon: 'bg-purple-100 text-purple-600'
              },
              green: {
                bg: 'bg-green-50',
                border: 'border-green-200',
                text: 'text-green-700',
                button: 'bg-green-600 hover:bg-green-700',
                icon: 'bg-green-100 text-green-600'
              }
            };
            
            const colors = colorClasses[tier.color as keyof typeof colorClasses];

            return (
              <div 
                key={tier.name}
                className={cn(
                  "relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl",
                  "border-2",
                  tier.popular ? "border-purple-400 scale-105 z-10" : "border-gray-200"
                )}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                    Most Popular
                  </div>
                )}
                
                <div className="bg-white p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={cn(
                      "p-3 rounded-xl",
                      colors.icon
                    )}>
                      {tier.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{tier.name}</h3>
                      <p className="text-gray-500">{tier.description}</p>
                    </div>
                  </div>
                  
                  {/* Pricing */}
                  <div className="mb-8">
                    {regularPrice ? (
                      <>
                        <div className="flex items-baseline">
                          {discountedPriceDisplay ? (
                            <>
                              <span className="text-3xl font-bold text-gray-900">{discountedPriceDisplay}</span>
                              <span className="ml-2 text-xl text-gray-500 line-through">{priceDisplay}</span>
                            </>
                          ) : (
                            <span className="text-3xl font-bold text-gray-900">{priceDisplay}</span>
                          )}
                          <span className="ml-2 text-gray-500">/{billingCycle === 'monthly' ? 'month' : 'month, billed annually'}</span>
                        </div>
                        {discountedPriceDisplay && (
                          <div className="mt-2 inline-block bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-md">
                            40% off for May only!
                          </div>
                        )}
                      </>
                    ) : (
                      <div className="text-3xl font-bold text-gray-900">Custom Pricing</div>
                    )}
                  </div>
                  
                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          feature.icon || <Check className="h-5 w-5 text-brand-600 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <button
                    className={cn(
                      "w-full py-3 px-4 rounded-xl text-white font-medium",
                      "flex items-center justify-center gap-2",
                      "transition-all duration-300",
                      "shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                      colors.button
                    )}
                  >
                    {tier.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in the Basic plan?</h3>
              <p className="text-gray-600">
                The Basic plan includes ContentAI for creating teaching materials, PlanningAI for lesson planning, and RoobooAI for personalized assistance. It's perfect for individual teachers looking to enhance their teaching with AI.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How does the 40% discount work?</h3>
              <p className="text-gray-600">
                For the month of May only, we're offering a 40% discount on all plans. The discount is automatically applied at checkout. After May, your subscription will continue at the regular price unless canceled.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I switch between plans?</h3>
              <p className="text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. If you upgrade, you'll be charged the prorated difference. If you downgrade, the new rate will apply at the start of your next billing cycle.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What's the difference between Premium and Enterprise?</h3>
              <p className="text-gray-600">
                Premium is designed for individual teachers who need access to our full suite of AI tools. Enterprise is tailored for schools and districts with custom integrations, dedicated support, and unlimited users. Contact us for a custom Enterprise quote.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial available?</h3>
              <p className="text-gray-600">
                Yes, we offer a 14-day free trial for both Basic and Premium plans. No credit card required to start. You can experience all features before deciding which plan is right for you.
              </p>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="mt-24 bg-gradient-to-r from-brand-600 to-brand-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 sm:py-16 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need a custom solution?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss how Dumroo AI can be tailored to your school or district's specific needs.
            </p>
            <button className="bg-white text-brand-600 hover:bg-gray-100 transition-colors px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 inline-flex items-center gap-2">
              Contact Sales
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;