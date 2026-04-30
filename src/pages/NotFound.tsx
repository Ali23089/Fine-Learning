import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-2xl"
      >
        {/* 404 Number */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="text-8xl sm:text-9xl font-bold text-[#1434cb] mb-4"
        >
          404
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <Search className="h-16 w-16 sm:h-20 sm:w-20 text-[#7c1411]" />
        </motion.div>

        {/* Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mb-8 text-base sm:text-lg">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track!
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            onClick={() => navigate(-1)}
            className="flex items-center justify-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </motion.button>

          <motion.button
            onClick={() => navigate('/')}
            className="flex items-center justify-center gap-2 bg-[#1434cb] text-white px-6 py-3 rounded-lg hover:bg-[#0f2ca1] transition-all duration-300 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Home className="h-5 w-5" />
            Go Home
          </motion.button>
        </div>

        {/* Quick Links */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4 font-semibold">Quick Links:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/courses" className="text-[#1434cb] hover:underline">Courses</a>
            <span className="text-gray-400">•</span>
            <a href="/about" className="text-[#1434cb] hover:underline">About Us</a>
            <span className="text-gray-400">•</span>
            <a href="/fees" className="text-[#1434cb] hover:underline">Pricing</a>
            <span className="text-gray-400">•</span>
            <a href="/contact" className="text-[#1434cb] hover:underline">Contact</a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
