import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle, Target, BookOpen, Users, Award, Brain } from 'lucide-react';

const GCSE = () => {
  const subjects = [
    {
      icon: <BookOpen className="h-8 w-8 text-[#7c1411]" />,
      title: "Mathematics",
      description: "Master complex mathematical concepts and problem-solving techniques"
    },
    {
      icon: <Target className="h-8 w-8 text-[#7c1411]" />,
      title: "English",
      description: "Develop advanced reading, writing, and analytical skills"
    },
    {
      icon: <Brain className="h-8 w-8 text-[#7c1411]" />,
      title: "Science",
      description: "Comprehensive coverage of Biology, Chemistry, and Physics"
    },
    {
      icon: <Award className="h-8 w-8 text-[#7c1411]" />,
      title: "And More",
      description: "Additional subjects tailored to individual student needs"
    }
  ];

  const benefits = [
    "Deep understanding of core subjects",
    "Proven teaching methods for exam success",
    "Individual learning needs assessment",
    "Mastery of complex concepts",
    "Advanced exam techniques training",
    "Effective revision strategies",
    "Personalised learning plans",
    "Regular progress monitoring"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#1434cb] to-[#7c1411] py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <GraduationCap className="h-10 w-10 text-[#7c1411]" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              GCSE Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Boost your child's grades and unleash their true potential with our comprehensive GCSE programme
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1434cb] mb-6">
              Critical Years for Academic Success
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                The GCSE years are a critical time in a student's educational journey, and at FL we understand the importance of these exams. Our GCSE tuition program is designed to help students gain a deep understanding of the core subjects and develop the skills required for exam success.
              </p>
              <p>
                We offer focused lessons in subjects such as Maths, English, Science, and more, using proven teaching methods that cater to the individual learning needs of each student.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#7c1411] mb-6">What We Offer</h3>
            <div className="space-y-4">
              {benefits.slice(0, 4).map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Subjects Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1434cb] mb-4">
              Core Subjects We Cover
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether it's mastering complex concepts, honing exam techniques, or improving revision strategies, we are here to guide students towards achieving their best possible results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subjects.map((subject, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#1434cb]/10 rounded-full mb-4 mx-auto">
                  {subject.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1434cb] text-center mb-3">
                  {subject.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {subject.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key Features Section */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-br from-[#1434cb] to-[#7c1411] rounded-xl p-6 text-white text-center">
            <Target className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Exam Techniques</h3>
            <p className="text-white/90">Master proven strategies to excel in GCSE examinations</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#7c1411] to-[#1434cb] rounded-xl p-6 text-white text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Individual Support</h3>
            <p className="text-white/90">Personalised attention tailored to each student's learning style</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#1434cb] to-[#7c1411] rounded-xl p-6 text-white text-center">
            <Brain className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Concept Mastery</h3>
            <p className="text-white/90">Deep understanding of complex topics and problem-solving</p>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <h3 className="text-2xl font-bold text-[#7c1411] mb-6 text-center">Additional Benefits</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.slice(4).map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#1434cb] to-[#7c1411] rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Achieve Your Best GCSE Results!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Our GCSE teaching program empowers students to improve their performance and reach their goals. Whether it's mastering complex concepts, honing exam techniques, or improving revision strategies, we are here to guide students towards achieving their best possible results.
          </p>
          <button className="bg-white text-[#1434cb] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start GCSE Preparation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default GCSE;