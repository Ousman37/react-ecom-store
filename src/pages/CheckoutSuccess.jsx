import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';

const Container = styled.div`
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

const CheckoutSuccess = () => {
  const { cart, clearCart } = useContext(CartContext);

  const handleConfirmOrder = async () => {
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
    <Container>
      <Title>Checkout Success</Title>
      <Message>
        Your order has been successfully processed. Thank you for your purchase!
      </Message>
      <Button onClick={handleConfirmOrder}>Confirm Order</Button>
      <StyledLink to='/'>Go back to store</StyledLink>
    </Container>
  );
};

export default CheckoutSuccess;
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';
// import styled from 'styled-components';

// const Container = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const Message = styled.p`
//   font-size: 16px;
//   margin-bottom: 20px;
// `;

// const Button = styled.button`
//   padding: 10px 20px;
//   background-color: #333;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #000;
//   }
// `;

// const StyledLink = styled(Link)`
//   display: block;
//   margin-top: 20px;
//   font-size: 16px;
//   color: #333;
//   text-decoration: underline;

//   &:hover {
//     color: #000;
//   }
// `;

// const CheckoutSuccess = () => {
//   const { cart, clearCart } = useContext(CartContext);

//   const handleConfirmOrder = async () => {
//     try {
//       // Send cart data to server to create an order
//       const response = await fetch('/api/orders', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(cart),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to create order');
//       }

//       // Display a success message to the user
//       alert('Order placed successfully!');

//       // Clear the cart
//       clearCart();
//     } catch (error) {
//       console.error(error);

//       // Display an error message to the user
//       alert('Failed to place order. Please try again.');
//     }
//   };

//   return (
//     <Container>
//       <Title>Checkout Success</Title>
//       <Message>
//         Your order has been successfully processed. Thank you for your purchase!
//       </Message>
//       <Button onClick={handleConfirmOrder}>Confirm Order</Button>
//       <StyledLink to='/'>Go back to store</StyledLink>
//     </Container>
//   );
// };

// export default CheckoutSuccess;
