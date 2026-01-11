import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout: React.FC = () => {
    const { cartItems: cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zip: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send data to a backend
        console.log('Order Placed:', { ...formData, cart, total: cartTotal });
        
        // Clear cart and redirect to success page (or home for now)
        clearCart();
        alert('Order placed successfully!');
        navigate('/');
    };

    if (cart.length === 0) {
        return (
            <div className="checkout-page">
                <div className="container">
                    <div className="empty-cart-message">
                        <h2>Your cart is empty</h2>
                        <p>Add some products to proceed to checkout.</p>
                        <Link to="/shop" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
                            Return to Shop
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="checkout-page">
            <div className="container">
                <form className="checkout-container" onSubmit={handleSubmit}>
                    {/* Billing Details */}
                    <div className="billing-section">
                        <h2 className="checkout-title">Billing Details</h2>
                        
                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">First Name *</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="firstName" 
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Last Name *</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="lastName" 
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Email Address *</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email" 
                                value={formData.email}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Phone Number *</label>
                            <input 
                                type="tel" 
                                className="form-control" 
                                name="phone" 
                                value={formData.phone}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Address *</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="address" 
                                value={formData.address}
                                onChange={handleInputChange}
                                required 
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label className="form-label">City *</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="city" 
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">ZIP Code *</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="zip" 
                                    value={formData.zip}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="order-summary-section">
                        <h2 className="checkout-title">Your Order</h2>
                        
                        <div className="order-items-list">
                            {cart.map(item => (
                                <div key={item.id} className="order-item">
                                    <div className="order-item-info">
                                        <img src={item.image} alt={item.name} />
                                        <div>
                                            <span className="order-item-name">{item.name}</span>
                                            <span className="order-item-qty">Qty: {item.quantity}</span>
                                        </div>
                                    </div>
                                    <span className="order-item-total">${(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        <div className="order-total-row">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="order-total-row">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                        <div className="order-total-row final">
                            <span>Total</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>

                        {/* Payment Methods */}
                        <div className="payment-methods">
                            <label className="payment-option">
                                <input type="radio" name="payment" defaultChecked />
                                <span>Cash on Delivery</span>
                            </label>
                            <label className="payment-option">
                                <input type="radio" name="payment" />
                                <span>Credit / Debit Card</span>
                            </label>
                            <label className="payment-option">
                                <input type="radio" name="payment" />
                                <span>Paypal</span>
                            </label>
                        </div>

                        <button type="submit" className="place-order-btn">Place Order</button>
                        <Link to="/cart" style={{ display: 'block', textAlign: 'center', marginTop: '15px', color: '#999', textDecoration: 'none' }}>
                            Back to Cart
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;