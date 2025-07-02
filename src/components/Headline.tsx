"use client"
import { NewsItem } from "@/app/page";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  headline: NewsItem | null;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
    @media (max-width: 768px) {
    margin: 0;
    padding: 0;
  }
`;

const Title = styled.h2`
  margin-top: 12px;
  font-size: 35px;
  font-weight: bold;
  line-height:40px;
  text-transform: capitalize;
`;

const Headline = ({ headline }: Props) => {
  console.log("headlineprops", headline);
  if (!headline) return null;

  return (
    <Wrapper>
      <StyledImage
        src={headline.mainImageUrl}
        alt={headline.title}
        width={600} 
        height={400}
      />
      <Title>{headline.title}</Title>
    </Wrapper>
  );
};

export default Headline;
