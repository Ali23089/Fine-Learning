import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import FloatingWhatsAppButton from './FloatingWhatsAppButton'; // Import the button component

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="bg-gradient-to-r from-[#1434cb] via-[#019fe3] to-[#1434cb] text-white shadow-xl sticky top-0 z-50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 text-2xl font-bold group">
              <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition duration-300">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Fine Learning Logo" 
                  className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
                />
                <span>Fine Learning</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium relative group ${
                  isActive('/') ? 'bg-white/20 text-white' : 'hover:bg-white/10'
                }`}
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/about"
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium relative group ${
                  isActive('/about') ? 'bg-white/20 text-white' : 'hover:bg-white/10'
                }`}
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/courses"
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium relative group ${
                  isActive('/courses') ? 'bg-white/20 text-white' : 'hover:bg-white/10'
                }`}
              >
                Courses
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/fees"
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium relative group ${
                  isActive('/fees') ? 'bg-white/20 text-white' : 'hover:bg-white/10'
                }`}
              >
                Student's Fee
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/study-resource"
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium relative group ${
                  isActive('/study-resource') ? 'bg-white/20 text-white' : 'hover:bg-white/10'
                }`}
              >
                Educational Resources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/contact"
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium relative group ${
                  isActive('/contact') ? 'bg-white/20 text-white' : 'hover:bg-white/10'
                }`}
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Call to Action Button */}
            <div className="hidden md:block">
              <Link
                to="/courses"
                className="relative bg-white text-[#1434cb] font-bold py-2.5 px-6 rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#019fe3] rounded-md p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4">
              <Link
                to="/"
                className={`transition duration-300 font-medium ${
                  isActive('/') ? 'text-white bg-white/20 px-3 py-1 rounded-lg' : 'hover:text-white hover:bg-white/10 px-3 py-1 rounded-lg'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition duration-300 font-medium ${
                  isActive('/about') ? 'text-white bg-white/20 px-3 py-1 rounded-lg' : 'hover:text-white hover:bg-white/10 px-3 py-1 rounded-lg'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className={`transition duration-300 font-medium ${
                  isActive('/courses') ? 'text-white bg-white/20 px-3 py-1 rounded-lg' : 'hover:text-white hover:bg-white/10 px-3 py-1 rounded-lg'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/fees"
                className={`transition duration-300 font-medium ${
                  isActive('/fees') ? 'text-white bg-white/20 px-3 py-1 rounded-lg' : 'hover:text-white hover:bg-white/10 px-3 py-1 rounded-lg'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Student Fee
              </Link>
              <Link
                to="/study-resource"
                className={`transition duration-300 font-medium ${
                  isActive('/study-resource') ? 'text-white bg-white/20 px-3 py-1 rounded-lg' : 'hover:text-white hover:bg-white/10 px-3 py-1 rounded-lg'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Educational Resources
              </Link>
              <Link
                to="/contact"
                className={`transition duration-300 font-medium ${
                  isActive('/contact') ? 'text-white bg-white/20 px-3 py-1 rounded-lg' : 'hover:text-white hover:bg-white/10 px-3 py-1 rounded-lg'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/courses"
                className="bg-white text-[#1434cb] hover:bg-white/90 font-bold py-2.5 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg mt-2 mx-auto w-40 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsAppButton />
    </>
  );
};

export default Navbar;