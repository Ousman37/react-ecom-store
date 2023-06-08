import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CartContext } from '../../contexts/CartContext';

const CartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 1px; /* Adjust the top value as needed */
  right: 10px;
  margin-top: 108px;

  @media screen and (max-width: 768px) {
    margin-top: 0;
    margin-right: 1rem;
    right: 88px;
  }
`;

const ItemCount = styled.span`
  margin-left: 14px;
  display: flex;
  font-size: 18px;
  background-color: #4a4a4a;
  color: #fff;
  padding: 2px 4px;
  border-radius: 144%;
  margin-top: 6px;
`;

const CartIcon = () => {
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartIconWrapper>
      <Link to="/cart">
        {totalItems > 0 && <ItemCount>{totalItems}</ItemCount>}
        <FiShoppingCart size={34} />
      </Link>
    </CartIconWrapper>
  );
};

export default CartIcon;
