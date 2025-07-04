"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9fafb;
  padding: 20px;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: bold;
  color: #2d3748;
  margin-bottom: 10px;
`;

const Message = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: #4a5568;
  margin-bottom: 15px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #718096;
  max-width: 400px;
  margin-bottom: 30px;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: #3182ce;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    background-color: #2b6cb0;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <ErrorCode>404</ErrorCode>
      <Message>Page Not Found</Message>
      <Description>
        Sorry, the page you are looking for does not exist or the address is
        incorrect.{" "}
      </Description>
      <HomeButton href="/">Back to Home Page</HomeButton>
    </Container>
  );
};

export default NotFound;
