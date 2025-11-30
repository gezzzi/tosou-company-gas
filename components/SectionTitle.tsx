import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="block text-accent font-medium tracking-widest mb-2 text-sm uppercase">
        {subtitle}
      </span>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary leading-tight">
        {title}
      </h2>
      <div className={`mt-4 h-1 w-20 bg-accent ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};