
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Yash Vardhan Singh",
      role: "Team Leader",
      email: "yash.vardhan2023@glbajajgroup.org",
      phone: "8299716969",
      image: "https://img.icons8.com/color/96/000000/businessman.png"
    },
    {
      name: "Dhruv Rawat",
      role: "Team Member",
      email: "dhruv2508rawat@gmail.com",
      phone: "8287456778",
      image: "https://img.icons8.com/color/96/000000/engineer.png"
    },
    {
      name: "Shivangi Srivastav",
      role: "Team Member",
      email: "Shivangi.Srivastav2024@glbajajgroup.org",
      phone: "8756030830",
      image: "https://img.icons8.com/color/96/000000/businesswoman.png"
    }
  ];

  return (
    <section id="team" className="px-4 md:px-16 py-10 animate-fade-in">
      <div className="bg-gray-900/80 rounded-3xl p-8 shadow-2xl border-4 border-cyan-700">
        <h2 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6 text-center">Our Team</h2>
        <p className="text-base md:text-lg text-gray-100 mb-8 text-center">
          Ayu Mitra is built by a passionate, diverse team of engineers, designers, and healthcare experts, 
          united by a mission to make healthcare accessible for everyone in India.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800/60 rounded-xl p-6 border-2 border-cyan-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="h-16 w-16 rounded-full border-2 border-cyan-400 mb-4 hover:scale-110 transition-transform duration-200"
                />
                <h3 className="font-semibold text-lg text-cyan-200 mb-1">{member.name}</h3>
                <p className="text-cyan-300 text-sm mb-4">{member.role}</p>
                
                <div className="flex flex-col gap-2 w-full">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="flex items-center gap-2 text-sm hover:text-cyan-300 transition justify-center"
                  >
                    <Mail className="h-4 w-4 text-cyan-400" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a 
                    href={`tel:${member.phone}`} 
                    className="flex items-center gap-2 text-sm hover:text-cyan-300 transition justify-center"
                  >
                    <Phone className="h-4 w-4 text-cyan-400" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
