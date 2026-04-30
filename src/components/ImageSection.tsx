import React from 'react';

const ImageSection = () => {
  return (
    <div className="py-8 sm:py-10 bg-[#019fe3]"> {/* Blue background with padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-4 sm:gap-8 md:gap-12 flex-wrap">
          <img
            src="/assets/images/ocr.jpg"
            alt="Partner 1"
            className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
          />
          <img
            src="/assets/images/nc.jpg"
            alt="Partner 2"
            className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
          />
          <img
            src="/assets/images/AQA.jpg"
            alt="Partner 3"
            className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
          />
          <img
            src="/assets/images/ED.png"
            alt="Partner 4"
            className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSection;