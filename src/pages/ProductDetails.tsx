import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, Star, Minus, Plus, Share2, Heart } from 'lucide-react';
import { products, type Product } from '../data/mockData';
import { useCart } from '../context/CartContext';
import ProductGrid from '../components/shop/ProductGrid';
import './ProductDetails.css';

const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    const [product, setProduct] = useState<Product | null>(null);
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (id) {
            const found = products.find(p => p.id === parseInt(id));
            setProduct(found || null);
            setQuantity(1);

            if (found) {
                // Find related products (same category, excluding current)
                const related = products
                    .filter(p => p.category === found.category && p.id !== found.id)
                    .slice(0, 4);
                setRelatedProducts(related);
            }
        }
    }, [id]);

    if (!product) {
        return (
            <div className="container" style={{ padding: '50px 0', textAlign: 'center' }}>
                <h2>Product not found</h2>
                <Link to="/shop" className="continue-shopping-btn">Back to Shop</Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        // Since addToCart only takes product (adds 1), we loop to add quantity
        // Ideally context should support adding generic quantity, but for now:
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        // Optional: show toast notification
    };

    // Helper to render stars
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <Star
                key={index}
                size={16}
                fill={index < rating ? "#ffc107" : "none"}
                stroke={index < rating ? "#ffc107" : "#ccc"}
            />
        ));
    };

    return (
        <div className="product-details-page">
            <div className="container">
                {/* Breadcrumb */}
                <div className="cart-breadcrumb" style={{ marginBottom: '20px' }}>
                    <Link to="/">Home</Link> <span>/</span> 
                    <Link to="/shop">Shop</Link> <span>/</span> 
                    <span className="current-page">{product.name}</span>
                </div>

                <div className="pd-container">
                    {/* Image Section */}
                    <div className="pd-image-section">
                        {product.tag && <span className="pd-tag">{product.tag}</span>}
                        <img src={product.image} alt={product.name} className="pd-image" />
                    </div>

                    {/* Info Section */}
                    <div className="pd-info-section">
                        <h1 className="pd-title">{product.name}</h1>
                        <div className="pd-meta">
                            <div className="pd-rating">
                                {renderStars(product.rating)}
                                <span style={{ marginLeft: '5px' }}>(4 Customer Reviews)</span>
                            </div>
                            <span style={{ color: '#ddd' }}>|</span>
                            <span className="stock-status" style={{ color: 'var(--primary-color)', fontWeight: 600 }}>In Stock</span>
                        </div>

                        <div className="pd-price-box">
                            <span className="pd-price">${product.price.toFixed(2)}</span>
                            {product.oldPrice && <span className="pd-old-price">${product.oldPrice.toFixed(2)}</span>}
                        </div>

                        <p className="pd-description">
                            Experience the freshness of our premium {product.name.toLowerCase()}. 
                            Sourced directly from organic farms, this {product.weight} pack ensures 
                            quality and taste in every bite. Perfect for your daily nutritional needs 
                            and culinary experiments.
                        </p>

                        <div className="pd-actions">
                            <div className="pd-qty-controls">
                                <button className="pd-qty-btn" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                                    <Minus size={16} />
                                </button>
                                <span className="pd-qty-display">{quantity}</span>
                                <button className="pd-qty-btn" onClick={() => setQuantity(quantity + 1)}>
                                    <Plus size={16} />
                                </button>
                            </div>
                            <button className="pd-add-btn" onClick={handleAddToCart}>
                                Add To Cart <ShoppingCart size={18} />
                            </button>
                            <button className="pd-qty-btn" style={{ border: '1px solid #ddd', borderRadius: '4px' }}>
                                <Heart size={18} />
                            </button>
                        </div>

                        <ul className="pd-meta-list">
                            <li><strong>Category:</strong> {product.category}</li>
                            <li><strong>Weight:</strong> {product.weight}</li>
                            <li><strong>SKU:</strong> GRO-{product.id.toString().padStart(4, '0')}</li>
                            <li><strong>Tags:</strong> Organic, Healthy, Fresh</li>
                        </ul>
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="related-products">
                        <h2 className="section-title">Related Products</h2>
                        <ProductGrid 
                            products={relatedProducts}
                            totalProducts={relatedProducts.length}
                            currentPage={1}
                            totalPages={1}
                            onPageChange={() => {}}
                            sortOption="latest"
                            onSortChange={() => {}}
                            startIndex={0}
                            endIndex={4}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetails;
