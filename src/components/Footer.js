import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">Shop<span>Wave</span></div>
            <p className="footer__brand-tagline">
              Curated products for the modern lifestyle. Quality, style, and value — delivered.
            </p>
          </div>

          <div>
            <div className="footer__col-title">Navigate</div>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Categories</div>
            <ul className="footer__links">
              <li><Link to="/products">Electronics</Link></li>
              <li><Link to="/products">Jewelry</Link></li>
              <li><Link to="/products">Men's</Link></li>
              <li><Link to="/products">Women's</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__col-title">Support</div>
            <ul className="footer__links">
              <li><Link to="/contact">Help Center</Link></li>
              <li><Link to="/contact">Returns</Link></li>
              <li><Link to="/contact">Shipping Info</Link></li>
              <li><Link to="/contact">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} ShopWave. All rights reserved.</span>
          <div className="footer__social">
            <a href="#!" aria-label="Twitter">𝕏</a>
            <a href="#!" aria-label="Instagram">📸</a>
            <a href="#!" aria-label="Facebook">f</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
