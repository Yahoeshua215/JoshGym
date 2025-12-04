import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onOpenConcierge: () => void;
  scrollToNext: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConcierge, scrollToNext }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center text-center px-4">
      {/* Background Image - Luxury Fitness Center */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Luxury Gym Interior with low lighting" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        {/* Heavy Vignette Overlay to ensure text pop */}
        <div className="absolute inset-0 bg-hero-gradient mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto transform translate-y-[-20px]">
        
        {/* Badge */}
        <div className="mb-8 animate-fade-in-down">
          <span className="bg-[#1A1C1E]/80 backdrop-blur-sm border border-white/10 text-white/80 px-5 py-1.5 rounded-full text-[10px] md:text-xs tracking-[0.25em] uppercase font-sans font-semibold shadow-2xl">
            The 2025 Membership
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="flex flex-col items-center text-shadow">
          <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-wide leading-tight mb-2">
            WHERE THE
          </span>
          <div className="flex flex-wrap justify-center gap-x-4 md:gap-x-8 items-baseline leading-none">
             <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-wide">
              IRON
            </span>
            <span className="font-display italic font-normal text-6xl md:text-8xl lg:text-9xl text-brand-gold transform translate-y-2">
              MEETS
            </span>
          </div>
          <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-white tracking-wide mt-2">
             THE WILL
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-10 text-white/80 font-sans font-light text-sm md:text-lg tracking-wide max-w-2xl leading-relaxed">
          Join an exclusive community dedicated to the art of self-sculpting. 
          Your sanctuary for strength awaits in the heart of the city.
        </p>

        {/* CTA Button */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 items-center">
          <button 
            onClick={onOpenConcierge}
            className="bg-brand-gold hover:bg-brand-goldHover text-black text-xs md:text-sm font-bold uppercase tracking-[0.2em] px-10 py-4 transition-all duration-300 shadow-[0_0_20px_rgba(197,160,89,0.3)] hover:shadow-[0_0_30px_rgba(197,160,89,0.5)]"
          >
            Inquire About Membership &rarr;
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={scrollToNext}
          className="group p-4 rounded-full border border-white/10 hover:border-brand-gold/50 transition-colors duration-500"
        >
          <ArrowDown className="w-4 h-4 text-white/50 group-hover:text-brand-gold animate-bounce transition-colors duration-300" />
        </button>
      </div>
    </section>
  );
};