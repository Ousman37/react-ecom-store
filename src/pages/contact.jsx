import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  fullName: yup
    .string()
    .required('Full name is required')
    .min(3, 'Full name must be at least 3 characters long'),
  subject: yup
    .string()
    .required('Subject is required')
    .min(3, 'Subject must be at least 3 characters long'),
  email: yup
    .string()
    .required('Email is required')
    .email('Email must be a valid email address'),
  body: yup
    .string()
    .required('Body is required')
    .min(3, 'Body must be at least 3 characters long'),
});

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = data => {
    console.log(data);
  };

  return (
    <Container>
      <h1>Contact Us</h1>
      <FormContainer>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label htmlFor='fullName'>Full Name*</label>
            <input
              type='text'
              id='fullName'
              {...register('fullName')}
              style={{ width: '100%' }}
            />
            {errors.fullName && (
              <ErrorMessage>{errors.fullName.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor='subject'>Subject*</label>
            <input
              type='text'
              id='subject'
              {...register('subject')}
              style={{ width: '100%' }}
            />
            {errors.subject && (
              <ErrorMessage>{errors.subject.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor='email'>Email*</label>
            <input
              type='email'
              id='email'
              {...register('email')}
              style={{ width: '100%' }}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputContainer>
          <InputContainer>
            <label htmlFor='body'>Body*</label>
            <textarea
              id='body'
              rows={4}
              cols={40}
              {...register('body')}
              style={{ width: '100%' }}></textarea>
            {errors.body && <ErrorMessage>{errors.body.message}</ErrorMessage>}
          </InputContainer>
          <Button type='submit'>Submit</Button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default ContactPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const FormContainer = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 50%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.span`
  color: red;
`;

const Button = styled.button`
  background-color: #3f51b5;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #303f9f;
  }
`;
