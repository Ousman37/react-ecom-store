import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};

    if (!email) {
      validationErrors.email = 'Email is required';
    }

    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if (password !== confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, perform registration logic
      console.log('Register:', email, password);

      // Clear input fields
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    }
  };

  return (
    <Wrapper>
      <FormContainer>
        <FormTitle>Register</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormField>
          <FormField>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </FormField>
          <FormField>
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
            )}
          </FormField>
          <FormButton type="submit">Register</FormButton>
        </Form>
        <ModeToggle>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </ModeToggle>
      </FormContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 1rem;

  label {
    font-weight: bold;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.9rem;
`;

const FormButton = styled.button`
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  padding: 0.75rem;
  border-radius: 4px;
  cursor: pointer;
`;

const ModeToggle = styled.div`
  margin-top: 1rem;
  text-align: center;

  p {
    font-size: 0.9rem;
  }

  a {
    color: blue;
  }
`;

export default RegisterPage;
