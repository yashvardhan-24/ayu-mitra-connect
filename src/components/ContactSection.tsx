
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const teamMembers = [
    {
      name: "Yash Vardhan Singh",
      role: "Team Leader – Ayu Mitra",
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
    <section id="contact" className="px-4 md:px-16 py-12 bg-cyan-900/80 rounded-3xl max-w-4xl mx-auto mt-8 mb-16 text-white shadow-2xl animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mb-8 text-center">Contact Our Team</h2>
      
      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-gray-800/60 rounded-xl p-6 border-2 border-cyan-600 hover:border-cyan-400 transition-all duration-300">
            <div className="flex flex-col items-center text-center">
              <img 
                src={member.image} 
                alt={member.name}
                className="h-16 w-16 rounded-full border-2 border-cyan-400 mb-4"
              />
              <h3 className="font-semibold text-lg text-cyan-200 mb-1">{member.name}</h3>
              <p className="text-cyan-300 text-sm mb-4">{member.role}</p>
              
              <div className="flex flex-col gap-2 w-full">
                <a 
                  href={`mailto:${member.email}`} 
                  className="flex items-center gap-2 text-sm hover:text-cyan-300 transition justify-center"
                >
                  <Mail className="h-4 w-4 text-cyan-400" />
                  <span className="truncate text-xs">{member.email}</span>
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

      {/* Join Community Section */}
      <div className="border-t-2 border-cyan-600 pt-8">
        <div className="flex flex-col items-center">
          <img 
            src="https://img.icons8.com/color/96/000000/conference-call.png" 
            alt="Community" 
            className="mb-4 h-16 w-16 rounded-full shadow-lg border-2 border-cyan-400 bg-gray-800"
          />
          
          <h3 className="text-2xl font-bold text-cyan-200 mb-2 text-center">Join Our Community</h3>
          
          <p className="text-gray-200 text-center mb-6 max-w-2xl">
            Be part of the Ayu Mitra movement! Connect with other users, share feedback, and get the latest updates. 
            Our mission grows stronger with your support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://t.me/ayu_mitra1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-cyan-500 hover:bg-cyan-700 transition px-6 py-3 rounded-full text-white font-bold shadow-lg flex items-center gap-2 hover:scale-105 transform duration-200"
            >
              <img 
                src="https://img.icons8.com/color/24/000000/telegram-app--v1.png" 
                className="h-6 w-6" 
                alt="Telegram"
              /> 
              Telegram Group
            </a>
            
            <a 
              href="https://discord.gg/5s8RTaKz" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-cyan-600 transition px-6 py-3 rounded-full text-white font-bold shadow-lg flex items-center gap-2 hover:scale-105 transform duration-200"
            >
              <img 
                src="https://img.icons8.com/color/24/000000/discord-logo.png" 
                className="h-6 w-6" 
                alt="Discord"
              /> 
              Discord Server
            </a>
            
            <a 
              href="mailto:yash.vardhan2023@glbajajgroup.org" 
              className="bg-cyan-600 hover:bg-cyan-800 transition px-6 py-3 rounded-full text-white font-bold shadow-lg flex items-center gap-2 hover:scale-105 transform duration-200"
            >
              <Mail className="h-6 w-6 text-white" />
              Email Us
            </a>
          </div>
          
          <p className="mt-6 text-gray-400 text-sm text-center">
            Together, let's make healthcare accessible for everyone!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
