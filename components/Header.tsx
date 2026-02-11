
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Hygiene', href: '#hygiene' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 flex items-center justify-center shine">
            <img 
              src="a_give_a_clean_2d_logo (1).png" 
              alt="Dantalaya Logo" 
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold tracking-tight gold-gradient leading-none">DANTALAYA</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium">Dental Studio & Path Lab</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-[#C8A24D] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-2 gold-bg text-white rounded-full text-sm font-bold shine transition-transform hover:scale-105 active:scale-95"
          >
            Book Appointment
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium border-b border-gray-100 pb-2"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}
            className="w-full py-4 gold-bg text-white rounded-lg font-bold mt-2"
          >
            Book Appointment
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
