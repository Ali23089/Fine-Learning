import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, FlaskRound as Flask, BookOpen, ChevronDown } from 'lucide-react';

const Courses = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedStage, setSelectedStage] = useState('');

  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: Calculator,
      description: 'Master mathematical concepts from basic arithmetic to advanced calculus',
      topics: ['Algebra', 'Geometry', 'Calculus', 'Statistics']
    },
    {
      id: 'science',
      name: 'Science',
      icon: Flask,
      description: 'Explore the wonders of Biology, Chemistry, and Physics',
      topics: ['Biology', 'Chemistry', 'Physics', 'Environmental Science']
    },
    {
      id: 'english',
      name: 'English',
      icon: BookOpen,
      description: 'Develop strong language and communication skills',
      topics: ['Literature', 'Grammar', 'Writing', 'Comprehension']
    }
  ];

  const stages = ['KS1', 'KS2', 'KS3', 'KS4'];

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setSelectedStage('');
  };

  const handleStageSelect = (stage: string) => {
    setSelectedStage(stage);
    navigate('/registration', {
      state: {
        subject: selectedSubject,
        stage: stage
      }
    });
  };

  return (
    <div className="bg-white">
      {/* Courses Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-xl">Choose your subject and start learning today</p>
        </div>
      </div>

      {/* Subject Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <div
              key={subject.id}
              className={`p-6 rounded-lg shadow-lg cursor-pointer transition duration-300 ${
                selectedSubject === subject.id
                  ? 'bg-primary text-white'
                  : 'bg-white hover:bg-gray-50'
              }`}
              onClick={() => handleSubjectSelect(subject.id)}
            >
              <div className="flex items-center mb-4">
                <subject.icon className={`h-8 w-8 ${
                  selectedSubject === subject.id ? 'text-white' : 'text-secondary'
                }`} />
                <h3 className="ml-3 text-xl font-semibold">{subject.name}</h3>
              </div>
              <p className={`mb-4 ${selectedSubject === subject.id ? 'text-gray-100' : 'text-gray-600'}`}>
                {subject.description}
              </p>
              <ul className="space-y-2">
                {subject.topics.map((topic, index) => (
                  <li key={index} className="flex items-center">
                    <ChevronDown className="h-4 w-4 mr-2" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Key Stage Selection */}
        {selectedSubject && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Your Key Stage</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stages.map((stage) => (
                <button
                  key={stage}
                  className={`p-4 text-center rounded-lg transition duration-300 ${
                    selectedStage === stage
                      ? 'bg-secondary text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                  onClick={() => handleStageSelect(stage)}
                >
                  {stage}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;