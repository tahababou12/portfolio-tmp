import React from 'react';
import { useInView } from '../hooks/useInView';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, isInView] = useInView();

  const experienceData = [
    {
      position: "Summer Intern",
      company: "Serene Pharma",
      location: "Tashkent, Uzbekistan",
      period: "June 2023 - August 2023",
      responsibilities: [
        "Enhanced productivity by automating tablet setup with DUCKY scripts, reducing setup time by approximately 80%",
        "Collaborated in a cross-functional team to develop an Android app for medical representatives, improving workflow efficiency by 30%"
      ]
    },
    {
      position: "Teaching Assistant for Introduction to Information Security",
      company: "Boston University",
      location: "Boston, USA",
      period: "September 2023 - December 2023",
      responsibilities: [
        "Led 4 interactive Web Audit discussions, resulting direct application of discussed concepts in students' project work",
        "Refined grading skills through assessment of 25 final projects, ensuring detailed feedback and differentiation in student work quality"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 gradient-text">Experience</h2>
          <div className="h-1 w-20 bg-primary rounded mb-12"></div>
          
          <div 
            ref={ref}
            className={`space-y-12 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
          >
            {experienceData.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="bg-card rounded-lg p-6 gradient-border">
                  <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                  <p className="text-lg text-primary mb-4">{exp.company}</p>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center text-sm text-foreground/70">
                      <Calendar className="h-4 w-4 mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-foreground/70">
                      <MapPin className="h-4 w-4 mr-1" />
                      {exp.location}
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-secondary rounded-full mt-2 mr-3"></span>
                        <span className="text-foreground/80">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
