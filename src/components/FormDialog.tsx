import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, X } from 'lucide-react';

interface FormDialogProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'success' | 'error';
  title: string;
  message: string;
}

const FormDialog = ({ isOpen, onClose, type, title, message }: FormDialogProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            className={`relative bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 max-w-sm sm:max-w-md w-full mx-4 ${
              type === 'success' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
            }`}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-4 w-4 sm:h-6 sm:w-6" />
            </button>

            {/* Icon */}
            <motion.div
              className={`flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4 sm:mb-6 ${
                type === 'success' 
                  ? 'bg-green-100 text-green-600' 
                  : 'bg-red-100 text-red-600'
              }`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              {type === 'success' ? (
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />
              ) : (
                <XCircle className="h-6 w-6 sm:h-8 sm:w-8" />
              )}
            </motion.div>

            {/* Content */}
            <div className="text-center">
              <motion.h3
                className={`text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 ${
                  type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {title}
              </motion.h3>
              
              <motion.p
                className={`text-sm sm:text-base md:text-lg ${
                  type === 'success' ? 'text-green-700' : 'text-red-700'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {message}
              </motion.p>

              {/* Action Button */}
              <motion.button
                onClick={onClose}
                className={`mt-4 sm:mt-6 px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                  type === 'success'
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {type === 'success' ? 'Great!' : 'Try Again'}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FormDialog; 