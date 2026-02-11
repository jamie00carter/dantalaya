
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-32 md:pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 flex items-center justify-center">
                <img 
                  src="a_give_a_clean_2d_logo (1).png" 
                  alt="Dantalaya Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight gold-gradient leading-none">DANTALAYA</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Dental Studio & Path Lab</span>
              </div>
            </div>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Premium 24-hour dental care provider in Ansal Panipat. Committed to luxury clinical excellence, expert counselling, and the highest hygiene standards.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Treatments</a></li>
              <li><a href="#why-us" className="hover:text-amber-500 transition-colors">Our Advantage</a></li>
              <li><a href="#gallery" className="hover:text-amber-500 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Emergency</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-3 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Patient Rights</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-400 uppercase tracking-widest font-bold">
          <p>© 2024 Dantalaya Dental Studio & Path Lab. All Rights Reserved.</p>
          <div className="flex gap-6">
            <span>24 Hour Dentist Panipat</span>
            <span>Dental Implants Panipat</span>
            <span>Emergency Dentist Panipat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
