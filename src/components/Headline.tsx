"use client";
import { NewsItem } from "@/app/page";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  headline: NewsItem | null;
}
//STYLED
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    margin: 0;
    padding: 0;
    width: 100vw;
    position: relative;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
  }
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
  line-height: 40px;
  text-transform: capitalize;
  @media (max-width: 1000px) {
    margin-inline: 40px;
  }
`;
const ImageWrapper = styled.div`
  position: relative;
`;
const CategoryTag = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #005D99; 
  color: white;
  padding: 2px 10px;
  margin: 10px;
  font-size: 14px;
  z-index: 2;
  text-transform: uppercase;
`;

const Headline = ({ headline }: Props) => {
 const categoryTitle = headline?.categories?.[1]?.title;
   console.log("headline?.categories?.[1]?.title", headline?.categories?.[1]?.title);
  if (!headline) return null;

  return (
    <Wrapper>
      <ImageWrapper>
        {categoryTitle && <CategoryTag>{categoryTitle}</CategoryTag>}
        <StyledImage
          src={headline.mainImageUrl}
          alt={headline.title}
          width={600}
          height={400}
        />
      </ImageWrapper>
      <Title>{headline.title}</Title>
    </Wrapper>
  );
};

export default Headline;
