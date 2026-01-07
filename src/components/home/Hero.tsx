import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <span className="hero-tag">Welcome to Grocer</span>
          <h1 className="hero-title">Fresh & Healthy <br /> Organic Food</h1>
          <p className="hero-subtitle">
            Sale up to <span className="highlight">30% OFF</span>
          </p>
          <p className="hero-desc">
            Free shipping on all your order. we deliver, you enjoy
          </p>
          <button className="btn-primary hero-btn">
            Shop Now <ArrowRight size={18} />
          </button>
        </div>
        <div className="hero-image-placeholder">
          {/* This represents the grocery bag image from the design */}
          <div className="grocery-bag-mockup">
             <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80" alt="Fresh Groceries" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
