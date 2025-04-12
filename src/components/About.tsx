import React from 'react';
import { useInView } from '../hooks/useInView';
import { User, MapPin, GraduationCap, Code, Shield } from 'lucide-react';

const About: React.FC = () => {
  const [ref, isInView] = useInView();

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 gradient-text">About Me</h2>
          <div className="h-1 w-20 bg-primary rounded mb-8"></div>
          
          <div 
            ref={ref}
            className={`grid md:grid-cols-5 gap-8 items-center ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
          >
            <div className="md:col-span-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden gradient-border">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                    alt="Jeet Vijaywargi" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card p-3 rounded-lg shadow-lg">
                  <Code className="h-8 w-8 text-primary" />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-3">
              <p className="text-lg text-foreground/90 mb-6">
                I'm an AI Engineer specializing in Information Security, currently pursuing my Master's at Carnegie Mellon University. With a strong foundation in Computer Science and a passion for secure AI systems, I work at the intersection of artificial intelligence and cybersecurity.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-primary mr-3" />
                  <span>Jeet Vijaywargi</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span>Pittsburgh, USA</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-primary mr-3" />
                  <span>MS in AI Engineering - Information Security</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary mr-3" />
                  <span>Cybersecurity & AI Specialist</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Information Security</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Data Science</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Cloud Computing</span>
                <span className="px-3 py-1 bg-muted rounded-full text-sm">Software Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
