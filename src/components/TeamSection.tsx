
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
    <section id="contact" className="px-2 sm:px-4 md:px-8 lg:px-16 py-6 sm:py-8 md:py-10 lg:py-12 animate-fade-in">
      <div className="bg-gray-900/80 backdrop-blur rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border-2 sm:border-4 border-cyan-700 max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cyan-400 mb-4 sm:mb-6 md:mb-8 text-center">Contact Our Team</h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 text-center max-w-4xl mx-auto leading-relaxed">
          Ayu Mitra is built by a passionate, diverse team of engineers, designers, and healthcare experts, 
          united by a mission to make healthcare accessible for everyone in India.
        </p>
        
        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800/60 rounded-xl p-4 sm:p-6 border-2 border-cyan-600 hover:border-cyan-400 transition-all duration-300 hover:scale-105">
              <div className="flex flex-col items-center text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-cyan-400 mb-3 sm:mb-4 hover:scale-110 transition-transform duration-200"
                />
                <h3 className="font-semibold text-base sm:text-lg md:text-xl text-cyan-200 mb-1 sm:mb-2">{member.name}</h3>
                <p className="text-cyan-300 text-xs sm:text-sm md:text-base mb-3 sm:mb-4">{member.role}</p>
                
                <div className="flex flex-col gap-2 w-full">
                  <a 
                    href={`mailto:${member.email}`} 
                    className="flex items-center gap-2 text-xs sm:text-sm md:text-base hover:text-cyan-300 transition justify-center"
                  >
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>
                  <a 
                    href={`tel:${member.phone}`} 
                    className="flex items-center gap-2 text-xs sm:text-sm md:text-base hover:text-cyan-300 transition justify-center"
                  >
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400 flex-shrink-0" />
                    {member.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Community Section */}
        <div className="border-t-2 border-cyan-600 pt-6 sm:pt-8">
          <div className="flex flex-col items-center">
            <img 
              src="https://img.icons8.com/color/96/000000/conference-call.png" 
              alt="Community" 
              className="mb-3 sm:mb-4 h-12 w-12 sm:h-16 sm:w-16 rounded-full shadow-lg border-2 border-cyan-400 bg-gray-800"
            />
            
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-cyan-200 mb-2 sm:mb-4 text-center">Join Our Community</h3>
            
            <p className="text-gray-200 text-center mb-4 sm:mb-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed px-2">
              Be part of the Ayu Mitra movement! Connect with other users, share feedback, and get the latest updates. 
              Our mission grows stronger with your support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <a 
                href="https://t.me/ayu_mitra1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-cyan-500 hover:bg-cyan-700 transition px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-105 transform duration-200 text-sm sm:text-base"
              >
                <img 
                  src="https://img.icons8.com/color/24/000000/telegram-app--v1.png" 
                  className="h-5 w-5 sm:h-6 sm:w-6" 
                  alt="Telegram"
                /> 
                Telegram Group
              </a>
              
              <a 
                href="https://discord.gg/5s8RTaKz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-cyan-600 transition px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-105 transform duration-200 text-sm sm:text-base"
              >
                <img 
                  src="https://img.icons8.com/color/24/000000/discord-logo.png" 
                  className="h-5 w-5 sm:h-6 sm:w-6" 
                  alt="Discord"
                /> 
                Discord Server
              </a>
              
              <a 
                href="mailto:yash.vardhan2023@glbajajgroup.org" 
                className="bg-cyan-600 hover:bg-cyan-800 transition px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-105 transform duration-200 text-sm sm:text-base"
              >
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                Email Us
              </a>
            </div>
            
            <p className="mt-4 sm:mt-6 text-gray-400 text-xs sm:text-sm text-center px-2">
              Together, let's make healthcare accessible for everyone!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
