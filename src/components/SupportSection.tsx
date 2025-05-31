
import React from 'react';

const SupportSection = () => {
  return (
    <section id="support" className="px-4 md:px-16 py-10 animate-fade-in">
      <div className="bg-cyan-800/80 rounded-3xl p-8 shadow-2xl border-4 border-cyan-400 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mb-2">Support</h2>
        <p className="text-base md:text-lg text-gray-100 mb-4 text-center">
          Need help? Our support team is here to assist you in your language and resolve your issues quickly.
        </p>
        <a 
          href="mailto:support@ayumitra.com" 
          className="bg-cyan-600 hover:bg-cyan-700 transition px-8 py-3 rounded-full text-white font-bold shadow-lg hover:scale-105 transform duration-200"
        >
          Email Support
        </a>
      </div>
    </section>
  );
};

export default SupportSection;
