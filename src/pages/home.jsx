import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.noroff.dev/api/v1/online-shop')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch(error => console.log(error));
  }, []);

  const handleSearchInputChange = event => {
    const input = event.target.value;
    setSearchInput(input);
    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Wrapper>
      <SearchInput
        type='text'
        placeholder='Search for a product...'
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <ProductCardWrapper>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductCardWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 1rem;

  @media screen and (max-width: 812px) {
    /* Styles for screen size 412px - iPhone X, iPhone XS, iPhone 11 Pro, etc. */
    max-width: 600px;
    padding: 2.5rem;
  }

  @media screen and (max-width: 414px) {
    /* Styles for screen size 414px - iPhone 6, iPhone 7, iPhone 8, etc. */
    max-width: 400px;
    padding: 2.5rem;
  }

  @media screen and (max-width: 390px) {
    /* Styles for screen size 390px */
    max-width: 350px;
    padding: 2.5rem;
  }

  @media screen and (max-width: 375px) {
    /* Styles for screen size 375px - iPhone 6/7/8 Plus, iPhone X/XS/11 Pro Max, etc. */
    max-width: 300px;
    padding: 2.5rem;
  }

  @media screen and (max-width: 428px) {
    /* Styles for screen size 428px */
    max-width: 380px;
    padding: 0.5rem;
  }

  @media screen and (max-width: 800px) {
    /* Styles for screen size 800px */
    max-width: 700px;
    padding: 0.5rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 812px) {
    /* Styles for screen size 412px - iPhone X, iPhone XS, iPhone 11 Pro, etc. */
    width: 96%;
  }

  @media screen and (max-width: 414px) {
    /* Styles for screen size 414px - iPhone 6, iPhone 7, iPhone 8, etc. */
    width: 96%;
  }

  @media screen and (max-width: 390px) {
    /* Styles for screen size 390px */
    width: 90%;
  }

  @media screen and (max-width: 375px) {
    /* Styles for screen size 375px - iPhone 6/7/8 Plus, iPhone X/XS/11 Pro Max, etc. */
    width: 96%;
  }

  @media screen and (max-width: 428px) {
    /* Styles for screen size 428px */
    width: 96%;
  }

  @media screen and (max-width: 800px) {
    /* Styles for screen size 800px */
    width: 96%;
  }
`;

const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 812px) {
    /* Styles for screen size 412px - iPhone X, iPhone XS, iPhone 11 Pro, etc. */
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 414px) {
    /* Styles for screen size 414px - iPhone 6, iPhone 7, iPhone 8, etc. */
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 390px) {
    /* Styles for screen size 390px */
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 375px) {
    /* Styles for screen size 375px - iPhone 6/7/8 Plus, iPhone X/XS/11 Pro Max, etc. */
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 428px) {
    /* Styles for screen size 428px */
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (max-width: 800px) {
    /* Styles for screen size 800px */
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default HomePage;
