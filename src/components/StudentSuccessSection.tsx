import React from 'react';
import { GraduationCap } from 'lucide-react'; // Import a relevant icon

const StudentSuccessSection = () => {
  return (
    <div className="py-8 sm:py-10 bg-white"> {/* White background with padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Icon and Heading */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center mb-4">
            <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-[#1434cb] mr-2" /> {/* Icon */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#1434cb] px-4">
              Our students have gone on to study at prestigious universities.
            </h2>
          </div>
        </div>

        {/* Add space between heading and image layout */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-4 sm:gap-8 md:gap-12 flex-wrap">
          <img
            src="/assets/images/CL.jpg"
            alt="Oxford University"
            className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
          />
          <img
            src="/assets/images/df.jpg"
            alt="Cambridge University"
            className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
          />
          <img
            src="/assets/images/oul.jpg"
            alt="Imperial College London"
            className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
          />
          <img
            src="/assets/images/ucl.jpg"
            alt="University College London"
            className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentSuccessSection;