import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calculator, FlaskRound as Flask, BookOpen } from 'lucide-react';

const Courses = () => {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedStage, setSelectedStage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const subjects = [
    {
      id: 'mathematics',
      name: 'Mathematics',
      icon: Calculator,
      image: '/assets/images/Maths.jpg',
      description:
        'At FL, we make Maths engaging and easy to understand, from basic arithmetic to advanced topics. Our expert teachers build confidence and problem-solving skills through clear, step-by-step guidance. Each lesson is tailored to help students progress steadily and succeed in exams.',
    },
    {
      id: 'science',
      name: 'Science',
      icon: Flask,
      image: '/assets/images/science.jpg',
      description:
        'FL\'s Science Teaching makes Physics, Chemistry, and Biology simple and exciting. We use hands-on learning to break down complex ideas and spark curiosity. Students develop critical thinking and a lasting passion for discovery.',
    },
    {
      id: 'english',
      name: 'English',
      icon: BookOpen,
      image: '/assets/images/English.jpg',
      description:
        'Our English program strengthens reading, writing, speaking, and listening. With a focus on grammar, vocabulary, and comprehension, students learn to communicate clearly and confidently. Lessons are crafted to support both academic growth and real-world fluency.',
    },
  ];

  const stages = ['KS1', 'KS2', 'KS3', 'KS4'];

  const extraOptions = [
    {
      id: 'premium-lesson',
      name: 'Premium Lesson (60 min)',
      duration: '60 min',
      image: '/assets/images/Premium_lesson.png',
      description: 'Exclusive one-on-one lessons tailored to your needs.',
    },
    {
      id: 'exam-booster',
      name: 'Exam Booster Session (90 min)',
      duration: '90 min',
      image: '/assets/images/EB.jpg',
      description: 'Intensive sessions to prepare for your upcoming exams.',
    },
  ];

  const handleSubjectSelect = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setSelectedOption('');
    setIsModalOpen(true); // Open the modal
  };

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setSelectedSubject('');
    setIsModalOpen(true); // Open the modal
  };

  const handleStageSelect = (stage: string) => {
    setSelectedStage(stage);
    setIsModalOpen(false); // Close the modal
    navigate('/registration', {
      state: {
        subject: selectedSubject || selectedOption,
        stage: stage,
      },
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="bg-gray-50">
      {/* Courses Header */}
      <motion.div
        className="relative bg-gradient-to-r from-[#1434cb] via-[#019fe3] to-[#1434cb] text-white py-12 sm:py-16 md:py-20 overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">Our Courses</h1>
          <div className="w-16 sm:w-24 h-1 bg-white mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-white/90 px-4">Choose a subject and start exploring your path to knowledge</p>
        </div>
      </motion.div>

      {/* Subject Selection */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {subjects.map((subject) => (
            <motion.div
              key={subject.id}
              className={`p-4 sm:p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 transform ${
                selectedSubject === subject.id
                  ? 'bg-[#019fe3] text-white scale-105'
                  : 'bg-gray-100 hover:bg-[#1434cb] hover:text-white'
              }`}
              onClick={() => handleSubjectSelect(subject.id)}
              variants={cardVariants}
            >
              <img
                src={subject.image}
                alt={subject.name}
                className="w-full h-32 sm:h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-center text-lg sm:text-xl font-bold">{subject.name}</h3>
              <p className="text-center text-gray-600 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                {subject.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extra Options Section */}
        <motion.div
          className="mt-12 sm:mt-16"
          initial="hidden"
          animate="visible"
          variants={listVariants}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1434cb] mb-6 sm:mb-8 text-center">Additional Learning Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {extraOptions.map((option) => (
              <motion.div
                key={option.id}
                className={`p-4 sm:p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 transform ${
                  selectedOption === option.id
                    ? 'bg-[#019fe3] text-white scale-105'
                    : 'bg-gray-100 hover:bg-[#1434cb] hover:text-white'
                }`}
                onClick={() => handleOptionSelect(option.id)}
                variants={cardVariants}
              >
                <img
                  src={option.image}
                  alt={option.name}
                  className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4"
                />
                <h3 className="text-center text-lg sm:text-xl font-bold">{option.name}</h3>
                <p className="text-center text-gray-600 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Modal for Key Stage Selection */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 max-w-md w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-[#1434cb] mb-4 sm:mb-6 text-center">Select Your Key Stage</h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stages.map((stage) => (
                <button
                  key={stage}
                  className={`p-3 sm:p-4 text-center rounded-lg font-bold transition-all duration-300 text-sm sm:text-base ${
                    selectedStage === stage
                      ? 'bg-[#7c1411] text-white scale-105'
                      : 'bg-gray-100 hover:bg-[#019fe3] hover:text-white'
                  }`}
                  onClick={() => handleStageSelect(stage)}
                >
                  {stage === 'KS4' ? `${stage}/GCSE` : stage}
                </button>
              ))}
            </div>
            <button
              className="mt-4 sm:mt-6 w-full py-3 px-4 rounded-md bg-[#7c1411] text-white font-bold hover:bg-[#a31a16] transition-all duration-300"
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;