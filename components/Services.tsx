import React from 'react';
import { SectionTitle } from './SectionTitle';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="事業内容" subtitle="OUR SERVICES" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="group bg-white hover:bg-primary transition-colors duration-500 overflow-hidden shadow-sm hover:shadow-2xl"
            >
              <div className="h-72 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-0 left-0 bg-accent text-white px-4 py-3 font-serif font-bold text-xl">
                    0{index + 1}
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-serif font-bold text-primary mb-6 group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-7 group-hover:text-gray-300 transition-colors">
                  {service.description}
                </p>
                <div className="mt-8 flex justify-end">
                    <div className="w-8 h-[1px] bg-accent group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};