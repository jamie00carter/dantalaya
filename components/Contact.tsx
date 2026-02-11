
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-charcoal text-white rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl" style={{ backgroundColor: '#1A1A1A' }}>
          {/* Contact Info */}
          <div className="lg:w-2/5 p-12 lg:p-16 space-y-10 bg-[#242424]">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold">Visit the Studio</h2>
              <p className="text-gray-400">Step into a world of pain-free clinical excellence.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-gray-400">A-219, near K.R. Mangalam World School, Ansals Sushant City, Panipat, Haryana</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-gray-400">+91 9992111743 (Available 24/7)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Working Hours</h4>
                  <p className="text-gray-400 text-sm">Open 24 Hours / 7 Days a Week</p>
                  <div className="inline-block mt-2 px-3 py-1 bg-amber-500 text-white text-[10px] font-bold uppercase rounded">Emergency Unit Active</div>
                </div>
              </div>
            </div>

            <div className="pt-8">
               <div className="h-48 rounded-2xl overflow-hidden grayscale contrast-125 opacity-70">
                  <img 
                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=600" 
                    alt="Map Placeholder" 
                    className="w-full h-full object-cover"
                  />
               </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="lg:w-3/5 p-12 lg:p-16">
            <div className="mb-10">
              <h3 className="text-3xl font-bold mb-2">Book an Appointment</h3>
              <p className="text-gray-400">Fill the form and we'll confirm your slot shortly.</p>
            </div>

            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-[#2D2D2D] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-[#2D2D2D] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Service Required</label>
                <select className="w-full bg-[#2D2D2D] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-white appearance-none">
                  <option>General Consultation</option>
                  <option>Dental Implants</option>
                  <option>Cosmetic Dentistry</option>
                  <option>Root Canal (RCT)</option>
                  <option>Emergency Care</option>
                  <option>Path Lab Tests</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Message (Optional)</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your concern..."
                  className="w-full bg-[#2D2D2D] border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all text-white resize-none"
                ></textarea>
              </div>

              <button className="w-full py-5 gold-bg text-white rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-transform hover:scale-[1.02] active:scale-[0.98] shine">
                <Send size={20} />
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
