import React from 'react';
import Stack from './ui/Stack';

interface ServicesSectionProps {
  onCardClick?: (serviceName: string) => void;
}

const servicesData = [
  {
    title: 'Web Design',
    desc: 'Crafting aesthetic, high-converting digital interfaces.',
    img: '/images/theme_stack_bg.png'
  },
  {
    title: 'Development',
    desc: 'Robust, performant full-stack architecture & APIs.',
    img: '/images/theme_stack_bg.png'
  },
  {
    title: 'UI/UX',
    desc: 'Intuitive user experiences rooted in human psychology.',
    img: '/images/theme_stack_bg.png'
  },
  {
    title: 'Branding',
    desc: 'Cohesive visual identity and strategic design systems.',
    img: '/images/theme_stack_bg.png'
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onCardClick }) => {
  return (
    <section 
      id="building-tomorrow-section"
      className="w-full bg-transparent text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center justify-center border-t border-white/10"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
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
            An ecosystem of elegant capabilities shaping the digital future.
          </p>
        </div>

        {/* Stack Animation Gallery */}
        <div className="w-full flex items-center justify-center mt-10">
          <div className="relative w-full max-w-[340px] aspect-[3/4] sm:max-w-[400px]">
            <Stack
              randomRotation={true}
              sensitivity={180}
              sendToBackOnClick={true}
              cards={servicesData.map((service, i) => (
                <div 
                  key={i} 
                  className="w-full h-full relative flex flex-col items-center justify-center p-8 text-center"
                >
                  <div className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${service.img})` }} />
                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight drop-shadow-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.title}
                    </h3>
                    <p className="text-zinc-200 text-sm sm:text-base leading-relaxed drop-shadow-md">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
