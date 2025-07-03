import React from "react";
import styled from "styled-components";
import NewsCard from "@/components/NewsCard";
import { NewsItem } from "@/app/page";

interface LatestNewsProps {
  latest: NewsItem[];
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); // repeat:belirli sayıda sütun oluşturmak için. auto-fit:mümkün olduğu kadar ekle
  gap: 40px;
  margin-left: -70px;
  margin-right: -70px;
  background-color: #edf2f7;
  padding: 55px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
const LatestNews = ({ latest }: LatestNewsProps) => {
  if (!latest || latest.length === 0) return null;

  return (
    <Wrapper>
      {latest.map((item) => (
        <NewsCard
          item={item}
          key={item.id}
          showDescription={false}
          $latest={true}
          showDate={true}
        />
      ))}
    </Wrapper>
  );
};

export default LatestNews;
