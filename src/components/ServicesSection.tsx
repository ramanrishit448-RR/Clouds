import React, { useState } from 'react';
import { Layout, Code2, Compass, Palette, Plus, ArrowUpRight } from 'lucide-react';
import { GlowCard } from './ui/spotlight-card';

interface ServicesSectionProps {
  onCardClick?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onCardClick }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      id: '01',
      tag: 'Capability 01',
      title: 'Web Design',
      description: 'Crafting aesthetic, high-converting digital interfaces.',
      icon: Layout,
    },
    {
      id: '02',
      tag: 'Capability 02',
      title: 'Development',
      description: 'Robust, performant full-stack architecture & APIs.',
      icon: Code2,
    },
    {
      id: '03',
      tag: 'Capability 03',
      title: 'UI/UX',
      description: 'Intuitive user experiences rooted in human psychology.',
      icon: Compass,
    },
    {
      id: '04',
      tag: 'Capability 04',
      title: 'Branding',
      description: 'Cohesive visual identity and strategic design systems.',
      icon: Palette,
    },
  ];

  return (
    <section 
      id="building-tomorrow-section"
      className="w-full bg-transparent text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center justify-center border-t border-white/10"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase block mb-3">
              03 / WHAT WE DO
            </span>
            <h2 
              id="services-heading"
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white select-none"
            >
              Building <span className="font-light italic text-white/90">Tomorrow</span>
            </h2>
          </div>

          <p 
            id="services-subtitle"
            className="text-base sm:text-lg text-zinc-400 font-normal max-w-sm leading-relaxed"
          >
            Explain what you do.
          </p>
        </div>

        {/* 4-Column Panel Grid with Transparent Gradient Glass */}
        <div 
          id="services-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 relative"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <GlowCard
                key={service.title}
                id={`service-card-${service.title.toLowerCase().replace('/', '-')}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => onCardClick?.(service.title)}
                customSize={true}
                className={`group relative rounded-3xl p-6 sm:p-8 min-h-[380px] sm:min-h-[440px] flex flex-col justify-between transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-md ${
                  isHovered 
                    ? 'border border-white bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-transparent shadow-2xl scale-[1.02]' 
                    : 'border border-white/10 bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent hover:border-white/30'
                }`}
              >
                {/* Subtle gradient stroke accent on top edge */}
                <div className={`absolute top-0 left-0 right-0 h-1 transition-opacity duration-300 ${
                  isHovered ? 'bg-white opacity-100' : 'bg-transparent opacity-0'
                }`} />

                {/* Card Top Header */}
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-mono font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    {service.tag}
                  </span>
                  <div className={`p-2.5 rounded-full transition-all duration-300 ${
                    isHovered ? 'bg-white text-black' : 'bg-white/10 text-zinc-400 border border-white/10'
                  }`}>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>

                {/* Card Center Title & Icon */}
                <div className="my-auto py-8 text-center z-10 flex flex-col items-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    isHovered ? 'bg-white text-black scale-110 shadow-lg' : 'bg-white/10 text-zinc-300 border border-white/10'
                  }`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:scale-105 transition-transform">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 max-w-[200px] leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Card Bottom Tag */}
                <div className="z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
                    Explore Capability
                  </span>
                  <span className="text-xs font-bold text-white group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Bottom Floating Action Plus Button */}
        <div className="mt-8 flex justify-end">
          <button
            id="services-plus-btn"
            onClick={() => onCardClick?.('Building Tomorrow Services')}
            className="w-11 h-11 rounded-full bg-white/10 border border-white/20 hover:border-white text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg backdrop-blur-md cursor-pointer"
            aria-label="Add or view all services"
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
