import React from 'react';
import { Clock, Users, Award, BookOpen, Monitor, Star } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Monitor className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: 'Interactive Online Learning',
      description: 'Study from home with real-time interactive lessons.'
    },    
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: 'Expert UK Teachers',
      description: 'Learn from qualified educators specializing in exam preparation.'
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: 'Exam Success',
      description: '11plus, SATs, GCSE & A-Level preparation.'
    },
    {
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: 'Personalized Attention',
      description: 'Individual feedback and progress tracking.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1434cb]">
            Why Choose Fine Learning?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 px-4">
            Discover the benefits of learning with us and unlock your full potential.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-[#1434cb] rounded-full mx-auto">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-bold text-center text-[#1434cb]">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="mt-3 sm:mt-4 text-center text-gray-600 text-sm sm:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;