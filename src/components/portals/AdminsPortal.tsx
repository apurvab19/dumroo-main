import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, School, Users, BarChart2, Settings, Shield, 
  Database, ChevronRight, Brain, Sparkles, Award, Layout,
  FileText, UserPlus, BellRing, Activity, GraduationCap, BookOpen, Target, Star, Trophy, Zap,
  Lightbulb, MessageSquare
} from 'lucide-react';
import { cn } from '../../lib/utils';
import Navigation from '../landing/Navigation';
import Footer from '../landing/Footer';

const features = [
  {
    title: "District Management",
    description: "Efficiently manage multiple schools and staff across your district",
    icon: Building2,
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Data Analytics",
    description: "Access comprehensive analytics and insights across all schools",
    icon: BarChart2,
    color: "from-purple-500 to-purple-600"
  },
  {
    title: "Staff Administration",
    description: "Streamline staff management and resource allocation",
    icon: Users,
    color: "from-green-500 to-green-600"
  },
  {
    title: "Policy Management",
    description: "Implement and monitor district-wide policies effectively",
    icon: Shield,
    color: "from-orange-500 to-orange-600"
  }
];

const tools = [
  {
    name: "Control Center",
    description: "Centralized dashboard for district management",
    icon: Layout,
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Staff Directory",
    description: "Comprehensive staff management system",
    icon: UserPlus,
    color: "bg-purple-100 text-purple-600"
  },
  {
    name: "Performance Metrics",
    description: "Track and analyze district-wide performance",
    icon: Activity,
    color: "bg-green-100 text-green-600"
  },
  {
    name: "Communication Hub",
    description: "District-wide announcements and updates",
    icon: BellRing,
    color: "bg-orange-100 text-orange-600"
  }
];

const benefits = [
  {
    title: "Efficient Management",
    description: "Streamline administrative tasks",
    icon: Settings,
    stat: "60%",
    color: "text-blue-600"
  },
  {
    title: "Data-Driven Decisions",
    description: "Make informed strategic choices",
    icon: Brain,
    stat: "90%",
    color: "text-purple-600"
  },
  {
    title: "Resource Optimization",
    description: "Better resource allocation",
    icon: Database,
    stat: "45%",
    color: "text-green-600"
  },
  {
    title: "Enhanced Communication",
    description: "Improved stakeholder engagement",
    icon: Sparkles,
    stat: "80%",
    color: "text-orange-600"
  }
];

const AdminsPortal: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center p-2 bg-brand-50 rounded-xl mb-8">
                <Building2 className="h-8 w-8 text-brand-600" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Empower Your Educational District
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Transform your district management with AI-powered tools designed for educational administrators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/register"
                  className={cn(
                    "px-8 py-4 rounded-xl text-white font-medium",
                    "bg-brand-600 hover:bg-brand-700",
                    "shadow-lg shadow-brand-600/20",
                    "transform transition-all duration-200",
                    "hover:-translate-y-0.5 hover:shadow-xl"
                  )}
                >
                  Get Started
                </Link>
            
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive District Management
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage your educational district effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className={cn(
                  "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  "bg-gradient-to-br blur-xl",
                  feature.color
                )} />
                <div className="relative">
                  <div className={cn(
                    "inline-flex p-3 rounded-xl mb-6",
                    "bg-gradient-to-br shadow-lg",
                    feature.color,
                    "transform transition-all duration-300",
                    "group-hover:scale-110 group-hover:rotate-3"
                  )}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools Section */}
        <div className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                AI-Powered Administrative Tools
              </h2>
              <p className="text-xl text-gray-600">
                Streamline your workflow with our suite of intelligent tools
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className={cn(
                    "inline-flex p-3 rounded-xl mb-4",
                    tool.color
                  )}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Dumroo AI
            </h2>
            <p className="text-xl text-gray-600">
              See the impact our platform has on district management
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={cn(
                    "p-3 rounded-xl",
                    "bg-opacity-10",
                    benefit.color.replace('text-', 'bg-')
                  )}>
                    <benefit.icon className={cn("h-6 w-6", benefit.color)} />
                  </div>
                  <span className={cn("text-2xl font-bold", benefit.color)}>
                    {benefit.stat}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brand-600 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="text-center max-w-3xl mx-auto">
                <Award className="h-12 w-12 text-brand-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ready to Transform Your District?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join leading educational districts already using Dumroo AI to enhance their administrative capabilities.
                  Get started today!
                </p>
                <Link
                  to="/register"
                  className={cn(
                    "inline-flex items-center gap-2",
                    "px-8 py-4 rounded-xl text-white font-medium",
                    "bg-brand-600 hover:bg-brand-700",
                    "shadow-lg shadow-brand-600/20",
                    "transform transition-all duration-200",
                    "hover:-translate-y-0.5 hover:shadow-xl"
                  )}
                >
                  Start Your Journey
                  <ChevronRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminsPortal;