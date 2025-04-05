import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-[#019fe3] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Icon */}
          <div className="flex items-center space-x-2 text-2xl font-bold">
            <BookOpen className="h-8 w-8 text-white" />
            <Link to="/" className="hover:text-[#7c1411] transition duration-300">
              Fine Learning
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="hover:text-[#7c1411] transition duration-300 font-medium"
            >
              Home
            </Link>
            <Link
              to="/courses"
              className="hover:text-[#7c1411] transition duration-300 font-medium"
            >
              Courses
            </Link>
            <Link
              to="/pricing"
              className="hover:text-[#7c1411] transition duration-300 font-medium"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="hover:text-[#7c1411] transition duration-300 font-medium"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#7c1411] transition duration-300 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Call to Action Button */}
          <div>
            <Link
              to="/register"
              className="bg-[#7c1411] hover:bg-[#a31a16] text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;