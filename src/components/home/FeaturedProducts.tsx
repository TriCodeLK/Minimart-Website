import React, { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import './FeaturedProducts.css';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  rating: number;
  image: string;
  tag?: string;
  weight: string;
}

const FeaturedProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const products: Product[] = [
    {
      id: 1,
      name: 'Radish',
      category: 'Vegetables',
      price: 2.00,
      oldPrice: 3.99,
      rating: 4,
      image: 'https://freshkartfarms.com/assets/img/product_img/450X450/radish.jpg',
      weight: '500g',
      tag: 'Sale'
    },
    {
      id: 2,
      name: 'Potatoes',
      category: 'Vegetables',
      price: 1.00,
      rating: 5,
      image: 'https://apnasabji.com/wp-content/uploads/2020/08/Apna-Sabji-Potato-1.jpg',
      weight: '1kg'
    },
    {
      id: 3,
      name: 'Tomatoes',
      category: 'Vegetables',
      price: 0.50,
      rating: 4,
      image: 'https://doorkisan.com/wp-content/uploads/2016/05/upload_1e46ebbf78004709973c6b679673f94c.jpg',
      weight: '200g'
    },
    {
      id: 4,
      name: 'Broccoli',
      category: 'Vegetables',
      price: 1.50,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bef?auto=format&fit=crop&w=300&q=80',
      weight: '1kg'
    },
    {
      id: 5,
      name: 'Green Beans',
      category: 'Vegetables',
      price: 1.00,
      oldPrice: 1.50,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1567375698509-4622942df6ae?auto=format&fit=crop&w=300&q=80',
      weight: '250g',
      tag: '10% Off'
    },
    {
      id: 6,
      name: 'Orange',
      category: 'Fruits',
      price: 2.50,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee8b?auto=format&fit=crop&w=300&q=80',
      weight: '1kg'
    },
    {
      id: 7,
      name: 'Fresh Meat',
      category: 'Meat',
      price: 12.00,
      rating: 4,
      image: 'https://images.unsplash.com/photo-1593976523910-acc2df107457?auto=format&fit=crop&w=300&q=80',
      weight: '1kg'
    },
    {
      id: 8,
      name: 'Fresh Nuts',
      category: 'Nuts',
      price: 8.50,
      rating: 5,
      image: 'https://images.unsplash.com/photo-1551659974-98ae8cf43878?auto=format&fit=crop&w=300&q=80',
      weight: '500g'
    }
  ];

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

  const filteredProducts = activeTab === 'All' 
    ? products 
    : products.filter(p => p.category === activeTab);

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
                <img src={product.image} alt={product.name} className="product-image" />
              </div>
              <div className="product-details">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name} {product.weight}</h3>
                <div className="product-rating">
                  {renderStars(product.rating)}
                </div>
                <div className="product-bottom">
                  <div className="price-box">
                    <span className="product-price">${product.price.toFixed(2)}</span>
                    {product.oldPrice && <span className="old-price">${product.oldPrice.toFixed(2)}</span>}
                  </div>
                  <button className="add-btn">
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
