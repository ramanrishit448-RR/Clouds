import React from 'react';
import { Layout, Code2, Compass, Palette, Plus, ArrowUpRight } from 'lucide-react';
import { ExpandingGallery } from './ui/expanding-gallery';

interface ServicesSectionProps {
  onCardClick?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onCardClick }) => {
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

        {/* Expanding Video Gallery */}
        <ExpandingGallery />
      </div>
    </section>
  );
};
