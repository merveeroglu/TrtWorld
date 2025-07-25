import Image from "next/image";
import React from "react";
import styled from "styled-components";
interface Props {
  related?: {
    id: number;
    type: string;
    title: string;
    mainImageUrl: string;
  };
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-left: 13px;
`;
const ContentRow = styled.div`
  display: flex;
  gap: 15px;
`;
const StyledImage = styled(Image)`
  object-fit: cover;
`;
const ImageWrapper = styled.div`
  flex: 1;
  position: relative;
  aspect-ratio: 3 / 2; // (600x400 = 3:2)
  min-width: 120px;
`;
const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const RelatedTitle = styled.h2`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
`;
const RelatedStory = ({ related }: Props) => {
  if (!related) return null;
  return (
    <Wrapper>
      <Title>RELATED</Title>
      <ContentRow>
        <ImageWrapper>
          <StyledImage
            src={related.mainImageUrl}
            alt={related.title}
            fill
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </ImageWrapper>
        <RelatedTitle>{related.title}</RelatedTitle>
      </ContentRow>
    </Wrapper>
  );
};

export default RelatedStory;
