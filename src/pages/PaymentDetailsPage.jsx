import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin: auto;
  max-width: 600px;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  margin-bottom: 2rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 100%;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 20px;
  border-radius: 0.25rem;
  border: none;
  margin-top: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const PaymentDetailsPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/checkout/success');
  };

  return (
    <Container>
      <Title>Payment Details</Title>
      <Form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="nameOnCard">Name on Card:</Label>
          <Input
            type="text"
            id="nameOnCard"
            placeholder="Enter the name on your card"
            required
          />
        </div>
        <div>
          <Label htmlFor="cardNumber">Card Number:</Label>
          <Input
            type="text"
            id="cardNumber"
            placeholder="Enter your card number"
            required
          />
        </div>
        <div>
          <Label htmlFor="expiryDate">Expiry Date:</Label>
          <Input type="text" id="expiryDate" placeholder="MM/YY" required />
        </div>
        <div>
          <Label htmlFor="cvv">CVV:</Label>
          <Input type="text" id="cvv" placeholder="Enter CVV" required />
        </div>
        <div>
          <Label htmlFor="address">Address:</Label>
          <Input
            type="text"
            id="address"
            placeholder="Enter your address"
            required
          />
        </div>
        <div>
          <Label htmlFor="city">City:</Label>
          <Input type="text" id="city" placeholder="Enter your city" required />
        </div>
        <div>
          <Label htmlFor="postalCode">Postal Code:</Label>
          <Input
            type="text"
            id="postalCode"
            placeholder="Enter your postal code"
            required
          />
        </div>
        <Button type="submit">Pay</Button>
      </Form>
    </Container>
  );
};

export default PaymentDetailsPage;
