import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CheckoutButton = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      // Send cart data to server to create an order
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      // Display a success message to the user
      alert('Order placed successfully!');

      // Clear the cart
      clearCart();
    } catch (error) {
      console.error(error);

      // Display an error message to the user
      alert('Failed to place order. Please try again.');
    }
  };

  return (
    <button onClick={handleCheckout}>Checkout ({cart.length} items)</button>
  );
};

export default CheckoutButton;
