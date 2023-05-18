import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const ProductImage = styled.img`
  width: 400px;
  height: auto;
`;

const ProductHeading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  margin-bottom: 10px;
`;

const AddToCartButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #000;
  }
`;

const StarContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const StarIcon = styled(FaStar)`
  color: #f8ce0b;
  margin-right: 2px;
`;

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.log(error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart(product); // Add the product to the cart
    console.log('Product added to cart:', product);
  };

  const calculateDiscount = () => {
    console.log('Product price:', product.price);
    console.log('Discounted price:', product.discountedPrice);

    if (product.discountedPrice && product.price) {
      const discount = product.price - product.discountedPrice;
      console.log('Discount:', discount);
      const discountPercentage = Math.round((discount / product.price) * 100);
      console.log('Discount percentage:', discountPercentage);
      return discountPercentage;
    }

    return 0;
  };

  const renderStarRatings = rating => {
    const starCount = 5;
    const fullStar = Math.floor(rating);
    const halfStar = rating - fullStar >= 0.5 ? 1 : 0;
    const emptyStar = starCount - fullStar - halfStar;

    const stars = [];
    for (let i = 0; i < fullStar; i++) {
      stars.push(<StarIcon key={`full-${i}`} />);
    }
    if (halfStar) {
      stars.push(<StarIcon key='half' half />);
    }
    for (let i = 0; i < emptyStar; i++) {
      stars.push(<StarIcon key={`empty-${i}`} empty />);
    }

    return <StarContainer>{stars}</StarContainer>;
  };

  return (
    <ProductContainer>
      <ProductImage src={product.imageUrl} alt={product.title} />
      <ProductContent>
        <ProductHeading>{product.title}</ProductHeading>
        <ProductDescription>{product.description}</ProductDescription>

        {product.reviews && product.reviews.length > 0 && (
          <div className='reviews'>
            <h3>Reviews</h3>
            <ul>
              {product.reviews.map(review => (
                <li key={review.id}>
                  {review.comment}
                  <div>{renderStarRatings(review.rating)}</div>
                </li>
              ))}
            </ul>
          </div>
        )}
        <ProductPrice>
          Price:{' '}
          {product.discountedPrice ? (
            <span>
              <span style={{ textDecoration: 'line-through', color: 'red' }}>
                {product.price} USD
              </span>{' '}
              {product.discountedPrice} USD
            </span>
          ) : (
            <span style={{ textDecoration: 'line-through', color: 'red' }}>
              {product.price} USD
            </span>
          )}
        </ProductPrice>
        {product.discountedPrice && <p>Discount: {calculateDiscount()}% off</p>}
        <AddToCartButton onClick={handleAddToCart}>Add to Cart</AddToCartButton>
      </ProductContent>
    </ProductContainer>
  );
};

export default ProductPage;
