import React from 'react';
import { COMPANY_NAME, NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-16">
        
        {/* Company Info */}
        <div className="md:w-1/3">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-8 h-8 border border-white/30 flex items-center justify-center font-serif text-sm">匠</div>
            <h3 className="text-xl font-serif font-bold tracking-widest">{COMPANY_NAME}</h3>
          </div>
          <address className="not-italic text-gray-400 text-sm leading-8 font-light">
            〒100-0001 東京都千代田区千代田1-1<br />
            Tel: 03-0000-0000<br />
            営業時間: 9:00 - 18:00 (日曜定休)
          </address>
        </div>

        {/* Links */}
        <div className="flex gap-16 text-sm">
           <div>
               <h4 className="text-accent text-xs font-bold tracking-widest mb-6">MENU</h4>
               <ul className="space-y-4">
                   {NAV_LINKS.map(link => (
                       <li key={link.label}>
                           <a href={link.href} className="text-gray-400 hover:text-white transition-colors tracking-wide">{link.label}</a>
                       </li>
                   ))}
               </ul>
           </div>
           <div>
               <h4 className="text-accent text-xs font-bold tracking-widest mb-6">SERVICE</h4>
               <ul className="space-y-4">
                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors tracking-wide">外壁塗装</a></li>
                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors tracking-wide">屋根塗装</a></li>
                   <li><a href="#" className="text-gray-400 hover:text-white transition-colors tracking-wide">防水工事</a></li>
               </ul>
           </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} All Rights Reserved.</p>
        <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">プライバシーポリシー</a>
            <a href="#" className="hover:text-gray-300">特定商取引法に基づく表記</a>
        </div>
      </div>
    </footer>
  );
};