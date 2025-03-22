import React from 'react';
import { Calculator, FlaskRound as Flask, BookOpen } from 'lucide-react';

const FeaturedCourses = () => {
  const subjects = [
    {
      icon: <Calculator className="h-8 w-8" />,
      title: 'Mathematics',
      description: 'From basic arithmetic to advanced calculus',
      stages: ['KS1', 'KS2', 'KS3', 'KS4']
    },
    {
      icon: <Flask className="h-8 w-8" />,
      title: 'Science',
      description: 'Biology, Chemistry, and Physics',
      stages: ['KS1', 'KS2', 'KS3', 'KS4']
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: 'English',
      description: 'Language, Literature, and Communication',
      stages: ['KS1', 'KS2', 'KS3', 'KS4']
    }
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Featured Subjects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Choose from our comprehensive range of subjects and key stages
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {subjects.map((subject, index) => (
              <div 
                key={index} 
                className="featured-card bg-white overflow-hidden shadow-lg rounded-lg hover:shadow-2xl"
              >
                <div className="p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <span className="text-indigo-600 benefit-icon inline-block">
                        {React.cloneElement(subject.icon, { className: 'h-8 w-8' })}
                      </span>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        {subject.title}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-base text-gray-500">
                      {subject.description}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="text-sm font-medium text-gray-700">Available Key Stages:</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {subject.stages.map((stage, stageIndex) => (
                        <span
                          key={stageIndex}
                          className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 transition-all duration-300 hover:bg-indigo-200 hover:scale-110"
                        >
                          {stage}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full button-hover bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                      Learn More
                    </button>
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

export default FeaturedCourses;