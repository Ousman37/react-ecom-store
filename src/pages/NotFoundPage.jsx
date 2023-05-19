import React from 'react';
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

const ProgressBar = styled.div`
  width: 200px;
  height: 8px;
  background-color: #ddd;
  border-radius: 4px;
  overflow: hidden;
`;

const fillAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const ProgressBarFill = styled.div`
  width: 0;
  height: 100%;
  background-color: #0077be;
  animation: ${fillAnimation} 2s linear forwards;
`;

const NotFoundPage = () => (
  <NotFoundContainer>
    <NotFoundText>404 - Page Not Found</NotFoundText>
    <ProgressBar>
      <ProgressBarFill />
    </ProgressBar>
  </NotFoundContainer>
);

export default NotFoundPage;
