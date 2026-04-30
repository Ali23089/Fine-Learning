import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, BookOpen, Star, Trophy, GraduationCap, Lightbulb, MessageCircle, Award, Globe, CheckCircle } from 'lucide-react';
import Slider from 'react-slick'; // Importing react-slick for the slider
import 'slick-carousel/slick/slick.css'; // Importing slick-carousel styles
import 'slick-carousel/slick/slick-theme.css';
import AchievementsGallery from '../components/AchievementsGallery'; // Import the new component
import ImageSection from '../components/ImageSection'; // Import the new component

const About = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Lead Mathematics Tutor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'David Chen',
      role: 'Science Department Head',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      name: 'Emma Williams',
      role: 'English Language Specialist',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu33ARcFb9jUqeD8P_OLxmh6Kl1mIzme7Zzw&s'
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Exceptional Curriculum',
      description: 'Tailored assessment and curriculum materials designed to support student progress.'
    },
    {
      icon: Star,
      title: 'Exclusive Resources',
      description: 'Custom-designed activity books for Maths and English across all levels.'
    },
    {
      icon: Trophy,
      title: 'Regular Assessment',
      description: 'Continuous monitoring and evaluation of student progress.'
    },
    {
      icon: GraduationCap,
      title: 'Experienced Teachers',
      description: 'Experienced educators with extensive subject knowledge.'
    }
  ];

  const messages = [
    {
      title: 'Message from Head Teacher',
      content: `At Fine Learning, we believe in nurturing every student's potential. Our goal is to provide a supportive and engaging learning environment where students can thrive academically and personally.
      Together, we can achieve excellence and prepare students for a bright future.`,
      author: '- Head Teacher of Fine Learning'
    },
    {
      title: 'Message from the Director',
      content: `Fine Learning is committed to delivering high-quality education tailored to the needs of each student. Our dedicated team of educators works tirelessly to ensure that every child receives the attention and resources they deserve.
      We are passionate about inspiring the next generation of learners and leaders.`,
      author: '- Director of Fine Learning'
    }
  ];

  const coreValues = [
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-[#1434cb]" />,
      title: 'Respect and Care',
      description: 'Understanding the emotional needs of students, parents, staff, and partners is central to our approach.'
    },
    {
      icon: <Star className="h-6 w-6 sm:h-8 sm:w-8 text-[#1434cb]" />,
      title: 'Integrity',
      description: 'We foster an empathetic environment where everyone feels heard, supported, and valued.'
    },
    {
      icon: <Target className="h-6 w-6 sm:h-8 sm:w-8 text-[#1434cb]" />,
      title: 'Collaboration',
      description: 'We respond with compassion and understanding to challenges and aspirations.'
    },
    {
      icon: <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-[#1434cb]" />,
      title: 'Empathy',
      description: 'We create an environment that encourages teamwork and mutual growth.'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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

  // Animation Variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const sliderVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <motion.div
        className="relative bg-gradient-to-r from-[#1434cb] via-[#019fe3] to-[#1434cb] text-white py-12 sm:py-16 md:py-20 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">Welcome to Fine Learning</h1>
          <div className="w-16 sm:w-24 h-1 bg-white mx-auto rounded-full mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Premier Provider of Personalized Education Services in the UK
          </p>
        </div>
      </motion.div>

      {/* Committed to Excellence Section */}
      <motion.div
        className="py-12 sm:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <Award className="h-12 w-12 sm:h-16 sm:w-16 text-[#7c1411] mx-auto mb-4 sm:mb-6 animate-bounce" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1434cb] mb-4 sm:mb-6">
              Committed to Excellence
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
              At Fine Learning, we believe in every student's ability to succeed and are committed to helping them unlock their full potential by delivering the highest standards of education and support.
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Star className="h-8 w-8 sm:h-12 sm:w-12 text-[#1434cb]" />,
                title: "Comprehensive Support",
                description:
                  "We partner with parents and schools to ensure every student receives personalized attention.",
              },
              {
                icon: <Lightbulb className="h-8 w-8 sm:h-12 sm:w-12 text-[#1434cb]" />,
                title: "Innovative Teaching",
                description:
                  "Empowering students with innovative learning techniques for measurable progress.",
              },
              {
                icon: <GraduationCap className="h-8 w-8 sm:h-12 sm:w-12 text-[#1434cb]" />,
                title: "Excellence in Education",
                description:
                  "Delivering unmatched standards of academic support and curriculum resources.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-2 border-transparent transition-all duration-300 hover:border-[#019fe3] hover:shadow-[0_0_15px_#019fe3]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center bg-[#1434cb]/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1434cb] mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center text-sm sm:text-base">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <ImageSection />

      {/* Mission and Vision Section */}
      <motion.div
        className="py-12 sm:py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-2 border-transparent transition-all duration-300 hover:border-[#019fe3] hover:shadow-[0_0_15px_#019fe3]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Globe className="h-8 w-8 sm:h-12 sm:w-12 text-[#1434cb] mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#1434cb] mb-4">Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Our mission is to empower students by providing exceptional, tailored education that addresses their individual learning needs. We foster innovative learning through effective teaching methods and resources, ensuring measurable progress.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border-2 border-transparent transition-all duration-300 hover:border-[#019fe3] hover:shadow-[0_0_15px_#019fe3]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <CheckCircle className="h-8 w-8 sm:h-12 sm:w-12 text-[#1434cb] mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-[#1434cb] mb-4">Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We aim to reach learners around the globe, as we believe that education is a right for every child in every corner of the world. We are committed to providing you with the best possible learning environment to facilitate your education.{' '}
                <span className="text-[#7c1411] font-extrabold text-base sm:text-lg">
                  "Education is Success."
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        className="py-12 sm:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants} // Animation for the entire section
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Side - Image */}
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src="/assets/images/up1.jpg"
                alt="Core Values"
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Right Side - Core Values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants} // Animation for the right side
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-[#1434cb] mb-6">
                Our Core Values
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-3 sm:space-x-4 bg-gray-100 p-3 sm:p-4 rounded-lg shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeOut',
                      delay: index * 0.2 // Staggered animation for each item
                    }}
                  >
                    <div className="p-2 sm:p-4 bg-[#1434cb]/10 rounded-full">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1434cb]">{value.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="py-12 sm:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1434cb]">Why Choose Fine Learning?</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-4xl mx-auto px-4">
              Discover the unique benefits of learning with us and unlock your full potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-lg border-2 border-transparent transition-all duration-300 hover:border-[#019fe3] hover:shadow-[0_0_15px_#019fe3]"
                variants={cardVariants}
              >
                <feature.icon className="h-8 w-8 sm:h-12 sm:w-12 text-[#7c1411] mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold text-[#1434cb] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Messages Section */}
      <motion.div
        className="py-12 sm:py-16" style={{ backgroundColor: '#019fe3' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sliderVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <MessageCircle className="h-8 w-8 sm:h-12 sm:w-12 text-white mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Messages from Our Leaders</h2>
          </div>
          <Slider {...sliderSettings}>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
                variants={cardVariants}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#1434cb] mb-4">{message.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{message.content}</p>
                <p className="text-lg sm:text-xl font-semibold text-[#7c1411] mt-4 sm:mt-6">{message.author}</p>
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.div>

      {/* Spacer Section */}
      <div className="py-8 bg-gray-50"></div> {/* Adds space with a light gray background */}

      {/* Image Section */}
      

      {/* Team Section - commented out */}
      {/* <motion.div
        className="py-12 sm:py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1434cb]">Meet our Head of Departments</h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600">Dedicated educators committed to your success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-transparent hover:border-[#019fe3] hover:shadow-[0_0_15px_#019fe3] transition-all duration-300 transform hover:scale-105"
                variants={cardVariants}
              >
                <img src={member.image} alt={member.name} className="w-full h-48 sm:h-64 object-cover" />
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1434cb]">{member.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div> */}

      {/* Achievements Gallery Section */}
      <motion.div
        className="py-12 sm:py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AchievementsGallery />
      </motion.div>
    </div>
  );
};

export default About;