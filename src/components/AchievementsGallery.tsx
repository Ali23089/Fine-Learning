import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react'; // Use Trophy icon for celebration

const AchievementsGallery = () => {
  const images = [
    '/assets/images/up2.jpg',
    '/assets/images/newa_1.JPG',
    '/assets/images/newa_2.JPG',
    '/assets/images/10.jpg',
    '/assets/images/newa_3.JPG',
    '/assets/images/up1.jpg',
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const iconVariants = {
    animate: {
      rotate: [0, 15, -15, 0], // Rotate back and forth
      scale: [1, 1.1, 1], // Slight scaling effect
      transition: {
        duration: 2, // Duration of the animation cycle
        repeat: Infinity, // Infinite loop
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.div
      className="py-16 bg-gradient-to-r from-[#f9f9f9] via-white to-[#f9f9f9]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={imageVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <motion.div
              className="flex items-center justify-center bg-[#1434cb]/10 w-16 h-16 rounded-full"
              variants={iconVariants}
              animate="animate" // Keep the icon in an animated state
            >
              <Trophy className="h-10 w-10 text-[#1434cb]" />
            </motion.div>
          </div>
          <h2 className="text-4xl font-extrabold text-[#1434cb] mb-4">
            Student Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Celebrate the success of our students with a glimpse of their achievements and milestones.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-lg group hover:shadow-2xl transition-shadow duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
            >
              <img
                src={image}
                alt={`Achievement ${index + 1}`}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold tracking-wide">
                  Achievement {index + 1}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AchievementsGallery;