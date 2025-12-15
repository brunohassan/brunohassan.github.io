import React from 'react';
import { Section } from './Section';
import { GraduationCap, BookOpen, Award } from 'lucide-react';
import { Reveal } from './Reveal';
import { useLanguage } from './LanguageContext';

export const EducationAndLanguages: React.FC = () => {
  const { content } = useLanguage();
  const { education, languages, certifications, ui } = content;

  return (
    <Section className="bg-slate-900/20 border-y border-slate-900">
        <div className="grid md:grid-cols-2 gap-16">
            {/* Education & Certs */}
            <div className="space-y-12">
                <div className="space-y-8">
                    <Reveal>
                    <h3 className="text-xl font-bold text-slate-200 font-mono flex items-center gap-3">
                        <GraduationCap className="w-5 h-5 text-teal-500" />
                        {ui.sectionTitles.education}
                    </h3>
                    </Reveal>
                    <div className="space-y-6">
                        {education.map((edu, idx) => (
                            <Reveal key={idx} delay={idx * 150}>
                            <div className="relative pl-6 border-l border-slate-800 hover:border-teal-500 transition-colors">
                                <h4 className="text-lg font-semibold text-slate-100">{edu.degree}</h4>
                                <p className="text-teal-400 font-mono text-sm mt-1">{edu.school}</p>
                                <p className="text-slate-600 text-xs mt-2 font-mono">{edu.period}</p>
                            </div>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {certifications.length > 0 && (
                    <div className="space-y-8">
                        <Reveal>
                        <h3 className="text-xl font-bold text-slate-200 font-mono flex items-center gap-3">
                            <Award className="w-5 h-5 text-teal-500" />
                            {ui.sectionTitles.certifications}
                        </h3>
                        </Reveal>
                        <div className="space-y-4">
                            {certifications.map((cert, idx) => (
                                <Reveal key={idx} delay={idx * 100}>
                                <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-3 rounded hover:border-teal-500/30 transition-colors">
                                    <div>
                                        <h4 className="text-sm font-semibold text-slate-200">{cert.name}</h4>
                                        <p className="text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
                                    </div>
                                    <span className="text-teal-500 font-mono text-xs border border-teal-500/20 px-2 py-1 rounded bg-teal-500/5">
                                        {cert.year}
                                    </span>
                                </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Languages */}
            <div className="space-y-8">
                <Reveal delay={200}>
                  <h3 className="text-xl font-bold text-slate-200 font-mono flex items-center gap-3">
                      <BookOpen className="w-5 h-5 text-teal-500" />
                      {ui.sectionTitles.languages}
                  </h3>
                </Reveal>
                <div className="grid sm:grid-cols-2 gap-4">
                    {languages.map((lang, idx) => (
                        <Reveal key={idx} delay={200 + (idx * 100)}>
                          <div className="bg-slate-950 p-4 rounded border border-slate-800 flex justify-between items-center group hover:border-slate-700 transition-all">
                              <span className="font-medium text-slate-300">{lang.language}</span>
                              <span className="text-xs font-bold font-mono px-2 py-1 rounded bg-slate-900 text-teal-500 border border-slate-800 group-hover:border-teal-500/30 transition-colors">
                                  {lang.level}
                              </span>
                          </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    </Section>
  );
};
