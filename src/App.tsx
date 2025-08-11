import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing';
import About from './components/About';
import Contact from './components/Contact';
import Blog from './components/Blog';
import News from './components/News';
import Privacy from './components/Privacy';
import Sitemap from './components/Sitemap';
import WhitePaper from './components/WhitePaper';
import TeacherPricing from './components/teacher-pricing';

// Product pages
import AnalyticsAI from './components/products/AnalyticsAI';
import AttendanceAI from './components/products/AttendanceAI';
import CommunityAI from './components/products/CommunityAI';
import ContentAI from './components/products/ContentAI';
import EngagementAI from './components/products/EngagementAI';
import GamifyAI from './components/products/GamifyAI';
import GradingAI from './components/products/GradingAI';
import NavigationAI from './components/products/NavigationAI';
import PerformanceAI from './components/products/PerformanceAI';
import PersonalizeAI from './components/products/PersonalizeAI';
import ProgressionAI from './components/products/ProgressionAI';
import RoobooAI from './components/products/RoobooAI';
import RoobooVoiceAI from './components/products/RoobooVoiceAI';
import TutorAI from './components/products/TutorAI';

// Portal pages
import TeachersPortal from './components/portals/TeachersPortal';
import StudentsPortal from './components/portals/StudentsPortal';
import ParentsPortal from './components/portals/ParentsPortal';
import AdminsPortal from './components/portals/AdminsPortal';
import HomeschoolingEducatorPortal from './components/portals/HomeschoolingEducatorPortal';

// UI Components
import Toast from './ui/Toast';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Landing />} />
          
          {/* Static Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/whitepaper" element={<WhitePaper />} />
          <Route path="/pricing" element={<TeacherPricing />} />
          
          {/* Product Pages */}
          <Route path="/products/analytics-ai" element={<AnalyticsAI />} />
          <Route path="/products/attendance-ai" element={<AttendanceAI />} />
          <Route path="/products/community-ai" element={<CommunityAI />} />
          <Route path="/products/content-ai" element={<ContentAI />} />
          <Route path="/products/engagement-ai" element={<EngagementAI />} />
          <Route path="/products/gamify-ai" element={<GamifyAI />} />
          <Route path="/products/grading-ai" element={<GradingAI />} />
          <Route path="/products/navigation-ai" element={<NavigationAI />} />
          <Route path="/products/performance-ai" element={<PerformanceAI />} />
          <Route path="/products/personalize-ai" element={<PersonalizeAI />} />
          <Route path="/products/progression-ai" element={<ProgressionAI />} />
          <Route path="/products/rooboo-ai" element={<RoobooAI />} />
          <Route path="/products/rooboo-voice-ai" element={<RoobooVoiceAI />} />
          <Route path="/products/tutor-ai" element={<TutorAI />} />
          
          {/* Portal Pages */}
          <Route path="/portals/teachers" element={<TeachersPortal />} />
          <Route path="/portals/students" element={<StudentsPortal />} />
          <Route path="/portals/parents" element={<ParentsPortal />} />
          <Route path="/portals/admins" element={<AdminsPortal />} />
          <Route path="/portals/homeschooling" element={<HomeschoolingEducatorPortal />} />
        </Routes>
        
        {/* Global Toast Component */}
        <Toast />
      </div>
    </Router>
  );
}

export default App; 