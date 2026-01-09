import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingCart as CartIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart: React.FC = () => {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

    const handleQuantityChange = (id: number, currentQty: number, change: number) => {
        updateQuantity(id, currentQty + change);
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                     <div className="cart-breadcrumb">
                        <Link to="/">Home</Link> <span>/</span> <span className="current-page">Cart</span>
                    </div>
                    <div className="empty-cart">
                        <CartIcon size={64} />
                        <h2>Your cart is empty</h2>
                        <p>It looks like you haven't added any items to the cart yet.</p>
                        <Link to="/shop" className="continue-shopping-btn">Start Shopping</Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container">
                {/* Breadcrumb */}
                <div className="cart-breadcrumb">
                    <Link to="/">Home</Link> <span>/</span> <span className="current-page">Cart</span>
                </div>

                <div className="cart-container">
                    {/* Cart Items List */}
                    <div className="cart-items">
                        <div className="cart-header">
                            <div>Product</div>
                            <div>Price</div>
                            <div>Quantity</div>
                            <div style={{ textAlign: 'right' }}>Total</div>
                        </div>
                        
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-info">
                                    <img src={item.image} alt={item.name} className="item-image" />
                                    <div className="item-details">
                                        <h4>{item.name}</h4>
                                        <span className="item-weight">{item.weight}</span>
                                    </div>
                                </div>
                                <div className="item-price">
                                    ${item.price.toFixed(2)}
                                </div>
                                <div className="quantity-controls">
                                    <button 
                                        className="qty-btn"
                                        onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                                    >
                                        <Minus size={14} />
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button 
                                        className="qty-btn"
                                        onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                                    >
                                        <Plus size={14} />
                                    </button>
                                </div>
                                <div className="item-total-area">
                                    <span className="item-total">${(item.price * item.quantity).toFixed(2)}</span>
                                    <button 
                                        className="remove-btn"
                                        onClick={() => removeFromCart(item.id)}
                                        aria-label="Remove item"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cart Summary */}
                    <div className="cart-summary">
                        <h3 className="summary-title">Cart Totals</h3>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;