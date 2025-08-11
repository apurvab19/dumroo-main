import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, ExternalLink, Users, QrCode, Building2, Video, UserCircle, Linkedin, Instagram, ArrowLeft, ChevronRight, Star, Award } from 'lucide-react';
import { cn } from '../lib/utils';
import PublicLayout from './layout/PublicLayout';
import eventCover from '../assets/eventcover.png';

// Event data
const events = [
  {
    id: 1,
    title: 'Arizona\'s Premier Homeschool Convention',
    shortTitle: 'Arizona\'s Homeschool Convention',
    subtitle: 'Arizona Families for Home Education',
    date: '2025-07-18',
    endDate: '2025-07-19',
    time: '7:30 AM - 6:30 PM (Arizona Time)',
    location: '33s 3rd St, Phoenix, AZ 85004-2417, United States',
    venue: 'Phoenix Convention Center',
    booth: 'Booth A15',
    description: 'Join us at Arizona\'s premier homeschool convention where families discover innovative educational solutions and cutting-edge AI tools.',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop',
    attendees: '3,000+',
    highlights: [
      'Interactive AI demos for homeschool families',
      'Personalized learning path consultations',
      'Free educational resources and guides',
      'Meet the Dumroo.ai team in person'
    ],
    virtualBooth: 'https://dumroo.ai/virtual-booth',
    scheduleDemo: 'https://calendly.com/dumroo/afhe-demo',
    meetFounder: 'https://outlook.office.com/bookwithme/user/3a5582e9498e4dec8cc7134182e0f11c@dumroo.ai',
    featured: true
  },
  {
    id: 2,
    title: 'DUMROO.AI @ The AI Show at ASU+GSV',
    shortTitle: 'ASU+GSV AI Show',
    subtitle: 'World\'s Leading EdTech Summit',
    date: '2025-04-05',
    endDate: '2025-04-07',
    time: '8:00 AM - 7:00 PM',
    location: '111 W Harbor Dr, San Diego, CA 92101',
    venue: 'San Diego Convention Center',
    booth: 'Booth G26 (K12 Zone)',
    description: 'World\'s leading education and workforce innovation summit featuring cutting-edge AI solutions.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
    attendees: '15,000+',
    highlights: [
      'AI ecosystem showcase',
      'Live demos of 12 micro-apps',
      'VIP afterparty invitation'
    ],
    virtualBooth: 'https://connect.asugsvshow.com/event/asu-gsv-the-ai-show/exhibitor/RXhoaWJpdG9yXzIxODUzNjg=',
    scheduleDemo: 'https://calendly.com/dumroo/demo-booking',
    meetFounder: 'https://outlook.office.com/bookwithme/user/3a5582e9498e4dec8cc7134182e0f11c@dumroo.ai',
    featured: false
  }
];

const announcements = [
  "🎪 Join us at Arizona's Homeschool Convention - July 18-19, 2025 in Phoenix",
  "🚀 Meet the Dumroo.ai team at leading education conferences nationwide",
  "📅 Book your demo session at upcoming events - Limited slots available",
  "🎯 Experience live AI demonstrations at Arizona Families for Home Education",
  "🏆 Don't miss exclusive event-only previews of new Dumroo.ai features",
  "📍 Visit us at Booth A15 - Phoenix Convention Center this July",
  "🎉 Special event pricing and offers available only at conferences"
];

