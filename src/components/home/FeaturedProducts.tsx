import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { products } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import './FeaturedProducts.css';

const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { addToCart } = useCart();

  // Helper to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={14} 
        fill={index < rating ? "#ffc107" : "none"} 
        stroke={index < rating ? "#ffc107" : "#ccc"}
      />
    ));
  };

  const tabs = ['All', 'Vegetables', 'Fruits', 'Meat', 'Nuts'];

  const getFilteredProducts = () => {
    if (activeTab === 'All') {
        return products.slice(0, 8);
    }
    return products.filter(p => p.category === activeTab).slice(0, 8);
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section className="featured-products-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Products</h2>
          <div className="filter-tabs">
            {tabs.map(tab => (
              <button 
                key={tab} 
                className={`filter-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                {product.tag && <span className="product-tag">{product.tag}</span>}
                <Link to={`/product/${product.id}`}>
                    <img src={product.image} alt={product.name} className="product-image" />
                </Link>
                <div className="product-overlay">
                    <button className="icon-btn" onClick={() => addToCart(product)}>
                        <ShoppingCart size={18} />
                    </button>
                </div>
              </div>
              <div className="product-details">
                <span className="product-category">{product.category}</span>
                <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <h3 className="product-name">{product.name} {product.weight}</h3>
                </Link>
                <div className="product-rating">
                  {renderStars(product.rating)}
                </div>
                <div className="product-bottom">
                  <div className="price-box">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    {product.oldPrice && <span className="old-price">${product.oldPrice.toFixed(2)}</span>}
                  </div>
                  <button className="add-btn" onClick={() => addToCart(product)}>
                    Add <ShoppingCart size={14} style={{ display: 'inline', marginLeft: '5px' }}/>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
