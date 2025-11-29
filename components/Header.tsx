import React, { useState, useEffect } from 'react';
import * as Icons from '../constants/icons';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#Hero', text: 'Home' },
    { href: '#Features', text: 'Features' },
    { href: '#workflow', text: 'Workflow' },
    { href: '#pricing-div', text: 'Pricing' },
    { href: '#faq', text: 'FAQ' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <a href="#Hero" className="flex items-center gap-2">
            <Icons.VinsAILogo />
            <span className="text-xl font-bold">Vins AI</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.text}</a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="https://ai.studio/apps/drive/1LcpylLN2SLwh3jmBfpwHqONxWxYIEcDV" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-5 py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition-colors">
              Get Started Now
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-black/80 backdrop-blur-lg`}>
        <div className="flex flex-col items-center px-4 pt-2 pb-4 space-y-4">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white transition-colors py-2">{link.text}</a>
            ))}
            <a href="https://ai.studio/apps/drive/1LcpylLN2SLwh3jmBfpwHqONxWxYIEcDV" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="bg-white text-black px-6 py-2 rounded-full font-semibold w-full text-center hover:bg-gray-200 transition-colors">
              Get Started Now
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;