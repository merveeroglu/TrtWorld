import React from "react";
import styled from "styled-components";
import NewsCard from "./NewsCard";
import { NewsItem } from "@/app/page";

interface Props {
  popular: NewsItem[];
}
// STYLED
const PopularWrapper = styled.div`
  display: flex;
  flex-direction: column;
    max-width: 100vw;
  overflow-x: hidden;
`;

const PopularList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  > * {
    border-right: 1px solid #ccc;
    padding-right: 40px;
  }
  > *:last-child {
    border-right: none;
    padding-right: 0;
  }
  @media (min-width: 1001px) and (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
    > *:nth-child(3n) {
      border-right: none;
      padding-right: 0;
    }
  }
  @media (min-width: 1501px) {
    grid-template-columns: repeat(4, 1fr);
    > *:nth-child(4n) {
      border-right: none;
      padding-right: 0;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    > *:nth-child(2n) {
      border-right: none;
      padding-right: 0;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    > * {
      border-right: none;
      padding-right: 0;
    }
  }
`;
const PopularText = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const PopularToday = ({ popular }: Props) => {
    if (!popular || popular.length === 0) return null;
  return (
    <PopularWrapper>
      <PopularText>POPULAR TODAY</PopularText>
      <PopularList>
        {popular.map((item, i) => (
          <NewsCard
            item={item}
            key={item.id}
            showImage={false}
            showDescription={false}
            index={i}
          />
        ))}
      </PopularList>
    </PopularWrapper>
  );
};

export default PopularToday;
