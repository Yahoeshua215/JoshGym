import React from 'react';
import { Menu } from 'lucide-react';

export const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-white">
      <div className="flex items-center gap-4">
        <span className="text-xl font-serif tracking-[0.2em] font-semibold">
          J <span className="text-brand-gold mx-2">|</span> JOSH'S GYM
        </span>
        <span className="hidden md:block text-[10px] tracking-[0.3em] opacity-70 mt-1 ml-4">
          EST. 2025
        </span>
      </div>

      <button className="group p-2 rounded-full border border-transparent hover:border-white/20 transition-all duration-300">
        <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-all">
          <Menu className="w-5 h-5 text-white" />
        </div>
      </button>
    </nav>
  );
};