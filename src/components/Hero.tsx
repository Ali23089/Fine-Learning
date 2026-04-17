import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds delay
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  };

  // Images for the slider
  const images = [
    '/assets/images/11.jpg', // Children in a classroom
    'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Children reading books
    '/assets/images/6.jpg'  // Children working in a classroom
  ];

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-[#7c1411]">
                <span className="block">Empowering students at</span>
                <span className="block text-[#1434cb]">Fine Learning</span> {/* Updated color */}
              </h1>
              <p className="mt-3 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                UK's leading Online School
              </p>
              <p className="mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                Maths, Science and English lessons to help students from year 1 to Year 13. Prepare for 11plus, SATs,GCSE and A-Level exams.
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 sm:mt-8 sm:max-w-xl sm:mx-auto md:mt-8 lg:mx-0">
                <span className="text-[#1434cb] font-bold text-xl sm:text-2xl md:text-3xl">Join us today</span>, and let's embark on a journey of knowledge and success!
              </p>
              <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/courses"
                    className="w-full flex items-center justify-center px-8 sm:px-12 py-3 sm:py-4 border border-transparent text-sm sm:text-base md:text-lg font-medium rounded-md text-white bg-[#1434cb] hover:bg-[#0f2ca1] transition-all duration-300 hover:transform hover:scale-105"
                  >
                    Start Learning
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Slider Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="h-64 sm:h-72 md:h-96 lg:h-[500px] xl:h-[600px] w-full object-cover"
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;