
import React from 'react';

const ImpactSection = () => {
  return (
    <section id="impact" className="px-4 md:px-16 py-12 bg-white/5 rounded-3xl max-w-6xl mx-auto my-8 animate-fade-in">
      <h2 className="text-3xl font-extrabold text-cyan-400 text-center mb-8">
        Impact & Vision
      </h2>
      <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
        <div className="flex-1 text-base md:text-lg text-gray-100 leading-relaxed animate-fade-in">
          <ul className="list-disc pl-6 space-y-3">
            <li>
              Serving <span className="font-bold text-cyan-200">rural, elderly, students, and underserved</span> populations.
            </li>
            <li>
              Bridging patients, doctors, families, NGOs, and government stakeholders.
            </li>
            <li>
              Providing <span className="font-semibold text-cyan-200">anonymized health trends</span> to inform policy and programs.
            </li>
            <li>
              Designed for accessibility with a <span className="font-semibold text-cyan-200">clean, India-first UI</span>.
            </li>
            <li>
              Making quality healthcare assistance available <span className="font-semibold text-cyan-200">anytime, anywhere</span>.
            </li>
          </ul>
        </div>
        <div className="flex-1 flex justify-center animate-fade-in">
          <img 
            src="https://img.freepik.com/premium-vector/elderly-people-using-smartphone-healthcare-app_701961-1226.jpg" 
            alt="Impact" 
            className="max-h-48 md:max-h-64 rounded-xl border-4 border-cyan-500 shadow-lg transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
