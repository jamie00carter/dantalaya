
import React from 'react';
import { Star, Clock, ShieldCheck, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with premium aesthetic */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop"
          alt="Modern Dental Clinic"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-sm font-semibold animate-pulse">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Open 24 Hours • Emergency Care Available
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Premium <span className="gold-gradient">24-Hour</span> Dental Care in Panipat
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Advanced Dentistry with Expert Patient Counselling, Hygienic Care & Modern Clinical Excellence under Dr. Lakshit Gupta.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-4 gold-bg text-white rounded-full font-bold shadow-lg shine transition-all hover:shadow-xl hover:-translate-y-1"
            >
              Book Appointment
            </button>
            <a
              href="tel:+910000000000"
              className="w-full sm:w-auto px-10 py-4 border-2 gold-border text-[#C8A24D] rounded-full font-bold flex items-center justify-center gap-2 hover:bg-amber-50 transition-all"
            >
              Call Now
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <Star className="text-amber-500 fill-amber-500" size={18} />
              <div className="flex flex-col">
                <span className="text-sm font-bold">4.8 Rating</span>
                <span className="text-[10px] text-gray-400 uppercase">122 Reviews</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="text-amber-500" size={18} />
              <div className="flex flex-col">
                <span className="text-sm font-bold">24 Hours</span>
                <span className="text-[10px] text-gray-400 uppercase">Open Always</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="text-amber-500" size={18} />
              <div className="flex flex-col">
                <span className="text-sm font-bold">Inclusive</span>
                <span className="text-[10px] text-gray-400 uppercase">LGBTQ+ Friendly</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-amber-500" size={18} />
              <div className="flex flex-col">
                <span className="text-sm font-bold">High Hygiene</span>
                <span className="text-[10px] text-gray-400 uppercase">Sterilized</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="relative z-10 rounded-2xl overflow-hidden border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop"
              alt="Advanced Dental Technology"
              className="w-full h-auto"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
