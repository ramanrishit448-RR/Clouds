import React from 'react';
import { ArrowRight } from 'lucide-react';

interface MissionSectionProps {
  onExploreClick?: () => void;
}

export const MissionSection: React.FC<MissionSectionProps> = ({ onExploreClick }) => {
  return (
    <section 
      id="mission-section"
      className="w-full bg-black text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center justify-center border-t border-white/10"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Section Heading */}
        <h2 
          id="mission-heading"
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-8 sm:mb-12 select-none"
        >
          A New <span className="font-light italic text-white/90">Perspective</span>
        </h2>

        {/* Transparent Gradient Glass Framing Container */}
        <div 
          id="mission-card-container"
          className="relative w-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] via-white/[0.02] to-transparent p-6 sm:p-10 md:p-14 min-h-[360px] sm:min-h-[420px] flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-md"
        >
          {/* Subtle atmospheric ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02] pointer-events-none" />

          {/* Top subtle badge identifier */}
          <div className="flex justify-between items-start z-10">
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
              02 / MISSION & VISION
            </span>
          </div>

          {/* Bottom Row Layout */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 z-10 pt-12 sm:pt-20">
            {/* Transparent Glass Content Box */}
            <div 
              id="mission-content-box"
              className="max-w-lg bg-white/[0.04] border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-lg shadow-xl"
            >
              <span className="block text-[11px] font-bold tracking-widest text-zinc-400 uppercase mb-2">
                OUR MISSION
              </span>
              <p className="text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
                Talk about your mission.
              </p>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                Every innovation starts with an idea. Every idea grows into something people can experience.
              </p>
            </div>

            {/* Bottom-Right Action Button */}
            <div className="flex justify-start md:justify-end shrink-0">
              <button
                id="mission-explore-btn"
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-zinc-200 text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-lg"
              >
                <span>Explore more</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
