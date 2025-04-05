import React from 'react';
import { Award, Star, Trophy, Target } from 'lucide-react';

const ExamResults = () => {
  const exams = [
    {
      icon: <Trophy className="h-12 w-12 text-[#7c1411]" />,
      title: '11 Plus',
      description:
        'Give your child the winning edge they need for success. Our tailored teaching program maximizes their chances of excelling in the 11 Plus exams.',
      years: 'Year 3-5'
    },
    {
      icon: <Star className="h-12 w-12 text-[#7c1411]" />,
      title: 'SATs',
      description:
        'Help your child shine in their SATs exams with our dedicated support. Our experienced teachers provide the guidance they need to achieve their best.',
      years: 'Year 1-6'
    },
    {
      icon: <Award className="h-12 w-12 text-[#7c1411]" />,
      title: 'GCSEs',
      description:
        'Boost your child\'s grades and unleash their true potential. Our GCSE teaching program empowers students to improve their performance and reach their goals.',
      years: 'Year 7-11'
    },
    {
      icon: <Target className="h-12 w-12 text-[#7c1411]" />,
      title: 'A-Levels',
      description:
        'Set your child up for top-tier results with our expert A-Levels teaching program. Our experienced teachers guide them every step of the way to achieve excellence.',
      years: 'Year 12 & 13'
    }
  ];

  return (
    <div className="py-16 bg-[#019fe3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tagline */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-4">
            We prepare students for success on key exams:
          </h2>
        </div>

        {/* Key Exams Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="text-center bg-[#1434cb] text-white rounded-lg p-6 shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold">{exam.title}</h3>
              <p className="text-lg mt-2">{exam.years}</p>
            </div>
          ))}
        </div>

        {/* Exams Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-[#1434cb]/10">
                  {exam.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1434cb] ml-4">
                  {exam.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {exam.description}
              </p>
              <div className="mt-4">
                <a
                  href="/courses"
                  className="inline-flex items-center text-[#7c1411] font-semibold hover:text-[#a31a16] transition-colors duration-300"
                >
                  Learn more
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExamResults;