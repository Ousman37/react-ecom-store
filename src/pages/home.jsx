import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch('https://api.noroff.dev/api/v1/online-shop')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSearchInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="Search for a product..."
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <ProductCardWrapper>
        {filteredProducts.map((product) => (
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

  @media screen and (max-width: 768px) {
    /* Styles for screen size up to 768px */
    max-width: 90%;
    padding: 1.5rem;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 2px solid #ccc;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 768px) {
    /* Styles for screen size up to 768px */
    width: 89%;
  }
`;

const ProductCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media screen and (max-width: 768px) {
    /* Styles for screen size up to 768px */
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    /* Styles for screen size up to 480px */
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default HomePage;
