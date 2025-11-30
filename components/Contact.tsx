import React from 'react';
import { SectionTitle } from './SectionTitle';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-white relative">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <SectionTitle title="お問い合わせ" subtitle="CONTACT US" />
        
        <p className="text-center text-gray-300 mb-12">
          お見積もりは無料です。お住まいに関するお悩み、<br className="hidden md:block"/>
          どんな小さなことでもお気軽にご相談ください。
        </p>

        <form className="space-y-6 bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm tracking-widest text-accent">お名前</label>
              <input type="text" id="name" className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="山田 太郎" />
            </div>
            <div className="space-y-2">
              <label htmlFor="tel" className="text-sm tracking-widest text-accent">電話番号</label>
              <input type="tel" id="tel" className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="090-1234-5678" />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm tracking-widest text-accent">メールアドレス</label>
            <input type="email" id="email" className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="example@email.com" />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm tracking-widest text-accent">お問い合わせ内容</label>
            <textarea id="message" rows={4} className="w-full bg-white/10 border border-white/20 p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="外壁のひび割れが気になっています..."></textarea>
          </div>

          <div className="text-center mt-8">
            <button type="submit" className="bg-accent text-white px-12 py-4 font-bold tracking-widest hover:bg-yellow-600 transition-colors duration-300">
              送信する
            </button>
          </div>
        </form>

        <div className="mt-16 text-center">
            <p className="text-sm text-gray-400 mb-2">お電話でのお問い合わせ</p>
            <a href="tel:0120-000-000" className="text-3xl md:text-4xl font-serif font-bold hover:text-accent transition-colors">
                0120-000-000
            </a>
            <p className="text-xs text-gray-500 mt-2">受付時間 9:00〜18:00（日曜定休）</p>
        </div>
      </div>
    </section>
  );
};