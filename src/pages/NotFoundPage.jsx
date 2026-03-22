import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const NotFoundText = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  color: #888;
  margin-bottom: 1rem;
`;

const HomeLink = styled(Link)`
  color: #007bff;
  text-decoration: underline;
  margin-bottom: 1.5rem;

  &:hover {
    color: #0056b3;
  }
`;

const ProgressBar = styled.div`
  width: 200px;
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

const fillAnimation = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const ProgressBarFill = styled.div`
  width: 0;
  height: 100%;
  background-color: #0077be;
  animation: ${fillAnimation} 3s linear forwards;
`;

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <NotFoundContainer>
      <NotFoundText>404 - Page Not Found</NotFoundText>
      <SubText>Redirecting to home in 3 seconds...</SubText>
      <HomeLink to="/">Go back to home</HomeLink>
      <ProgressBar>
        <ProgressBarFill />
      </ProgressBar>
    </NotFoundContainer>
  );
};

export default NotFoundPage;
