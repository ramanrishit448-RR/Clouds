import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MissionSection } from './components/MissionSection';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Modals } from './components/Modals';

export default function App() {
  const [activeModal, setActiveModal] = useState<'login' | 'get-started' | 'demo' | 'funding' | 'nav-info' | null>(null);
  const [activeNav, setActiveNav] = useState<string>('Home');
  const [selectedNavInfo, setSelectedNavInfo] = useState<string>('Home');

  const handleNavClick = (item: string) => {
    setActiveNav(item);
    if (item !== 'Home') {
      setSelectedNavInfo(item);
      setActiveModal('nav-info');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black relative">
      {/* Top Navigation Panel */}
      <Navbar 
        onLoginClick={() => setActiveModal('login')} 
        onNavClick={handleNavClick}
        activeNav={activeNav}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onGetStartedClick={() => setActiveModal('get-started')}
          onWatchDemoClick={() => setActiveModal('demo')}
        />
        <MissionSection 
          onExploreClick={() => {
            setSelectedNavInfo('Our Mission & Vision');
            setActiveModal('nav-info');
          }}
        />
        <ServicesSection 
          onCardClick={(serviceName) => {
            setSelectedNavInfo(serviceName);
            setActiveModal('nav-info');
          }}
        />
        <AboutSection 
          onReadMoreClick={() => {
            setSelectedNavInfo('About Us Story');
            setActiveModal('nav-info');
          }}
        />
        <TestimonialsSection 
          onBookMeetingClick={() => {
            setSelectedNavInfo('Book a Meeting');
            setActiveModal('nav-info');
          }}
          onClientClick={(clientName) => {
            setSelectedNavInfo(`Client Spotlight: ${clientName}`);
            setActiveModal('nav-info');
          }}
        />
      </main>

      {/* Interactive Modals */}
      <Modals 
        activeModal={activeModal} 
        onClose={() => setActiveModal(null)} 
        selectedNavInfo={selectedNavInfo}
      />
    </div>
  );
}
