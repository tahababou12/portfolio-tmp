import React, { useState, useEffect } from 'react';
import { ArrowDown, Terminal, Shield, Database, Brain } from 'lucide-react';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'AI & Security Engineer';
  const typingSpeed = 100;

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, typingSpeed);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  return (
    <section className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/20 filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary/20 filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/3 w-72 h-72 rounded-full bg-accent/20 filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center space-x-3 mb-6 animate-fade-in">
            <Terminal className="h-8 w-8 text-primary" />
            <Shield className="h-8 w-8 text-secondary" />
            <Database className="h-8 w-8 text-accent" />
            <Brain className="h-8 w-8 text-primary" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 animate-slide-up">
            <span className="block">Jeet Vijaywargi</span>
            <span className="gradient-text">{typedText}</span>
            <span className="animate-pulse">|</span>
          </h1>
          
          <p className="text-xl text-foreground/80 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Crafting intelligent systems with security at their core.
            <br />
            MS in AI Engineering at Carnegie Mellon University.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a 
              href="#about" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
            >
              Explore My Work
            </a>
            <a 
              href="mailto:jeetsatishv@gmail.com" 
              className="px-6 py-3 bg-transparent border border-primary/50 text-foreground font-medium rounded-lg hover:bg-primary/10 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <a href="#about" className="flex flex-col items-center text-foreground/60 hover:text-primary transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
