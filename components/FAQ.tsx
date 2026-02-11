
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is dental treatment painful?",
      a: "Not at Dantalaya. We use ultra-fine needles for anesthesia and advanced pain-management protocols to ensure you feel minimal to no discomfort during any procedure."
    },
    {
      q: "How long does a dental implant take?",
      a: "The clinical procedure for placing the implant takes about 60 minutes. However, the full healing process takes 3-6 months before the final permanent crown is attached."
    },
    {
      q: "Are you really open at night?",
      a: "Yes! We are one of the few clinics in Panipat that offer 24-hour emergency dental support. Whether it's 3 PM or 3 AM, our doors are open for trauma and acute pain."
    },
    {
      q: "What safety measures are followed?",
      a: "We follow strict sterilization protocols including chemical disinfection, Class B Autoclave usage, and 100% disposable kits for patient safety."
    },
    {
      q: "Do you provide missing teeth replacement?",
      a: "Yes, we specialize in multiple options including titanium implants, zirconium bridges, and high-quality flexible dentures depending on your preference."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#FDFBF7]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <span className="text-amber-500 font-bold uppercase tracking-widest text-sm">Have Questions?</span>
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-bold">{faq.q}</span>
                {openIndex === idx ? <Minus className="text-[#C8A24D]" /> : <Plus className="text-[#C8A24D]" />}
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
