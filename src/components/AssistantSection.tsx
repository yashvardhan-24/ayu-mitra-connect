
import React from 'react';
import { Mic, MicOff, Loader2 } from 'lucide-react';
import { useVoiceAssistant } from '../hooks/useVoiceAssistant';

const AssistantSection = () => {
  const { 
    state, 
    transcript, 
    response, 
    error, 
    startListening, 
    stopListening 
  } = useVoiceAssistant();

  const handleTapToTalk = () => {
    if (state === 'listening') {
      stopListening();
    } else if (state === 'idle') {
      startListening();
    }
  };

  const getButtonContent = () => {
    switch (state) {
      case 'listening':
        return (
          <>
            <MicOff className="h-7 w-7 animate-pulse" />
            Stop Listening
          </>
        );
      case 'processing':
        return (
          <>
            <Loader2 className="h-7 w-7 animate-spin" />
            Processing...
          </>
        );
      case 'speaking':
        return (
          <>
            <Loader2 className="h-7 w-7 animate-spin" />
            Speaking...
          </>
        );
      default:
        return (
          <>
            <Mic className="h-7 w-7 animate-pulse" />
            Tap to Talk
          </>
        );
    }
  };

  const getStatusMessage = () => {
    if (error) {
      return <span className="text-red-300">{error}</span>;
    }
    
    if (transcript) {
      return <span className="text-cyan-100">You said: "{transcript}"</span>;
    }
    
    if (response) {
      return <span className="text-cyan-100">Ayu: {response}</span>;
    }

    switch (state) {
      case 'listening':
        return <span className="text-cyan-100 animate-pulse">🎤 Listening... Speak now!</span>;
      case 'processing':
        return <span className="text-cyan-100 animate-pulse">🤔 Processing your request...</span>;
      case 'speaking':
        return <span className="text-cyan-100 animate-pulse">🗣️ Ayu is responding...</span>;
      default:
        return (
          <span className="text-cyan-100">
            👋 Namaste! Hello! नमस्कार! I am Ayu Assistant. How can I help you today? Tap the button and speak your health question…
          </span>
        );
    }
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
          disabled={state === 'processing' || state === 'speaking'}
          className={`mt-4 px-8 py-4 bg-gradient-to-r text-white rounded-full font-bold text-xl shadow-xl ring-2 ring-cyan-400 hover:scale-105 active:scale-95 transition duration-200 flex items-center gap-3 disabled:opacity-70 ${
            state === 'listening' 
              ? 'from-red-500 to-red-700 hover:bg-red-600' 
              : 'from-cyan-500 to-cyan-700 hover:bg-cyan-600'
          }`}
        >
          {getButtonContent()}
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
            Voice & Text, Multilingual, User-Friendly
          </span>
        </div>
        
        <div className="mt-6 text-base text-cyan-100 font-semibold transition-all duration-300 min-h-[2rem]">
          {getStatusMessage()}
        </div>
      </div>
    </section>
  );
};

export default AssistantSection;
