import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 1rem;

  /* add padding for screen width >= 992px */
  @media screen and (min-width: 992px) {
    padding-right: 1rem !important;
    padding-left: 1rem !important;
  }

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
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li {
    list-style: none;
    margin-right: 1rem;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;

  &:hover {
    color: #aaa;
  }
`;

const NavActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
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
`;

const CartIcon = styled.i`
  font-size: 1.5rem;
  margin-right: 1rem;
`;

const MobileMenuIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
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
  align-self: flex-end;
  cursor: pointer;
`;

export {
  StyledNavbar,
  LogoContainer,
  NavLinksList,
  NavLink,
  NavActions,
  NavButton,
  CartIcon,
  MobileMenuIcon,
  MobileMenu,
  MobileMenuLinks,
  CloseIcon,
};
