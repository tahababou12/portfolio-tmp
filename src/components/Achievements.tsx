import React from 'react';
import { useInView } from '../hooks/useInView';
import { Award, Youtube, Trophy } from 'lucide-react';

const Achievements: React.FC = () => {
  const [ref, isInView] = useInView();

  const achievements = [
    {
      title: "5th place in Kaggle Competition",
      description: "Created key features in predicting relationship between amazon movie review and the movie rating. Used Pandas Data Analysis Library, NLTK Library, TFIDF-Vectorizer, and LightGBM linear regressor model.",
      icon: <Trophy className="h-6 w-6 text-primary" />,
      detail: "Ranked 5th out of 100 students"
    },
    {
      title: "TedX Talk",
      description: "Selected to perform Ted Talk on infinity and life. Speech uploaded by TedX Organization on their page and Youtube.",
      icon: <Youtube className="h-6 w-6 text-primary" />,
      detail: "Featured on TedX YouTube channel"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-card/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 gradient-text">Achievements</h2>
          <div className="h-1 w-20 bg-primary rounded mb-12"></div>
          
          <div 
            ref={ref}
            className={`space-y-8 ${isInView ? 'animate-slide-up' : 'opacity-0'}`}
          >
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-card rounded-lg p-6 gradient-border">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mr-4 shrink-0">
                    {achievement.icon}
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-primary mb-3">{achievement.detail}</p>
                    <p className="text-foreground/80">{achievement.description}</p>
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

export default Achievements;
