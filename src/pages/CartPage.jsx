import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 64vh;
  padding: 4rem;
  box-sizing: border-box;
  justify-content: space-between;
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

const CartItemActions = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 0.5rem;
  }
`;

const QuantityInput = styled.input`
  width: 40px;
  padding: 0.25rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 30px;
  }
`;

const ContinueShoppingButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1rem;
  margin: 0 0.5rem;
  text-decoration: none;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CheckoutButton = styled(Link)`
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  padding: 0.75rem 1rem;
  margin: 0 0.5rem;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3c9039;
  }
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

const RemoveButton = styled.button`
  background-color: #ff0000;
  color: #fff;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }

  @media (max-width: 768px) {
    padding: 0.25rem;
  }
`;

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  // Calculate the total price
  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // Handle removing an item from the cart
  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  // Handle increasing the quantity of an item
  const handleAddQuantity = (itemId, quantity) => {
    updateQuantity(itemId, quantity + 1);
  };

  return (
    <CartPageContainer>
      <h2>Cart Page</h2>

      {cart.length > 0 ? (
        <>
          <CartList>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <CartItemDetails>
                  <CartItemImage src={item.imageUrl} alt={item.name} />
                  <div>
                    <CartItemName>{item.name}</CartItemName>
                    <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
                  </div>
                </CartItemDetails>

                <CartItemActions>
                  <QuantityInput
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                  />
                  <button
                    onClick={() => handleAddQuantity(item.id, item.quantity)}
                  >
                    +
                  </button>
                  <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </RemoveButton>
                </CartItemActions>
              </CartItem>
            ))}
          </CartList>

          <CartTotal>
            Total Price: ${calculateTotalPrice().toFixed(2)}
          </CartTotal>

          <ContinueShoppingButton to="/">
            Continue Shopping
          </ContinueShoppingButton>

          <CheckoutButton
            to="/checkout/payment-details"
            onClick={() => navigate('/checkout/payment-details')}
          >
            Proceed to Checkout
          </CheckoutButton>
        </>
      ) : (
        <EmptyCart>Your cart is empty</EmptyCart>
      )}
    </CartPageContainer>
  );
};

export default CartPage;
