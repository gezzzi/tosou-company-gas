import React from 'react';
import { SectionTitle } from './SectionTitle';
import { WORKS } from '../constants';

export const Works: React.FC = () => {
  return (
    <section id="works" className="py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-end mb-16 max-w-7xl mx-auto">
            <div className="text-left">
                <span className="block text-accent font-medium tracking-[0.3em] mb-4 text-xs uppercase">WORKS</span>
                <h2 className="text-3xl md:text-5xl font-serif font-medium leading-tight text-primary">施工事例</h2>
            </div>
            <a href="#" className="hidden md:block text-xs font-bold tracking-widest text-gray-400 hover:text-accent transition-colors pb-2 border-b border-gray-200 hover:border-accent">
                VIEW ALL
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {WORKS.map((work) => (
            <div key={work.id} className="group relative overflow-hidden cursor-pointer aspect-[4/3]">
              <img 
                src={work.image} 
                alt={work.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-center items-center p-8 text-center translate-y-4 group-hover:translate-y-0">
                <span className="text-accent text-xs font-bold tracking-widest mb-4 border border-accent px-3 py-1">{work.category}</span>
                <h3 className="text-white font-serif text-2xl mb-4">{work.title}</h3>
                <p className="text-gray-300 text-sm max-w-xs leading-relaxed">{work.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:hidden">
          <a href="#" className="inline-block border-b border-gray-300 text-gray-500 pb-1 text-xs tracking-widest hover:text-accent hover:border-accent transition-colors">
            VIEW ALL WORKS
          </a>
        </div>
      </div>
    </section>
  );
};