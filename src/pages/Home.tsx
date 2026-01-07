import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
