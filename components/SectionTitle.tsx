import React from 'react';
import { useInView } from './useInView'; // We'll create a hook or just use simple animation

interface SectionTitleProps {
  title: string;
  subtitle: string;
  align?: 'left' | 'center';
  color?: 'dark' | 'light';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = 'center',
  color = 'dark'
}) => {
  return (
    <div className={`mb-20 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <span className="block text-accent font-medium tracking-[0.3em] mb-4 text-xs uppercase">
        {subtitle}
      </span>
      <h2 className={`text-3xl md:text-5xl font-serif font-medium leading-tight ${color === 'light' ? 'text-white' : 'text-primary'}`}>
        {title}
      </h2>
      <div className={`mt-8 h-[1px] w-12 bg-accent ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
};