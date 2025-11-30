import React from 'react';
import { COMPANY_NAME, NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-light text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        
        {/* Company Info */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-serif font-bold mb-4">{COMPANY_NAME}</h3>
          <address className="not-italic text-gray-400 text-sm leading-relaxed">
            〒100-0001<br />
            東京都千代田区千代田1-1<br />
            Tel: 03-0000-0000<br />
            Email: info@takumi-paint.example
          </address>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-8 text-sm">
           <ul className="space-y-3 text-center md:text-left">
               {NAV_LINKS.map(link => (
                   <li key={link.label}>
                       <a href={link.href} className="text-gray-300 hover:text-accent transition-colors">{link.label}</a>
                   </li>
               ))}
           </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} {COMPANY_NAME} All Rights Reserved.
      </div>
    </footer>
  );
};