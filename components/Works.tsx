import React from 'react';
import { SectionTitle } from './SectionTitle';
import { WORKS } from '../constants';

export const Works: React.FC = () => {
  return (
    <section id="works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="施工事例" subtitle="WORKS" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WORKS.map((work) => (
            <div key={work.id} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={work.image} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-accent text-xs font-bold tracking-wider mb-2">{work.category}</span>
                <h3 className="text-white font-serif text-xl font-medium mb-2">{work.title}</h3>
                <p className="text-gray-300 text-sm">{work.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-block border border-primary text-primary px-8 py-3 text-sm tracking-widest hover:bg-primary hover:text-white transition-colors duration-300">
            施工事例一覧を見る
          </a>
        </div>
      </div>
    </section>
  );
};