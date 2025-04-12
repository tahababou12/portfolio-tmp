import React from 'react';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const Education: React.FC = () => {
  const [ref, isInView] = useInView();

  const educationData = [
    {
      institution: "Carnegie Mellon University",
      degree: "Masters of Science in Artificial Intelligence Engineering - Information Security",
      period: "Expected December 2025",
      location: "Pittsburgh, USA",
      courses: [
        "Information Security",
        "System & Tool Chains for AI Engineers",
        "Machine Learning with Adversaries in Mind",
        "Applied Information Assurance",
        "Security in Networked Systems",
        "AI Applications in Information Security",
        "Deep Learning"
      ]
    },
    {
      institution: "Boston University",
      degree: "Major in Computer Science and Minor in Business Administration & Management",
      period: "Conferred May 2024",
      location: "Boston, USA",
      gpa: "3.7/4.0",
      achievement: "Dean's List: 7 out of 8 Semesters",
      courses: [
        "Android App Development",
        "Theory of Computation",
        "Software Engineering",
        "Introduction to Artificial Intelligence",
        "Data Science Tools & Applications",
        "Cybersecurity",
        "Entrepreneurship"
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 gradient-text">Education</h2>
          <div className="h-1 w-20 bg-primary rounded mb-12"></div>
          
          <div 
            ref={ref}
            className={`space-y-12 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
          >
            {educationData.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center">
                      <GraduationCap className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                    <p className="text-lg text-foreground/90 mb-2">{edu.degree}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-sm text-foreground/70">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                      
                      {edu.gpa && (
                        <div className="flex items-center text-sm text-foreground/70">
                          <Award className="h-4 w-4 mr-1" />
                          GPA: {edu.gpa}
                        </div>
                      )}
                      
                      {edu.achievement && (
                        <div className="flex items-center text-sm text-foreground/70">
                          <Award className="h-4 w-4 mr-1" />
                          {edu.achievement}
                        </div>
                      )}
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-md font-medium mb-2 flex items-center">
                        <BookOpen className="h-4 w-4 mr-2 text-secondary" />
                        Selected Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="px-3 py-1 bg-muted rounded-full text-sm">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Education;
