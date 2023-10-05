import React, { useState, useEffect } from 'react';
import '../styles/CartPage.css';

const CartPage = ({ cartItems, updateCartItems }) => {
  const [items, setItems] = useState([]);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);

  useEffect(() => {
    setItems(cartItems);
    updateTotalItemsPrice(cartItems);
  }, [cartItems]);

  const updateTotalItemsPrice = (items) => {
    const totalPrice = items.reduce((total, item) => {
      if (item.quantity > 0) {
        return total + item.price * item.quantity;
      }
      return total;
    }, 0);
    setTotalItemsPrice(totalPrice);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0 || isNaN(newQuantity)) {
      newQuantity = 1; // Set quantity to 1 if it's negative, zero, or NaN
    } else {
      newQuantity = Math.floor(newQuantity); // Round down to the nearest integer
    }

    const updatedCartItems = items.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setItems(updatedCartItems);
    updateCartItems(updatedCartItems);
    updateTotalItemsPrice(updatedCartItems); // Update the total price
  };

  const handlePurchase = () => {
  // Handle the purchase logic here
  // You can display a success message or redirect to a confirmation page
  alert('Thank you for your purchase!');
  window.location.href = '/'; // Redirect to the main page
};

  const handleClearCart = () => {
    const emptyCart = [];
    setItems(emptyCart);
    updateCartItems(emptyCart);
    setTotalItemsPrice(0);
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map((item) => {
            const totalPrice = item.price * item.quantity;
            const formattedTotalPrice = isNaN(totalPrice) ? `$${item.price}` : `$${totalPrice}`;

            return (
              <div key={item.id} className="cart-item">
                <img
                  src={`${process.env.PUBLIC_URL}/productsImage/${item.image}`}
                  alt={item.title}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <div className="quantity-container">
                    <p className="quantity-label">Quantity:</p>
                    <div className="quantity-box">
                      <button
                        className="quantity-button"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        min={1}
                        disabled
                        readOnly
                        className="quantity-input"
                      />
                      <button
                        className="quantity-button"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p>Total Price: {formattedTotalPrice}</p>
                </div>
              </div>
            );
          })}
          <div className="total-price-container">
            <p>Total Items Price: ${totalItemsPrice.toFixed(2)}</p>
            <button className="clear-cart-button" onClick={handleClearCart}>
              Clear Cart
            </button>
            <button className="purchase-button" onClick={handlePurchase}>
              Submit Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
