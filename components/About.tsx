import React, { useEffect, useRef, useState } from 'react';
import { SectionTitle } from './SectionTitle';

export const About: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Image Section */}
          <div className={`w-full md:w-1/2 relative group transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="absolute -top-4 -left-4 w-full h-full border border-primary/10 -z-10 transition-all duration-500 group-hover:-top-6 group-hover:-left-6"></div>
            <div className="aspect-[4/5] overflow-hidden">
                <img 
                src="https://picsum.photos/id/1029/800/1000" 
                alt="打ち合わせ風景" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                />
            </div>
            {/* Decoration */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gray-50 -z-20"></div>
          </div>

          {/* Text Section */}
          <div className={`w-full md:w-1/2 md:pl-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <SectionTitle title="想いを込めた、ひと塗り。" subtitle="OUR PHILOSOPHY" align="left" />
            
            <div className="prose prose-lg text-gray-500 font-light leading-loose tracking-wide">
              <p className="mb-8">
                塗装は、ただ色を塗るだけではありません。<br/>
                それは、お客様の大切な資産である「家」を<br/>
                雨や風、そして時の流れから守り抜くための、<br/>
                最も重要なメンテナンスです。
              </p>
              <p className="mb-8">
                私たちは創業以来、「見えない部分こそ丁寧に」を<br/>
                合言葉に、一軒一軒、真心を込めて施工してきました。<br/>
                下地処理から仕上げまで、一切の妥協を許さない。<br/>
                それが、私たち匠塗装の誇りです。
              </p>
              <p>
                10年後、20年後も「頼んでよかった」と<br/>
                言っていただけるよう、誠実な仕事を続けてまいります。
              </p>

              <div className="mt-12 flex items-end gap-6">
                 <div className="flex flex-col">
                    <span className="text-[10px] tracking-widest text-gray-400 mb-1">代表取締役</span>
                    <img src="https://fontmeme.com/permalink/250220/some-signature-url.png" alt="Tanaka Kenichi" className="h-10 opacity-60 hidden" /> 
                    <span className="font-serif font-bold text-2xl text-primary">田中 健一</span>
                 </div>
                 <div className="h-px bg-gray-200 flex-1 mb-2"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};