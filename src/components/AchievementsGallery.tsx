import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, X } from 'lucide-react';

const AchievementsGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: '/assets/images/up2.jpg', title: 'Award Ceremony 2024', category: 'Excellence' },
    { src: '/assets/images/newa_1.JPG', title: 'Top Performers', category: 'Academic' },
    { src: '/assets/images/newa_2.JPG', title: 'Success Stories', category: 'Achievement' },
    { src: '/assets/images/10.jpg', title: 'Certificate Distribution', category: 'Recognition' },
    { src: '/assets/images/newa_3.JPG', title: 'Student Celebration', category: 'Milestone' },
    { src: '/assets/images/up1.jpg', title: 'Outstanding Results', category: 'Excellence' },
  ];

  const imageVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="p-4 bg-gradient-to-br from-[#1434cb] to-[#019fe3] rounded-2xl shadow-lg animate-float">
              <Trophy className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1434cb]">
              Student Achievements
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#019fe3] mx-auto rounded-full mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Celebrate the success of our students with a glimpse of their achievements and milestones.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={imageVariants}
              onClick={() => setSelectedImage(image.src)}
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-[#1434cb] text-white text-xs font-bold rounded-full shadow-lg">
                  {image.category}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/90 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-base sm:text-lg font-bold mb-2">{image.title}</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>Excellence Achievement</span>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#019fe3] rounded-2xl transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <img
            src={selectedImage}
            alt="Achievement"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default AchievementsGallery;