import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, User, Edit3 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''   
  });

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Animation Variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  return (
    <div className="bg-gray-50">
      {/* Contact Header */}
      <motion.div
        className="bg-[#1434cb] text-white py-16"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're here to help and answer any questions you might have</p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={infoVariants}
          >
            <h2 className="text-2xl font-bold text-[#1434cb] mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <motion.div className="flex items-center" variants={infoVariants}>
                <Phone className="h-6 w-6 text-[#7c1411]" />
                <span className="ml-4 text-gray-600">+44 (0) 123 456 789</span>
              </motion.div>
              <motion.div className="flex items-center" variants={infoVariants}>
                <Mail className="h-6 w-6 text-[#7c1411]" />
                <span className="ml-4 text-gray-600">info@finelearning.com</span>
              </motion.div>
              <motion.div className="flex items-center" variants={infoVariants}>
                <MapPin className="h-6 w-6 text-[#7c1411]" />
                <span className="ml-4 text-gray-600">123 Education Street, London, UK</span>
              </motion.div>
              <motion.div className="flex items-center" variants={infoVariants}>
                <MessageSquare className="h-6 w-6 text-[#7c1411]" />
                <span className="ml-4 text-gray-600">WhatsApp available for quick responses</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={formVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
              <div className="relative">
                <label htmlFor="name" className="block text-lg font-bold text-[#1434cb] flex items-center">
                  <User className="h-5 w-5 mr-2" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1434cb] focus:ring focus:ring-[#1434cb] focus:ring-opacity-50 transition duration-300 h-12 bg-gray-100"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-lg font-bold text-[#1434cb] flex items-center">
                  <Mail className="h-5 w-5 mr-2" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1434cb] focus:ring focus:ring-[#1434cb] focus:ring-opacity-50 transition duration-300 h-12 bg-gray-100"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="subject" className="block text-lg font-bold text-[#1434cb] flex items-center">
                  <Edit3 className="h-5 w-5 mr-2" /> Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1434cb] focus:ring focus:ring-[#1434cb] focus:ring-opacity-50 transition duration-300 h-12 bg-gray-100"
                  required
                />
              </div>

              <div className="relative">
                <label htmlFor="message" className="block text-lg font-bold text-[#1434cb] flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" /> Message
                </label>

                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#1434cb] focus:ring focus:ring-[#1434cb] focus:ring-opacity-50 transition duration-300 bg-gray-100"
                  required
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-[#7c1411] hover:bg-[#a31a16] text-white font-bold py-3 px-4 rounded-md transition duration-300 transform"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;