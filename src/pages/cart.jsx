import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  useEffect(() => {
    calculateTotalPrice();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  // Calculate the total price
  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.price * item.quantity;
    });
    return total;
  };

  // Handle removing an item from the cart
  const handleRemoveFromCart = itemId => {
    removeFromCart(itemId);
  };

  // Handle increasing the quantity of an item
  const handleAddQuantity = (itemId, quantity) => {
    updateQuantity(itemId, quantity + 1);
  };

  // Styled components
  const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 2rem;
    box-sizing: border-box;
    justify-content: space-between; // Added this line
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

  const CartItemActions = styled.div`
    display: flex;
    align-items: center;
  `;

  const QuantityInput = styled.input`
    width: 40px;
    padding: 0.25rem;
    text-align: center;
  `;

  const AddButton = styled.button`
    background-color: #4caf50;
    color: #ffffff;
    border: none;
    padding: 0.25rem 0.5rem;
    margin-left: 1rem;
    cursor: pointer;
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
  `;
  const ContinueShoppingButton = styled(Link)`
    background-color: #0088cc;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border: none;
    margin-top: 1rem;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  `;

  const CheckoutButton = styled(Link)`
    background-color: #4caf50;
    color: #ffffff;
    padding: 0.5rem 1rem;
    border: none;
    margin-top: 1rem;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
  `;

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
                <CartItemActions>
                  <div>
                    Quantity:
                    <QuantityInput
                      type='number'
                      value={item.quantity}
                      min={1}
                      onChange={e =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                    />
                    <AddButton
                      onClick={() => handleAddQuantity(item.id, item.quantity)}>
                      Add
                    </AddButton>
                  </div>
                  <RemoveButton onClick={() => handleRemoveFromCart(item.id)}>
                    Remove
                  </RemoveButton>
                </CartItemActions>
              </CartItem>
            ))}
          </CartList>

          {/* Display the total price */}
          <CartTotal>Total Price: ${totalPrice.toFixed(2)}</CartTotal>

          {/* Button to continue shopping */}
          <ContinueShoppingButton to='/'>
            Continue Shopping
          </ContinueShoppingButton>

          {/* Button to proceed to checkout */}
          <CheckoutButton to='/checkout'>Proceed to Checkout</CheckoutButton>
        </>
      ) : (
        <EmptyCart>Your cart is empty</EmptyCart>
      )}
    </CartContainer>
  );
};

export default CartPage;
