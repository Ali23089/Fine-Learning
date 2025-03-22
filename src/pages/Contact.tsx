import React, { useState } from 'react';
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
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Contact Header */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">We're here to help and answer any questions you might have</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-secondary" />
                <span className="ml-4 text-gray-600">+44 (0) 123 456 789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-secondary" />
                <span className="ml-4 text-gray-600">info@finelearning.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-secondary" />
                <span className="ml-4 text-gray-600">123 Education Street, London, UK</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-6 w-6 text-secondary" />
                <span className="ml-4 text-gray-600">WhatsApp available for quick responses</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <label htmlFor="name" className="block text-lg font-bold text-gray-700 flex items-center">
                  <User className="h-5 w-5 mr-2" /> Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300 h-12"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="email" className="block text-lg font-bold text-gray-700 flex items-center">
                  <Mail className="h-5 w-5 mr-2" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300 h-12"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="subject" className="block text-lg font-bold text-gray-700 flex items-center">
                  <Edit3 className="h-5 w-5 mr-2" /> Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300 h-12"
                  required
                />
              </div>
              <div className="relative">
                <label htmlFor="message" className="block text-lg font-bold text-gray-700 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" /> Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;