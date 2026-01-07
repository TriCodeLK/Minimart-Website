import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero />
      <Features />
    </div>
  );
};

export default Home;
