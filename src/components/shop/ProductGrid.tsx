import React, { useState } from 'react';
import { ShoppingCart, Star, ChevronRight } from 'lucide-react';
import './ProductGrid.css';

// Reusing the Product interface from FeaturedProducts effectively
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

const ProductGrid: React.FC = () => {
    // Extended mock data for the shop page
    const products: Product[] = [
        { id: 1, name: 'Radish', category: 'Vegetables', price: 2.00, oldPrice: 3.99, rating: 4, image: 'https://images.unsplash.com/photo-1593026330056-b040ceadfc47?auto=format&fit=crop&w=300&q=80', weight: '500g', tag: 'Sale' },
        { id: 2, name: 'Potatoes', category: 'Vegetables', price: 1.00, rating: 5, image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
        { id: 3, name: 'Tomatoes', category: 'Vegetables', price: 0.50, rating: 4, image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80', weight: '200g' },
        { id: 4, name: 'Broccoli', category: 'Vegetables', price: 1.50, rating: 5, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bef?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
        { id: 5, name: 'Green Beans', category: 'Vegetables', price: 1.00, oldPrice: 1.50, rating: 4, image: 'https://images.unsplash.com/photo-1567375698509-4622942df6ae?auto=format&fit=crop&w=300&q=80', weight: '250g', tag: '10% Off' },
        { id: 6, name: 'Orange', category: 'Fruits', price: 2.50, rating: 5, image: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee8b?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
        { id: 7, name: 'Fresh Meat', category: 'Meat', price: 12.00, rating: 4, image: 'https://images.unsplash.com/photo-1593976523910-acc2df107457?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
        { id: 8, name: 'Fresh Nuts', category: 'Nuts', price: 8.50, rating: 5, image: 'https://images.unsplash.com/photo-1551659974-98ae8cf43878?auto=format&fit=crop&w=300&q=80', weight: '500g' },
        { id: 9, name: 'Banana', category: 'Fruits', price: 1.20, rating: 4.5, image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
        { id: 10, name: 'Carrots', category: 'Vegetables', price: 0.80, rating: 4, image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=300&q=80', weight: '1kg' },
        { id: 11, name: 'Red Chili', category: 'Vegetables', price: 3.50, rating: 5, image: 'https://images.unsplash.com/photo-1588873281272-35548ea23f09?auto=format&fit=crop&w=300&q=80', weight: '200g', tag: 'Hot' },
        { id: 12, name: 'Onions', category: 'Vegetables', price: 1.10, rating: 4.2, image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=300&q=80', weight: '1kg' }
    ];

    const [sortOption, setSortOption] = useState('latest');

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

    return (
        <div className="product-grid-container">
            {/* Sort Bar */}
            <div className="shop-top-bar">
                <div className="results-count">
                    Showing 1–12 of 18 results
                </div>
                <div className="sort-options">
                    <span className="sort-label">Sort by:</span>
                    <select 
                        className="sort-select" 
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="latest">Latest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            <div className="shop-products-grid">
                {products.map((product) => (
                    <div key={product.id} className="shop-product-card">
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
                                    Add <ShoppingCart size={14} style={{ display: 'inline', marginLeft: '5px' }} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn next">Next <ChevronRight size={14} /></button>
            </div>
        </div>
    );
};

export default ProductGrid;
