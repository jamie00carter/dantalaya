
import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';

const EmergencySection: React.FC = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="Dental-Emergency.jpg"
          alt="Emergency Dental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/90"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border-2 border-red-500 text-red-500 font-black animate-bounce uppercase tracking-tighter">
            <AlertCircle size={20} />
            Dental Emergency?
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            We're Open <span className="gold-gradient">24 Hours</span>
          </h2>
          <p className="text-xl text-gray-300">
            Acute toothache? Trauma? Broken crown? Don't wait until morning. Our emergency response team is ready to provide immediate relief.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <a
              href="tel:+919992111743"
              className="px-12 py-5 gold-bg text-white rounded-full font-bold text-2xl flex items-center justify-center gap-4 shine shadow-2xl hover:scale-105 transition-all"
            >
              <Phone size={28} />
              Call Now: +91 99921 11743
            </a>
          </div>
          <p className="text-gray-400 font-medium">Located in Ansals Sushant City, Panipat</p>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
