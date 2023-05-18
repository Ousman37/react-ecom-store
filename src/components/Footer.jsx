import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 2rem;
  background-color: #f1f1f1;
  padding: 2rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & h2 {
    margin-bottom: 1rem;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & ul li {
    margin-bottom: 0.5rem;
  }

  & ul li a {
    color: #333;
    text-decoration: none;
  }

  & ul li a:hover {
    text-decoration: underline;
  }

  & p {
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <h2>About Us</h2>
        <p>
          Be Unique is a platform that provides a unique shopping experience for
          fashion enthusiasts. Our mission is to offer high-quality and
          exclusive fashion items that are not easily found in other stores. We
          believe that everyone deserves to express themselves through their
          style, and our goal is to help our customers stand out and feel
          confident in their own skin.
        </p>
      </div>
      <div>
        <h2>Connect with Us</h2>
        <ul>
          <li>
            <a href='https://twitter.com'>Twitter</a>
          </li>
          <li>
            <a href='https://facebook.com'>Facebook</a>
          </li>
          <li>
            <a href='https://instagram.com'>Instagram</a>
          </li>
        </ul>
      </div>
      <div>
        <h2>Contact Us</h2>
        <p>0354 Hansman gate 7 B Oslo Norge</p>
        <p>Phone: 555-555-5555</p>
        <p>Email: info@example.com</p>
      </div>
    </StyledFooter>
  );
};

export default Footer;
