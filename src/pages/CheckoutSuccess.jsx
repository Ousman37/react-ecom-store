import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Message = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 10px;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #a5d6a7;
    cursor: not-allowed;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  font-size: 16px;
  color: #333;
  text-decoration: underline;

  &:hover {
    color: #000;
  }
`;

const InlineMessage = styled.p`
  font-size: 14px;
  color: ${({ error }) => (error ? '#dc3545' : '#4caf50')};
  margin-top: 0.5rem;
`;

const CheckoutSuccess = () => {
  const { clearCart } = useContext(CartContext);
  const [confirmed, setConfirmed] = useState(false);
  const [orderError, setOrderError] = useState(null);

  const handleConfirmOrder = () => {
    try {
      clearCart();
      setConfirmed(true);
      setOrderError(null);
    } catch (error) {
      setOrderError('Something went wrong. Please try again.');
    }
  };

  return (
    <Container>
      <Title>Checkout Success</Title>
      <Message>
        Your order has been successfully processed. Thank you for your purchase!
      </Message>
      {!confirmed ? (
        <>
          <Button onClick={handleConfirmOrder}>Confirm Order</Button>
          {orderError && <InlineMessage error>{orderError}</InlineMessage>}
        </>
      ) : (
        <InlineMessage>Order confirmed! Your cart has been cleared.</InlineMessage>
      )}
      <StyledLink to="/">Go back to store</StyledLink>
    </Container>
  );
};

export default CheckoutSuccess;