interface CountdownProps {
  targetDate: string;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center justify-center gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-brand-50 border border-brand-200 rounded-lg p-3 min-w-[60px]">
            <div className="text-2xl font-bold text-gray-900">{value.toString().padStart(2, '0')}</div>
            <div className="text-xs text-gray-600 uppercase">{unit}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const MarqueeAnnouncements: React.FC = () => {
  return (
    <div className="bg-brand-600 text-white py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {announcements.concat(announcements).map((announcement, index) => (
          <span key={index} className="inline-flex items-center mx-8 text-sm font-medium">
            {announcement}
          </span>
        ))}
      </div>
    </div>
  );
};

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);
  const upcomingEvent = events.find(event => event.featured) || events[0];

  // Scroll to top when event is selected
  const handleEventSelect = (eventId: number) => {
    setSelectedEvent(eventId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top when going back to events list
  const handleBackToEvents = () => {
    setSelectedEvent(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (selectedEvent !== null) {
    const event = events.find(e => e.id === selectedEvent);
    if (!event) return null;

    return (
      <PublicLayout>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
          <MarqueeAnnouncements />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back Button */}
            <button
              onClick={handleBackToEvents}
              className="flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-6 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Events
            </button>

            {/* Event Hero */}
            <div className="relative rounded-2xl overflow-hidden mb-8">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 flex items-end">
                <div className="p-8 text-white">
                  <h1 className="text-4xl font-bold mb-2">{event.title}</h1>
                  <div className="flex items-center gap-4 text-white/90">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })} - {new Date(event.endDate).toLocaleDateString('en-US', { 
                        month: 'long', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      {event.venue}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Event Details */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <Calendar className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Date & Time</h3>
                        <p className="text-gray-600">{new Date(event.date).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</p>
                        <p className="text-gray-600">{event.time}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-50 rounded-lg">
                        <MapPin className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Location</h3>
                        <p className="text-gray-600">{event.venue}</p>
                        <p className="text-gray-600">{event.location}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-purple-50 rounded-lg">
                        <Building2 className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Booth Location</h3>
                        <p className="text-gray-600">{event.booth}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-orange-50 rounded-lg">
                        <Users className="h-5 w-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Expected Attendance</h3>
                        <p className="text-gray-600">{event.attendees} attendees</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Highlights */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Highlights</h2>
                  <div className="space-y-4">
                    {event.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Star className="h-5 w-5 text-yellow-500 mt-0.5" />
                        <p className="text-gray-700">{highlight}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* About Dumroo.ai */}
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">About Dumroo.ai</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-4">
                      Dumroo.ai is an AI Ecosystem for Education built to make data accessibility, personalized learning, and advanced analytics effortless for educators and leaders.
                    </p>
                    <p className="text-gray-700 mb-4">Our suite of AI-powered 12 micro-apps includes:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li>📘 Planning AI – Instantly generate high-quality, standards-aligned educational content</li>
                      <li>🎯 Personalize AI – Customize goals, learning paths, and materials for every student</li>
                      <li>📊 Performance AI – Evaluate student work and access real-time insights</li>
                      <li>📈 Analytics AI – Command district-to-student-level data in minutes, not days</li>
                      <li>👩‍🏫 Tutor AI – Deliver targeted, on-demand support tailored to individual learning needs</li>
                      <li>📝 Grading AI – Automate evaluation with accuracy, speed, and instructional feedback</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Column - Connect With Us */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Connect With Us</h2>
                  
                  {/* Virtual Booth */}
                  <div className="bg-gradient-to-br from-brand-50 to-white rounded-xl p-6 border border-brand-100 mb-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-brand-100 rounded-lg">
                        <QrCode className="h-5 w-5 text-brand-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Virtual Booth</h3>
                        <p className="text-gray-600 text-sm">Experience Dumroo AI virtually</p>
                      </div>
                    </div>
                    <a 
                      href={event.virtualBooth}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg text-white font-medium",
                        "bg-brand-600 hover:bg-brand-700 transition-colors",
                        "flex items-center justify-center gap-2",
                        "shadow-lg shadow-brand-600/20 hover:shadow-xl hover:shadow-brand-600/30"
                      )}
                    >
                      Visit Virtual Booth
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Schedule Demo */}
                  <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 mb-4">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Video className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Live Demo @ Booth</h3>
                        <p className="text-gray-600 text-sm">Experience our AI ecosystem live</p>
                      </div>
                    </div>
                    <a 
                      href={event.scheduleDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg text-white font-medium",
                        "bg-blue-600 hover:bg-blue-700 transition-colors",
                        "flex items-center justify-center gap-2",
                        "shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30"
                      )}
                    >
                      Schedule Demo
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Meet the Founder */}
                  <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 border border-purple-100">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <UserCircle className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">Meet the Founder</h3>
                        <p className="text-gray-600 text-sm">Discuss your educational AI needs</p>
                      </div>
                    </div>
                    <a 
                      href={event.meetFounder}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "w-full px-4 py-3 rounded-lg text-white font-medium",
                        "bg-purple-600 hover:bg-purple-700 transition-colors",
                        "flex items-center justify-center gap-2",
                        "shadow-lg shadow-purple-600/20 hover:shadow-xl hover:shadow-purple-600/30"
                      )}
                    >
                      Book Meeting
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-gray-100">
                    <a
                      href="https://www.linkedin.com/company/dumroo-ai-ecosystem-for-education"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-blue-600" />
                    </a>
                    <a
                      href="https://www.instagram.com/dumroo.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                    >
                      <Instagram className="h-6 w-6 text-blue-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PublicLayout>
    );
  }

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
        {/* Announcements Marquee */}
        <MarqueeAnnouncements />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Upcoming Events Title - Outside */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center p-3 bg-brand-50 rounded-xl mb-4">
              <Calendar className="h-8 w-8 text-brand-600 animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Upcoming Events
            </h1>
            <p className="text-lg text-gray-600">
              Join Dumroo.ai at leading education conferences and events
            </p>
          </div>

          {/* Combined Image and Event Details */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden mb-8">
            {/* Image Section */}
            <div className="relative h-48">
              <img 
                src={eventCover} 
                alt="Education Conference"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/60 to-brand-700/60" />
            </div>

            {/* Event Details and Countdown Section */}
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{upcomingEvent.shortTitle}</h2>
                <p className="text-gray-600 text-base font-medium mb-4">{upcomingEvent.subtitle}</p>
                <div className="bg-brand-50 rounded-lg p-3 inline-block border border-brand-100">
                  <p className="text-brand-700 font-semibold">
                    {new Date(upcomingEvent.date).toLocaleDateString('en-US', { 
                      weekday: 'long',
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })} - {new Date(upcomingEvent.endDate).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-center text-gray-700 font-medium mb-4">Event starts in:</p>
                <Countdown targetDate={upcomingEvent.date} />
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-brand-50 rounded-full px-4 py-2 border border-brand-100">
                  <MapPin className="h-4 w-4 text-brand-600" />
                  <span className="text-brand-700 font-medium">{upcomingEvent.venue}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">All Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {events.map((event) => (
                <div 
                  key={event.id}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  onClick={() => handleEventSelect(event.id)}
                >
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {event.featured && (
                      <div className="absolute top-4 left-4 bg-brand-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        Featured
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-600 transition-colors">
                        {event.title}
                      </h3>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-brand-600 transition-colors" />
                    </div>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4" />
                        {new Date(event.date).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })} - {new Date(event.endDate).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="h-4 w-4" />
                        {event.venue}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="h-4 w-4" />
                        {event.attendees} attendees
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-brand-600 to-brand-700 rounded-xl shadow-xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Transform Education?</h2>
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
              Experience the future of education technology and see how Dumroo AI is revolutionizing the classroom experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://calendly.com/comms-dumroo/dumroo-demo-for-admin"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-6 py-3 rounded-lg font-medium",
                  "bg-white text-brand-600",
                  "hover:bg-gray-50 transition-colors",
                  "flex items-center justify-center gap-2",
                  "shadow-lg shadow-black/10 hover:shadow-xl"
                )}
              >
                Schedule Demo
                <ExternalLink className="h-4 w-4" />
              </a>
              <a 
                href="https://outlook.office.com/bookwithme/user/3a5582e9498e4dec8cc7134182e0f11c@dumroo.ai/meetingtype/em2-a8gxkk-kpq4zjXe8TA2?anonymous&ep=mlink"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "px-6 py-3 rounded-lg font-medium",
                  "bg-brand-500 text-white",
                  "hover:bg-brand-400 transition-colors",
                  "flex items-center justify-center gap-2",
                  "shadow-lg shadow-black/10 hover:shadow-xl"
                )}
              >
                Meet the Founder
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
};

export default Events;