import React from 'react';
import { SectionTitle } from './SectionTitle';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative group">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-accent/30 -z-10 group-hover:top-2 group-hover:left-2 transition-all duration-500"></div>
            <img 
              src="https://picsum.photos/id/1029/800/1000" 
              alt="打ち合わせ風景" 
              className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 md:pl-10">
            <SectionTitle title="想いを込めた、ひと塗り。" subtitle="OUR PHILOSOPHY" align="left" />
            
            <div className="prose prose-lg text-gray-600 font-light leading-loose">
              <p className="mb-6">
                塗装は、ただ色を塗るだけではありません。<br/>
                それは、お客様の大切な資産である「家」を<br/>
                雨や風、そして時の流れから守り抜くための、<br/>
                最も重要なメンテナンスです。
              </p>
              <p className="mb-6">
                私たちは創業以来、「見えない部分こそ丁寧に」を<br/>
                合言葉に、一軒一軒、真心を込めて施工してきました。<br/>
                下地処理から仕上げまで、一切の妥協を許さない。<br/>
                それが、私たち匠塗装の誇りです。
              </p>
              <p>
                10年後、20年後も「頼んでよかった」と<br/>
                言っていただけるよう、誠実な仕事を続けてまいります。
              </p>

              <div className="mt-8 flex items-center gap-4">
                 <div className="h-px bg-gray-300 w-12"></div>
                 <span className="font-serif font-bold text-xl text-primary">代表取締役 田中 健一</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};