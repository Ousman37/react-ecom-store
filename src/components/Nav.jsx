import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 0;

  & > span:first-child {
    color: #ff0000; /* red */
  }

  & > span:last-child {
    color: #0000ff; /* blue */
  }
`;

const NavLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLinkItem = styled.li``;

const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: #000;
  font-weight: bold;
  margin-left: 1rem;

  &:hover {
    color: #aaa;
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
`;

const NavButton = styled(NavLink)`
  background-color: #ff4d4d;
  color: #fff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-left: 1rem;

  &:nth-last-of-type(2) {
    background-color: #0077be;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const CartIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  background-color: #fff;
  position: absolute;
  top: 4rem;
  right: 0;
  width: 100%;
  padding: 1rem;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const MobileMenuLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  li {
    list-style: none;
    margin: 0.5rem 0;
  }
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Nav = ({ isOpen }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <StyledNavbar>
      <LogoContainer>
        <span>Be</span> <span>Unique</span>
      </LogoContainer>

      {!isMobileView && (
        <NavLinksList>
          <NavLinkItem>
            <NavLinkStyled exact='true' to='/'>
              Home
            </NavLinkStyled>
          </NavLinkItem>
          <NavLinkStyled exact='true' to='/contact'>
            Contact
          </NavLinkStyled>

          <NavLinkStyled exact='true' to='/cart'>
            Cart Page
          </NavLinkStyled>
        </NavLinksList>
      )}

      <NavActions>
        <CartIcon className='fas fa-shopping-cart' />
        <NavButton to='/login'>Login</NavButton>
        <NavButton to='/register'>Register</NavButton>
        {isMobileView && (
          <MobileMenuIcon onClick={handleMobileMenuClick}>
            {isMobileMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </MobileMenuIcon>
        )}
      </NavActions>

      {isMobileView && (
        <MobileMenu isOpen={isMobileMenuOpen}>
          <CloseIcon onClick={handleMobileMenuClose}>
            <RiCloseLine />
          </CloseIcon>
          <MobileMenuLinks>
            <li>
              <NavLinkStyled to='/' onClick={handleMobileMenuClose}>
                Home
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to='/contact' onClick={handleMobileMenuClose}>
                Contact
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to='/cart' onClick={handleMobileMenuClose}>
                Cart Page
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to='/login' onClick={handleMobileMenuClose}>
                Login
              </NavLinkStyled>
            </li>
            <li>
              <NavLinkStyled to='/register' onClick={handleMobileMenuClose}>
                Register
              </NavLinkStyled>
            </li>
          </MobileMenuLinks>
        </MobileMenu>
      )}
    </StyledNavbar>
  );
};

export default Nav;
