import React from 'react';
import { motion } from 'framer-motion';
import { User, BookOpen, Award, GraduationCap } from 'lucide-react'; // Added GraduationCap icon

const PersonalizedLearningPlan = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <motion.div
      className="py-12 sm:py-16 bg-gradient-to-r from-[#f9f9f9] via-white to-[#f9f9f9]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#1434cb] mr-2" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1434cb]">
              Personalized Learning Plan
            </h2>
          </div>
          
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <User className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#1434cb]" />,
              title: "Customized Plans",
              description:
                "We create personalized plans with recommended study hours and assign the best teachers to help students excel.",
            },
            {
              icon: <BookOpen className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#1434cb]" />,
              title: "Advanced Targets",
              description:
                "High-achieving students can start advanced curriculums like the 11+ or work towards early GCSE completion.",
            },
            {
              icon: <Award className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-[#1434cb]" />,
              title: "Excellent Results",
              description:
                "Our experienced teachers help students achieve top results, including Grade 9s at GCSE and placements at prestigious universities.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border-2 border-transparent transition-all duration-300 hover:border-[#019fe3] hover:shadow-[0_0_20px_#019fe3] transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center bg-[#1434cb]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-3 sm:mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#1434cb] mb-2 text-center">
                {item.title}
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-8 sm:mt-12 text-center">
          <motion.div
            className="bg-[#019fe3] border border-[#019fe3] rounded-2xl p-6 sm:p-8 md:p-12 shadow-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white max-w-4xl mx-auto leading-relaxed px-4">
              With 20 years of excellence in education, we have taught 30,000 students.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PersonalizedLearningPlan;