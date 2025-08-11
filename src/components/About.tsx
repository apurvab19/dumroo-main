import React, { useState } from 'react';
import { GraduationCap, Users, Globe, Award, Rocket, Brain, Linkedin } from 'lucide-react';
import { cn } from '../lib/utils';
import PublicLayout from './layout/PublicLayout';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedIn: string;
  bio: string;
}

const leadershipTeam: TeamMember[] = [
  {
    name: 'Alok Rai',
    role: 'Founder & CEO',
    image: 'https://i.imgur.com/F6rv7W3.jpg',
    linkedIn: 'https://www.linkedin.com/in/alok-rai/',
    bio: 'Alok Rai is the visionary founder and CEO of Dumroo AI, bringing over 15 years of experience in education technology and artificial intelligence. His passion for transforming education through innovative technology has been the driving force behind Dumroo AI\'s mission to revolutionize learning experiences.'
  },
  {
    name: 'Savya Rai',
    role: 'President & CMO',
    image: 'https://i.imgur.com/v03exXe.png?2',
    linkedIn: 'https://www.linkedin.com/in/savya-rai-86a29017a/',
    bio: 'Savya Rai leads Dumroo AI\'s strategic marketing initiatives and business development. With a keen understanding of educational technology trends and market dynamics, she plays a crucial role in shaping the company\'s growth and market presence.'
  },
  {
    name: 'Kenneth Frattini',
    role: 'EdTech AI Advisor',
    image: 'https://i.imgur.com/7f7YQPz.png?1',
    linkedIn: 'https://www.linkedin.com/in/kenneth-frattini-164031306/',
    bio: 'Kenneth Frattini brings extensive expertise in educational technology and AI research to Dumroo AI. His insights and guidance help ensure our platform remains at the cutting edge of AI-powered educational solutions while maintaining pedagogical effectiveness.'
  }
];


const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-full perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={cn(
        "absolute inset-0 w-full h-full transform-style-3d transition-all duration-500",
        isFlipped ? "rotate-y-180" : ""
      )}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="h-full bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center">
            <div className="relative mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <a 
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={cn(
                  "absolute bottom-0 right-1/3 p-2 rounded-full",
                  "bg-[#0A66C2] text-white",
                  "transform transition-transform duration-300 hover:scale-110"
                )}
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="mt-4 text-sm text-gray-500">Click to learn more</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="h-full bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{member.name}</h3>
            <p className="text-gray-600">{member.bio}</p>
            <div className="mt-4 text-sm text-gray-500">Click to flip back</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Hero Section */}
        <div className="bg-brand-600 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Dumroo AI</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transforming education through artificial intelligence and innovation
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed">
                  To revolutionize education by providing cutting-edge AI tools that empower teachers,
                  engage students, and create personalized learning experiences that adapt to each
                  student's unique needs and potential.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed">
                  To create a world where every student has access to personalized, high-quality
                  education powered by artificial intelligence, fostering a lifelong love of learning
                  and enabling every individual to reach their full potential.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Stats */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-600 mb-2">50k+</div>
                <div className="text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-600 mb-2">150+</div>
                <div className="text-gray-600">Schools</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-600 mb-2">98%</div>
                <div className="text-gray-600">Teacher Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-600 mb-2">25+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">
                  Continuously pushing the boundaries of what's possible in education through
                  cutting-edge AI technology.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="p-3 bg-green-50 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusivity</h3>
                <p className="text-gray-600">
                  Ensuring our platform is accessible and beneficial to all learners,
                  regardless of their background or learning style.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">
                  Maintaining the highest standards in educational technology and
                  customer support.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {leadershipTeam.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us in Transforming Education</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the future of education with Dumroo AI's innovative platform.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/register"
                className="px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
              >
                Get Started Free
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-brand-600 text-brand-600 rounded-lg hover:bg-brand-50 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default About;