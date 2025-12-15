import React from 'react';
import { CONTACT_LINKS } from '../constants';
import { Download, Terminal, ChevronRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { useLanguage } from './LanguageContext';

export const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { personalInfo, ui } = content;

  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Intro & Info */}
        <div className="space-y-8 order-2 lg:order-1">
          <Reveal>
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 font-mono text-sm print:hidden">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                {ui.hero.available}
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-100 tracking-tight">
                {personalInfo.name}
              </h1>
              
              <div className="flex items-center gap-3 text-xl sm:text-2xl text-slate-400 font-mono">
                <ChevronRight className="w-6 h-6 text-teal-500 print:hidden" />
                <span className="text-teal-400">{personalInfo.role}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl">
               {ui.hero.intro}
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="flex flex-wrap gap-4 pt-4 print:hidden">
               <a 
                href="#contact"
                className="px-6 py-3 bg-teal-500 text-slate-950 font-bold font-mono rounded hover:bg-teal-400 transition-all hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] flex items-center gap-2"
              >
                <span>{ui.hero.contactBtn}</span>
              </a>
              <a 
                href="/CV.pdf"
                download="Bruno_Mouazzem_CV.pdf"
                className="px-6 py-3 border border-slate-700 text-slate-300 font-mono rounded hover:border-teal-500 hover:text-teal-400 transition-all flex items-center gap-2 bg-slate-900/50"
              >
                <Download className="w-4 h-4" />
                <span>{ui.hero.downloadBtn}</span>
              </a>
            </div>
          </Reveal>
          
          <Reveal delay={600}>
            <div className="flex items-center gap-6 pt-4 text-slate-500 print:hidden">
               {CONTACT_LINKS.map((link, idx) => (
                  <a key={idx} href={link.href} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
                     <link.icon className="w-6 h-6" />
                  </a>
               ))}
            </div>
            
            {/* Print only Contact info */}
            <div className="hidden print:block pt-4 text-sm text-slate-900 font-mono">
               <p>{CONTACT_LINKS[1].text}</p>
               <p>{CONTACT_LINKS[0].text}</p>
               <p>{CONTACT_LINKS[2].text}</p>
            </div>
          </Reveal>
        </div>

        {/* Right Column: Code Window */}
        <div className="order-1 lg:order-2 print:hidden">
          <Reveal delay={300}>
            <div className="relative rounded-lg bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed group hover:border-slate-700 transition-colors">
              {/* Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                     <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="text-slate-500 text-xs">{ui.hero.codeWindow.filename}</div>
                  <div className="w-10"></div> {/* Spacer */}
              </div>
              
              {/* Code Content */}
              <div className="p-6 overflow-x-auto text-slate-300">
                  <div className="flex">
                      <div className="text-slate-600 select-none text-right pr-4 border-r border-slate-800 mr-4">
                          1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
                      </div>
                      <div>
                          <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-slate-400">=</span> <span className="text-yellow-400">{'{'}</span><br/>
                          &nbsp;&nbsp;<span className="text-sky-300">name</span>: <span className="text-green-400">"{personalInfo.name}"</span>,<br/>
                          &nbsp;&nbsp;<span className="text-sky-300">role</span>: <span className="text-green-400">"{personalInfo.role}"</span>,<br/>
                          &nbsp;&nbsp;<span className="text-sky-300">experience</span>: <span className="text-orange-400">6</span>,<br/>
                          &nbsp;&nbsp;<span className="text-sky-300">skills</span>: <span className="text-yellow-400">{'['}</span><br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Python"</span>,<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"AWS"</span>,<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"DDD"</span>,<br/>
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">"Clean Architecture"</span><br/>
                          &nbsp;&nbsp;<span className="text-yellow-400">{']'}</span>,<br/>
                          &nbsp;&nbsp;<span className="text-sky-300">status</span>: <span className="text-green-400">"{ui.hero.codeWindow.status}"</span><br/>
                          <span className="text-yellow-400">{'}'}</span>;
                      </div>
                  </div>
              </div>
              
              {/* Blinking Cursor overlay */}
              <div className="absolute bottom-6 left-20 ml-2">
                   <span className="animate-pulse inline-block w-2.5 h-4 bg-teal-500 align-middle"></span>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 -right-10 -top-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -left-10 -bottom-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};