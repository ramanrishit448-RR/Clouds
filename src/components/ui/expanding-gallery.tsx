import React, { useState, useEffect } from 'react';
import { Layout, Code2, Compass, Palette, ArrowUpRight } from 'lucide-react';

const services = [
  {
    id: '01',
    tag: 'Capability 01',
    title: 'Web Design',
    description: 'Crafting aesthetic, high-converting digital interfaces.',
    icon: Layout,
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '02',
    tag: 'Capability 02',
    title: 'Development',
    description: 'Robust, performant full-stack architecture & APIs.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '03',
    tag: 'Capability 03',
    title: 'UI/UX',
    description: 'Intuitive user experiences rooted in human psychology.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '04',
    tag: 'Capability 04',
    title: 'Branding',
    description: 'Cohesive visual identity and strategic design systems.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop',
  },
];

export const ExpandingGallery: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    if (hoveredId) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
    }
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [hoveredId]);

  return (
    <div className="w-full relative">
      <div 
        className={`fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-200 ease-out flex items-center justify-center ${
          hoveredId ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        style={{ transform: `translate(${cursorPos.x - 8}px, ${cursorPos.y - 8}px)` }}
      />

      <div className="flex gap-4 sm:gap-5 items-stretch min-h-[380px] sm:min-h-[440px] md:h-[500px] w-full max-w-6xl mx-auto">
        {services.map((service) => (
          <GalleryCard
            key={service.id}
            service={service}
            isHovered={hoveredId === service.id}
            onHover={() => setHoveredId(service.id)}
            onLeave={() => setHoveredId(null)}
          />
        ))}
      </div>
    </div>
  );
};

interface GalleryCardProps {
  service: typeof services[0];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ service, isHovered, onHover, onLeave }) => {
  const Icon = service.icon;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`group relative rounded-3xl overflow-hidden transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] cursor-none backdrop-blur-md ${
        isHovered 
          ? 'flex-[2.5] md:flex-[2.5] border border-white bg-gradient-to-b from-white/[0.12] via-white/[0.06] to-transparent shadow-2xl z-10' 
          : 'flex-[1] md:flex-[0.8] border border-white/10 bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent hover:border-white/30 z-0'
      }`}
    >
      {/* Background Image (Visible when IDLE, disappears on HOVER) */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 z-0 ${
          isHovered ? 'opacity-0' : 'opacity-80 grayscale-[0.3]'
        }`}
        style={{ backgroundImage: `url(${service.image})` }}
      />

      {/* Subtle gradient stroke accent on top edge */}
      <div className={`absolute top-0 left-0 right-0 h-1 transition-opacity duration-500 z-10 ${
        isHovered ? 'bg-white opacity-100' : 'bg-transparent opacity-0'
      }`} />

      {/* Content Container (Appears on HOVER, hidden on IDLE) */}
      <div className={`relative z-10 h-full p-6 sm:p-8 flex flex-col justify-between transition-opacity duration-700 ${
        isHovered ? 'opacity-100 delay-100' : 'opacity-0'
      }`}>
        
        {/* Card Top Header */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-medium text-zinc-300 whitespace-nowrap">
            {service.tag}
          </span>
          <div className="p-2.5 rounded-full shrink-0 bg-white text-black">
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>

        {/* Card Center Title & Icon */}
        <div className="my-auto py-8 text-center flex flex-col items-center">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shrink-0 bg-white text-black scale-110 shadow-lg">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 whitespace-nowrap">
            {service.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-[200px] leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Card Bottom Tag */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between overflow-hidden">
          <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider whitespace-nowrap">
            Explore Capability
          </span>
          <span className="text-xs font-bold text-white">
            →
          </span>
        </div>
        
      </div>
    </div>
  );
};
