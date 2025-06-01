
import React, { useState } from 'react';
import { Star, MessageCircle, Send } from 'lucide-react';

const SupportSection = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmitFeedback = () => {
    if (feedback.trim() || rating > 0) {
      alert(`Thank you for your feedback! Rating: ${rating}/5, Feedback: "${feedback}"`);
      setFeedback('');
      setRating(0);
    }
  };

  return (
    <section id="support" className="px-4 md:px-16 py-10 animate-fade-in">
      <div className="bg-cyan-800/80 rounded-3xl p-8 shadow-2xl border-4 border-cyan-400">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-cyan-200 mb-2">Support & Feedback</h2>
          <p className="text-base md:text-lg text-gray-100 mb-4">
            Need help? Our support team is here to assist you in your language and resolve your issues quickly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Support Options */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Get Support
            </h3>
            <a 
              href="mailto:yash.vardhan2023@glbajajgroup.org" 
              className="block w-full bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded-full text-white font-bold shadow-lg hover:scale-105 transform duration-200 text-center"
            >
              Email Support
            </a>
            <a 
              href="https://discord.gg/5s8RTaKz" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-full text-white font-bold shadow-lg hover:scale-105 transform duration-200 text-center"
            >
              Discord Community
            </a>
            <a 
              href="https://t.me/ayu_mitra1" 
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-500 hover:bg-blue-600 transition px-6 py-3 rounded-full text-white font-bold shadow-lg hover:scale-105 transform duration-200 text-center"
            >
              Telegram Support
            </a>
          </div>

          {/* Feedback & Rating */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4 flex items-center gap-2">
              <Star className="h-5 w-5" />
              Rate & Feedback
            </h3>
            
            {/* Star Rating */}
            <div className="mb-4">
              <p className="text-gray-200 mb-2">Rate your experience:</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-8 w-8 ${
                        star <= (hoveredStar || rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Textarea */}
            <div className="mb-4">
              <p className="text-gray-200 mb-2">Share your feedback:</p>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Tell us about your experience with Ayu Mitra..."
                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-cyan-400 focus:outline-none resize-none"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmitFeedback}
              className="w-full bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-full text-white font-bold shadow-lg hover:scale-105 transform duration-200 flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
