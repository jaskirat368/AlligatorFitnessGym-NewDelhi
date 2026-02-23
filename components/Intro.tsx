import React, { useEffect, useState } from 'react';

interface IntroProps {
  onComplete: () => void;
}

export const Intro: React.FC<IntroProps> = ({ onComplete }) => {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Sequence timing
    // 0s: Start
    // 2.8s: Start exit animation (fade out/slide up)
    // 3.5s: Unmount/Complete

    const exitTimer = setTimeout(() => {
      setExiting(true);
    }, 2800);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden transition-all duration-700 ease-out ${exiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100'}`}
    >
      <style>{`
        @keyframes text-reveal-cinematic {
          0% { opacity: 0; letter-spacing: 0.2em; transform: scale(0.9); filter: blur(12px); }
          50% { opacity: 1; filter: blur(0); }
          100% { opacity: 1; letter-spacing: 0em; transform: scale(1); filter: blur(0); }
        }
        @keyframes glow-pulse-text {
          0%, 100% { text-shadow: 0 0 15px rgba(46,190,99,0.5); }
          50% { text-shadow: 0 0 30px rgba(46,190,99,0.9); }
        }
        .animate-reveal-text {
          animation: text-reveal-cinematic 2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-glow {
          animation: glow-pulse-text 3s ease-in-out infinite;
        }
      `}</style>

      {/* Ambient Background Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[60vw] h-[60vw] bg-green-600/10 rounded-full blur-[100px] animate-pulse"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center p-4">
        
        {/* Main Logo Text */}
        <div className="animate-reveal-text text-center">
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter text-white uppercase leading-tight">
              ALLIGATOR
            </h1>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-7xl tracking-tighter text-brand-primary uppercase leading-tight animate-glow">
              FITNESS
            </h1>
        </div>

        {/* Divider Line */}
        <div className="mt-6 w-24 h-1 bg-brand-primary rounded-full animate-reveal-text" style={{ animationDelay: '0.5s', opacity: 0 }}></div>

      </div>
    </div>
  );
};