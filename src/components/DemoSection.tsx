
import React from 'react';

const DemoSection = () => {
  return (
    <section id="demo" className="px-4 md:px-16 py-10 animate-fade-in">
      <div className="bg-cyan-900/70 rounded-3xl p-8 shadow-2xl border-4 border-cyan-500 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mb-4">Live Demo</h2>
          <p className="text-base md:text-lg text-gray-100 mb-5">
            Experience Ayu Mitra's capabilities in real-time with our interactive demo. 
            See how our assistant guides you effortlessly in your preferred language!
          </p>
          <a 
            href="https://your-demo-link.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 hover:bg-cyan-700 transition px-7 py-3 rounded-full text-white font-bold shadow-lg hover:scale-105 transform duration-200"
          >
            Try Demo
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <img 
            src="https://img.freepik.com/free-vector/robot-using-laptop-illustration_23-2149239813.jpg" 
            alt="Demo" 
            className="max-h-44 rounded-xl border-4 border-cyan-400 shadow-lg animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
