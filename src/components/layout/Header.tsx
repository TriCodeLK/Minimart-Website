import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, MapPin, Phone, Clock, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Header.css';

const Header: React.FC = () => {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-contact-info">
            <span><MapPin size={16} /> No 3, Kings Rd, Kollupitiya, Sri Lanka</span>
            <span><Clock size={16} /> Everyday from 10:00 AM to 08:00 PM</span>
            <span><Phone size={16} /> +94-724-123-456</span>
          </div>
          <div className="header-settings">
            {/* Currency and Language selectors can go here */}
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <Link to="/" className="logo">
            <ShoppingBag size={32} /> Grocer
          </Link>

          <div className="search-bar">
            <input type="text" placeholder="Search here..." />
            <button className="search-btn">
              <Search size={20} />
            </button>
          </div>

          <div className="header-actions">
            <div className="action-item">
              <User size={24} />
              <span>Login</span>
            </div>
            <Link to="/cart" className="action-item cart-action" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="cart-icon-wrapper">
                <ShoppingCart size={24} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
              </div>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>

      <nav className="nav-bar">
        <div className="container">
          <ul>
            <li><Link to="/" className="nav-link active">Home</Link></li>
            <li><Link to="/shop" className="nav-link">Shop</Link></li>
            <li><Link to="/category" className="nav-link">Category</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
