import React from 'react';
import { Users, Target, Heart, BookOpen, Star, Trophy, GraduationCap, Lightbulb } from 'lucide-react';

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
      description: 'Tailored assessment and curriculum materials designed to support student progress'
    },
    {
      icon: Star,
      title: 'Exclusive Resources',
      description: 'Custom-designed activity books for Maths and English across all levels'
    },
    {
      icon: Trophy,
      title: 'Regular Assessment',
      description: 'Continuous monitoring and evaluation of student progress'
    },
    {
      icon: GraduationCap,
      title: 'Expert Teachers',
      description: 'Experienced educators with extensive subject knowledge'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Welcome to Fine Learning</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Premier Provider of Personalized Education Services in the UK
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black">About Fine Learning</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
              Fine Learning is a premier Online education institution with multiple branches across London, 
              dedicated to delivering top-quality, results-driven support for students at all levels, 
              from Year 1 to A-level. With over a decade of experience, we are dedicated to delivering 
              exceptional education services tailored to students of all ages and abilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-left">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-black">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                At Fine learning, our mission is to empower students by providing exceptional, 
                tailored education that addresses their individual learning needs. We foster 
                innovative learning through effective teaching methods and resources, ensuring 
                measurable progress.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-right">
              <div className="flex items-center mb-6">
                <Lightbulb className="h-8 w-8 text-primary mr-4" />
                <h3 className="text-2xl font-bold text-black">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We aim to reach learners around the globe, as we believe that education is a 
                right for every child in every corner of the world. We are committed to providing 
                you with the best possible learning environment to facilitate your education.
              </p>
              <p className="text-xl font-semibold text-primary mt-4 text-center">
                "Education is Success"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-left">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Student-Centered</h3>
              <p className="text-gray-600">We put our students' needs and success at the heart of everything we do.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in our teaching methods and student outcomes.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-right">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Passion</h3>
              <p className="text-gray-600">We are passionate about education and inspiring the next generation.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black">Our Expert Teachers</h2>
            <p className="mt-4 text-xl text-gray-600">Dedicated educators committed to your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-up">
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CEO Message Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mt-4"> CEO MESSAGE</h2>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-left">
            <p className="text-gray-600 font-bold leading-relaxed">
              "At Fine Teachers, we strive to provide the best possible learning experience for our students. 
              Our commitment to excellence is reflected in our results and the success of our students."
            </p>
            <p className="text-xl font-semibold text-primary mt-4 text-right">
              Chief Executive
            </p>
          </div>
        </div>
      </div>

      {/* Head Teacher Message Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mt-4">Head Teacher Message</h2>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-right">
            <p className="text-gray-600 font-bold leading-relaxed">
              "As Head Teacher at Fine Teachers, I am proud to lead a team of passionate and experienced educators. 
              We believe that education is the key to unlocking a brighter future for our students, and we are committed 
              to providing them with the knowledge and skills they need to succeed."
            </p>
            <p className="text-xl font-semibold text-primary mt-4 text-right">
              Head Teacher
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Fine Learning Today</h2>
          <p className="text-xl mb-8">Give your child the educational advantage they deserve</p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;