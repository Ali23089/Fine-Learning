// filepath: d:\Fine_Learning\src\pages\AcademicResource.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import BooksGallery from '../components/BooksGallery'; // Import the BooksGallery component

const AcademicResource = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof books>('Mathematics');

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const tabContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const books = {
    Mathematics: [
      '1A, 1B, 1C',
      '2A, 2B, 2C',
      '3A, 3B, 3C',
      '4A, 4B, 4C',
      '5A, 5B, 5C',
      '11+ STEP 1–4, Past paper books',
      'SATs1, SATs2, SATs3, BOOSTER',
      '7A, 7B',
      '8A, 8B',
      '9A, 9B',
      'STEP1–8',
      'STEP 9 – Past paper books',
    ],
    English: [
      '1A, 1B, 1C',
      '2A, 2B, 2C',
      '3A, 3B, 3C',
      '4A, 4B, 4C',
      '5A, 5B, 5C',
      '11+ STEP1–4, Past paper books',
      'E1, E2, E3',
      '7A, 7B',
      '8A, 8B',
      '9A, 9B',
      'H–1 to H–6',
      'Past paper books',
    ],
    Science: [
      '1A, 1B',
      '2A, 2B',
      '3A, 3B',
      '4A, 4B',
      '5A, 5B',
      '6A, 6B, KS2, EX2',
      '7A, 7B',
      '8A, 8B',
      'B1–3, C1–3, P1–3',
      'Past paper books',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Study Books Section with Background Image */}
      <motion.div
        className="relative py-12"
        style={{
          backgroundImage: "url('https://c.files.bbci.co.uk/69e4/live/04b3a010-ef8e-11ef-80a2-3b5266fd5b33.png')", // Replace with the actual image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div> {/* Semi-transparent black overlay */}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.h1
            className="text-4xl font-bold text-white mb-8 text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Study Books
          </motion.h1>
          <motion.p
            className="text-lg text-white mb-6 text-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            Access a variety of academic resources, including study materials, practice tests, and quizzes, carefully developed by our team.
          </motion.p>

          {/* Tabs */}
          <div className="flex justify-center space-x-6 mb-8">
            {['Mathematics', 'English', 'Science'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as keyof typeof books)}
                className={`px-6 py-2 font-medium text-lg rounded-lg transition duration-300 ${
                  activeTab === tab
                    ? 'bg-[#1434cb] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-[#019fe3] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            className="bg-sky-500 shadow-lg rounded-lg p-8"
            initial="hidden"
            animate="visible"
            variants={tabContentVariants}
            key={activeTab} // Ensures animation triggers on tab change
          >
            <h2 className="text-2xl font-semibold text-center text-white mb-4">
              {activeTab} Books
            </h2>
            <ul className="space-y-3">
              {books[activeTab].map((book, index) => (
                <motion.li
                  key={index}
                  className="bg-gray-100 hover:bg-maroon-500/20 transition duration-300 px-4 py-2 rounded-lg text-gray-700 font-medium shadow-md border-l-4 border-maroon-500"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-lg font-semibold text-maroon-600">{book}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full border-t-2 border-dashed border-[#019fe3]"></div>
        </div>
        <div className="relative text-center">
          <span className="px-4 bg-gray-50 text-[#1434cb] text-lg font-semibold">
            Explore Our Books Gallery
          </span>
        </div>
      </div>

      {/* Books Gallery Section */}
      <BooksGallery />
    </div>
  );
};

export default AcademicResource;