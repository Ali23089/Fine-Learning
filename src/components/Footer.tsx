import React from 'react';
import { GraduationCap, Mail, Phone, Facebook, Twitter, Instagram, Linkedin, MapPin, Clock, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo and About Section */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center group">
              <img 
                src="/assets/images/logo.png" 
                alt="Fine Learning Logo" 
                className="h-12 w-12 sm:h-14 sm:w-14 object-contain mr-3"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Fine Learning
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering students through personalized online education in the UK. Excellence in every lesson.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 bg-white/5 hover:bg-gradient-to-br hover:from-blue-600 hover:to-blue-700 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 bg-white/5 hover:bg-gradient-to-br hover:from-sky-500 hover:to-sky-600 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 bg-white/5 hover:bg-gradient-to-br hover:from-pink-600 hover:to-purple-600 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group p-3 bg-white/5 hover:bg-gradient-to-br hover:from-blue-700 hover:to-blue-800 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Subjects Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#1434cb] to-[#019fe3] rounded-full"></div>
              Subjects
            </h3>
            <ul className="space-y-3">
              {['Mathematics', 'Science', 'English'].map((subject) => (
                <li key={subject}>
                  <a 
                    href={`/${subject.toLowerCase()}`} 
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    <span className="relative">
                      {subject}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#1434cb] to-[#019fe3] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#7c1411] to-[#a31a16] rounded-full"></div>
              Programs
            </h3>
            <ul className="space-y-3">
              {[
                { name: '11 Plus', url: '/elevenplus' },
                { name: 'SATs', url: '/sats' },
                { name: 'GCSEs', url: '/gcse' },
                { name: 'A-Levels', url: '/alevel' }
              ].map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.url} 
                    className="group flex items-center text-gray-400 hover:text-white transition-all duration-300"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform" />
                    <span className="relative">
                      {program.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7c1411] to-[#a31a16] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full"></div>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="group">
                <a 
                  href="tel:+447984084470" 
                  className="flex items-start text-gray-400 hover:text-white transition-colors"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gradient-to-br group-hover:from-green-600 group-hover:to-emerald-600 transition-all duration-300 mr-3">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Phone</div>
                    <div className="font-medium">+44 7984 084470</div>
                  </div>
                </a>
              </li>
              <li className="group">
                <a 
                  href="mailto:info@finelearning.com.uk" 
                  className="flex items-start text-gray-400 hover:text-white transition-colors"
                >
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300 mr-3">
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Email</div>
                    <div className="font-medium break-all">info@finelearning.com.uk</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear} Fine Learning. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              <span className="text-gray-600">•</span>
              <a href="/fees" className="text-gray-400 hover:text-white transition-colors">Pricing</a>
              <span className="text-gray-600">•</span>
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <span className="text-gray-600">•</span>
              <a href="/study-resource" className="text-gray-400 hover:text-white transition-colors">Resources</a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-gradient-to-r from-[#1434cb] via-[#019fe3] to-[#7c1411]"></div>
    </footer>
  );
};

export default Footer;