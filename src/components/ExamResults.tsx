import React from 'react';
import { Award, Star, Trophy, Target } from 'lucide-react';

const ExamResults = () => {
  const exams = [
    {
      icon: <Trophy className="h-12 w-12 text-secondary" />,
      title: '11 Plus',
      description: 'The 11+ programme is designed to prepare students for the highly competitive entrance exams required for grammar and independent schools. While sections such as English and Maths are taught in line with the National Curriculum, reasoning sections are not typically covered in schools. As a result, students who undertake specialised 11+ education are at a distinct advantage, increasing their chances of success. This programme offers an excellent opportunity to enhance a child’s education. While we cannot guarantee admission to a grammar school due to the limited number of places and high number of applications, we are committed to thoroughly preparing students for the entrance exams.'
    },
    {
      icon: <Star className="h-12 w-12 text-secondary" />,
      title: 'SATs',
      description: 'Students in Year 2 and Year 6 are expected to sit their SATs exams. Preparations for these exams are made throughout the year with an emphasis on past paper exams. For Year 2, the exam consists of an untimed test to determine what level they are working at before progressing onto Key Stage 2, which encompasses Years 3, 4, 5 and 6. The English Year 2 SATs paper will mainly cover spelling, punctuation and grammar. There will be three tests for English including a grammar test, a spelling test and a reading comprehension test where they will be required to read given paragraphs and answer inference–based questions.'
    },
    {
      icon: <Award className="h-12 w-12 text-secondary" />,
      title: 'GCSEs',
      description: "The GCSE years are a critical time in a student’s educational journey, and at FL we understand the importance of these exams. Our GCSE tuition program is designed to help students gain a deep understanding of the core subjects and develop the skills required for exam success. We offer focused lessons in subjects such as Maths, English, Science, and more, using proven teaching methods that cater to the individual learning needs of each student. Whether it's mastering complex concepts, honing exam techniques, or improving revision strategies, we are here to guide students towards achieving their best possible results."
    },
    {
      icon: <Target className="h-12 w-12 text-secondary" />,
      title: 'A-Levels',
      description: "A-Levels are the next step toward university and beyond, and we’re here to help students excel in this crucial stage. At FL our A-Level tuition program provides in-depth, subject-specific support to help students succeed in their exams and gain the knowledge they need for higher education. With a team of expert teachers in subjects such as Mathematics, English and Sciences, we focus on advanced concepts, critical thinking, and exam preparation. Our goal is to empower students to achieve top grades and confidently move forward in their academic careers."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Excellence in Every Exam
          </h2>
          <p className="text-xl text-gray-600">
            We produce excellent results in the following exams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exams.map((exam, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  {exam.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  {exam.title}
                </h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed text-justify">
                {exam.description}
              </p>
              <div className="mt-6">
                <a
                  href="/courses"
                  className="inline-flex items-center text-secondary font-semibold hover:text-secondary-dark transition-colors duration-300"
                >
                  Learn more
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
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