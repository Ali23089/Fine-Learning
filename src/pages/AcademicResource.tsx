import { useState } from 'react';
import { motion } from 'framer-motion';
import BooksGallery from '../components/BooksGallery';

const AcademicResource = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof books>('Mathematics');

  // Animation Variants
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-cyan-50/30">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-[#1434cb] via-[#019fe3] to-[#1434cb] text-white py-16 sm:py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Study Books & Materials
          </motion.h1>
          
          <motion.p
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto opacity-95 px-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Access a variety of academic resources, including study materials, practice tests, and quizzes, carefully developed by our team
          </motion.p>
        </div>
      </div>

      {/* Study Books Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Subject Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {['Mathematics', 'English', 'Science'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as keyof typeof books)}
              className={`px-6 sm:px-8 py-3 font-semibold text-base sm:text-lg rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-[#1434cb] to-[#019fe3] text-white shadow-blue-500/50'
                  : 'bg-white text-gray-700 hover:bg-gradient-to-r hover:from-[#1434cb] hover:to-[#019fe3] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Books List Card */}
        <motion.div
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={tabContentVariants}
          key={activeTab}
        >
          {/* Card Header */}
          <div className={`py-6 px-8 ${
            activeTab === 'Mathematics' ? 'bg-gradient-to-r from-[#1434cb] to-[#019fe3]' :
            activeTab === 'Science' ? 'bg-gradient-to-r from-[#019fe3] to-[#1434cb]' :
            'bg-gradient-to-r from-[#7c1411] to-[#a31a16]'
          }`}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center flex items-center justify-center gap-3">
              <span className="text-3xl">
                {activeTab === 'Mathematics' ? '📐' : activeTab === 'Science' ? '🔬' : '📖'}
              </span>
              {activeTab} Books
            </h2>
          </div>

          {/* Books Grid */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {books[activeTab].map((book, index) => (
                <motion.div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-xl cursor-pointer ${
                    activeTab === 'Mathematics' ? 'border-[#1434cb]/20 hover:border-[#1434cb] hover:shadow-blue-500/20' :
                    activeTab === 'Science' ? 'border-[#019fe3]/20 hover:border-[#019fe3] hover:shadow-cyan-500/20' :
                    'border-[#7c1411]/20 hover:border-[#7c1411] hover:shadow-red-900/20'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  {/* Icon */}
                  <div className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-lg ${
                    activeTab === 'Mathematics' ? 'bg-gradient-to-br from-[#1434cb] to-[#019fe3]' :
                    activeTab === 'Science' ? 'bg-gradient-to-br from-[#019fe3] to-[#1434cb]' :
                    'bg-gradient-to-br from-[#7c1411] to-[#a31a16]'
                  }`}>
                    {index + 1}
                  </div>

                  {/* Book Title */}
                  <div className="flex items-center gap-3">
                    <div className={`w-1 h-12 rounded-full ${
                      activeTab === 'Mathematics' ? 'bg-gradient-to-b from-[#1434cb] to-[#019fe3]' :
                      activeTab === 'Science' ? 'bg-gradient-to-b from-[#019fe3] to-[#1434cb]' :
                      'bg-gradient-to-b from-[#7c1411] to-[#a31a16]'
                    }`}></div>
                    <span className={`text-base sm:text-lg font-semibold ${
                      activeTab === 'Mathematics' ? 'text-[#1434cb]' :
                      activeTab === 'Science' ? 'text-[#019fe3]' :
                      'text-[#7c1411]'
                    }`}>
                      {book}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Divider */}
      <div className="relative py-12">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#019fe3] to-transparent"></div>
        </div>
        <div className="relative text-center">
          <span className="px-6 py-3 bg-white rounded-full text-[#1434cb] text-lg font-bold shadow-lg border-2 border-[#019fe3]/30">
            ✨ Explore Our Books Gallery
          </span>
        </div>
      </div>

      {/* Books Gallery Section */}
      <div className="pb-12">
        <BooksGallery />
      </div>
    </div>
  );
};

export default AcademicResource;