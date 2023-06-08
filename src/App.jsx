import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CartProvider from './contexts/CartContext';
import HomePage from './pages/home';
import Product from './data/product';
import Cart from './pages/CartPage';
import CheckoutSuccess from './pages/CheckoutSuccess';
import Contact from './pages/contact';
import Layout from './components/ui/Layout';
import CartIcon from './components/ui/CartIcon';
import Login from './pages/login';
import Register from './pages/register';
import NotFoundPage from './pages/NotFoundPage';
import PaymentDetailsPage from './pages/PaymentDetailsPage';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartProvider>
      <CartIcon cartCount={cart.length} />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<HomePage handleAddToCart={handleAddToCart} />}
          />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout/payment-details"
            element={<PaymentDetailsPage />}
          />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
