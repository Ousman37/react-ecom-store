import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../layout/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://v2.api.noroff.dev/online-shop')
      .then((response) => {
        if (!response.ok) throw new Error('Failed to load products');
        return response.json();
      })
      .then(({ data }) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <Wrapper>
      <SearchInput
        type="text"
        placeholder="Search for a product..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      {loading && <StatusMessage>Loading products...</StatusMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
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
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StatusMessage = styled.p`
  text-align: center;
  color: #888;
  margin: 2rem 0;
`;

const ErrorMessage = styled.p`
  text-align: center;
  color: #dc3545;
  margin: 2rem 0;
`;

export default HomePage;
