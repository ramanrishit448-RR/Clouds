import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, ArrowUpRight } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  statNumber: string;
  statLabel: string;
  quote: string;
  rating: number;
}

interface TestimonialsSectionProps {
  onBookMeetingClick?: () => void;
  onClientClick?: (clientName: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  onBookMeetingClick,
  onClientClick,
}) => {
  const [activeClientIndex, setActiveClientIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 'denis',
      name: 'Denis®',
      role: 'Head of Product Design',
      company: 'Aether Labs',
      statNumber: '150+',
      statLabel: 'Interviews conducted',
      quote: 'Haven transformed our creative workflow completely. The AI understands nuance, making UI execution lightning fast.',
      rating: 5,
    },
    {
      id: 'sarah',
      name: 'Sarah Chen',
      role: 'VP of Product',
      company: 'Horizon AI',
      statNumber: '500k',
      statLabel: 'Revenue earned',
      quote: 'Every project starts with curiosity, but Haven turned our ideas into tangible digital experiences in record time.',
      rating: 5,
    },
    {
      id: 'marcus',
      name: 'Marcus Vance',
      role: 'Design Director',
      company: 'Krypton Studio',
      statNumber: '250+',
      statLabel: 'People hired',
      quote: 'The level of craftsmanship and fluid glass architecture is unmatched. It feels like software from the future.',
      rating: 5,
    },
    {
      id: 'elena',
      name: 'Elena Rostova',
      role: 'Founder & CEO',
      company: 'Vanguard Interactive',
      statNumber: '82',
      statLabel: 'Presentations made',
      quote: 'We cut our prototyping cycle by 70%. Being able to design above the clouds with total focus is invaluable.',
      rating: 5,
    },
    {
      id: 'alex',
      name: 'Alex Rivera',
      role: 'Lead UX Architect',
      company: 'Orbit Cloud',
      statNumber: '100',
      statLabel: 'Speeches performed',
      quote: 'Intuitive, minimal, and insanely responsive. Haven is the gold standard for next-gen design tools.',
      rating: 5,
    },
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveClientIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleNext = () => {
    setActiveClientIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveClientIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials-section"
      className="w-full bg-black text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28 flex flex-col items-center justify-center border-t border-white/10 relative overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest text-zinc-500 uppercase block mb-3">
              05 / TESTIMONIALS
            </span>
            <h2 
              id="testimonials-heading"
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white select-none flex items-start gap-2"
            >
              <span>What Clients</span>
              <span className="font-light italic text-white/90">Say</span>
              <sup className="text-sm font-normal text-zinc-500 mt-2">54</sup>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              id="testimonial-prev-btn"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              id="testimonial-next-btn"
              className="w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sliding Cards Grid / Carousel Layout matching reference image style */}
        <div 
          id="testimonials-cards-container"
          className="relative w-full overflow-hidden py-4"
        >
          {/* Animated Sliding Row */}
          <div 
            className="flex gap-4 sm:gap-6 transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeClientIndex * 300}px)` }}
          >
            {testimonials.map((item, idx) => {
              const isActive = idx === activeClientIndex;

              return (
                <div
                  key={item.id}
                  id={`testimonial-card-${item.id}`}
                  onClick={() => {
                    setActiveClientIndex(idx);
                    onClientClick?.(item.name);
                  }}
                  className={`shrink-0 w-[280px] sm:w-[320px] rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 cursor-pointer backdrop-blur-md border ${
                    isActive
                      ? 'border-white bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-transparent shadow-2xl scale-[1.03] z-10'
                      : 'border-white/10 bg-gradient-to-b from-white/[0.04] via-white/[0.01] to-transparent opacity-70 hover:opacity-100 hover:border-white/30'
                  }`}
                >
                  {/* Top Metric Stat */}
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
                          {item.statNumber}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-zinc-400 max-w-[100px] text-right leading-tight">
                        {item.statLabel}
                      </span>
                    </div>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Client Info Footer */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        <span>{item.name}</span>
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {item.role} · {item.company}
                      </div>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Floating Control Panel matching reference image layout */}
        <div className="mt-12 flex justify-center">
          <div 
            id="testimonials-floating-bar"
            className="inline-flex items-center gap-3 bg-white/[0.05] border border-white/15 rounded-full p-2 backdrop-blur-xl shadow-2xl"
          >
            {/* Denis / Client Selector Badge */}
            <button
              id="testimonial-client-pill"
              onClick={() => onClientClick?.(testimonials[activeClientIndex].name)}
              className="bg-white/15 hover:bg-white/25 border border-white/20 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-full transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
            >
              <span>{testimonials[activeClientIndex].name}</span>
            </button>

            {/* Fresh Look Action Link */}
            <button
              id="testimonial-fresh-look-btn"
              onClick={handleNext}
              className="text-zinc-300 hover:text-white text-xs sm:text-sm font-medium px-3 py-1.5 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Get a fresh look</span>
              <span className="text-xs">»</span>
            </button>

            {/* Book a Meeting Primary Button */}
            <button
              id="testimonial-book-meeting-btn"
              onClick={onBookMeetingClick}
              className="bg-white text-black hover:bg-zinc-200 font-semibold text-xs sm:text-sm px-5 py-2 sm:py-2 rounded-full transition-all duration-200 shadow-lg cursor-pointer active:scale-95"
            >
              Book a meeting
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
