import React, { useState } from 'react';
import { ShieldCheck, Eye, Users, RefreshCw, ChevronRight } from 'lucide-react';

interface AboutSectionProps {
  onReadMoreClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onReadMoreClick,
}) => {
  const [activeTab, setActiveTab] = useState<'who' | 'vision' | 'trust'>('who');
  const [isRotating, setIsRotating] = useState(false);

  const pillars = [
    {
      id: 'who',
      title: 'Who You Are',
      icon: Users,
      summary: 'A collective of visionary designers, engineers, and AI pioneers based worldwide.',
      details: 'We build next-generation creative tools that elevate ideas into reality. Driven by curiosity and craft, our team bridges human intuition with artificial intelligence.',
    },
    {
      id: 'vision',
      title: 'Your Vision',
      icon: Eye,
      summary: 'To create software so intuitive that technology dissolves into pure human flow.',
      details: 'Every innovation starts with an idea. We envision a future where designing complex digital experiences requires zero friction and maximum creative joy.',
    },
    {
      id: 'trust',
      title: 'Why People Should Trust You',
      icon: ShieldCheck,
      summary: 'Proven reliability, open standards, and trusted by over 500,000 creators worldwide.',
      details: 'We uphold enterprise-grade security, lightning-fast Cloud infrastructure, and client-first privacy guarantees so your ideas remain safe and sovereign.',
    },
  ];

  const handleRefresh = () => {
    setIsRotating(true);
    const tabs: ('who' | 'vision' | 'trust')[] = ['who', 'vision', 'trust'];
    const nextIndex = (tabs.indexOf(activeTab) + 1) % tabs.length;
    setActiveTab(tabs[nextIndex]);
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <section 
      id="about-us-section"
      className="w-full bg-transparent text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center justify-center border-t border-white/10"
    >
      <div className="max-w-5xl w-full mx-auto">
        {/* Section Header */}
        <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase block mb-3">
          04 / ABOUT US
        </span>

        {/* Transparent Gradient Glass Framing Container */}
        <div 
          id="about-card-container"
          className="relative w-full rounded-3xl border border-white/10 p-6 sm:p-10 md:p-14 min-h-[480px] sm:min-h-[520px] flex flex-col justify-between overflow-hidden shadow-2xl"
        >

          {/* Top Main Headline & Read More Button Layout */}
          <div className="max-w-2xl z-10">
            <h2 
              id="about-heading"
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 select-none"
            >
              About <span className="font-light italic text-white/90">Us</span>
            </h2>

            <p 
              id="about-intro-text"
              className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed mb-8 max-w-xl"
            >
              Our work begins where imagination sparks: we shape ideas that don't exist yet and bring them to life through the power of AI.
            </p>

            <button
              id="about-read-more-btn"
              onClick={onReadMoreClick}
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm sm:text-base font-medium px-6 py-2.5 rounded-full backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
            >
              <span>Read more</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Center Pillar Tabs */}
          <div className="z-10 my-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                const isActive = activeTab === pillar.id;

                return (
                  <button
                    key={pillar.id}
                    id={`about-tab-${pillar.id}`}
                    onClick={() => setActiveTab(pillar.id as 'who' | 'vision' | 'trust')}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-md ${
                      isActive 
                        ? 'bg-white/10 border-white text-white shadow-xl scale-[1.02]' 
                        : 'bg-white/[0.02] border-white/10 text-zinc-400 hover:border-white/20 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white text-black' : 'bg-white/10 text-zinc-300'}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-sm text-white">{pillar.title}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed font-normal line-clamp-2">
                      {pillar.summary}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Expanded Details */}
            <div className="mt-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md text-sm text-zinc-300 leading-relaxed">
              <span className="font-semibold text-white mr-2">
                {pillars.find(p => p.id === activeTab)?.title}:
              </span>
              {pillars.find(p => p.id === activeTab)?.details}
            </div>
          </div>

          {/* Bottom Toolbar */}
          <div className="flex items-center justify-end z-10 pt-6 border-t border-white/10">
            {/* Bottom Right Action Icon Button */}
            <button
              id="about-refresh-btn"
              onClick={handleRefresh}
              className="w-11 h-11 rounded-2xl bg-white/10 border border-white/20 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg backdrop-blur-md cursor-pointer"
              aria-label="Cycle pillar tabs"
            >
              <RefreshCw className={`w-4 h-4 transition-transform duration-500 ${isRotating ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
