import React from 'react';
import { ArrowRight } from 'lucide-react';
import ShinyText from './ui/ShinyText';

interface HeroProps {
  onGetStartedClick: () => void;
  onWatchDemoClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onGetStartedClick,
  onWatchDemoClick,
}) => {
  return (
    <section 
      id="hero-banner"
      className="min-h-screen w-full bg-transparent text-white flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative overflow-hidden"
    >
      {/* Subtle Transparent Ambient Gradient Spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center z-10">
        
        {/* Main Headline */}
        <h1 
          id="hero-main-title"
          className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 sm:mb-8 leading-[1.1] max-w-3xl select-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <ShinyText
            text="Every Great Journey Begins Above the Clouds"
            speed={3}
            delay={1}
            color="#ffffff"
            shineColor="#a1a1aa"
            spread={150}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
          />
        </h1>

        {/* Subtext Paragraph */}
        <p 
          id="hero-subtitle"
          className="text-lg sm:text-xl md:text-2xl text-white font-normal max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12 tracking-normal"
        >
          A short introduction that creates curiosity.
        </p>

        {/* CTA Action Buttons */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Primary CTA: Get Started */}
          <button
            id="hero-get-started-btn"
            onClick={onGetStartedClick}
            className="bg-white hover:bg-slate-100 text-black text-sm sm:text-base font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 text-black stroke-[2.5]" />
          </button>

          {/* Secondary CTA: Watch Demo */}
          <button
            id="hero-watch-demo-btn"
            onClick={onWatchDemoClick}
            className="text-white hover:text-slate-200 text-sm sm:text-base font-medium px-4 sm:px-6 py-3 sm:py-3.5 rounded-full transition-all duration-200 flex items-center gap-2 cursor-pointer hover:bg-white/10 active:scale-95"
          >
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
};
