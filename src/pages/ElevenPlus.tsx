import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, CheckCircle, Target, BookOpen, Brain, Award } from 'lucide-react';

const ElevenPlus = () => {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8 text-[#7c1411]" />,
      title: "Maths",
      description: "Comprehensive coverage of mathematical concepts and problem-solving techniques"
    },
    {
      icon: <Target className="h-8 w-8 text-[#7c1411]" />,
      title: "English",
      description: "Advanced reading comprehension, grammar, and writing skills development"
    },
    {
      icon: <Brain className="h-8 w-8 text-[#7c1411]" />,
      title: "Verbal Reasoning",
      description: "Critical thinking and logical reasoning through language-based problems"
    },
    {
      icon: <Award className="h-8 w-8 text-[#7c1411]" />,
      title: "Non-verbal Reasoning",
      description: "Pattern recognition and spatial awareness development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
              <ClipboardList className="h-10 w-10 text-[#7c1411]" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              11+ Programme
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Prepare for competitive entrance exams with expert tuition tailored to your needs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1434cb] mb-6">
              Your Gateway to Academic Excellence
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                The 11+ programme is designed to prepare students for the highly competitive entrance exams required for grammar and independent schools. While sections such as English and Maths are taught in line with the National Curriculum, reasoning sections are not typically covered in schools.
              </p>
              <p>
                As a result, students who undertake specialised 11+ education are at a distinct advantage, increasing their chances of success.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#7c1411] mb-6">Why Choose Our 11+ Programme?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Specialised curriculum beyond National Curriculum</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Expert teachers with proven track record</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Comprehensive exam preparation strategies</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">Individual attention and personalised learning</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Exam Areas Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1434cb] mb-4">
              The 11+ Exam Tests Four Key Areas
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The 11+ exam, taken in Year 6, is optional but highly challenging. Success in this exam can lead to admission to a grammar or independent school.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#1434cb]/10 rounded-full mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1434cb] text-center mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#1434cb] to-[#7c1411] rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Give Your Child the Best Chance of Success!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            This programme offers an excellent opportunity to enhance a child's education and future prospects. While we cannot guarantee admission to a grammar school due to the limited number of places and high number of applications, we are committed to thoroughly preparing students for the entrance exams.
          </p>
          <button className="bg-white text-[#1434cb] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ElevenPlus;