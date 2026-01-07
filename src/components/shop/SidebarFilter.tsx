import React, { useState } from 'react';
import { Star } from 'lucide-react';
import './SidebarFilter.css';

const SidebarFilter: React.FC = () => {
    // State for price range
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(100);

    const categories = [
        { name: 'Vegetables', count: 15 },
        { name: 'Fruits', count: 20 },
        { name: 'Drinks', count: 12 },
        { name: 'Meat', count: 8 },
        { name: 'Bakery', count: 18 }
    ];

    const ratings = [5, 4, 3, 2, 1];

    return (
        <aside className="shop-sidebar">
            {/* Categories Widget */}
            <div className="sidebar-widget">
                <h3 className="widget-title">Product Categories</h3>
                <ul className="category-list">
                    {categories.map((cat, idx) => (
                        <li key={idx} className="category-item">
                            <label className="category-checkbox">
                                <input type="checkbox" />
                                {cat.name}
                            </label>
                            <span className="count-badge">{cat.count}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Filter Widget */}
            <div className="sidebar-widget">
                <h3 className="widget-title">Filter by Price</h3>
                <div className="price-slider">
                    {/* Placeholder for real dual-range slider, using inputs for now */}
                    <input 
                        type="range" 
                        min="0" 
                        max="200" 
                        value={maxPrice} 
                        onChange={(e) => setMaxPrice(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--primary-color)' }}
                    />
                </div>
                <div className="price-range-inputs">
                    <div className="price-input-group">
                        <span className="currency-symbol">$</span>
                        <input 
                            type="number" 
                            className="price-input" 
                            value={minPrice}
                            onChange={(e) => setMinPrice(Number(e.target.value))}
                            placeholder="Min"
                        />
                    </div>
                    <span className="price-separator">-</span>
                    <div className="price-input-group">
                        <span className="currency-symbol">$</span>
                        <input 
                            type="number" 
                            className="price-input" 
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(Number(e.target.value))}
                            placeholder="Max"
                        />
                    </div>
                </div>
                <button className="apply-btn">Filter</button>
            </div>

            {/* Rating Widget */}
            <div className="sidebar-widget">
                <h3 className="widget-title">Rating</h3>
                <div className="rating-list">
                     {ratings.map(r => (
                         <label key={r} className="rating-item">
                             <input type="checkbox" />
                             <div className="rating-stars">
                                 {Array.from({ length: 5 }).map((_, i) => (
                                     <Star 
                                        key={i} 
                                        size={14} 
                                        fill={i < r ? "#ffc107" : "#e4e5e9"} 
                                        stroke="none"
                                    />
                                 ))}
                             </div>
                             <span style={{ fontSize: '0.85rem' }}>{r}.0 & up</span>
                         </label>
                     ))}
                </div>
            </div>
        </aside>
    );
};

export default SidebarFilter;
