import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import FeaturedCourses from '../components/FeaturedCourses';
import ExamResults from '../components/ExamResults';

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
        className="bg-[#1434cb] text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <Benefits />
      </motion.div>

      {/* Section Separator */}
      <motion.div
        className="border-t-8 border-[#7c1411] my-8"
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

      {/* Sponsors Section */}
      <motion.div
        className="bg-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1434cb] mb-8">Our Sponsors</h2>
          <img
            src="src/assets/images/boards.jpg" // Replace with the actual image URL
            alt="Sponsors"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
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
    </div>
  );
};

export default Home;