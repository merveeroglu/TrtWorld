import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  mainImageUrl: string;
  mainImageTitle: string;
  mainImageSource?: string;
}
// STYLED
const Container = styled.div`
display:flex;
flex-direction: column;
gap: 9px;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* Oran koruma */
  overflow: hidden;
  @media (max-width: 1000px) and (min-width: 769px) {
    aspect-ratio: 16 / 7;
  }
  @media (max-width: 768px) {
    aspect-ratio: 16 / 9;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const Source = styled.div`
  color: #868383;
  font-size: 15px;
  text-transform: uppercase;
  margin-top: 5px;
`;

const Title = styled.div`
  color: #676565;
  font-size: 16px;
  letter-spacing: 0.2px; 
`;

const MainInfo = ({ mainImageUrl, mainImageTitle, mainImageSource }: Props) => {
  const beforeSlashTitle = mainImageTitle?.split("/")[0] || "";

  return (
    <Container>
      <ImageContainer>
        <StyledImage
          src={mainImageUrl}
          alt={mainImageTitle}
          fill
        />
      </ImageContainer>
      <Source>{mainImageSource}</Source>
      <Title>{beforeSlashTitle}</Title>
    </Container>
  );
};

export default MainInfo;
