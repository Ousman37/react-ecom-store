import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 64vh;
  padding: 4rem;
  box-sizing: border-box;
  justify-content: space-between;

  @media (max-width: 768px) {
    padding: 2rem;
  }
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
  padding: 1rem;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
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

const QuantityButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 0.25rem;
  }
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b02a37;
  }

  @media (max-width: 768px) {
    padding: 0.25rem;
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

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ContinueShoppingButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 0.75rem 1rem;
  margin-right: 0.5rem;
  text-decoration: none;
  text-align: center;
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
  margin-left: 0.5rem;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3c9039;
  }
`;

const CartPage = () => {
  const { cartItems, handleRemoveFromCart, handleUpdateQuantity } = useCart();
  const navigate = useNavigate();

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  return (
    <CartPageContainer>
      <CartList>
        {cartItems.length === 0 ? (
          <EmptyCart>Your cart is empty.</EmptyCart>
        ) : (
          cartItems.map((item) => (
            <CartItem key={item.id}>
              <CartItemDetails>
                <CartItemImage src={item.imageUrl} alt={item.name} />
                <div>
                  <CartItemName>{item.name}</CartItemName>
                  <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
                </div>
              </CartItemDetails>
              <CartItemActions>
                <QuantityButton
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity + 1)
                  }
                >
                  +
                </QuantityButton>
                <QuantityButton
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity - 1)
                  }
                >
                  -
                </QuantityButton>
                <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>
                  Remove
                </RemoveButton>
              </CartItemActions>
            </CartItem>
          ))
        )}
      </CartList>
      {cartItems.length > 0 && (
        <>
          <CartTotal>Total: ${calculateTotalPrice().toFixed(2)}</CartTotal>
          <ButtonGroup>
            <ContinueShoppingButton to="/">
              Continue Shopping
            </ContinueShoppingButton>
            <CheckoutButton
              to="/checkout/payment-details"
              onClick={() => navigate('/checkout/payment-details')}
            >
              Proceed to Checkout
            </CheckoutButton>
          </ButtonGroup>
        </>
      )}
    </CartPageContainer>
  );
};

export default CartPage;
