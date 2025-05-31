
import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: "https://img.icons8.com/color/96/000000/artificial-intelligence.png",
      title: "Multilingual AI Chat & Voice",
      description: "Personalized health tips, diagnostics, and empathetic support in multiple Indian languages.",
      animation: "animate-fade-in"
    },
    {
      icon: "https://img.icons8.com/color/96/000000/health-monitor.png",
      title: "Vital Monitoring & Alerts",
      description: "Tracks vitals, detects falls, reminds medicines, alerts on posture & emotional stress for holistic care.",
      animation: "animate-scale-in"
    },
    {
      icon: "https://img.icons8.com/color/96/000000/data-in-both-directions.png",
      title: "Live Family & Caregiver Dashboards",
      description: "Empowers families and caregivers with live status, AI-generated reports, and privacy-first data sharing.",
      animation: "animate-fade-in"
    }
  ];

  return (
    <section id="features" className="px-4 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 bg-white/10 rounded-3xl max-w-7xl mx-auto mt-8 animate-fade-in">
      {features.map((feature, index) => (
        <div 
          key={index}
          className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-900/70 shadow-lg border-t-4 border-cyan-400 transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <img 
            src={feature.icon} 
            alt={feature.title} 
            className="h-16 mb-3 animate-bounce"
          />
          <h3 className="text-lg md:text-xl font-bold text-cyan-300 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-200">{feature.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
