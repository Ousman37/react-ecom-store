import React from 'react';
import CartIcon from './CartIcon';
import ProductList from './ProductList';
import CheckoutButton from './CheckoutButton';

const ParentComponent = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 9.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 14.99 },
  ];

  return (
    <div>
      <CartIcon cartItems={cartItems} />
      <ProductList />
      <CheckoutButton />
    </div>
  );
};

export default ParentComponent;
