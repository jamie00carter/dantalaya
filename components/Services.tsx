
import React from 'react';
import { ArrowRight, Microscope, Sparkles, Scissors, ShieldPlus, HeartPulse, UserRound } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Dental Implants",
      desc: "Permanent missing teeth replacement with advanced biocompatible titanium.",
      icon: <ShieldPlus className="text-[#C8A24D]" size={32} />,
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Enhancing aesthetics through veneers, bonding, and advanced tooth reshaping.",
      icon: <Sparkles className="text-[#C8A24D]" size={32} />,
    },
    {
      title: "Root Canal Treatment",
      desc: "Single-sitting, painless RCT using high-precision rotary instruments.",
      icon: <Scissors className="text-[#C8A24D]" size={32} />,
    },
    {
      title: "Smile Designing",
      desc: "Full mouth rehabilitation for a confident, perfectly aligned celebrity smile.",
      icon: <HeartPulse className="text-[#C8A24D]" size={32} />,
    },
    {
      title: "Preventive Dentistry",
      desc: "Routine cleanings, fluoride treatments, and comprehensive oral health audits.",
      icon: <UserRound className="text-[#C8A24D]" size={32} />,
    },
    {
      title: "Path Lab Services",
      desc: "Integrated clinical diagnostics for systemic health monitoring and tests.",
      icon: <Microscope className="text-[#C8A24D]" size={32} />,
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-sm font-bold text-[#C8A24D] uppercase tracking-widest">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold">Premium Structured Dental Care</h2>
          <p className="text-gray-600">Experience clinical precision merged with aesthetic artistry in our state-of-the-art studio.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-3xl bg-white border border-gray-100 shadow-sm transition-all hover:shadow-xl hover:border-amber-200"
            >
              <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.desc}</p>
              <button className="flex items-center gap-2 text-sm font-bold text-[#C8A24D] group-hover:gap-3 transition-all">
                CONSULT NOW <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 p-10 rounded-[3rem] gold-bg text-white flex flex-col md:flex-row items-center justify-between gap-8 shine">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Need clarity on your treatment?</h3>
            <p className="opacity-90">We offer detailed consultations with 3D scanning and full process explanations.</p>
          </div>
          <button className="px-10 py-4 bg-white text-[#C8A24D] rounded-full font-bold transition-transform hover:scale-105">
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
