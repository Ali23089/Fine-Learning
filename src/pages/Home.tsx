import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import FeaturedCourses from '../components/FeaturedCourses';
import ExamResults from '../components/ExamResults';

const Home = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <FeaturedCourses />
      <ExamResults />
    </div>
  );
};

export default Home;