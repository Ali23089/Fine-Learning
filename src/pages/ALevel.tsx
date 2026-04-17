import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle, Target, BookOpen, Users, Award, Brain } from 'lucide-react';

const ALevel = () => {
  const subjects = [
    {
      icon: <BookOpen className="h-8 w-8 text-[#7c1411]" />,
      title: "Mathematics",
      description: "Advanced mathematical concepts and problem-solving techniques"
    },
    {
      icon: <Target className="h-8 w-8 text-[#7c1411]" />,
      title: "English",
      description: "Critical analysis, advanced writing, and literary interpretation"
    },
    {
      icon: <Brain className="h-8 w-8 text-[#7c1411]" />,
      title: "Sciences",
      description: "Biology, Chemistry, Physics with laboratory skills"
    },
    {
      icon: <Award className="h-8 w-8 text-[#7c1411]" />,
      title: "Other Subjects",
      description: "Economics, History, Geography, and more available"
    }
  ];

  const benefits = [
    "In-depth, subject-specific support",
    "Advanced concepts and critical thinking",
    "Expert teachers in specialized subjects",
    "Comprehensive exam preparation",
    "University application guidance",
    "Research and analytical skills development",
    "Independent study techniques",
    "Mock exams and assessment practice"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
              A-Level Excellence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Set your child up for top-tier results with our expert A-Levels teaching program
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
              The Gateway to Higher Education
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                A-Levels are the next step toward university and beyond, and we're here to help students excel in this crucial stage. At FL our A-Level tuition program provides in-depth, subject-specific support to help students succeed in their exams and gain the knowledge they need for higher education.
              </p>
              <p>
                With a team of expert teachers in subjects such as Mathematics, English and Sciences, we focus on advanced concepts, critical thinking, and exam preparation.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#7c1411] mb-6">Our A-Level Approach</h3>
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
              Specialized Subject Support
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our goal is to empower students to achieve top grades and confidently move forward in their academic careers with the knowledge and skills needed for university success.
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
            <Brain className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Critical Thinking</h3>
            <p className="text-white/90">Develop advanced analytical and reasoning skills</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#7c1411] to-[#1434cb] rounded-xl p-6 text-white text-center">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">University Ready</h3>
            <p className="text-white/90">Prepare for higher education and future careers</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#1434cb] to-[#7c1411] rounded-xl p-6 text-white text-center">
            <Target className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Top Grades</h3>
            <p className="text-white/90">Achieve the highest possible A-Level results</p>
          </div>
        </motion.div>

        {/* Additional Benefits */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <h3 className="text-2xl font-bold text-[#7c1411] mb-6 text-center">Comprehensive Support</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.slice(4).map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Success Path Section */}
        <motion.div
          className="bg-gradient-to-br from-[#1434cb]/10 to-[#7c1411]/10 rounded-2xl p-8 border border-[#1434cb]/20 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#1434cb] mb-6">Your Path to Success</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1434cb] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-bold text-[#7c1411] mb-2">Expert Guidance</h4>
                <p className="text-gray-600 text-sm">Specialized teachers guide every step</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7c1411] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-bold text-[#7c1411] mb-2">Comprehensive Prep</h4>
                <p className="text-gray-600 text-sm">Thorough exam preparation and practice</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1434cb] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-bold text-[#7c1411] mb-2">University Success</h4>
                <p className="text-gray-600 text-sm">Achieve top grades for university entry</p>
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
            Excel in Your A-Levels!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Our experienced teachers guide students every step of the way to achieve excellence. With our comprehensive A-Level programme, you'll gain the knowledge, skills, and confidence needed for university and beyond.
          </p>
          <button className="bg-white text-[#1434cb] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start A-Level Preparation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ALevel;