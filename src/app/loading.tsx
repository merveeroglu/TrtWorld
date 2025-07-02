"use client"
import styled, { keyframes } from 'styled-components';

const SpinnerWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #e0e0e0;
  border-top-color: #0070f3; 
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default function Loading() {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
}