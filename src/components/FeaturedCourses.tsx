import React from 'react';
import { Calculator, Beaker, BookOpen } from 'lucide-react';

const FeaturedCourses = () => {
  const subjects = [
    {
      icon: <Calculator className="h-8 w-8 sm:h-10 sm:w-10 text-[#7c1411]" />,
      title: 'Mathematics',
      description: 'Master arithmetic, algebra, geometry, and calculus with expert guidance.',
      stages: ['KS1', 'KS2', 'KS3', 'KS4']
    },
    {
      icon: <Beaker className="h-8 w-8 sm:h-10 sm:w-10 text-[#7c1411]" />,
      title: 'Science',
      description: 'Explore Biology, Chemistry, and Physics with hands-on learning.',
      stages: ['KS1', 'KS2', 'KS3', 'KS4']
    },
    {
      icon: <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 text-[#7c1411]" />,
      title: 'English',
      description: 'Enhance your skills in Language, Literature, and Communication.',
      stages: ['KS1', 'KS2', 'KS3', 'KS4']
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1434cb]">
            Explore our subjects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-gray-600 px-4">
            Explore our comprehensive range of subjects and key stages designed to help you excel.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-4 sm:p-6">
                {/* Icon and Title */}
                <div className="flex items-center mb-4">
                  <div className="p-2 sm:p-3 rounded-full bg-[#1434cb]/10">
                    {subject.icon}
                  </div>
                  <h3 className="ml-3 sm:ml-4 text-lg sm:text-xl font-bold text-[#1434cb]">
                    {subject.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {subject.description}
                </p>

                {/* Key Stages */}
                <div className="mt-4 sm:mt-6">
                  <div className="text-xs sm:text-sm font-medium text-gray-700">Available Key Stages:</div>
                  <div className="mt-2 flex flex-wrap gap-1 sm:gap-2">
                    {subject.stages.map((stage, stageIndex) => (
                      <span
                        key={stageIndex}
                        className="inline-flex items-center px-2 sm:px-3 py-0.5 rounded-full text-xs sm:text-sm font-medium bg-[#1434cb]/10 text-[#1434cb] transition-all duration-300 hover:bg-[#1434cb] hover:text-white"
                      >
                        {stage}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Button */}
                <div className="mt-4 sm:mt-6">
                  <a
                    href={`/${subject.title.toLowerCase()}`} // Dynamically navigate to the subject page
                    className="w-full inline-block bg-[#7c1411] text-white font-bold py-2 px-4 rounded-md hover:bg-[#a31a16] transition-all duration-300 text-center text-sm sm:text-base"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;