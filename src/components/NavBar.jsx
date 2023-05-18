import React, { useState } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import styled from 'styled-components';

const NavBarWrapper = styled.nav`
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

const MenuIcon = styled(RiMenuLine)`
  font-size: 2rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CloseIcon = styled(RiCloseLine)`
  font-size: 2rem;
  cursor: pointer;
`;
const Logo = styled.div`
  font-size: 1.5rem;
  margin-left: 1rem;
`;
const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ show }) =>
    show
      ? 'center'
      : 'flex-end'}; /* Center align items when menu is open, align to the right when closed */
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: ${({ show }) => (show ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center; /* Center align items on small screens */
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const MenuItem = styled.a`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
  }
`;
const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <NavBarWrapper>
      <Logo>Logo</Logo>
      <MenuItems show={showMobileMenu}>
        <MenuItem href='/' onClick={toggleMobileMenu}>
          Home
        </MenuItem>
        <MenuItem href='/contact' onClick={toggleMobileMenu}>
          Contact
        </MenuItem>
        <MenuItem href='/about' onClick={toggleMobileMenu}>
          About
        </MenuItem>
        <MenuItem href='/functionality' onClick={toggleMobileMenu}>
          Functionality
        </MenuItem>
      </MenuItems>
      {showMobileMenu ? (
        <CloseIcon onClick={toggleMobileMenu} />
      ) : (
        <MenuIcon onClick={toggleMobileMenu} />
      )}
    </NavBarWrapper>
  );
};

export default NavBar;
