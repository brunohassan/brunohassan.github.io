import React from 'react';
import { useLanguage } from './LanguageContext';

export const Footer: React.FC = () => {
  const { content } = useLanguage();
  const { personalInfo, ui } = content;

  return (
    <footer id="contact" className="py-8 bg-slate-950 text-center border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 font-mono text-sm">
        <p className="text-slate-500 mb-2">
          <span className="text-teal-500">git</span> commit -m "{ui.footer.commitMsg}"
        </p>
        <p className="text-slate-700 text-xs mt-4">
          &copy; {new Date().getFullYear()} {personalInfo.name}. {ui.footer.rights}
        </p>
      </div>
    </footer>
  );
};
