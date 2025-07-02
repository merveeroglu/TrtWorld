import { NewsItem } from "@/app/page";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

interface Props {
  item: NewsItem;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom:20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
`;

const StyledImage = styled(Image)`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthorName = styled.div`
  font-size: 14px;
  color: #888; /* Açık gri */
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #000;
`;

const AuthorsPanelCard = ({ item }: Props) => {
  const author = item.authors?.[0];

  return (
    <Wrapper>
      <StyledImage
        src={item.mainImageUrl}
        alt={item.title}
        width={64}
        height={64}
      />
      <Info>
        {author && (
          <AuthorName>
            {author.firstName} {author.lastName}
          </AuthorName>
        )}
        <Title>{item.title}</Title>
      </Info>
    </Wrapper>
  );
};

export default AuthorsPanelCard;
