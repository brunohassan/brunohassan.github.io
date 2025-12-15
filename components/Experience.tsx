import React from 'react';
import { Section } from './Section';
import { GitCommit, GitBranch, Calendar } from 'lucide-react';
import { Reveal } from './Reveal';
import { useLanguage } from './LanguageContext';

export const Experience: React.FC = () => {
  const { content } = useLanguage();
  const { experience, ui } = content;

  return (
    <Section id="experience" title={ui.sectionTitles.experience}>
      <div className="relative space-y-12">
        {/* Main Git Branch Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-800 md:-ml-0.5"></div>

        {experience.map((job, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row gap-8 md:gap-0">
             
             {/* Git Node/Dot */}
             <div className="absolute left-4 md:left-1/2 -ml-[11px] w-6 h-6 rounded-full bg-slate-950 border-2 border-teal-500 z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
             </div>

            {/* Left Side (Date for Even, Content for Odd) */}
            <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:text-right md:pr-12' : 'md:order-last md:pl-12'}`}>
                {/* Content Card */}
               <Reveal width="100%">
                 <div className="bg-slate-900 border border-slate-800 rounded p-6 hover:border-teal-500/30 transition-all shadow-lg group">
                    <div className={`flex flex-col gap-1 mb-4 ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <h3 className="text-xl font-bold text-slate-100 font-mono flex items-center gap-2">
                        {job.company}
                        {idx === 0 && <span className="px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-500 text-xs border border-teal-500/20">HEAD</span>}
                      </h3>
                      <div className="text-teal-400 font-medium text-sm flex items-center gap-2">
                        <GitBranch className="w-4 h-4" />
                        {job.role}
                      </div>
                      <div className="md:hidden text-slate-500 text-xs font-mono mt-1 flex items-center gap-2">
                          <Calendar className="w-3 h-3" />
                          {job.period}
                      </div>
                    </div>

                    <ul className={`space-y-3 text-slate-400 text-sm leading-relaxed marker:text-teal-500/50 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {job.description.map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-3 md:justify-end">
                           {idx % 2 !== 0 && <span className="text-teal-500/50 mt-1">›</span>}
                           <span>{point}</span>
                           {idx % 2 === 0 && <span className="text-teal-500/50 mt-1">‹</span>}
                        </li>
                      ))}
                    </ul>

                     {job.subRoles && (
                    <div className={`mt-6 pt-4 border-t border-slate-800 border-dashed space-y-6`}>
                      {job.subRoles.map((sub, sIdx) => (
                        <div key={sIdx}>
                           <div className={`flex flex-col mb-2 ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                              <h4 className="text-md font-semibold text-slate-300 font-mono">{sub.role}</h4>
                           </div>
                           <ul className={`space-y-2 text-slate-500 text-sm ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                            {sub.description.map((pt, ptIdx) => (
                              <li key={ptIdx}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                 </div>
               </Reveal>
            </div>

            {/* Right Side (Date for Odd, Content for Even) */}
            <div className={`hidden md:flex md:w-1/2 flex-col justify-center ${idx % 2 === 0 ? 'pl-12 items-start' : 'pr-12 items-end order-first'}`}>
                 <Reveal delay={200}>
                   <div className="font-mono text-slate-500 text-sm py-1 px-3 rounded bg-slate-900 border border-slate-800">
                      <span className="text-teal-500/50 mr-2">#</span>
                      {job.period}
                   </div>
                 </Reveal>
            </div>

          </div>
        ))}
        
        {/* End of Git Graph */}
         <div className="absolute left-4 md:left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full pb-10">
            <div className="w-2 h-2 rounded-full bg-slate-800"></div>
         </div>
      </div>
    </Section>
  );
};
