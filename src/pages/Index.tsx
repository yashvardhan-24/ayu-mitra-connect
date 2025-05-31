
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
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="gradient-bg min-h-screen text-white flex flex-col">
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
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
