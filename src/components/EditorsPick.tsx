import { NewsItem } from "@/app/page";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  item: NewsItem;
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 250px;
  overflow: hidden;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.159),
    rgba(0, 0, 0, 0.6)
  );
`;

const Title = styled.h2`
  position: absolute;
  bottom: 15px;
  left: 15px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  z-index: 1;
`;

const EditorsPick = ({ item }: Props) => {
  return (
    <Wrapper>
      <StyledImage
        src={item.mainImageUrl}
        alt={item.title}
        width={200}
        height={200}
      />
      <Overlay />
      <Title>{item.title}</Title>
    </Wrapper>
  );
};

export default EditorsPick;
