"use client";
import { NewsItem } from "@/app/page";
import React from "react";
import styled from "styled-components";
import NewsCard from "./NewsCard";

interface Props {
  related: NewsItem[];
}
// STYLED
const RelatedWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const RelatedText = styled.div`
  color: #808080d5;
  margin-bottom: 10px;
`;
const RelatedStorie = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  > * {
    border-right: 1px solid #cccccc98;
    padding-right: 40px;
  }
  > *:last-child {
    border-right: none;
    padding-right: 0;
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    > *:not(:last-child) {
      border-bottom: 1px solid #cccccc98;
      margin-bottom: 20px;
      padding-bottom: 20px;
    }
    > * {
      border-right: none;
      padding-right: 0;
    }
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

const RelatedStories = ({ related }: Props) => {
  if (!related || related.length === 0) return null;

  return (
    <RelatedWrapper>
      <RelatedText>RELATED STORIES</RelatedText>
      <RelatedStorie>
        {related.map((item, idx) => {
          const columns = Math.floor(
            window.innerWidth >= 1000 ? window.innerWidth / 220 : 1
          );
          const isLastInRow = columns > 1 ? (idx + 1) % columns === 0 : false;
          return (
            <NewsCard
              item={item}
              key={item.id}
              showImage={false}
              showDescription={false}
              isLastInRow={isLastInRow}
            />
          );
        })}
      </RelatedStorie>
    </RelatedWrapper>
  );
};

export default RelatedStories;
