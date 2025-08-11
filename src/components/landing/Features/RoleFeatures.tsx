import React from 'react';
import { GraduationCap, Users, UserCog, Users2 } from 'lucide-react';

const roleFeatures = {
  teachers: [
    { title: 'Smart Lesson Planning', description: 'Standards-based plans in minutes.' },
    { title: 'Personalized Learning', description: 'Adapts to every student\'s needs.' },
    { title: 'Effortless Grading', description: 'Save hours and boost accuracy.' },
    { title: 'Real-Time Analytics', description: 'Track progress to drive results.' },
  ],
  students: [
    { title: 'Personalized Learning Path', description: 'Learn at your own style and pace.' },
    { title: 'Interactive Content', description: 'Engage with dynamic materials.' },
    { title: 'Immediate Feedback', description: 'Get support exactly when you need it.' },
    { title: 'Track Your Progress', description: 'Watch your skills unfold.' },
  ],
  administrators: [
    { title: 'Comprehensive Oversight', description: 'School-wide visibility in seconds.' },
    { title: 'Data-Driven Decisions', description: 'Make choices with real-time data.' },
    { title: 'Ensure Standards Compliance', description: 'Stay aligned with requirements.' },
    { title: 'Streamline Operations', description: 'Reduce paperwork, maximize impact.' },
  ],
  parents: [
    { title: 'Stay Connected', description: 'Be part of the learning journey.' },
    { title: 'Seamless Communication', description: 'Direct access to teachers & staff.' },
    { title: 'Monitor Progress', description: 'Track grades, goals, and growth.' },
    { title: 'Support Learning at Home', description: 'Receive helpful activities.' },
  ],
};

const roles = [
  {
    icon: GraduationCap,
    title: 'For Teachers',
    features: roleFeatures.teachers,
    color: 'text-sky-600',
    img: 'https://t3.ftcdn.net/jpg/02/65/18/30/360_F_265183061_NkulfPZgRxbNg3rvYSNGGwi0iD7qbmOp.jpg',
  },
  {
    icon: Users,
    title: 'For Students',
    features: roleFeatures.students,
    color: 'text-emerald-600',
    img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: UserCog,
    title: 'For Administrators',
    features: roleFeatures.administrators,
    color: 'text-indigo-600',
    img: 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Users2,
    title: 'For Parents',
    features: roleFeatures.parents,
    color: 'text-amber-600',
    img: 'https://img.freepik.com/free-photo/parents-playing-with-child_23-2148463530.jpg?semt=ais_hybrid&w=740&q=80',
  },
];

const RoleFeatures: React.FC = () => {
  return (
    <div className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-3xl lg:text-4xl font-extrabold mb-4 text-center leading-tight">
            <span className="text-gray-900">Education</span>{' '}
            <span className="text-blue-600 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-blue-400 after:rounded-full">
              Redefined
            </span>
          </p>
          <p className="text-base text-gray-600 mb-14 text-center max-w-2xl mx-auto">
            Discover features designed specifically for every role in the modern educational landscape.
          </p>
        </div>


        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => (
            <div
              key={role.title}
              className="relative group bg-gray-50 border border-gray-200 rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg hover:border-gray-300"
            >
              {/* Top Image */}
              <div className="w-full h-36 overflow-hidden">
                <img
                  src={role.img}
                  alt={role.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-x-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gray-100 transition-transform group-hover:scale-105 ${role.color}`}>
                    <role.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-black">
                    {role.title}
                  </h3>
                </div>

                <ul className="mt-4 space-y-3">
                  {role.features.map((feature) => (
                    <li key={feature.title} className="flex items-start">
                      <svg className={`flex-shrink-0 mt-0.5 h-4 w-4 ${role.color}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <div className="ml-2">
                        <h4 className="text-sm font-semibold text-gray-800">
                          {feature.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subtle gradient border on hover */}
              <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                   style={{ background: `radial-gradient(circle at 50% 0%, ${role.color.replace('text-', '')}/10 0%, transparent 70%)` }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleFeatures;