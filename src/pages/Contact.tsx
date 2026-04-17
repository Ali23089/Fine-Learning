import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from 'lucide-react';
import { submitContactForm } from '../firebase/services';
import { validateContactForm } from '../utils/validation';
import FormDialog from '../components/FormDialog';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showDialog, setShowDialog] = useState(false);
  const [dialogType, setDialogType] = useState<'success' | 'error'>('success');
  const [dialogMessage, setDialogMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Real-time validation functions
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        // Text only, no numbers
        if (/\d/.test(value)) {
          return 'Name should only contain letters and spaces';
        }
        if (value.length < 2) {
          return 'Name must be at least 2 characters long';
        }
        break;
      
      case 'phone':
        // Numbers only
        if (value && !/^\d+$/.test(value)) {
          return 'Please enter numbers only';
        }
        if (value && value.length < 10) {
          return 'Phone number must be at least 10 digits';
        }
        break;
      
      case 'email':
        if (value && !value.includes('@')) {
          return 'Email must contain @ symbol';
        }
        if (value && !value.includes('.')) {
          return 'Email must contain a domain (e.g., .com)';
        }
        if (value && value.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email address';
        }
        break;
      
      case 'message':
        if (value.length < 10) {
          return 'Message must be at least 10 characters long';
        }
        break;
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Real-time validation
    const fieldError = validateField(name, value);
    if (fieldError) {
      setErrors(prev => ({ ...prev, [name]: fieldError }));
    } else {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setDialogType('error');
      setDialogMessage('Please fill in all required fields correctly.');
      setShowDialog(true);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setDialogType('success');
        setDialogMessage('Message sent successfully! We will get back to you shortly.');
        setShowDialog(true);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setDialogType('error');
        setDialogMessage('Failed to send message. Please try again.');
        setShowDialog(true);
      }
    } catch (error) {
      setDialogType('error');
      setDialogMessage('An error occurred. Please try again.');
      setShowDialog(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      <div className="min-h-screen">
        {/* Dark Blue Header */}
        <div className="bg-[#1434cb] text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Get in Touch
              </h1>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto px-4">
                Have questions about our tutoring services? We're here to help you find the perfect learning solution for your child.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Information Cards */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {/* Email Card */}
              <motion.div
                className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl shadow-lg p-6 sm:p-8 border border-blue-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#1434cb] p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#1434cb]">Email Us</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Send us an email and we'll get back to you as soon as possible.
                </p>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-[#1434cb] mr-2" />
                  <a 
                    href="mailto:info@finelearning.com.uk" 
                    className="text-[#1434cb] font-semibold hover:underline break-all"
                  >
                    info@finelearning.com.uk
                  </a>
                </div>
              </motion.div>

              {/* Phone Card */}
              <motion.div
                className="bg-gradient-to-br from-red-50 to-pink-100 rounded-2xl shadow-lg p-6 sm:p-8 border border-red-200"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-[#7c1411] p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#7c1411]">Call Us</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Prefer to talk? Give us a call and we'll be happy to help.
                </p>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-[#7c1411] mr-2" />
                  <a 
                    href="tel:+447984084470" 
                    className="text-[#7c1411] font-semibold hover:underline"
                  >
                    +44 7984 084470
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb] focus:border-[#1434cb] transition-all duration-300 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                      required
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb] focus:border-[#1434cb] transition-all duration-300 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                      required
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb] focus:border-[#1434cb] transition-all duration-300 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb] focus:border-[#1434cb] transition-all duration-300 ${
                        errors.subject ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Tutoring Services">Tutoring Services</option>
                      <option value="Pricing Information">Pricing Information</option>
                      <option value="Schedule Consultation">Schedule Consultation</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#1434cb] focus:border-[#1434cb] transition-all duration-300 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your inquiry..."
                    required
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#7c1411] text-white py-4 px-6 rounded-lg font-semibold hover:bg-[#a31a16] transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dialog */}
      <FormDialog
        isOpen={showDialog}
        onClose={handleDialogClose}
        type={dialogType}
        title={dialogType === 'success' ? 'Message Sent!' : 'Message Failed'}
        message={dialogMessage}
      />
    </>
  );
};

export default Contact;