
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const HygieneSection: React.FC = () => {
  return (
    <section id="hygiene" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop"
                alt="Sterilized Tools"
                className="rounded-3xl h-64 w-full object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop"
                alt="Clinic Interior"
                className="rounded-3xl h-48 w-full object-cover shadow-lg"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop"
                alt="Equipment"
                className="rounded-3xl h-48 w-full object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Chair"
                className="rounded-3xl h-64 w-full object-cover shadow-lg"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-amber-500 font-bold tracking-widest uppercase text-sm">Safety First</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Zero-Compromise <span className="gold-gradient">Hygiene Protocols</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Dantalaya, we follow international sterilization standards. Every instrument is packaged and processed through multi-stage sterilization to ensure 100% patient safety.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Hospital-Grade Chemical Disinfection",
                "Advanced Autoclave Technology (Class B)",
                "Disposable Single-Use Patient Kits",
                "Air Purification & HEPA Filtration",
                "Regular Water Quality Testing"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-[#C8A24D]" size={20} />
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-2xl bg-[#FDFBF7] border-l-4 gold-border">
              <p className="italic text-gray-700 text-lg">
                "Hygiene is our religion. We treat our patients with the same care we'd want for our own families."
              </p>
              <p className="mt-4 font-bold text-sm">— Dr. Lakshit Gupta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HygieneSection;
