import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Heart, BookOpen, Star, Trophy, GraduationCap, Lightbulb, MessageCircle } from 'lucide-react';
import Slider from 'react-slick'; // Importing react-slick for the slider
import 'slick-carousel/slick/slick.css'; // Importing slick-carousel styles
import 'slick-carousel/slick/slick-theme.css';

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
      image: 'src/assets/images/team/fine.jpg'
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
      title: 'Expert Teachers',
      description: 'Experienced educators with extensive subject knowledge.'
    }
  ];

  const messages = [
    {
      title: 'Message from the Head',
      content: `At Fine Learning, we believe in nurturing every student’s potential. Our goal is to provide a supportive and engaging learning environment where students can thrive academically and personally.
      Together, we can achieve excellence and prepare students for a bright future.`,
      author: '- Sarah Johnson, Head of Fine Learning'
    },
    {
      title: 'Message from the Director',
      content: `Fine Learning is committed to delivering high-quality education tailored to the needs of each student. Our dedicated team of educators works tirelessly to ensure that every child receives the attention and resources they deserve.
      We are passionate about inspiring the next generation of learners and leaders.`,
      author: '- David Chen, Director of Fine Learning'
    }
  ];

  const coreValues = [
    {
      icon: <Heart className="h-8 w-8 text-[#1434cb]" />,
      title: 'Respect and Care',
      description: 'Understanding the emotional needs of students, parents, staff, and partners is central to our approach.'
    },
    {
      icon: <Star className="h-8 w-8 text-[#1434cb]" />,
      title: 'Integrity',
      description: 'We foster an empathetic environment where everyone feels heard, supported, and valued.'
    },
    {
      icon: <Target className="h-8 w-8 text-[#1434cb]" />,
      title: 'Collaboration',
      description: 'We respond with compassion and understanding to challenges and aspirations.'
    },
    {
      icon: <BookOpen className="h-8 w-8 text-[#1434cb]" />,
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
    arrows: false
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
        className="bg-[#1434cb] text-white py-16"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to Fine Learning</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Premier Provider of Personalized Education Services in the UK
            </p>
          </div>
        </div>
      </motion.div>

      {/* Core Values Section */}
      <motion.div
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants} // Animation for the entire section
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img
                src="https://st2.depositphotos.com/36569202/48329/i/450/depositphotos_483298994-stock-photo-our-core-values-symbol-white.jpg" // Replace with your image URL
                alt="Core Values"
                className="rounded-lg shadow-lg object-cover w-full h-full"
              />
            </motion.div>

            {/* Right Side - Core Values */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={sectionVariants} // Animation for the right side
            >
              <h2 className="text-3xl font-bold text-[#1434cb] mb-6">
                Our Core Values
              </h2>
              <div className="space-y-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 bg-gray-100 p-4 rounded-lg shadow"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeOut',
                      delay: index * 0.2 // Staggered animation for each item
                    }}
                  >
                    <div className="p-4 bg-[#1434cb]/10 rounded-full">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1434cb]">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
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
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1434cb]">Why Choose Fine Learning?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
              Discover the unique benefits of learning with us and unlock your full potential.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                variants={cardVariants}
              >
                <feature.icon className="h-12 w-12 text-[#7c1411] mb-4" />
                <h3 className="text-xl font-semibold text-[#1434cb] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Messages Section */}
      <motion.div
        className="py-16" style={{ backgroundColor: '#019fe3' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sliderVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageCircle className="h-12 w-12 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white">Messages from Our Leaders</h2>
          </div>
          <Slider {...sliderSettings}>
            {messages.map((message, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                variants={cardVariants}
              >
                <h3 className="text-2xl font-bold text-[#1434cb] mb-4">{message.title}</h3>
                <p className="text-gray-600 leading-relaxed">{message.content}</p>
                <p className="text-xl font-semibold text-[#7c1411] mt-6">{message.author}</p>
              </motion.div>
            ))}
          </Slider>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        className="py-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1434cb]">Meet Our Expert Teachers</h2>
            <p className="mt-4 text-lg text-gray-600">Dedicated educators committed to your success.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                variants={cardVariants}
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1434cb]">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;