import { NewsItem } from "@/app/page";
import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { format } from "date-fns";

interface Props {
  item: NewsItem;
  isFourth?: boolean;
}
const Wrapper = styled.div<{ $isFourth?: boolean }>`
  display: flex;
  gap: 20px;
  flex-direction: ${({ $isFourth }) => ($isFourth ? "column" : "row")};
  @media (max-width: 576px) {
    flex-direction: column;
  }  
  @media (max-width: 350px) {
min-width:0;  }
`;

const StyledImage = styled(Image)<{ $isFourth?: boolean }>`
  object-fit: cover;
  flex: 1;
  /* width: 100%; */
  /* height: auto; */
  height: ${({ $isFourth }) => ($isFourth ? "350px" : "auto")};
  width: ${({ $isFourth }) => ($isFourth ? "80%" : "100%")};
  @media (max-width: 1200px) {
    height: ${({ $isFourth }) => ($isFourth ? "250px" : "auto")};
  }  
  @media (max-width: 576px) {
    max-width: 150px;
    height: ${({ $isFourth }) => ($isFourth ? "80px" : "auto")};

  }
`;
const Info = styled.div<{ $isFourth?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: ${({ $isFourth }) => ($isFourth ? 1 : 2.5)};
`;

const DateWrapper = styled.div`
  font-size: 15px;
  color: #808080d5;
  display: flex;
  @media (max-width: 576px) {
    display: none;
  }
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
const DateCategoryWrapperTop = styled.div`
  display: none;
  @media (max-width: 576px) {
    display: flex;
    font-size: 15px;
    color: #808080d5;
    flex-direction: column;
  }
`;
const PreviewHeader = styled.div`
  @media (max-width: 576px) {
    display: flex;
    gap: 20px;
  }
`;
const CategoryTitles = styled.div`
  color: #005d90;
`;
const DateWrapperTop = styled.div`
  font-size: 15px;
  color: #808080d5;
  margin-left: 10px;
  @media (max-width: 576px) {
    margin-left: 0;
  }
`;

const CategoryNewsCard = ({ item, isFourth }: Props) => {
  const categoryTitles = item.categories
    ?.slice(1) // 0. index hariç
    .map((cat) => cat.title.toUpperCase())
    .join(" & ");
  return (
    <Wrapper $isFourth={isFourth}>
      <PreviewHeader>
        <StyledImage
          src={item.mainImageUrl}
          alt={item.title}
          width={200}
          height={80}
          $isFourth={isFourth}
        />
        <DateCategoryWrapperTop>
          {categoryTitles && <CategoryTitles>{categoryTitles}</CategoryTitles>}
          <DateWrapperTop>
            {format(new Date(item.publishedDate), "dd MMM yyyy").toUpperCase()}
          </DateWrapperTop>
        </DateCategoryWrapperTop>
      </PreviewHeader>
      <Info>
        <DateWrapper>
          {categoryTitles && <CategoryTitles>{categoryTitles}</CategoryTitles>}
          <DateWrapperTop>
            {format(new Date(item.publishedDate), "dd MMM yyyy").toUpperCase()}
          </DateWrapperTop>
        </DateWrapper>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </Info>
    </Wrapper>
  );
};

export default CategoryNewsCard;
