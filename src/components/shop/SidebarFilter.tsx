import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { categories } from '../../data/mockData';
import './SidebarFilter.css';

interface SidebarFilterProps {
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceChange: (min: number, max: number) => void;
  selectedRatings: number[];
  onRatingChange: (rating: number) => void;
}

const SidebarFilter: React.FC<SidebarFilterProps> = ({
  selectedCategories,
  onCategoryChange,
  priceRange,
  onPriceChange,
  selectedRatings,
  onRatingChange
}) => {
    // Local state for inputs before applying (optional, but let's do direct for now for simplicity or implementing an apply button)
    // Actually, let's keep local state for price inputs so we don't trigger re-filter on every keystroke
    const [localMinPrice, setLocalMinPrice] = useState(priceRange[0]);
    const [localMaxPrice, setLocalMaxPrice] = useState(priceRange[1]);

    const handleApplyPrice = () => {
        onPriceChange(localMinPrice, localMaxPrice);
    };

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
                                <input 
                                    type="checkbox" 
                                    checked={selectedCategories.includes(cat.name)}
                                    onChange={() => onCategoryChange(cat.name)}
                                />
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
                     {/* Simplified slider for demo */}
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={localMaxPrice} 
                        onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
                        style={{ width: '100%', accentColor: 'var(--primary-color)' }}
                    />
                </div>
                <div className="price-range-inputs">
                    <div className="price-input-group">
                        <span className="currency-symbol">$</span>
                        <input 
                            type="number" 
                            className="price-input" 
                            value={localMinPrice}
                            onChange={(e) => setLocalMinPrice(Number(e.target.value))}
                            placeholder="Min"
                        />
                    </div>
                    <span className="price-separator">-</span>
                    <div className="price-input-group">
                        <span className="currency-symbol">$</span>
                        <input 
                            type="number" 
                            className="price-input" 
                            value={localMaxPrice}
                            onChange={(e) => setLocalMaxPrice(Number(e.target.value))}
                            placeholder="Max"
                        />
                    </div>
                </div>
                <button className="apply-btn" onClick={handleApplyPrice}>Filter</button>
            </div>

            {/* Rating Widget */}
            <div className="sidebar-widget">
                <h3 className="widget-title">Rating</h3>
                <div className="rating-list">
                     {ratings.map(r => (
                         <label key={r} className="rating-item">
                             <input 
                                type="checkbox" 
                                checked={selectedRatings.includes(r)}
                                onChange={() => onRatingChange(r)}
                             />
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
