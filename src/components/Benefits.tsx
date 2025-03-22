import React from 'react';
import { Clock, Users, Award, BookOpen, Monitor, Star } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Monitor className="h-6 w-6" />,
      title: 'Interactive Online Learning',
      description: 'Study from home with real-time interactive lessons'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert UK Teachers',
      description: 'Learn from qualified educators specializing in exam preparation'
    },
    
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Exam Success',
      description: '11plus, SATs, GCSE & A-Level preparation'
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'Personalized Attention',
      description: 'Individual feedback and progress tracking'
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Welcome to Fine Learning
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Where learning meets excellence! Join us today, and let's embark on a journey of knowledge and success!
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 featured-card">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-600 rounded-md shadow-lg benefit-icon">
                        {React.cloneElement(benefit.icon, { className: 'h-6 w-6 text-white' })}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;