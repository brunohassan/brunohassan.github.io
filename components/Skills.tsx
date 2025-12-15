import React from 'react';
import { Section } from './Section';
import { Code2, Cpu, Database, Layout, Cloud, Wrench } from 'lucide-react';
import { Reveal } from './Reveal';
import { useLanguage } from './LanguageContext';

const icons = [Code2, Layout, Cpu, Database, Cloud, Wrench];

export const Skills: React.FC = () => {
  const { content } = useLanguage();
  const { skills, ui } = content;

  return (
    <Section id="skills" title={ui.sectionTitles.skills}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((category, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <Reveal key={idx} delay={idx * 100}>
              <div 
                className="bg-slate-900/50 border border-slate-800 p-6 rounded hover:border-teal-500/50 transition-all hover:bg-slate-900 group h-full"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-800 rounded text-teal-500 group-hover:text-teal-400 group-hover:bg-slate-800/80 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-200 font-mono">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-2 py-1 bg-slate-800 text-teal-200/80 text-xs font-mono rounded border border-slate-700/50 hover:border-teal-500/30 hover:text-teal-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};
