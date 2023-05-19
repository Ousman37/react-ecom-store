import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartContext';

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation

    // Clear the cart and mark as submitted
    clearCart();
    setIsSubmitted(true);
  };

  const handleContinueShopping = () => {
    history.push('/');
  };

  const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  `;

  const CheckoutForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin-bottom: 1rem;
  `;

  const CheckoutInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  `;

  const CheckoutButton = styled.button`
    background-color: #4caf50;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border: none;
    margin-top: 1rem;
    cursor: pointer;
  `;

  const CheckoutSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  `;

  const SuccessMessage = styled.p`
    font-weight: bold;
    margin-bottom: 1rem;
  `;

  const ConfirmOrderButton = styled.button`
    background-color: #4caf50;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  `;

  const GoBackButton = styled.button`
    background-color: #3f51b5;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border: none;
    margin-top: 1rem;
    cursor: pointer;
  `;

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CheckoutContainer>
      {isSubmitted ? (
        <CheckoutSuccessContainer>
          <SuccessMessage>
            Your order has been successfully processed. Thank you for your
            purchase!
          </SuccessMessage>
          <ConfirmOrderButton onClick={handleContinueShopping}>
            Confirm Order
          </ConfirmOrderButton>
          <GoBackButton onClick={handleContinueShopping}>
            Go back to store
          </GoBackButton>
        </CheckoutSuccessContainer>
      ) : (
        <>
          <h2>Checkout Page</h2>
          <CheckoutForm onSubmit={handleSubmit}>
            <CheckoutInput
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
              required
            />
            <CheckoutInput
              type="text"
              placeholder="Enter your address"
              value={address}
              onChange={handleAddressChange}
              required
            />
            <CheckoutButton type="submit">Submit Order</CheckoutButton>
          </CheckoutForm>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <p>Items in Cart: {cart.length}</p>
        </>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutPage;
