import React from "react";
import styled from "styled-components";
import CategoryNewsCard from "@/components/CategoryNewsCard";
import EditorsPick from "@/components/EditorsPick";
import { NewsItem } from "@/app/page";
// interface
interface CategoryNewsSectionProps {
  categoryNews: NewsItem[];
  headline: NewsItem | null;
}
//STYLED 
const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
    max-width: 100vw;
  overflow-x: hidden;
`;

const CategoryNewsList = styled.div`
  flex: 3;
  border-right: 1px solid #ccc;
  padding-right: 20px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0;
  }

  > *:not(:last-child) {
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
`;

const EditorsPickWrapper = styled.div`
  flex: 0.7;
  padding: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const EditorsPickTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 15px;
  text-align: start;
`;
const CategoryNewsSection = ({ categoryNews, headline, }: CategoryNewsSectionProps) => {

  if (!categoryNews || categoryNews.length === 0) return null;

  return (
    <Wrapper>
        {/* Category News List */}
      <CategoryNewsList>
        {categoryNews.map((item, index) => (
          <CategoryNewsCard
            key={item.id}
            item={item}
            isFourth={(index + 1) % 4 === 0}
          />
        ))}
      </CategoryNewsList>
      {/* Editor's Pick */}
      <EditorsPickWrapper>
        <EditorsPickTitle>EDITOR&apos;S PICK</EditorsPickTitle>
        {headline && <EditorsPick item={headline} />}
      </EditorsPickWrapper>
    </Wrapper>
  );
};

export default CategoryNewsSection;
