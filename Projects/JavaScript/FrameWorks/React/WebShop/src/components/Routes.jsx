import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsPage from './ProductsPage';
import CartPage from './CartPage';
import Slider from './Slider'; // Add this import statement

const AppRoutes = ({ updateCartItems, cartItems }) => {
  return (
    <Routes>
      <Route
        path="/products"
        element={<ProductsPage updateCartItems={updateCartItems} />}
      />
      <Route
        path="/cart"
        element={<CartPage cartItems={cartItems} updateCartItems={updateCartItems} />}
      />
      <Route path="/" element={<Slider />} />
    </Routes>
  );
};
export default AppRoutes;
