import React from 'react';
import { Lightbulb, Brain, Sparkles, Target, BarChart as ChartBar, Users, Shield, Lock, Cloud, CheckCircle, Mail, Globe } from 'lucide-react';
import PublicLayout from './layout/PublicLayout';

const WhitePaper: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-brand-50 rounded-xl mb-6 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-400/20 to-brand-500/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <Brain className="h-8 w-8 text-brand-600 relative animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Dumroo AI White Paper
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transforming Education Through Artificial Intelligence
            </p>
          </div>

          {/* Executive Summary */}
          <section className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-brand-600" />
              Executive Summary
            </h2>
            <p className="text-gray-600 mb-4">
              Dumroo AI represents a paradigm shift in educational technology, offering a comprehensive AI-powered ecosystem that seamlessly integrates with existing educational frameworks. Our platform addresses the growing need for personalized learning experiences while reducing administrative burden on educators.
            </p>
            <p className="text-gray-600">
              This white paper outlines our technical architecture, pedagogical approach, and the transformative impact of our AI solutions in modern education.
            </p>
          </section>

          {/* Micro-Apps & Products */}
          <section className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Brain className="h-6 w-6 text-brand-600" />
              AI-Powered Micro-Apps
            </h2>
            
            <div className="space-y-8">
              {/* Content AI */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-blue-600" />
                  Content AI
                </h3>
                <p className="text-gray-600">
                  Intelligent content creation and curriculum development platform that helps educators create engaging, standards-aligned materials:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                    <span>AI-powered lesson planning with differentiation suggestions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                    <span>Automated assessment generation with question banks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                    <span>Interactive worksheet and activity creation</span>
                  </li>
                </ul>
              </div>

              {/* Progression AI */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Progression AI
                </h3>
                <p className="text-gray-600">
                  Advanced learning progression tracking and analysis system:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2" />
                    <span>Real-time progress monitoring across subjects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2" />
                    <span>Predictive analytics for learning outcomes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-2" />
                    <span>Personalized learning path recommendations</span>
                  </li>
                </ul>
              </div>

              {/* Performance AI */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <ChartBar className="h-5 w-5 text-purple-600" />
                  Performance AI
                </h3>
                <p className="text-gray-600">
                  Comprehensive student performance analysis and reporting:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                    <span>AI-driven performance assessment and feedback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                    <span>Skill gap identification and remediation planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600 mt-2" />
                    <span>Automated progress reports and analytics</span>
                  </li>
                </ul>
              </div>

              {/* Personalize AI */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                  <Users className="h-5 w-5 text-orange-600" />
                  Personalize AI
                </h3>
                <p className="text-gray-600">
                  Individualized learning experience customization:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2" />
                    <span>Learning style analysis and adaptation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2" />
                    <span>Dynamic content difficulty adjustment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-600 mt-2" />
                    <span>Personalized resource recommendations</span>
                  </li>
                </ul>
              </div>

              {/* Additional Products */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Engagement AI</h4>
                  <p className="text-sm text-gray-600">Student engagement tracking and optimization</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Attendance AI</h4>
                  <p className="text-sm text-gray-600">Smart attendance management system</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Analytics AI</h4>
                  <p className="text-sm text-gray-600">Advanced educational data analytics</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Navigation AI</h4>
                  <p className="text-sm text-gray-600">Voice-enabled platform navigation</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Tutor AI</h4>
                  <p className="text-sm text-gray-600">Personalized AI tutoring assistance</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Community AI</h4>
                  <p className="text-sm text-gray-600">Educational community engagement platform</p>
                </div>
              </div>
            </div>
          </section>

          {/* Stakeholder Portals */}
          <section className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="h-6 w-6 text-brand-600" />
              Stakeholder Portals
            </h2>

            <div className="space-y-8">
              {/* District Admin Portal */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">District Administrator Portal</h3>
                <p className="text-gray-600">Comprehensive district-wide management and oversight:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Multi-school performance monitoring and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>District-wide policy implementation and tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Resource allocation and optimization tools</span>
                  </li>
                </ul>
              </div>

              {/* School Admin Portal */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">School Administrator Portal</h3>
                <p className="text-gray-600">School-level management and coordination:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Teacher and staff management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Curriculum oversight and alignment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>School performance analytics</span>
                  </li>
                </ul>
              </div>

              {/* Teacher Portal */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Teacher Portal</h3>
                <p className="text-gray-600">Comprehensive teaching and classroom management:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>AI-powered lesson planning and content creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Student performance tracking and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Automated grading and feedback generation</span>
                  </li>
                </ul>
              </div>

              {/* Student Portal */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Student Portal</h3>
                <p className="text-gray-600">Personalized learning experience:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Adaptive learning paths and content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Progress tracking and goal setting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>AI tutoring and homework assistance</span>
                  </li>
                </ul>
              </div>

              {/* Parent Portal */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Parent Portal</h3>
                <p className="text-gray-600">Real-time student progress monitoring:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Student performance tracking and alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Direct communication with teachers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2" />
                    <span>Assignment and grade monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Core Technology */}
          <section className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Brain className="h-6 w-6 text-brand-600" />
              Core Technology
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-brand-600" />
                  AI Models
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Advanced Large Language Models
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Real-time Voice Processing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Computer Vision for Content Analysis
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                  <Target className="h-5 w-5 text-brand-600" />
                  Key Features
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Personalized Learning Paths
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Automated Assessment
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Real-time Analytics
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Security & Privacy */}
          <section className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-brand-600" />
              Security & Privacy
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                  <Lock className="h-5 w-5 text-brand-600" />
                  Data Protection
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    End-to-end encryption for all data
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    GDPR and FERPA compliant
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Regular security audits
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                  <Cloud className="h-5 w-5 text-brand-600" />
                  Infrastructure
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Distributed cloud architecture
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    99.9% uptime guarantee
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    Automatic backups and redundancy
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <div className="bg-brand-50/50 rounded-xl p-8 my-8 border border-brand-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
            <p className="text-gray-700 mb-4">
              Dumroo.ai is fully committed to ensuring compliance with FERPA, COPPA, GDPR, CIPA, and other student data protection laws. By implementing advanced encryption, AI transparency, and strict data governance policies, we provide a safe, compliant, and effective learning platform for schools and districts.
            </p>
            <p className="text-gray-700">
              We welcome the School District Board to review our compliance documentation and security policies in greater detail.
            </p>
          </div>

          {/* Contact Section */}
          <div className="bg-brand-50 rounded-xl p-8 my-8">
            <h2 className="flex items-center gap-3 text-gray-900 mt-0 mb-6">
              <div className="p-2 bg-white rounded-lg">
                <Mail className="h-6 w-6 text-brand-600" />
              </div>
              Contact Us
            </h2>
            <p className="text-gray-700 mb-4">
              For further inquiries or compliance verification, please contact:
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:compliance@dumroo.ai"
                className="flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors"
              >
                <Mail className="h-4 w-4" />
                compliance@dumroo.ai
              </a>
              <a 
                href="https://www.dumroo.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-600 hover:text-brand-700 transition-colors"
              >
                <Globe className="h-4 w-4" />
                www.dumroo.ai
              </a>
            </div>
          </div>

          <div className="text-center text-gray-600">
            <p>
              We look forward to partnering with you to create a safe and secure learning environment for students. 🚀
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default WhitePaper;
