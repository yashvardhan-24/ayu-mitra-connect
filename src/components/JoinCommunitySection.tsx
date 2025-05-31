
import React from 'react';
import { Mail } from 'lucide-react';

const JoinCommunitySection = () => {
  return (
    <section id="community" className="px-4 md:px-16 py-12 animate-fade-in">
      <div className="w-full max-w-3xl mx-auto p-8 bg-gray-900/80 rounded-3xl shadow-2xl border-4 border-cyan-500 flex flex-col items-center">
        <img 
          src="https://img.icons8.com/color/96/000000/conference-call.png" 
          alt="Community" 
          className="mb-4 h-20 w-20 rounded-full shadow-lg border-2 border-cyan-400 bg-gray-800"
        />
        
        <h2 className="text-3xl font-extrabold text-cyan-200 mb-2 text-center">Join Our Community</h2>
        
        <p className="text-gray-200 text-lg text-center mb-6">
          Be part of the Ayu Mitra movement! Connect with other users, share feedback, and get the latest updates. 
          Our mission grows stronger with your support.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="https://t.me/ayumitra_community" 
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
            href="https://discord.gg/ayumitra" 
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
            href="mailto:community@ayumitra.com" 
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
    </section>
  );
};

export default JoinCommunitySection;
