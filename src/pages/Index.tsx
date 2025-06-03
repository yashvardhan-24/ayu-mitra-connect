
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
      {/* Enhanced 3D Running Background */}
      <div className="fixed inset-0 z-0">
        {/* Base gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-cyan-900/30 to-teal-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/20 via-blue-800/20 to-cyan-800/20"></div>
        
        {/* Animated floating elements */}
        <div className="absolute inset-0">
          {/* Large floating orbs */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-cyan-400/15 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-blue-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-teal-400/15 rounded-full blur-xl animate-bounce delay-500"></div>
          <div className="absolute bottom-40 right-1/3 w-56 h-56 bg-cyan-300/15 rounded-full blur-xl animate-drift delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/15 rounded-full blur-xl animate-float delay-1500"></div>
          
          {/* Medium floating particles */}
          <div className="absolute top-20 right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-lg animate-bounce delay-700"></div>
          <div className="absolute bottom-60 left-10 w-24 h-24 bg-blue-500/20 rounded-full blur-lg animate-pulse delay-300"></div>
          <div className="absolute top-60 left-1/3 w-16 h-16 bg-teal-500/25 rounded-full blur-md animate-float delay-1200"></div>
          <div className="absolute bottom-80 right-1/4 w-28 h-28 bg-cyan-400/20 rounded-full blur-lg animate-drift delay-800"></div>
          
          {/* Small floating particles */}
          <div className="absolute top-32 left-1/5 w-8 h-8 bg-cyan-300/30 rounded-full blur-sm animate-pulse delay-400"></div>
          <div className="absolute bottom-32 right-1/5 w-12 h-12 bg-blue-300/25 rounded-full blur-sm animate-bounce delay-900"></div>
          <div className="absolute top-3/4 left-3/4 w-10 h-10 bg-teal-300/30 rounded-full blur-sm animate-float delay-600"></div>
          
          {/* Geometric shapes */}
          <div className="absolute top-1/4 right-1/2 w-6 h-6 bg-cyan-400/40 rotate-45 animate-pulse delay-1100"></div>
          <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-blue-400/40 rotate-12 animate-bounce delay-1300"></div>
        </div>
        
        {/* Moving gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-900/10 to-transparent animate-drift"></div>
        
        {/* Depth overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/30"></div>
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
