
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import HygieneSection from './components/HygieneSection';
import EducationSection from './components/EducationSection';
import EmergencySection from './components/EmergencySection';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import { Phone, Calendar } from 'lucide-react';

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2D2D2D]">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <WhyChoose />
        <HygieneSection />
        <EducationSection />
        <EmergencySection />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Sticky Mobile Bar */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex shadow-2xl">
          <a
            href="tel:+910000000000"
            className="flex-1 py-4 flex items-center justify-center gap-2 bg-charcoal text-[#C8A24D] font-bold border-r border-gray-100"
            style={{ backgroundColor: '#2D2D2D' }}
          >
            <Phone size={20} />
            <span>Call Now</span>
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-1 py-4 flex items-center justify-center gap-2 gold-bg text-white font-bold"
          >
            <Calendar size={20} />
            <span>Book Appointment</span>
          </button>
        </div>
      )}

      {/* Floating Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default App;
