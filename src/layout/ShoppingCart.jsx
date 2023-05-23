import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const CartList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
`;

const CartItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
`;

const CartItemImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;

const CartItemDetails = styled.div`
  display: flex;
  align-items: center;
`;

const CartItemName = styled.span`
  font-weight: bold;
`;

const CartItemPrice = styled.span`
  color: #888;
`;

const CartTotal = styled.p`
  font-weight: bold;
  margin-top: 1rem;
`;

const EmptyCart = styled.p`
  font-style: italic;
  color: #888;
  text-align: center;
  margin-top: 2rem;
`;

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  // Handle removing an item from the cart
  const handleRemoveFromCart = item => {
    removeFromCart(item);
  };

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <CartContainer>
      <h2>Cart Page</h2>

      {cart.length > 0 ? (
        <>
          {/* Render the list of cart items */}
          <CartList>
            {cart.map(item => (
              <CartItem key={item.id}>
                <CartItemDetails>
                  <CartItemImage src={item.imageUrl} alt={item.name} />
                  <div>
                    <CartItemName>{item.name}</CartItemName>
                    <CartItemPrice>${item.price * item.quantity}</CartItemPrice>
                  </div>
                </CartItemDetails>
                <div>
                  Quantity: {item.quantity}
                  <button onClick={() => handleRemoveFromCart(item)}>
                    Remove
                  </button>
                </div>
              </CartItem>
            ))}
          </CartList>

          {/* Display the total price */}
          <CartTotal>Total Price: ${totalPrice.toFixed(2)}</CartTotal>

          {/* Add checkout and other cart-related components */}
        </>
      ) : (
        <EmptyCart>Your cart is empty</EmptyCart>
      )}
    </CartContainer>
  );
};

export default CartPage;
