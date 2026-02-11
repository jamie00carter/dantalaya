
import React from 'react';
import { Clock, Zap, MessageSquare, ShieldCheck, UserCircle, MapPin, Heart } from 'lucide-react';

const WhyChoose: React.FC = () => {
  const points = [
    { title: "24-Hour Support", desc: "Emergency dental trauma and pain management any time.", icon: <Clock /> },
    { title: "Advanced Tech", desc: "Digital scanners and high-precision dental chairs.", icon: <Zap /> },
    { title: "Deep Counselling", desc: "We explain every option before we touch your teeth.", icon: <MessageSquare /> },
    { title: "Strict Hygiene", desc: "Class B Autoclave sterilization for every instrument.", icon: <ShieldCheck /> },
    { title: "Patient-Centric", desc: "Friendly staff that treats you like family.", icon: <UserCircle /> },
    { title: "Inclusive Care", desc: "A safe, welcoming space for the LGBTQ+ community.", icon: <Heart /> },
    { title: "Prime Location", desc: "Conveniently near K.R. Mangalam World School.", icon: <MapPin /> }
  ];

  return (
    <section id="why-us" className="py-24 bg-charcoal text-white" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              Why <span className="gold-gradient">Dantalaya</span> Stands Out
            </h2>
            <p className="text-gray-400 text-lg">
              We aren't just a dental clinic; we are a center for comprehensive oral health and aesthetic transformation in Panipat.
            </p>
            <div className="p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5">
              <span className="text-amber-500 font-bold block mb-2 text-xl">122+</span>
              <span className="text-gray-300 text-sm">Happy patients shared their 5-star experiences with us on Google.</span>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
            {points.map((point, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-500">
                  {React.cloneElement(point.icon as React.ReactElement, { size: 24 })}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-white">{point.title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
