import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle, BarChart2 } from 'lucide-react';
import PublicLayout from '../layout/PublicLayout';

const AttendanceAI: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Attendance AI</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Intelligent attendance tracking and analytics for improved student engagement
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Smart Attendance Management
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our AI-powered attendance system goes beyond simple present/absent tracking. Get detailed insights into attendance patterns, early warning signals, and automated interventions for at-risk students.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-brand-50 rounded-lg">
                    <Calendar className="h-5 w-5 text-brand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Automated Tracking</h3>
                    <p className="text-gray-600">Effortless attendance recording and management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Pattern Recognition</h3>
                    <p className="text-gray-600">Identify attendance trends and potential issues</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-50 rounded-lg">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-time Monitoring</h3>
                    <p className="text-gray-600">Live attendance tracking and instant notifications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-orange-50 rounded-lg">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Early Intervention</h3>
                    <p className="text-gray-600">Proactive alerts for attendance concerns</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/20 to-transparent rounded-xl" />
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80"
                alt="Attendance tracking"
                className="rounded-xl shadow-2xl relative z-10"
              />
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Smart Scheduling",
                description: "Intelligent attendance scheduling and reminders"
              },
              {
                icon: BarChart2,
                title: "Advanced Analytics",
                description: "Detailed attendance analytics and reporting"
              },
              {
                icon: AlertCircle,
                title: "Risk Prevention",
                description: "Early warning system for attendance issues"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="p-3 bg-brand-50 rounded-lg w-fit mb-4">
                  <feature.icon className="h-6 w-6 text-brand-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default AttendanceAI;