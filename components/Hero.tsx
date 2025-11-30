import React, { useEffect, useState } from 'react';
import { CATCHPHRASE } from '../constants';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/1033/1920/1080"
          alt="職人の手元"
          className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-out ${loaded ? 'scale-105' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center md:justify-start px-6 md:px-20 max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="border-l-4 border-accent pl-6 md:pl-8 text-white">
            <p className="text-lg md:text-xl tracking-[0.2em] mb-4 font-light">
              創業50年。信頼と実績の塗装店
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8">
              誠実な<br />
              手仕事で、<br />
              家を守る。
            </h1>
            <p className="max-w-md text-gray-200 leading-relaxed hidden md:block">
              私たち匠塗装は、見えないところまで手を抜かない、<br/>
              徹底した職人品質をお約束します。
            </p>
            <div className="mt-10">
               <a 
                 href="#contact" 
                 className="group inline-flex items-center gap-2 bg-white text-primary px-8 py-4 text-sm tracking-widest font-bold hover:bg-accent hover:text-white transition-colors duration-300"
               >
                 無料お見積もり
                 <span className="group-hover:translate-x-1 transition-transform">→</span>
               </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white flex flex-col items-center animate-bounce opacity-80">
        <span className="text-xs tracking-widest mb-2">SCROLL</span>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};