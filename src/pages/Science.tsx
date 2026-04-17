import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, CheckCircle, Target, BookOpen, Award, Brain, Zap, Users } from 'lucide-react';

const Science = () => {
  const subjects = [
    {
      icon: <FlaskConical className="h-8 w-8 text-[#7c1411]" />,
      title: "Physics",
      description: "Understanding forces, energy, and the physical world"
    },
    {
      icon: <Target className="h-8 w-8 text-[#7c1411]" />,
      title: "Chemistry",
      description: "Exploring matter, reactions, and chemical processes"
    },
    {
      icon: <Brain className="h-8 w-8 text-[#7c1411]" />,
      title: "Biology",
      description: "Studying living organisms and life processes"
    },
    {
      icon: <Award className="h-8 w-8 text-[#7c1411]" />,
      title: "Practical Skills",
      description: "Hands-on experiments and laboratory techniques"
    }
  ];

  const benefits = [
    "Making complex concepts easier to understand",
    "Interactive lessons and hands-on experiments",
    "Fostering curiosity and passion for discovery",
    "Academic success and critical thinking development",
    "Real-world applications and connections",
    "Individual attention and personalized learning",
    "Progress tracking and assessment",
    "Preparation for higher education"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-green-50">
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
              <FlaskConical className="h-10 w-10 text-[#7c1411]" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Science Discovery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Understanding the world through interactive learning and hands-on experiments
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
              Science is All Around Us
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Science is all around us, and understanding it is key to making sense of the world. Our Science tuition program covers a range of subjects, including Physics, Chemistry, and Biology, with an emphasis on making complex concepts easier to understand.
              </p>
              <p>
                Through interactive lessons and hands-on experiments, we foster curiosity and inspire a passion for discovery in our students, ensuring they achieve academic success while developing critical thinking skills.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-[#7c1411] mb-6">Why Choose Our Science Programme?</h3>
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
              Core Science Subjects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive science programme covers all major scientific disciplines with a focus on practical understanding and real-world applications.
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
            <Zap className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
            <p className="text-white/90">Engaging lessons that bring science to life</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#7c1411] to-[#1434cb] rounded-xl p-6 text-white text-center">
            <FlaskConical className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Hands-on Experiments</h3>
            <p className="text-white/90">Practical experience with real experiments</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#1434cb] to-[#7c1411] rounded-xl p-6 text-white text-center">
            <Brain className="h-12 w-12 mx-auto mb-4 text-white" />
            <h3 className="text-xl font-bold mb-3">Critical Thinking</h3>
            <p className="text-white/90">Develop analytical and reasoning skills</p>
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

        {/* Discovery Journey Section */}
        <motion.div
          className="bg-gradient-to-br from-[#1434cb]/10 to-[#7c1411]/10 rounded-2xl p-8 border border-[#1434cb]/20 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#1434cb] mb-6">Your Science Discovery Journey</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1434cb] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h4 className="font-bold text-[#7c1411] mb-2">Explore</h4>
                <p className="text-gray-600 text-sm">Discover the wonders of science</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#7c1411] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h4 className="font-bold text-[#7c1411] mb-2">Experiment</h4>
                <p className="text-gray-600 text-sm">Hands-on learning and discovery</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#1434cb] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h4 className="font-bold text-[#7c1411] mb-2">Understand</h4>
                <p className="text-gray-600 text-sm">Master scientific concepts</p>
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
            Discover Science Today!
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Join our science programme and unlock the mysteries of the world around you. Through interactive lessons and hands-on experiments, we foster curiosity and inspire a passion for discovery in our students.
          </p>
          <button className="bg-white text-[#1434cb] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Start Science Learning
          </button>
        </motion.div>
        </div>
    </div>
  );
};

export default Science;