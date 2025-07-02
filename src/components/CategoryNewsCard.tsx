import { NewsItem } from "@/app/page";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

interface Props {
  item: NewsItem;
  isFourth?:boolean;
}
const Wrapper = styled.div<{ $isFourth?: boolean }>`
  display: flex;
  gap: 20px;
  flex-direction: ${({ $isFourth }) => ($isFourth ? "column" : "row")};
`;

const StyledImage = styled(Image)<{ $isFourth?: boolean }>`
  object-fit: cover;
  flex: 1;
  width: 100%;
  height: ${({ $isFourth }) => ($isFourth ? "500px" : "200px")};
`;
const Info = styled.div<{ $isFourth?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: ${({ $isFourth }) => ($isFourth ? "unset" : 2.5)};`;
const DateWrapper = styled.div`
  padding: 10px 0 0;
  font-size: 15px;
  color: #808080d5;
`;
const Title = styled.h2`
  margin-top: 5px;
  font-size: 20px;
  font-weight: bold;
  text-transform: capitalize;
`;

const Description = styled.div`
  font-size: 15px;
`;

const CategoryNewsCard = ({ item, isFourth }: Props) => {
  return (
    <Wrapper $isFourth={isFourth}>
      <StyledImage
        src={item.mainImageUrl}
        alt={item.title}
        width={600}
        height={500}
      />
      <Info>
        <DateWrapper>
          {format(new Date(item.publishedDate), "dd MMM yyyy").toUpperCase()}
        </DateWrapper>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </Info>
    </Wrapper>
  );
};

export default CategoryNewsCard;
