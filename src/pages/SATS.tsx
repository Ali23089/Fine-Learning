import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Clock, Target, Users, Award } from 'lucide-react';

const SATS = () => {
  const year2Tests = [
    {
      icon: <BookOpen className="h-6 w-6 text-[#7c1411]" />,
      title: "Grammar Test",
      description: "Spelling, punctuation and grammar assessment"
    },
    {
      icon: <Target className="h-6 w-6 text-[#7c1411]" />,
      title: "Spelling Test",
      description: "Vocabulary and spelling proficiency evaluation"
    },
    {
      icon: <Award className="h-6 w-6 text-[#7c1411]" />,
      title: "Reading Comprehension",
      description: "Inference-based questions from given paragraphs"
    }
  ];

  const benefits = [
    "Untimed Year 2 tests for accurate level assessment",
    "Comprehensive preparation throughout the year",
    "Emphasis on past paper practice",
    "Expert guidance for Key Stage 2 progression",
    "Individual attention and support",
    "Proven strategies for exam success"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
              <BookOpen className="h-10 w-10 text-[#7c1411]" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              SATs Preparation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Help your child shine in their SATs exams with our dedicated support and expert guidance
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
              Comprehensive SATs Support
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Students in Year 2 and Year 6 are expected to sit their SATs exams. Preparations for these exams are made throughout the year with an emphasis on past paper exams.
              </p>
              <p>
                For Year 2, the exam consists of an untimed test to determine what level they are working at before progressing onto Key Stage 2, which encompasses Years 3, 4, 5 and 6.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#7c1411] mb-6">Why Choose Our SATs Programme?</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Year 2 Tests Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1434cb] mb-4">
              Year 2 English SATs Components
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The English Year 2 SATs paper will mainly cover spelling, punctuation and grammar. There will be three tests for English including a grammar test, a spelling test and a reading comprehension test where they will be required to read given paragraphs and answer inference–based questions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {year2Tests.map((test, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#1434cb]/10 rounded-full mb-4 mx-auto">
                  {test.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1434cb] text-center mb-3">
                  {test.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {test.description}
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
            <Clock className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Year-Round Preparation</h3>
            <p className="text-white/90">Continuous support and practice throughout the academic year</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#7c1411] to-[#1434cb] rounded-xl p-6 text-white text-center">
            <Target className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Past Paper Focus</h3>
            <p className="text-white/90">Emphasis on real exam questions and proven strategies</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#1434cb] to-[#7c1411] rounded-xl p-6 text-white text-center">
            <Users className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Expert Guidance</h3>
            <p className="text-white/90">Experienced teachers provide the guidance they need to achieve their best</p>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#1434cb] to-[#7c1411] rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Help Your Child Excel in SATs!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Our experienced teachers provide the guidance they need to achieve their best. With our comprehensive preparation programme, your child will be well-equipped to tackle their SATs with confidence.
          </p>
          <button className="bg-white text-[#1434cb] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start SATs Preparation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SATS;