
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="px-4 md:px-16 py-12 bg-cyan-900/80 rounded-3xl max-w-3xl mx-auto mt-8 mb-16 text-white shadow-2xl animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mb-6">Contact Team Leader</h2>
      <div className="flex flex-col md:flex-row gap-5 items-start">
        <div className="flex items-center gap-3">
          <img 
            src="https://img.icons8.com/color/96/000000/businessman.png" 
            alt="Yash Vardhan Singh" 
            className="h-14 w-14 rounded-full border-2 border-cyan-400"
          />
          <div>
            <p className="font-semibold text-lg">Yash Vardhan Singh</p>
            <p className="text-cyan-300">Team Leader – Ayu Mitra</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0 md:ml-6">
          <a 
            href="mailto:yash.vardhan2023@glbajajgroup.org" 
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <Mail className="h-5 w-5 text-cyan-400" />
            yash.vardhan2023@glbajajgroup.org
          </a>
          <a 
            href="tel:8299716969" 
            className="flex items-center gap-2 hover:text-cyan-300 transition"
          >
            <Phone className="h-5 w-5 text-cyan-400" />
            8299716969
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
