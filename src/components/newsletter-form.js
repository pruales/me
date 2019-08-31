import { ValidationError, useForm } from '@statickit/react';
import React from "react";
import styled from '@emotion/styled';
import theme from '../../config/theme';


const Button = styled.button`
    background-color: rgb(89, 120, 243);
    border-radius: 0 4px 4px 0;
    padding: 0.75rem 0.95rem;
    border: none;
    text-align: center;
    text-decoration: none;
    font-family: proxima-nova, sans-serif;
    font-weight: 700;
    font-style: normal;
    cursor: pointer;
    color: white;
    letter-spacing: 0.45px;
    ${theme.mq({
        fontSize: ['14px', '20px'],
        height: ['48px', '64px']
    })}

    &:hover {
        background-color: #8BEFCC;
    }
    margin: 0;
    transition: background-color 0.1s ease-out;
`

const Input = styled.input`
    padding: 1rem 0.75rem;
    font-family: proxima-nova, sans-serif;
    font-weight: 400;
    font-style: normal;
    border-radius: 4px 0 0 4px;
    border-style: solid;
    border-width: 0px;
    ${theme.mq({
        fontSize: ['14px', '20px'],
        lineHeight: ['16px', '23px'],
        height: ['48px', '64px']
    })}
    width: 60%;
    max-width: 400px;

    @media (max-width: 320px) { 
        width: 50%;
    }
`

const Title = styled.h1`
    padding-top: 48px;
    ${theme.mq({
        fontSize: ['18px !important', '30px !important']
    })}
`


const Newsletter = () => {
  const [state, submit] = useForm('82947389ec40');

  // Display success message in place of the form
  if (state.succeeded) {
    return (
      <div>Thank you for signing up!</div>
    )
  }

  // Render email validation errors and
  // disable the submit button when submitting
  return (
    <form onSubmit={submit}>
      <Title>👇 Get notified when I post!! 👇</Title>
      <Input type="email" name="email" placeholder="Email" required />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <Button type="submit" disabled={state.submitting}>SUBSCRIBE</Button>
    </form>
  )
}

export default Newsletter;


