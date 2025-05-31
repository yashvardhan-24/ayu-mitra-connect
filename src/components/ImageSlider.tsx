
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    {
      src: "https://img.freepik.com/free-vector/medical-mobile-app-interface-concept_23-2148502077.jpg",
      alt: "Health Monitoring UI"
    },
    {
      src: "https://img.freepik.com/free-vector/doctor-online-consultation-smartphone_23-2148588761.jpg",
      alt: "Doctor Consultation"
    },
    {
      src: "https://img.freepik.com/free-vector/health-checkup-app-interface_52683-39082.jpg",
      alt: "Vital Signs Tracking"
    },
    {
      src: "https://img.freepik.com/free-vector/human-posture-corrector-app_23-2148559677.jpg",
      alt: "Posture & Alerts"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="px-4 md:px-16 py-8 flex flex-col items-center animate-fade-in">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-cyan-300 mb-6">
        A Glimpse into Ayu Mitra
      </h2>
      <div className="relative w-full max-w-3xl overflow-hidden rounded-xl shadow-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-56 md:h-64 object-cover flex-shrink-0 transition-all duration-300 hover:scale-105"
              draggable={false}
            />
          ))}
        </div>
        
        <button 
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900/70 rounded-full p-2 text-cyan-200 hover:bg-cyan-600/90 transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900/70 rounded-full p-2 text-cyan-200 hover:bg-cyan-600/90 transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-cyan-400 w-4' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
