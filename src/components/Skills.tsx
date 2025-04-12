import React from 'react';
import { useInView } from '../hooks/useInView';
import { Code, Database, Server, Globe, Lock, Brain, Languages } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, isInView] = useInView();

  const skillCategories = [
    {
      name: "Programming Languages & Systems",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Python", "Java", "C", "MATLAB", "DUCKY", "Linux/Unix"]
    },
    {
      name: "Cloud Technologies",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Amazon Web Services", "Google Cloud Compute"]
    },
    {
      name: "Database Technologies",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["PostgreSQL", "Neo4j", "Firebase", "AWS", "SQL"]
    },
    {
      name: "Data & AI Skills",
      icon: <Brain className="h-6 w-6 text-primary" />,
      skills: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Data Analytics"]
    },
    {
      name: "Frameworks & Libraries",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: ["PyTorch", "TensorFlow", "PySpark", "Scikit-learn", "Pandas", "NumPy", "NLTK", "ML Frameworks"]
    },
    {
      name: "Tools",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Git", "Docker", "Apache Wireshark", "Confluent Kafka"]
    },
    {
      name: "Security",
      icon: <Lock className="h-6 w-6 text-primary" />,
      skills: ["Network Security", "Web Security", "Web Audit", "Data Monitoring", "Information Assurance"]
    },
    {
      name: "Languages",
      icon: <Languages className="h-6 w-6 text-primary" />,
      skills: ["English (Fluent)", "Russian (Native)", "Hindi (Native)"]
    }
  ];

  const getSkillLevel = (skill: string) => {
    const levels: Record<string, number> = {
      "Python": 90,
      "Java": 85,
      "Machine Learning": 85,
      "Deep Learning": 80,
      "Data Analytics": 85,
      "PyTorch": 80,
      "TensorFlow": 75,
      "Network Security": 85,
      "Web Security": 80,
      "PostgreSQL": 75,
      "AWS": 80,
      "Git": 90,
      "Docker": 75,
    };
    
    return levels[skill] || Math.floor(Math.random() * 20) + 70; // Random level between 70-90 for unlisted skills
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 gradient-text">Skills</h2>
          <div className="h-1 w-20 bg-primary rounded mb-12"></div>
          
          <div 
            ref={ref}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
          >
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-card rounded-lg p-6 gradient-border">
                <div className="flex items-center mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold ml-3">{category.name}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, i) => {
                    const level = getSkillLevel(skill);
                    
                    return (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm">{skill}</span>
                          <span className="text-sm text-foreground/60">{level}%</span>
                        </div>
                        <div className="progress-bar">
                          <div 
                            className="progress-bar-fill" 
                            style={{ width: `${level}%`, transition: 'width 1s ease-in-out' }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
