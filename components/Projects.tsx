import React from 'react';
import { Section } from './Section';
import { Reveal } from './Reveal';
import { Folder } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export const Projects: React.FC = () => {
  const { content } = useLanguage();
  const { projects, ui } = content;

  return (
    <Section id="projects" title={ui.sectionTitles.projects}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <Reveal key={idx} delay={idx * 150}>
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-lg h-full hover:border-teal-500/40 transition-all hover:-translate-y-1 group flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <Folder className="w-5 h-5 text-teal-500" />
                    <span className="text-teal-400 text-sm font-mono font-medium tracking-wide">
                        {project.category}
                    </span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-slate-100 font-mono mb-3 group-hover:text-teal-400 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
                {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono text-slate-500 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50"></span>
                        {tech}
                    </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};
