import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle, Target, BookOpen, Brain, Award, TrendingUp, Users } from 'lucide-react';

const Mathematics = () => {
  const topics = [
    {
      icon: <Calculator className="h-8 w-8 text-[#7c1411]" />,
      title: "Basic Arithmetic",
      description: "Foundation skills in numbers and calculations"
    },
    {
      icon: <Target className="h-8 w-8 text-[#7c1411]" />,
      title: "Problem Solving",
      description: "Critical thinking and analytical skills development"
    },
    {
      icon: <Brain className="h-8 w-8 text-[#7c1411]" />,
      title: "Advanced Calculus",
      description: "Complex mathematical concepts and applications"
    },
    {
      icon: <Award className="h-8 w-8 text-[#7c1411]" />,
      title: "Exam Preparation",
      description: "Comprehensive test-taking strategies and practice"
    }
  ];

  const benefits = [
    "Step-by-step guidance from experienced teachers",
    "Building confidence in mathematical abilities",
    "Mastering problem-solving techniques",
    "Homework support and assistance",
    "Exam preparation and practice",
    "Individual attention and personalized learning",
    "Interactive and engaging lessons",
    "Progress tracking and assessment"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
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
              <Calculator className="h-10 w-10 text-[#7c1411]" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Mathematics Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              The language of the universe, made fun and accessible for every student
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
              Making Math Fun & Accessible
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Mathematics is the language of the universe, and at FL we make it both fun and accessible. From basic arithmetic to advanced calculus, our experienced teachers provide step-by-step guidance, helping students build confidence and master problem-solving techniques.
              </p>
              <p>
                Whether your child needs help with homework or preparation for exams, we are here to guide them every step of the way.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#7c1411] mb-6">Why Choose Our Math Programme?</h3>
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

        {/* Topics Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1434cb] mb-4">
              Comprehensive Math Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From foundational concepts to advanced topics, we cover all aspects of mathematics to ensure your child's success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#1434cb]/10 rounded-full mb-4 mx-auto">
                  {topic.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1434cb] text-center mb-3">
                  {topic.title}
                </h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {topic.description}
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
            <BookOpen className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Step-by-Step Learning</h3>
            <p className="text-white/90">Clear, structured approach to mathematical concepts</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#7c1411] to-[#1434cb] rounded-xl p-6 text-white text-center">
            <Brain className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Problem Solving</h3>
            <p className="text-white/90">Develop critical thinking and analytical skills</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#1434cb] to-[#7c1411] rounded-xl p-6 text-white text-center">
            <TrendingUp className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Confidence Building</h3>
            <p className="text-white/90">Build mathematical confidence and self-assurance</p>
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

        {/* Success Stories Section */}
        <motion.div
          className="bg-gradient-to-br from-[#1434cb]/10 to-[#7c1411]/10 rounded-2xl p-8 border border-[#1434cb]/20 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#1434cb] mb-6">Your Math Journey</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1434cb] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-bold text-[#7c1411] mb-2">Foundation</h4>
                <p className="text-gray-600 text-sm">Build strong mathematical foundations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7c1411] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-bold text-[#7c1411] mb-2">Practice</h4>
                <p className="text-gray-600 text-sm">Regular practice and problem-solving</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1434cb] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-bold text-[#7c1411] mb-2">Mastery</h4>
                <p className="text-gray-600 text-sm">Achieve mathematical excellence</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-[#1434cb] to-[#7c1411] rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Master Mathematics Today!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join our mathematics programme and discover the joy of learning math. Our experienced teachers are here to guide your child every step of the way, from basic arithmetic to advanced calculus.
          </p>
          <button className="bg-white text-[#1434cb] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start Math Learning
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Mathematics;