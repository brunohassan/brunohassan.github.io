import React from 'react';
import { Section } from './Section';
import { CONTACT_LINKS } from '../constants';
import { useLanguage } from './LanguageContext';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const { content } = useLanguage();
  const title = content.ui?.nav?.contact ?? 'Contact';

  return (
    <Section id="contact" title={title}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CONTACT_LINKS.map((link, idx) => (
          <Reveal key={idx} delay={idx * 100}>
            <a
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-3 p-4 rounded border border-slate-800 bg-slate-900/50 hover:border-teal-500/40 hover:bg-slate-900 transition-colors"
            >
              <link.icon className="w-5 h-5 text-teal-400" />
              <span className="font-mono text-slate-200 break-all">{link.text}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

