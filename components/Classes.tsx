import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ClassCardProps {
  title: string;
  subtitle: string;
  image: string;
  score: string;
  scoreLabel: string;
  tags: string[];
}

const ClassCard: React.FC<ClassCardProps> = ({ title, subtitle, image, score, scoreLabel, tags }) => {
  return (
    <div className="group relative bg-[#1A1C1E] border border-white/5 overflow-hidden cursor-pointer transition-transform duration-500 hover:-translate-y-2">
      {/* Image Container with Vignette */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C1E] via-transparent to-transparent z-10 opacity-90" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
        
        {/* Top Left Badge (Circle) */}
        <div className="absolute top-6 left-6 z-20">
          <div className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md flex flex-col items-center justify-center text-center">
            <span className="text-brand-gold font-serif text-sm leading-none">{score}</span>
            <span className="text-[6px] tracking-widest text-white/60 uppercase mt-0.5">{scoreLabel}</span>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-20 p-8">
        <h3 className="font-serif text-3xl text-white mb-1">{title}</h3>
        <p className="text-white/40 text-xs tracking-[0.2em] font-light mb-8 uppercase">{subtitle}</p>
        
        {/* Footer Line */}
        <div className="border-t border-white/10 pt-4 flex justify-between items-center">
          <div className="flex gap-4">
            {tags.map((tag, i) => (
              <React.Fragment key={i}>
                <span className="text-[10px] tracking-[0.2em] text-white/60 uppercase font-sans">{tag}</span>
                {i < tags.length - 1 && <span className="text-[10px] text-brand-gold">•</span>}
              </React.Fragment>
            ))}
          </div>
          <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-brand-gold transition-colors" />
        </div>
      </div>
    </div>
  );
};

export const Classes: React.FC = () => {
  const classes = [
    {
      title: "Iron Sanctuary",
      subtitle: "Hypertrophy • Free Weights",
      image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2000&auto=format&fit=crop",
      score: "01",
      scoreLabel: "HALL",
      tags: ["STRENGTH", "SCULPT"]
    },
    {
      title: "Vinyasa Flow",
      subtitle: "Studio B • Heated",
      image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&w=2000&auto=format&fit=crop",
      score: "02",
      scoreLabel: "STUDIO",
      tags: ["MOBILITY", "BALANCE"]
    },
    {
      title: "Shadow Tai Chi",
      subtitle: "Rooftop Garden • Morning",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2000&auto=format&fit=crop",
      score: "03",
      scoreLabel: "DECK",
      tags: ["MIND", "FLOW"]
    }
  ];

  return (
    <section id="classes" className="py-24 px-4 bg-[#0F1110]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 relative">
          <div className="h-16 w-px bg-brand-gold/30 mx-auto mb-8"></div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Signature Disciplines</h2>
          <p className="text-white/50 max-w-lg mx-auto font-sans font-light tracking-wide text-sm leading-relaxed">
            Curated movement practices led by world-class masters. <br/>
            Designed to refine the body and sharpen the mind.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classes.map((c, idx) => (
            <ClassCard key={idx} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};