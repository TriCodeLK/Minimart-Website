import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Categories from '../components/home/Categories';
import FeaturedProducts from '../components/home/FeaturedProducts';
import PromotionalBanners from '../components/home/PromotionalBanners';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Hero />
      <Features />
      <Categories />
      <FeaturedProducts />
      <PromotionalBanners />
    </div>
  );
};

export default Home;
