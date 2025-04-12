import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Database, Brain, Cloud, Bot, Shield } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, isInView] = useInView();
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projectsData = [
    {
      title: "FIFA Player Rating Prediction ML model",
      date: "December 2024",
      description: "Built a data preprocessing pipeline using PySpark and implemented regression models and neural networks to predict player rating, achieving the highest R2 score of 0.91 with Random Forest Regression. Leveraged Google Cloud Platform for distributed model training and integrated Cloud PostgreSQL for efficient cloud-based data storage and management.",
      icon: <Brain className="h-6 w-6" />,
      tags: ["Machine Learning", "PySpark", "GCP", "PostgreSQL", "Random Forest", "Neural Networks"]
    },
    {
      title: "Telegram Bot for Production Registration and Expiry",
      date: "August 2024",
      description: "Developed a Heroku-hosted Telegram bot to automate product expiry tracking, utilizing data parsing techniques to extract and manage product information. Integrated Amazon S3 for secure storage and retrieval of product certificates, enabling on-demand access through the bot's interactive interface.",
      icon: <Bot className="h-6 w-6" />,
      tags: ["Python", "Telegram API", "Heroku", "AWS S3", "Data Parsing"]
    },
    {
      title: "Subdomain Takeover Detection and Prevention Tool",
      date: "May 2024",
      description: "Developed a subdomain takeover vulnerability detection and prevention tool in a team of 4, utilizing Sublist3r and Cloudflare. Specialized in Mail Exchange Record (MX) and Name Server Record (NS) checks, and finalized the output log for reporting.",
      icon: <Shield className="h-6 w-6" />,
      tags: ["Cybersecurity", "Python", "Sublist3r", "Cloudflare", "DNS"]
    },
    {
      title: "Fidelity Glassdoor Analysis",
      date: "December 2023",
      description: "Utilized Octoparse for scraping Fidelity's Glassdoor reviews, extracting key metrics to analyze employee feedback over time. Employed Pandas Library in Python to interpret Glassdoor data, revealing insights into company ratings.",
      icon: <Database className="h-6 w-6" />,
      tags: ["Data Analysis", "Web Scraping", "Python", "Pandas", "Octoparse"]
    },
    {
      title: "Chess AI Agent/Fighter AI Agent",
      date: "January 2023 - May 2023",
      description: "Developed a Java-based chess AI agent in Eclipse; implemented strategic heuristics and optimized evaluation functions. Developed and trained a neural network-based AI Agents in Java, applying feature engineering and optimization.",
      icon: <Code className="h-6 w-6" />,
      tags: ["Java", "AI", "Neural Networks", "Game Development", "Heuristics"]
    }
  ];

  const handleProjectClick = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 gradient-text">Projects</h2>
          <div className="h-1 w-20 bg-primary rounded mb-12"></div>
          
          <div 
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
          >
            {projectsData.map((project, index) => (
              <div 
                key={index}
                className={`bg-card rounded-lg overflow-hidden card-hover gradient-border cursor-pointer transition-all duration-300 ${
                  activeProject === index ? 'md:col-span-2' : ''
                }`}
                onClick={() => handleProjectClick(index)}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-4">
                        {React.cloneElement(project.icon, { className: "h-5 w-5 text-primary" })}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{project.title}</h3>
                        <p className="text-sm text-foreground/60">{project.date}</p>
                      </div>
                    </div>
                  </div>
                  
                  <p className={`text-foreground/80 mb-4 ${activeProject === index ? '' : 'line-clamp-2'}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 bg-muted text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
