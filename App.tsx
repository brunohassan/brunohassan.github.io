import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { EducationAndLanguages } from './components/EducationAndLanguages';
import { Footer } from './components/Footer';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-300">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Experience />
          <Projects />
          <EducationAndLanguages />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
