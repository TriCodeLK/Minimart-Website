import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Categories from '../components/home/Categories';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero />
      <Features />
      <Categories />
    </div>
  );
};

export default Home;
