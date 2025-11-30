import React, { useEffect, useState } from 'react';

export const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen min-h-[700px] overflow-hidden bg-gray-900">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/1033/1920/1080"
          alt="職人の手元"
          className={`w-full h-full object-cover transition-transform duration-[20000ms] ease-out ${loaded ? 'scale-110' : 'scale-100'}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent mix-blend-multiply" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content - Vertical Text Layout */}
      <div className="absolute inset-0 z-10 w-full h-full max-w-7xl mx-auto pointer-events-none">
        {/* Main Japanese Copy - Vertical */}
        <div className={`absolute top-[15%] right-8 md:right-20 lg:right-32 h-[60%] flex flex-row-reverse gap-8 md:gap-16 transition-all duration-[1500ms] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="vertical-rl text-white font-serif font-bold text-5xl md:text-7xl lg:text-[5.5rem] leading-relaxed drop-shadow-lg border-r border-white/20 pr-8 md:pr-12">
             誠実な<br/>手仕事で、<br/>家を守る。
          </h1>
          <p className="vertical-rl text-white/90 text-sm md:text-lg tracking-[0.2em] font-light pt-8 md:pt-12 drop-shadow-md">
            創業五十年。信頼と実績の塗装店
          </p>
        </div>

        {/* English Copy - Bottom Left */}
        <div className={`absolute bottom-20 left-6 md:left-20 transition-all duration-[1500ms] delay-700 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
           <p className="text-accent text-xs tracking-[0.4em] uppercase mb-4">Takumi Painting Co., Ltd.</p>
           <p className="text-white text-sm md:text-base font-light tracking-widest leading-loose max-w-md">
             見えないところまで手を抜かない。<br/>
             それが私たちの流儀です。
           </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center animate-pulse">
        <div className="w-[1px] h-16 bg-white/30 mb-2"></div>
        <span className="text-[10px] tracking-widest uppercase writing-vertical">Scroll</span>
      </div>
    </section>
  );
};