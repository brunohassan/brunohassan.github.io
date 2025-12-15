import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Terminal, Globe } from 'lucide-react';
import { CONTACT_LINKS } from '../constants';
import { useLanguage } from './LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      
      setScrollProgress(Number(scroll));
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.ui.nav.about, href: '#' },
    { name: content.ui.nav.skills, href: '#skills' },
    { name: content.ui.nav.experience, href: '#experience' },
    { name: content.ui.nav.projects, href: '#projects' },
    { name: content.ui.nav.contact, href: '#contact' },
  ];

  const linkedinLink = CONTACT_LINKS.find(link => link.href.includes('linkedin'))?.href || '#';

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 border-b print-hidden ${scrolled ? 'bg-slate-950/90 border-slate-800 backdrop-blur-md py-3' : 'bg-transparent border-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center gap-2">
             <Terminal className="w-6 h-6 text-teal-500" />
             <a href="#" className="text-xl font-bold text-slate-100 font-mono tracking-tight hover:text-teal-400 transition-colors">
                &lt;BM /&gt;
             </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-mono text-slate-400 hover:text-teal-400 px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-800/50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 pl-4 border-l border-slate-800">
             {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-teal-400 hover:border-teal-500 transition-all group"
            >
              <Globe className="w-3 h-3 group-hover:text-teal-300" />
              <span>lang="{language}"</span>
            </button>

            <a href={linkedinLink} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
             <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>

          <div className="-mr-2 flex items-center md:hidden gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-xs font-mono text-teal-400"
            >
               <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[1px] bg-teal-500 transition-all duration-150 ease-out" style={{ width: `${scrollProgress * 100}%` }}></div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-teal-400 block px-3 py-2 rounded-md text-base font-medium font-mono"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};