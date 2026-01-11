import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star, ChevronRight } from 'lucide-react';
import type { Product } from '../../data/mockData';
import { useCart } from '../../context/CartContext';
import './ProductGrid.css';

interface ProductGridProps {
  products: Product[];
  totalProducts: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
  startIndex: number;
  endIndex: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  totalProducts,
  currentPage,
  totalPages,
  onPageChange,
  sortOption,
  onSortChange,
  startIndex,
  endIndex
}) => {
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

    return (
        <div className="product-grid-container">
            {/* Sort Bar */}
            <div className="shop-top-bar">
                <div className="results-count">
                    Showing {products.length > 0 ? startIndex + 1 : 0}–{Math.min(endIndex, totalProducts)} of {totalProducts} results
                </div>
                <div className="sort-options">
                    <span className="sort-label">Sort by:</span>
                    <select 
                        className="sort-select" 
                        value={sortOption}
                        onChange={(e) => onSortChange(e.target.value)}
                    >
                        <option value="latest">Latest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

            {/* Grid */}
            {products.length === 0 ? (
                <div className="no-products">
                    <p>No products found matching your criteria.</p>
                </div>
            ) : (
                <div className="shop-products-grid">
                    {products.map((product) => (
                        <div key={product.id} className="shop-product-card">
                            <div className="product-image-container">
                                {product.tag && <span className="product-tag">{product.tag}</span>}
                                <Link to={`/product/${product.id}`}>
                                    <img src={product.image} alt={product.name} className="product-image" />
                                </Link>
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
                                        Add <ShoppingCart size={14} style={{ display: 'inline', marginLeft: '5px' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="pagination">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button 
                            key={i} 
                            className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                            onClick={() => onPageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    {currentPage < totalPages && (
                        <button className="page-btn next" onClick={() => onPageChange(currentPage + 1)}>
                            Next <ChevronRight size={14} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProductGrid;
