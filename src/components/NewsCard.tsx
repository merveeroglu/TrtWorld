"use client";
import { NewsItem } from "@/app/page";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { format } from "date-fns";

interface Props {
  item: NewsItem;
  showImage?: boolean;
  index?: number;
  showDescription?: boolean;
  $latest?: boolean;
  isLastInRow?: boolean;
  showDate?: boolean;
  $categoryNews?: boolean;
  newList?: boolean;
}
const Wrapper = styled.div<{
  $latest?: boolean;
  $isCenter?: boolean;
  $isLastInRow?: boolean;
  $categoryNews?: boolean;
  $newList?: boolean;
}>`
  display: flex;
  align-items: ${({ $isCenter }) => ($isCenter ? "center" : "flex-start")};
  flex: 1;
  gap: 12px;
  background-color: white;
  border-right: ${({ $isLastInRow }) =>
    $isLastInRow ? "none" : "1px solid #cccccc98"};
  padding-right: ${({ $latest }) => ($latest ? "0" : "40px")};
  
  ${({ $newList }) =>
    $newList &&
    `
      @media (max-width: 576px) {
        border-right: none;
        padding-right: 0;
      }
    `}
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
  margin-top: ${({ $latest }) => ($latest ? "-15px" : "5px")};
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
const DateWrapper = styled.div`
  padding: 10px 15px;
  font-size: 15px;
  color: #808080d5;
`;

const NewsCard = ({
  item,
  showImage = true,
  showDescription = true,
  $latest = false,
  index = -1,
  isLastInRow = false,
  showDate = false,
  $categoryNews = false,
  newList = false,
}: Props) => {
  const [formattedDate, setFormattedDate] = useState('');

useEffect(() => {
  setFormattedDate(format(new Date(item.publishedDate), "dd MMM yyyy").toUpperCase());
}, [item.publishedDate]);
  return (
    <Wrapper
      $isCenter={index !== -1}
      $latest={$latest}
      $isLastInRow={isLastInRow}
      $categoryNews={$categoryNews}
      $newList={newList}
    >
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
        <div>
          {showDate && formattedDate && (
            <DateWrapper>
              {formattedDate}
            </DateWrapper>
          )}
          <Title $latest={$latest} $isBold={index !== -1}>
            {item.title}
          </Title>
          {showDescription && (
            <Description $latest={$latest}>{item.description}</Description>
          )}
        </div>
      </Content>
    </Wrapper>
  );
};

export default NewsCard;
