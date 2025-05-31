
import React from 'react';

const TeamSection = () => {
  const teamMembers = [
    "https://img.icons8.com/color/96/000000/businessman.png",
    "https://img.icons8.com/color/96/000000/businesswoman.png",
    "https://img.icons8.com/color/96/000000/engineer.png"
  ];

  return (
    <section id="team" className="px-4 md:px-16 py-10 animate-fade-in">
      <div className="bg-gray-900/80 rounded-3xl p-8 shadow-2xl border-4 border-cyan-700 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">Our Team</h2>
          <p className="text-base md:text-lg text-gray-100 mb-4">
            Ayu Mitra is built by a passionate, diverse team of engineers, designers, and healthcare experts, 
            united by a mission to make healthcare accessible for everyone in India.
          </p>
        </div>
        <div className="flex-1 flex flex-wrap gap-4 justify-center">
          {teamMembers.map((member, index) => (
            <img 
              key={index}
              src={member} 
              alt="Team Member" 
              className="h-16 w-16 rounded-full border-2 border-cyan-400 hover:scale-110 transition-transform duration-200"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
