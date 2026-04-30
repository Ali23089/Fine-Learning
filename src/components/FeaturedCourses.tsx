import React from 'react';
import { Calculator, Beaker, BookOpen } from 'lucide-react';

const FeaturedCourses = () => {
  const subjects = [
    {
      icon: <Calculator className="h-8 w-8 sm:h-10 sm:w-10 text-white" />,
      title: 'Mathematics',
      description: 'Master arithmetic, algebra, geometry, and calculus with expert guidance.',
      stages: ['KS1', 'KS2', 'KS3', 'KS4'],
      iconBg: 'bg-[#1434cb]',
      hoverBg: 'hover:border-[#1434cb]'
    },
    {
      icon: <Beaker className="h-8 w-8 sm:h-10 sm:w-10 text-white" />,
      title: 'Science',
      description: 'Explore Biology, Chemistry, and Physics with hands-on learning.',
      stages: ['KS1', 'KS2', 'KS3', 'KS4'],
      iconBg: 'bg-[#019fe3]',
      hoverBg: 'hover:border-[#019fe3]'
    },
    {
      icon: <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-white" />,
      title: 'English',
      description: 'Enhance your skills in Language, Literature, and Communication.',
      stages: ['KS1', 'KS2', 'KS3', 'KS4'],
      iconBg: 'bg-[#7c1411]',
      hoverBg: 'hover:border-[#7c1411]'
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1434cb] mb-4">
            Explore our subjects
          </h2>
          <div className="w-24 h-1 bg-[#019fe3] mx-auto rounded-full mb-4"></div>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 px-4">
            Explore our comprehensive range of subjects and key stages designed to help you excel.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg ${subject.hoverBg} border-2 border-transparent hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
            >
              <div className="p-6 sm:p-8">
                {/* Icon */}
                <div className={`inline-flex p-4 sm:p-5 rounded-2xl ${subject.iconBg} shadow-lg mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {subject.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#1434cb] transition-colors">
                  {subject.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                  {subject.description}
                </p>

                {/* Key Stages */}
                <div className="mb-6">
                  <div className="text-xs sm:text-sm font-semibold text-gray-700 mb-3">
                    Available Key Stages:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {subject.stages.map((stage, stageIndex) => (
                      <span
                        key={stageIndex}
                        className="inline-flex items-center px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold bg-[#1434cb] text-white shadow-md hover:bg-[#019fe3] transform hover:scale-110 transition-all duration-300 cursor-pointer"
                      >
                        {stage}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <a
                  href={`/${subject.title.toLowerCase()}`}
                  className="group/btn relative w-full inline-flex items-center justify-center gap-2 bg-[#7c1411] text-white font-bold py-3 px-6 rounded-xl hover:bg-[#a31a16] shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Learn More</span>
                  <svg className="relative z-10 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Decorative Element */}
              <div className="h-2 bg-gradient-to-r from-[#1434cb] via-[#019fe3] to-[#7c1411] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;