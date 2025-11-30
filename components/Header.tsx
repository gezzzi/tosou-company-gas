import React, { useState, useEffect } from 'react';
import { COMPANY_NAME, NAV_LINKS } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3 text-primary' 
          : 'bg-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
           <div className={`w-8 h-8 md:w-10 md:h-10 border-2 flex items-center justify-center font-serif font-bold text-lg md:text-xl transition-colors ${
               isScrolled ? 'border-primary text-primary' : 'border-white text-white'
           }`}>
             匠
           </div>
           <span className="font-serif font-bold text-xl md:text-2xl tracking-wide">{COMPANY_NAME}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className={`text-sm tracking-wider font-medium relative py-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? 'hover:text-accent' : 'hover:text-white/80'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact"
            className={`px-5 py-2 text-sm tracking-widest font-bold transition-colors border ${
                isScrolled 
                    ? 'border-primary bg-primary text-white hover:bg-white hover:text-primary' 
                    : 'border-white bg-white text-primary hover:bg-transparent hover:text-white'
            }`}
          >
            無料相談
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-primary font-medium border-b border-gray-100 pb-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};