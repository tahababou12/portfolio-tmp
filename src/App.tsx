import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import CursorGlow from './components/CursorGlow';
import { useInView } from './hooks/useInView';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <CursorGlow />
      
      {isLoaded ? (
        <>
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Skills />
            <Achievements />
          </main>
          <Footer />
          <MusicPlayer />
        </>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-background">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default App;
