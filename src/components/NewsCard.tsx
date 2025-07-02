"use client";
import { NewsItem } from "@/app/page";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

interface Props {
  item: NewsItem;
  showImage?: boolean;
  index?: number;
  showDescription?: boolean;
  $latest?: boolean;
  isLastInRow?: boolean;
}
const Wrapper = styled.div<{ $latest?: boolean; $isCenter?: boolean; $isLastInRow?: boolean }>`
  display: flex;
  align-items: ${({ $isCenter }) => ($isCenter ? "center" : "flex-start")};  
  flex: 1;
  gap: 12px;
  font-weight:bold;
  background-color :white ;
  border-right: ${({ $isLastInRow }) => ($isLastInRow ? "none" : "1px solid #cccccc98")};
  padding-right: ${({ $isLastInRow }) => ($isLastInRow ? "0" : "40px")};
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Title = styled.h2<{ $latest?: boolean; $isBold?: boolean }>`
  margin-top: ${({$latest})=>($latest ? "-15px" : "5px")};
  font-size: 20px;
  font-weight: ${({ $isBold }) => ($isBold ? "normal" : "bold")};
  text-transform: capitalize;
  padding: ${({ $latest }) => ($latest ? "15px" : "0")};
`;
const Description = styled.div<{ $latest?: boolean }>`
  font-size: 15px;
    padding: ${({ $latest }) => ($latest ? "15px" : "0")};

`;
const Number = styled.span`
  font-size: 40px;
  color: #ccc;
  margin-right: 17px;
  user-select: none;
`;
const DateWrapper=styled.div`
padding: 10px 15px ;
font-size: 15px;
color: #808080d5;
`

const NewsCard = ({ item, showImage = true,showDescription=true, $latest = false, index = -1, isLastInRow = false }: Props) => {
  return (
    <Wrapper $isCenter={index !== -1} $latest={$latest} $isLastInRow={isLastInRow}>
      {index !== -1 && <Number>{index + 1}</Number>}
      <Content>
        {showImage && (
          <StyledImage
            src={item.mainImageUrl}
            alt={item.title}
            width={120}
            height={80}
          />
        )}
        {$latest && <DateWrapper>{format(new Date(item.publishedDate), "dd MMM yyyy").toUpperCase()}</DateWrapper>}
        <Title $latest={$latest} $isBold={index !== -1}>{item.title}</Title>
        {showDescription && <Description $latest={$latest}>{item.description}</Description>}
      </Content>
    </Wrapper>
  );
};

export default NewsCard;
