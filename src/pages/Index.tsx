
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AssistantSection from '../components/AssistantSection';
import ImageSlider from '../components/ImageSlider';
import FeaturesSection from '../components/FeaturesSection';
import TechnologySection from '../components/TechnologySection';
import ImpactSection from '../components/ImpactSection';
import DemoSection from '../components/DemoSection';
import TeamSection from '../components/TeamSection';
import SupportSection from '../components/SupportSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="gradient-bg min-h-screen text-white flex flex-col relative overflow-hidden">
      {/* 3D Running Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-cyan-900/20 to-teal-900/20"></div>
        <div className="absolute inset-0 animate-pulse">
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-400/10 rounded-full blur-xl animate-bounce delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-56 h-56 bg-cyan-300/10 rounded-full blur-xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/10 rounded-full blur-xl animate-bounce delay-1500"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-gray-900/40"></div>
      </div>
      
      <div className="relative z-10">
        <Navigation />
        <HeroSection />
        <AssistantSection />
        <ImageSlider />
        <FeaturesSection />
        <TechnologySection />
        <ImpactSection />
        <DemoSection />
        <TeamSection />
        <SupportSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
