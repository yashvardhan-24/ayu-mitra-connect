
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#assistant', label: 'Assistant' },
    { href: '#tech', label: 'Technology' },
    { href: '#impact', label: 'Impact' },
    { href: '#demo', label: 'Demo' },
    { href: '#team', label: 'Team' },
    { href: '#support', label: 'Support' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="w-full bg-gray-900/80 backdrop-blur sticky top-0 z-50 flex items-center justify-between px-4 md:px-10 py-3 shadow-lg animate-fade-in">
        <div className="flex items-center gap-3">
          <img 
            src="https://img.icons8.com/color/48/000000/heart-with-pulse--v2.png" 
            alt="Ayu Mitra Logo" 
            className="h-9 w-9 rounded-full shadow-xl border-4 border-cyan-600 animate-pulse"
          />
          <span className="font-bold text-xl md:text-2xl tracking-wide text-cyan-400">Ayu Mitra</span>
        </div>
        
        <div className="hidden lg:flex space-x-4 md:space-x-8 text-sm md:text-lg font-medium">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="hover:text-cyan-400 transition duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <button 
          className="lg:hidden block text-cyan-400 focus:outline-none" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </nav>
      
      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col px-6 py-4 bg-gray-900/90 backdrop-blur z-40 animate-fade-in">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="py-2 hover:text-cyan-400 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
