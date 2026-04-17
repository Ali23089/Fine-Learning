import React from 'react';
import { motion } from 'framer-motion';

const BooksGallery = () => {
  const books = [
    { id: 1, image: '/assets/images/ENG.jpg', title: 'English Study Guide' },
    { id: 2, image: '/assets/images/GCSE.jpg', title: 'GCSE Mathematics' },
    { id: 3, image: '/assets/images/GCSEN.jpg', title: 'GCSE English' },
    { id: 4, image: '/assets/images/Ks1n_1.jpg', title: 'Key Stage 1 English' },
    { id: 5, image: '/assets/images/Ks 3 Packn_1.jpg', title: 'Key Stage 3 English Pack' },
    { id: 6, image: '/assets/images/Ks2n_1.jpg', title: 'Key Stage 2 English' },
    { id: 7, image: '/assets/images/Ks2n_2.jpg', title: 'Key Stage 2 Maths' },
    { id: 8, image: '/assets/images/Maths 7-An_1.jpg', title: 'Mathematics KS3 - 7A' },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center text-[#1434cb] mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Books Gallery
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {books.map((book) => (
            <motion.div
              key={book.id}
              className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-bold text-gray-800 text-center">{book.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BooksGallery;