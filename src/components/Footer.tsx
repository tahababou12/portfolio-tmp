import React from 'react';
import { Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center mb-6 md:mb-0">
              <Code className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-bold">Jeet Vijaywargi</span>
            </div>
            
            <div className="flex space-x-6">
              <a 
                href="https://github.com/jeetsatishv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/jeetvijaywargi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:jeetsatishv@gmail.com" 
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-muted pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-foreground/60 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Jeet Vijaywargi. All rights reserved.
              </p>
              
              <div className="flex space-x-6">
                <a href="#about" className="text-sm text-foreground/60 hover:text-primary transition-colors">About</a>
                <a href="#projects" className="text-sm text-foreground/60 hover:text-primary transition-colors">Projects</a>
                <a href="#skills" className="text-sm text-foreground/60 hover:text-primary transition-colors">Skills</a>
                <a href="mailto:jeetsatishv@gmail.com" className="text-sm text-foreground/60 hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
