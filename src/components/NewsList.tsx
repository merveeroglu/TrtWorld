import React from "react";
import styled from "styled-components";
import NewsCard from "@/components/NewsCard";
import { NewsItem } from "@/app/page";

interface NewsListProps {
  news: NewsItem[]
}

const NewsListWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NewsList = ({ news }: NewsListProps) => {
  if (!news || news.length === 0) return null;

  return (
    <NewsListWrapper>
      {news.map((item) => (
        <NewsCard item={item} key={item.id} />
      ))}
    </NewsListWrapper>
  );
};

export default NewsList;
