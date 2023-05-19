import React from 'react';
import CartIcon from './CartIcon';
import Nav from '../Nav';

const Header = () => {
  // Set the value of isMobileMenuOpen based on your logic
  const isMobileMenuOpen = true;

  return (
    <header>
      {/* Pass the isMobileMenuOpen prop to the Nav component */}
      <Nav isMobileMenuOpen={isMobileMenuOpen} />

      <CartIcon />
    </header>
  );
};

export default Header;
// import React from 'react';
// import CartIcon from './CartIcon';
// import Nav from './Nav';

// const Header = () => {
//   return (
//     <header>
//       <Nav />
//       <CartIcon />
//     </header>
//   );
// };

// export default Header;
