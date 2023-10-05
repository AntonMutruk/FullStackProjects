import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ProductData from './ProductData';
import '../styles/ProductPage.css';

const ProductsPage = ({ updateCartItems }) => {
  const products = ProductData();
  const [cartItems, setCartItems] = useState([]);
  const [isAnimated, setIsAnimated] = useState(false);

  const addToCart = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (isProductInCart) {
      alert('This item is already in the cart.');
      return;
    }

    const updatedCartItems = [...cartItems, product];
    setCartItems(updatedCartItems);
    updateCartItems(updatedCartItems);

    alert('Item added to the cart!');
  };

  const toggleAnimation = () => {
    setIsAnimated(!isAnimated);
  };

  return (
    <div className="product-page">
      <h1>Products</h1>
      <button onClick={toggleAnimation}>Toggle Animation</button>
      <div className={`product-data ${isAnimated ? 'animate' : ''}`}>
        {products.map((product) => (
          <CSSTransition
            key={product.id}
            in={isAnimated}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="product-card">
              <img
                src={`${process.env.PUBLIC_URL}/productsImage/${product.image}`}
                alt={product.title}
                className="product-image"
              />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">${product.price}</p>
              <button
                className="product-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </CSSTransition>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
