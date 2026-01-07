import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Grocer</h3>
            <p>Fresh groceries, quick delivery, unbeatable prices - shop Grocer, your trusted marketplace!</p>
            <div className="social-links">
              <span className="social-icon"><Facebook size={20} /></span>
              <span className="social-icon"><Twitter size={20} /></span>
              <span className="social-icon"><Instagram size={20} /></span>
              <span className="social-icon"><Linkedin size={20} /></span>
            </div>
          </div>

          <div className="footer-section">
            <h3>Accounts</h3>
            <ul className="footer-links">
              <li><a href="#">Wish list</a></li>
              <li><a href="#">Cart</a></li>
              <li><a href="#">Track Order</a></li>
              <li><a href="#">Shipping Details</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Useful Links</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Hot Deals</a></li>
              <li><a href="#">Promotions</a></li>
              <li><a href="#">New products</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <div className="footer-contact">
              <p><MapPin size={18} /> No 3, Kings Rd, Kollupitiya, Sri Lanka</p>
              <p><Phone size={18} /> +94-724-123-456</p>
              <p><Mail size={18} /> support@grocer.com</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Grocer. All rights reserved.</p>
          <div className="payment-methods">
            {/* Payment Icons */}
            <span>VISA</span>
            <span>MasterCard</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
