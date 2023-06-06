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
    <CartProvider value={{ cart, handleAddToCart }}>
      <CartIcon cartCount={cart.length} />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout/payment-details"
            element={<PaymentDetailsPage />}
          />{' '}
          {/* Add the PaymentDetailsPage route */}
          <Route path="/checkout/success" element={<CheckoutSuccess />} />{' '}
          {/* Add the CheckoutSuccess route */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
        </Routes>
      </Layout>
    </CartProvider>
  );
}

export default App;
// import React, { useState } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import CartProvider from './contexts/CartContext';
// import HomePage from './pages/home';
// import Product from './data/product';
// import Cart from './pages/CartPage.jsx';
// import Checkout from './pages/CheckoutSuccess';
// import Contact from './pages/contact';
// import Layout from './components/ui/Layout';
// import CartIcon from './components/ui/CartIcon';
// import Login from './pages/login';
// import Register from './pages/register';
// import NotFoundPage from './pages/NotFoundPage';
// import PaymentDetailsPage from './pages/PaymentDetailsPage';

// function App() {
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   return (
//     <CartProvider value={{ cart, handleAddToCart }}>
//       <CartIcon cartCount={cart.length} />
//       <Layout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/product/:id" element={<Product />} />
//           <Route path="/CartPage" element={<Cart />} />
//           <Route path="/checkout" element={<Checkout />} />
//           <Route
//             path="/checkout/payment-details"
//             element={<PaymentDetailsPage />}
//           />{' '}
//           {/* Add the PaymentDetailsPage route */}
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
//         </Routes>
//       </Layout>
//     </CartProvider>
//   );
// }

// export default App;
