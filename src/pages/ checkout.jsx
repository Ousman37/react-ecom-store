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

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleAddressChange = e => {
    setAddress(e.target.value);
  };

  const handleSubmit = e => {
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
              type='text'
              placeholder='Enter your name'
              value={name}
              onChange={handleNameChange}
              required
            />
            <CheckoutInput
              type='text'
              placeholder='Enter your address'
              value={address}
              onChange={handleAddressChange}
              required
            />
            <CheckoutButton type='submit'>Submit Order</CheckoutButton>
          </CheckoutForm>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <p>Items in Cart: {cart.length}</p>
        </>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutPage;
// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { CartContext } from '../contexts/CartContext';
// import styled from 'styled-components';

// const CheckoutContainer = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   @media screen and (min-width: 768px) {
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: flex-start;
//   }
// `;

// const CheckoutText = styled.p`
//   font-size: 1.2rem;
//   margin-bottom: 20px;

//   @media screen and (min-width: 768px) {
//     margin-bottom: 0;
//   }
// `;

// const CheckoutButton = styled.button`
//   padding: 10px 20px;
//   background-color: #333;
//   color: #fff;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 1.2rem;

//   &:hover {
//     background-color: #000;
//   }
// `;

// const EmptyCartText = styled.p`
//   font-size: 1.2rem;
//   margin-top: 20px;
// `;

// const GoBackLink = styled(Link)`
//   margin-top: 20px;
//   font-size: 1.2rem;
//   color: #333;
//   text-decoration: underline;

//   &:hover {
//     color: #000;
//   }
// `;

// const CheckoutPage = () => {
//   const { cartItems, clearCart } = useContext(CartContext);

//   const handleCheckout = () => {
//     // check if there are any items in the cart
//     if (cartItems.length === 0) {
//       alert('Your cart is empty.');
//       return;
//     }

//     // calculate the total price of the items in the cart
//     const totalPrice = cartItems.reduce(
//       (acc, item) => acc + item.quantity * item.price,
//       0
//     );

//     // perform payment processing here, e.g. using a payment processing API
//     // eslint-disable-next-line no-undef
//     const paymentResult = processPayment(totalPrice);

//     // check if the payment was successful
//     if (!paymentResult.success) {
//       alert('Payment failed. Please try again.');
//       return;
//     }

//     // perform order finalization logic here, e.g. communicating with a server
//     // eslint-disable-next-line no-undef
//     const orderResult = finalizeOrder(cartItems);

//     // check if the order was successfully finalized
//     if (!orderResult.success) {
//       alert('Order failed. Please try again.');
//       return;
//     }

//     // clear the cart
//     clearCart();

//     // display a success message
//     alert('Order successful! Thank you for your purchase.');
//   };

//   return (
//     <CheckoutContainer>
//       <CheckoutText>
//         {cartItems.length > 0
//           ? `You have ${cartItems.length} items in your cart.`
//           : `Your cart is empty.`}
//       </CheckoutText>
//       {cartItems.length > 0 && (
//         <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
//       )}
//       {cartItems.length === 0 && (
//         <EmptyCartText>Your cart is empty.</EmptyCartText>
//       )}
//       <GoBackLink to='/'>Go back to store</GoBackLink>
//     </CheckoutContainer>
//   );
// };

// export default CheckoutPage;
