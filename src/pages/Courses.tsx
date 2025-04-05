import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
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
      description:
        'Mathematics is the language of the universe, and at FL we make it both fun and accessible. From basic arithmetic to advanced calculus, our experienced teachers provide step-by-step guidance, helping students build confidence and master problem-solving techniques. Whether your child needs help with homework or preparation for exams, we are here to guide them every step of the way.'
    },
    {
      id: 'science',
      name: 'Science',
      icon: Flask,
      description:
        'Science is all around us, and understanding it is key to making sense of the world. Our Science tuition program covers a range of subjects, including Physics, Chemistry, and Biology, with an emphasis on making complex concepts easier to understand. Through interactive lessons and hands-on experiments, we foster curiosity and inspire a passion for discovery in our students, ensuring they achieve academic success while developing critical thinking skills.'
    },
    {
      id: 'english',
      name: 'English',
      icon: BookOpen,
      description:
        'Mastering English is essential for success in education and beyond. Our English tuition programs focus on improving reading, writing, speaking, and listening skills. With a focus on vocabulary building, grammar, comprehension, and creative expression, we help students excel in both academic and real-world communication. From primary school to higher levels, our tailored lessons ensure each student gains the skills needed to express themselves clearly and confidently.'
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

  // Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-gray-50">
      {/* Courses Header */}
      <motion.div
        className="bg-[#1434cb] text-white py-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Our Courses</h1>
          <p className="text-xl">Choose your subject and start learning today</p>
        </div>
      </motion.div>

      {/* Subject Selection */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        initial="hidden"
        animate="visible"
        variants={listVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((subject) => (
            <motion.div
              key={subject.id}
              className={`p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 transform ${
                selectedSubject === subject.id
                  ? 'bg-[#1434cb] text-white scale-105'
                  : 'bg-white hover:bg-gray-100 hover:scale-105'
              }`}
              onClick={() => handleSubjectSelect(subject.id)}
              variants={cardVariants}
            >
              <div className="flex items-center mb-4">
                <subject.icon
                  className={`h-10 w-10 ${
                    selectedSubject === subject.id ? 'text-white' : 'text-[#7c1411]'
                  }`}
                />
                <h3 className="ml-4 text-xl font-bold">{subject.name}</h3>
              </div>
              <p
                className={`${
                  selectedSubject === subject.id ? 'text-gray-100' : 'text-gray-600'
                }`}
              >
                {subject.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Stage Selection */}
        {selectedSubject && (
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-2xl font-bold text-[#1434cb] mb-6">Select Your Key Stage</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stages.map((stage) => (
                <motion.button
                  key={stage}
                  className={`p-4 text-center rounded-lg font-bold transition-all duration-300 ${
                    selectedStage === stage
                      ? 'bg-[#7c1411] text-white scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                  onClick={() => handleStageSelect(stage)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {stage}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Courses;