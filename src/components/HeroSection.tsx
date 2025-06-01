
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-2 sm:px-4 md:px-8 lg:px-16 py-6 sm:py-10 md:py-16 lg:py-20 gap-4 sm:gap-6 md:gap-8 lg:gap-10 animate-fade-in relative z-10">
      <div className="max-w-xl w-full text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold mb-4 sm:mb-6 text-cyan-400 drop-shadow-lg animate-pulse leading-tight">
          Ayu Mitra
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-6 sm:mb-8 leading-relaxed text-gray-200 bg-gray-900/40 rounded-lg p-3 sm:p-4 transition duration-300">
          <span className="text-cyan-300 font-semibold">Powered by LifeNet.AI</span> – Your intelligent, 
          <span className="font-semibold text-cyan-200"> multilingual AI health companion</span> for rural, 
          elderly, students, and underserved communities across India.
        </p>
        <a 
          href="mailto:yash.vardhan2023@glbajajgroup.org" 
          className="inline-block px-5 sm:px-6 md:px-7 py-2 sm:py-3 rounded-full bg-cyan-500 text-white font-bold shadow-lg ring-2 ring-cyan-400 hover:bg-cyan-600 transition duration-200 hover:scale-105 text-sm sm:text-base md:text-lg"
        >
          Get in Touch
        </a>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img 
          src="https://img.freepik.com/premium-vector/modern-healthcare-technology-concept-doctor-with-digital-interface-medical-data-ai-assistance_1287720-12345.jpg" 
          alt="AI Healthcare Technology" 
          className="max-h-48 sm:max-h-60 md:max-h-72 lg:max-h-80 xl:max-h-96 w-auto rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-cyan-500 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default HeroSection;
