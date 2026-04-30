import React from 'react';
import { Clock, Users, Award, BookOpen, Monitor, Star } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Monitor className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: 'Interactive Online Learning',
      description: 'Study from home with real-time interactive lessons.',
      gradient: 'from-blue-500 to-cyan-500'
    },    
    {
      icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: 'Expert UK Teachers',
      description: 'Learn from qualified educators specialising in exam preparation.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: 'Exam Success',
      description: '11plus, SATs, GCSE & A-Level preparation.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8 text-white" />,
      title: 'Personalized Attention',
      description: 'We provide individual feedback while closely monitoring each student\'s progress.',
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <div className="py-16 sm:py-20 bg-gradient-to-br from-[#1434cb] via-[#019fe3] to-[#1434cb] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Why Choose Fine Learning?
          </h2>
          <div className="w-24 h-1 bg-white mx-auto rounded-full mb-6"></div>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-white/90 px-4">
            Discover the benefits of learning with us and unlock your full potential.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 sm:p-8 transform transition-all duration-500 hover:-translate-y-3 border border-white/40 hover:border-white shadow-lg hover:shadow-2xl"
            >
              {/* Icon with Gradient */}
              <div className={`flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${benefit.gradient} rounded-2xl mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-center text-[#1434cb] mb-4 group-hover:scale-105 transition-transform">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-center text-gray-600 text-sm sm:text-base leading-relaxed">
                {benefit.description}
              </p>

              {/* Decorative Line */}
              <div className="mt-6 w-0 group-hover:w-full h-1 bg-gradient-to-r from-transparent via-[#1434cb] to-transparent mx-auto transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;