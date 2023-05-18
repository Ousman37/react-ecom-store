import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 0 0 20px 0;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 50%;
  object-fit: contain;
`;

const Rating = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

const ViewProductLink = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: #000;
  }
`;

const ProductCard = ({ product }) => {
  return (
    <CardContainer>
      <Image src={product.imageUrl} alt={product.title} />
      <Title>{product.title}</Title>
      <Description>{product.description}</Description>

      <Rating>Rating: {product.rating}</Rating>
      <ViewProductLink to={`/product/${product.id}`}>
        View Product
      </ViewProductLink>
    </CardContainer>
  );
};

export default ProductCard;
