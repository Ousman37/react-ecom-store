import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const useCart = () => {
  const { cart, addToCart, removeFromCart, updateQuantity } =
    useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleUpdateQuantity = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
  };

  return {
    cartItems,
    calculateTotalPrice,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity,
  };
};

export default useCart;
