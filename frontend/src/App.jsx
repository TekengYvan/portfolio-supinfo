import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen selection:bg-primary-light/30 transition-colors duration-500">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Contact />
          </main>
          <footer className="py-8 text-center text-sm opacity-50 border-t dark:border-gray-800">
            &copy; {new Date().getFullYear()} TEKENG DJANG YVAN DUPLEX PACOM , Portfolio.
          </footer>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
