import React from 'react';
import { ArrowRight } from 'lucide-react';
import './PromotionalBanners.css';

const PromotionalBanners: React.FC = () => {
  return (
    <section className="promo-section">
      <div className="container">
        <div className="promo-grid">
          {/* Banner 1 */}
          <div className="promo-card bg-light-yellow">
            <div className="promo-content">
              <span className="promo-tag yellow">Free delivery</span>
              <h3 className="promo-title">Free delivery over $50</h3>
              <p className="promo-desc">
                Shop $50 product and get free delivery anywhere.
              </p>
              <button className="promo-btn dark">
                Shop Now <ArrowRight size={16} />
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1581579186913-45ac3e6e3dd2?auto=format&fit=crop&w=400&q=80" 
              alt="Delivery Man" 
              className="promo-image" 
            />
          </div>

          {/* Banner 2 */}
          <div className="promo-card bg-light-green">
            <div className="promo-content">
              <span className="promo-tag green">60% off</span>
              <h3 className="promo-title">Organic Food</h3>
              <p className="promo-desc">
                Save up to 60% off on your first order
              </p>
              <button className="promo-btn green">
                Order Now <ArrowRight size={16} />
              </button>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=400&q=80" 
              alt="Organic Food" 
              className="promo-image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromotionalBanners;
