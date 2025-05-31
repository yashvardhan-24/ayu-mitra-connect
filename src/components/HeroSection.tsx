
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-4 md:px-16 py-10 md:py-20 gap-8 md:gap-10 animate-fade-in">
      <div className="max-w-xl w-full">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-cyan-400 drop-shadow-lg animate-pulse">
          Ayu Mitra
        </h1>
        <p className="text-base md:text-xl mb-8 leading-relaxed text-gray-200 bg-gray-900/40 rounded-lg p-4 transition duration-300">
          <span className="text-cyan-300 font-semibold">Powered by LifeNet.AI</span> – Your intelligent, 
          <span className="font-semibold text-cyan-200"> multilingual AI health companion</span> for rural, 
          elderly, students, and underserved communities across India.
        </p>
        <a 
          href="mailto:yash.vardhan2023@glbajajgroup.org" 
          className="inline-block px-7 py-3 rounded-full bg-cyan-500 text-white font-bold shadow-lg ring-2 ring-cyan-400 hover:bg-cyan-600 transition duration-200 hover:scale-105"
        >
          Get in Touch
        </a>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img 
          src="https://img.freepik.com/premium-vector/ai-healthcare-technology-concept-artificial-intelligence-medical-robot-assistant-doctor_625536-23.jpg" 
          alt="AI Healthcare Illustration" 
          className="max-h-72 md:max-h-80 rounded-3xl shadow-2xl border-4 border-cyan-500 transition-transform duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
};

export default HeroSection;
