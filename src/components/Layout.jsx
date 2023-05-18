import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      <main style={{ marginBottom: '65px' }}>{children}</main>
      {/*  */}
      <Footer />
    </div>
  );
};

export default Layout;
