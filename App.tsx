import React, { useState, useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AiConcierge } from './components/AiConcierge';
import { Classes } from './components/Classes';
import { Memberships } from './components/Memberships';

const App: React.FC = () => {
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const classesRef = useRef<HTMLElement>(null);

  const scrollToClasses = () => {
    classesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#0F1110] text-white overflow-x-hidden selection:bg-brand-gold selection:text-black">
      <Navigation />
      
      <Hero 
        onOpenConcierge={() => setIsConciergeOpen(true)} 
        scrollToNext={scrollToClasses}
      />
      
      <div ref={classesRef as React.RefObject<HTMLDivElement>}>
        <Classes />
      </div>

      <Memberships />
      
      <AiConcierge 
        isOpen={isConciergeOpen} 
        onClose={() => setIsConciergeOpen(false)} 
      />

      {/* Decorative grainy overlay for texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
    </main>
  );
};

export default App;