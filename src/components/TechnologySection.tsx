
import React from 'react';
import { Smartphone } from 'lucide-react';

const TechnologySection = () => {
  const techFeatures = [
    {
      icon: "https://img.icons8.com/fluency/48/000000/smartphone-tablet.png",
      title: "Offline-First, India-First",
      description: "Works seamlessly with low connectivity for rural and remote users."
    },
    {
      icon: "https://img.icons8.com/fluency/48/000000/lock-2.png",
      title: "Privacy-First Architecture",
      description: "Data is secure, access-controlled, and uses anonymization for stakeholders."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-cyan-400" />,
      title: "Smartphone & Wearable Integration",
      description: "Connects with sensors and wearables for real-time health tracking and emergency response."
    },
    {
      icon: "https://img.icons8.com/color/48/cloud-connection.png",
      title: "Cloud-Native AI",
      description: "Real-time updates & learning, robust performance, and data-driven insights."
    },
    {
      icon: "https://img.icons8.com/color/48/circuit.png",
      title: "Edge AI Computing",
      description: "Low-latency responses, works on affordable hardware, eco-friendly."
    }
  ];

  return (
    <section id="tech" className="px-4 md:px-16 py-16 animate-fade-in">
      <h2 className="text-3xl font-extrabold text-cyan-400 text-center mb-10">
        Next-Gen Technology
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mx-auto">
        <div className="flex flex-col gap-6">
          {techFeatures.map((feature, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <span className="inline-block bg-cyan-600 p-3 rounded-full">
                {typeof feature.icon === 'string' ? (
                  <img src={feature.icon} alt={feature.title} className="h-8" />
                ) : (
                  feature.icon
                )}
              </span>
              <div>
                <h4 className="font-bold text-lg text-white">{feature.title}</h4>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center animate-fade-in">
          <img 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
            alt="AI Tech" 
            className="w-full max-w-xs md:max-w-md rounded-2xl shadow-xl border-4 border-cyan-400 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
