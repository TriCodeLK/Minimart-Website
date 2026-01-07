import React from 'react';
import './Categories.css';

interface Category {
  id: number;
  name: string;
  image: string;
  count: string;
}

const Categories: React.FC = () => {
  const categories: Category[] = [
    {
      id: 1,
      name: 'Vegetables',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?auto=format&fit=crop&w=200&q=80',
      count: '120 Items'
    },
    {
      id: 2,
      name: 'Fruits',
      image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=200&q=80',
      count: '150 Items'
    },
    {
      id: 3,
      name: 'Drinks',
      image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=200&q=80',
      count: '45 Items'
    },
    {
      id: 4,
      name: 'Fresh Nuts',
      image: 'https://images.unsplash.com/photo-1543160611-654d02613dfa?auto=format&fit=crop&w=200&q=80',
      count: '32 Items'
    },
    {
      id: 5,
      name: 'Fresh Fish',
      image: 'https://images.unsplash.com/photo-1535049883648-522f7783933c?auto=format&fit=crop&w=200&q=80',
      count: '25 Items'
    },
    {
      id: 6,
      name: 'Meat',
      image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=200&q=80',
      count: '43 Items'
    }
  ];

  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Category</h2>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <img src={category.image} alt={category.name} className="category-image" />
              <h3 className="category-name">{category.name}</h3>
              <span className="category-count">{category.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
