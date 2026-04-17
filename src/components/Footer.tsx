import React from 'react';
import { GraduationCap, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-4 xl:gap-8">
          {/* Logo and About Section */}
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">Fine Learning</span>
            </div>
            <p className="text-gray-400 text-base">
              Empowering students through personalized online education in the UK.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Subjects Section */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Subjects
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/mathematics" className="text-base text-gray-300 hover:text-white">
                  Mathematics
                </a>
              </li>
              <li>
                <a href="/science" className="text-base text-gray-300 hover:text-white">
                  Science
                </a>
              </li>
              <li>
                <a href="/english" className="text-base text-gray-300 hover:text-white">
                  English
                </a>
              </li>
            </ul>
          </div>

          {/* Exam Results Section */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Programs 
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="/elevenplus" className="text-base text-gray-300 hover:text-white">
                  11 Plus
                </a>
              </li>
              <li>
                <a href="/sats" className="text-base text-gray-300 hover:text-white">
                  SATs
                </a>
              </li>
              <li>
                <a href="/gcse" className="text-base text-gray-300 hover:text-white">
                  GCSEs
                </a>
              </li>
              <li>
                <a href="/alevel" className="text-base text-gray-300 hover:text-white">
                  A-Levels
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="mt-12 xl:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                <span>+44 7984 084470</span>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@finelearning.com.uk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Fine Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;