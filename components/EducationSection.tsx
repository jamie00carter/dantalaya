
import React from 'react';

const EducationSection: React.FC = () => {
  const steps = [
    { number: "01", title: "Comprehensive Diagnosis", desc: "Visual exam + HD Intraoral scanning to see what's really happening." },
    { number: "02", title: "Transparent Counselling", desc: "We explain findings using diagrams and real-time imagery." },
    { number: "03", title: "Customized Planning", desc: "Selection of treatments tailored to your budget and time." },
    { number: "04", title: "Precision Treatment", desc: "Expert clinical execution with maximum comfort and zero pain." },
    { number: "05", title: "Post-Care Support", desc: "Detailed recovery guides and regular follow-ups for long-term health." }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              We <span className="gold-gradient">Educate</span> Before We Treat
            </h2>
            <p className="text-gray-600 text-lg">
              Dental anxiety often comes from the unknown. We remove the mystery by walking you through every step of your oral health journey.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <div className="inline-block px-8 py-4 rounded-full bg-amber-50 text-amber-800 font-bold border border-amber-200">
              The Dantalaya Process
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-6xl font-black text-amber-100 mb-4 group-hover:text-amber-200 transition-colors">
                {step.number}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-[2px] bg-amber-100"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
