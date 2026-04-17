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
      <nav className="bg-[#019fe3] text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-2 text-2xl font-bold">
              <BookOpen className="h-8 w-8 text-white" />
              <Link to="/" className="hover:text-[#7c1411] transition duration-300">
                Fine Learning
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link
                to="/"
                className={`transition duration-300 font-medium ${
                  isActive('/') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition duration-300 font-medium ${
                  isActive('/about') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className={`transition duration-300 font-medium ${
                  isActive('/courses') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
              >
                Courses
              </Link>
              <Link
                to="/fees"
                className={`transition duration-300 font-medium ${
                  isActive('/fees') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
              >
                Student's Fee
              </Link>
              <Link
                to="/study-resource"
                className={`transition duration-300 font-medium ${
                  isActive('/study-resource') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
              >
                Educational Resources
              </Link>
              <Link
                to="/contact"
                className={`transition duration-300 font-medium ${
                  isActive('/contact') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
              >
                Contact Us
              </Link>
            </div>

            {/* Call to Action Button */}
            <div className="hidden md:block">
              <Link
                to="/register"
                className="bg-[#7c1411] hover:bg-[#a31a16] text-white font-bold py-2 px-4 rounded-md transition duration-300"
              >
                Register
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className={`transition duration-300 font-medium ${
                  isActive('/') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`transition duration-300 font-medium ${
                  isActive('/about') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/courses"
                className={`transition duration-300 font-medium ${
                  isActive('/courses') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/fees"
                className={`transition duration-300 font-medium ${
                  isActive('/fees') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Student Fee
              </Link>
              <Link
                to="/study-resource"
                className={`transition duration-300 font-medium ${
                  isActive('/study-resource') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Educational Resources
              </Link>
              <Link
                to="/contact"
                className={`transition duration-300 font-medium ${
                  isActive('/contact') ? 'text-[#7c1411]' : 'hover:text-[#7c1411]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                to="/register"
                className="bg-[#7c1411] hover:bg-[#a31a16] text-white font-bold py-2 px-6 rounded-md transition duration-300 mt-2 mx-auto w-40 text-center"
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