import React from 'react';

interface SectionProps {
  id?: string;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children }) => {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {title && (
        <div className="flex items-center gap-4 mb-12">
           <h2 className="text-2xl md:text-3xl font-bold text-teal-400">
            <span className="text-slate-600 mr-2">//</span>
            {title}
          </h2>
          <div className="h-px bg-slate-800 flex-grow max-w-xs"></div>
        </div>
      )}
      {children}
    </section>
  );
};