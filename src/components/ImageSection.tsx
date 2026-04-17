import React from 'react';

const ImageSection = () => {
  return (
    <div className="py-8 sm:py-10 bg-[#019fe3]"> {/* Blue background with padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-4 sm:space-x-8 md:space-x-12 flex-wrap"> {/* Increased horizontal spacing with responsive design */}
          <img
            src="/assets/images/ocr.jpg" // Replace with the actual image path
            alt="Partner 1"
            className="h-16 sm:h-20 md:h-24 object-contain" // Adjust height and maintain aspect ratio
          />
          <img
            src="/assets/images/nc.jpg" // Replace with the actual image path
            alt="Partner 2"
            className="h-16 sm:h-20 md:h-24 object-contain"
          />
          <img
            src="/assets/images/AQA.jpg" // Replace with the actual image path
            alt="Partner 3"
            className="h-16 sm:h-20 md:h-24 object-contain"
          />
          <img
            src="/assets/images/ED.png" // Replace with the actual image path
            alt="Partner 4"
            className="h-16 sm:h-20 md:h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;