
import React, { useState } from 'react';
import { Mic } from 'lucide-react';

const AssistantSection = () => {
  const [isListening, setIsListening] = useState(false);
  const [message, setMessage] = useState('');

  const handleTapToTalk = () => {
    setIsListening(true);
    setMessage('👋 Namaste! Hello! नमस्कार! I am Ayu Assistant. How can I help you today? Say or type your health question…');
    
    setTimeout(() => {
      setMessage('🌐 I can answer in your language, give health tips, medicine reminders, and more!');
      setIsListening(false);
    }, 4000);
  };

  return (
    <section id="assistant" className="relative flex flex-col items-center justify-center px-4 md:px-0 py-12 md:py-16">
      <div className="max-w-2xl w-full mx-auto backdrop-blur-sm bg-gray-900/85 rounded-3xl p-6 md:p-10 shadow-2xl border-4 border-cyan-400 animate-fade-in flex flex-col items-center text-center gap-5">
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
          <img 
            src="https://img.icons8.com/color/96/robot-2.png" 
            alt="Ayu Assistant" 
            className="h-20 w-20 sm:h-24 sm:w-24 rounded-full shadow-lg animate-bounce"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mb-2 animate-pulse">
              Meet Ayu Assistant
            </h2>
            <p className="text-base md:text-lg text-gray-100 font-medium">
              Smart, <span className="text-cyan-300 font-semibold">multilingual</span>, and always ready to guide you{' '}
              <br className="hidden md:block"/> in{' '}
              <span className="text-cyan-200 font-semibold">
                Hindi | English | Marathi | Bengali | Tamil | Telugu | Malayalam | Kannada | Gujarati
              </span> & more!
            </p>
          </div>
        </div>
        
        <button 
          onClick={handleTapToTalk}
          disabled={isListening}
          className="mt-4 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-700 text-white rounded-full font-bold text-xl shadow-xl ring-2 ring-cyan-400 hover:scale-105 hover:bg-cyan-600 active:scale-95 transition duration-200 flex items-center gap-3 disabled:opacity-70"
        >
          <Mic className="h-7 w-7 animate-pulse" />
          Tap to Talk
        </button>
        
        <div className="mt-6 text-cyan-200 font-semibold text-lg flex flex-col gap-2">
          <span className="flex items-center gap-2 justify-center">
            <div className="h-5 w-5 text-cyan-300 animate-spin border-2 border-cyan-300 border-t-transparent rounded-full" />
            AI-powered Guidance 24/7
          </span>
          <span className="flex items-center gap-2 justify-center">
            <div className="h-5 w-5 text-cyan-300 animate-bounce">+</div>
            Health, Medicine, First-Aid, Emotional Support
          </span>
          <span className="flex items-center gap-2 justify-center">
            <div className="h-5 w-5 text-cyan-300 animate-pulse">💬</div>
            Instant Answers, Audio & Text, User-Friendly
          </span>
        </div>
        
        {message && (
          <div className="mt-6 text-base text-cyan-100 font-semibold transition-all duration-300">
            <span className={isListening ? 'animate-pulse' : 'animate-bounce'}>
              {message}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default AssistantSection;
