import React, { useState } from 'react';
import { SectionTitle } from './SectionTitle';

export const Contact: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-[0.03]">
        <span className="text-[20vw] font-serif font-bold leading-none text-primary whitespace-nowrap absolute -top-10 -left-20">
          CONTACT
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle title="お問い合わせ" subtitle="CONTACT" />
        
        <p className="text-center text-gray-500 mb-16 font-light leading-loose tracking-wide">
          お見積もりは無料です。<br/>
          お住まいに関するお悩み、どんな小さなことでもお気軽にご相談ください。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          
          {/* Phone Contact Card */}
          <div className="bg-white p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 border-t-4 border-accent text-center group">
            <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-primary mb-2 tracking-widest">お電話でのご相談</h3>
            <p className="text-gray-400 text-xs mb-6">受付時間 9:00〜18:00（日曜定休）</p>
            <a href="tel:0120-000-000" className="block text-3xl md:text-4xl font-serif font-bold text-primary hover:text-accent transition-colors tracking-widest">
              0120-000-000
            </a>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              お急ぎの方や、<br/>直接お話しされたい方はこちら
            </p>
          </div>

          {/* Web Contact Card */}
          <div className="bg-white p-10 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 border-t-4 border-primary text-center group">
             <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="text-lg font-bold text-primary mb-2 tracking-widest">Webからのお問い合わせ</h3>
            <p className="text-gray-400 text-xs mb-8">24時間365日受付</p>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="inline-block w-full border border-primary text-primary py-4 px-8 text-sm tracking-widest font-bold hover:bg-primary hover:text-white transition-all duration-300"
            >
              お問い合わせフォームへ
            </button>
            <p className="text-xs text-gray-400 mt-4 leading-relaxed">
              写真などを添付して<br/>詳しく相談したい方はこちら
            </p>
          </div>

        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" onClick={() => setIsModalOpen(false)}></div>
          
          <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto relative shadow-2xl animate-[fadeIn_0.3s_ease-out]">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-serif font-bold text-primary mb-2">お問い合わせフォーム</h3>
                <p className="text-xs text-gray-500">下記フォームに必要事項をご入力ください。</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold tracking-widest text-primary">お名前 <span className="text-accent">*</span></label>
                    <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors" placeholder="山田 太郎" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="tel" className="text-xs font-bold tracking-widest text-primary">電話番号</label>
                    <input type="tel" id="tel" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors" placeholder="090-1234-5678" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold tracking-widest text-primary">メールアドレス <span className="text-accent">*</span></label>
                  <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors" placeholder="example@email.com" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-xs font-bold tracking-widest text-primary">お問い合わせ種別</label>
                  <select id="type" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors">
                    <option>外壁塗装について</option>
                    <option>屋根塗装について</option>
                    <option>防水工事について</option>
                    <option>お見積もりのご依頼</option>
                    <option>その他</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold tracking-widest text-primary">お問い合わせ内容 <span className="text-accent">*</span></label>
                  <textarea id="message" rows={5} className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-accent focus:bg-white transition-colors" placeholder="ご相談内容をご記入ください" required></textarea>
                </div>

                <div className="pt-4 text-center">
                  <button type="submit" className="bg-primary text-white px-12 py-4 text-sm font-bold tracking-widest hover:bg-primary-light transition-colors w-full md:w-auto">
                    送信内容を確認する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};