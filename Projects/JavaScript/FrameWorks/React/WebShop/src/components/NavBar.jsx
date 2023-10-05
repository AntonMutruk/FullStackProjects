// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../logo.png';
import '../styles/Navbar.css';
const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
      <Link to="/cart" className="navbar-cart-icon">
        <FaShoppingCart />
        {cartItems.length > 0 && (
          <span className="cart-icon-badge">{cartItems.length}</span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
