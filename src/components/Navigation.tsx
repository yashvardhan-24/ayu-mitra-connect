
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="w-full bg-gray-900/80 backdrop-blur sticky top-0 z-50 flex items-center justify-between px-2 sm:px-4 md:px-6 lg:px-10 py-2 sm:py-3 shadow-lg animate-fadeInDown">
        <div className="flex items-center gap-2 sm:gap-3">
          <img 
            src="https://img.icons8.com/color/48/000000/heart-with-pulse--v2.png" 
            alt="Ayu Mitra Logo" 
            className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full shadow-xl border-2 sm:border-4 border-cyan-600 animate-pulse"
          />
          <span className="font-bold text-lg sm:text-xl md:text-2xl tracking-wide text-cyan-400">Ayu Mitra</span>
        </div>
        
        <div className="hidden lg:flex space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 text-sm md:text-base lg:text-lg font-medium">
          <a href="#features" className="hover:text-cyan-400 transition duration-200">Features</a>
          <a href="#assistant" className="hover:text-cyan-400 transition duration-200">Assistant</a>
          <a href="#tech" className="hover:text-cyan-400 transition duration-200">Technology</a>
          <a href="#impact" className="hover:text-cyan-400 transition duration-200">Impact</a>
          <a href="#demo" className="hover:text-cyan-400 transition duration-200">Demo</a>
          <a href="#contact" className="hover:text-cyan-400 transition duration-200">Contact</a>
          <a href="#support" className="hover:text-cyan-400 transition duration-200">Support</a>
        </div>
        
        <div className="hidden lg:flex items-center space-x-3 md:space-x-4">
          <Link 
            to="/login" 
            className="text-cyan-400 hover:text-cyan-300 transition duration-200 font-medium text-sm md:text-base"
          >
            Login
          </Link>
          <Link 
            to="/signup" 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full transition duration-200 font-medium text-sm md:text-base"
          >
            Sign Up
          </Link>
        </div>
        
        <button 
          className="lg:hidden block text-cyan-400 focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </nav>
      
      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden flex flex-col px-4 sm:px-6 py-3 sm:py-4 bg-gray-900/90 backdrop-blur z-40 animate-fadeInDown">
          <a href="#features" className="py-2 hover:text-cyan-400 transition text-sm sm:text-base">Features</a>
          <a href="#assistant" className="py-2 hover:text-cyan-400 transition text-sm sm:text-base">Assistant</a>
          <a href="#tech" className="py-2 hover:text-cyan-400 transition text-sm sm:text-base">Technology</a>
          <a href="#impact" className="py-2 hover:text-cyan-400 transition text-sm sm:text-base">Impact</a>
          <a href="#demo" className="py-2 hover:text-cyan-400 transition text-sm sm:text-base">Demo</a>
          <a href="#contact" className="py-2 hover:text-cyan-400 transition text-sm sm:text-base">Contact</a>
          <a href="#support" className="py-2 hover:text-cyan-400 transition text-sm sm:text-base">Support</a>
          <div className="border-t border-gray-600 mt-3 sm:mt-4 pt-3 sm:pt-4 flex flex-col space-y-2">
            <Link 
              to="/login" 
              className="py-2 text-cyan-400 hover:text-cyan-300 transition text-sm sm:text-base"
            >
              Login
            </Link>
            <Link 
              to="/signup" 
              className="py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg text-center transition text-sm sm:text-base"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
