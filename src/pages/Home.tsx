import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import FeaturedCourses from '../components/FeaturedCourses';
import ExamResults from '../components/ExamResults';
import VideoSection from '../components/VideoSection';
import PersonalizedLearningPlan from '../components/PersonalizedLearningPlan';
import StudentSuccessSection from '../components/StudentSuccessSection'; // Import the new component

const Home = () => {
  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const separatorVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <Hero />
      </motion.div>

      {/* Section Separator */}
      <motion.div
        className="border-t-8 border-[#1434cb] my-8"
        initial="hidden"
        animate="visible"
        variants={separatorVariants}
      ></motion.div>

      {/* Benefits Section */}
      <motion.div
        className="relative bg-gradient-to-r from-[#1434cb] via-[#019fe3] to-[#1434cb] text-white py-12 sm:py-16 md:py-20 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="relative">
          <Benefits />
        </div>
      </motion.div>

      {/* Personalized Learning Plan Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <PersonalizedLearningPlan />
      </motion.div>

      {/* Section Separator */}
      <motion.div
        className="border-t-8 border-[#7c1411] my-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={separatorVariants}
      ></motion.div>

      {/* New Student Success Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <StudentSuccessSection />
      </motion.div>

      {/* Section Separator */}
      <motion.div
        className="border-t-8 border-[#1434cb] my-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={separatorVariants}
      ></motion.div>

      {/* Featured Courses Section */}
      <motion.div
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <FeaturedCourses />
      </motion.div>

      {/* Section Separator */}
      <motion.div
        className="border-t-8 border-[#1434cb] my-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={separatorVariants}
      ></motion.div>

      {/* Exam Results Section */}
      <motion.div
        className="bg-[#7c1411] text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ExamResults />
      </motion.div>

      {/* Section Separator */}
      <motion.div
        className="border-t-8 border-[#1434cb] my-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={separatorVariants}
      ></motion.div>

      {/* Video Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <VideoSection />
      </motion.div>
    </div>
  );
};

export default Home;