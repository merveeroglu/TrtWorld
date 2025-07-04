import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  mainImageUrl: string;
  mainImageTitle: string;
  mainImageSource?: string;
}

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9; /* Oran koruma */
  overflow: hidden;
  margin-bottom: 10px;
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
  font-size: 18px;
  text-transform: uppercase;
  margin-top: 10px;
`;

const Title = styled.div`
  color: #676565;
  font-size: 20px;
  margin-top: 5px;
  letter-spacing: 1px; /* Başlık harfleri arasına boşluk istersen */
`;

const MainInfo = ({ mainImageUrl, mainImageTitle, mainImageSource }: Props) => {
  const beforeSlashTitle = mainImageTitle?.split("/")[0] || "";

  return (
    <>
      <ImageContainer>
        <StyledImage
          src={mainImageUrl}
          alt={mainImageTitle}
          fill
        />
      </ImageContainer>
      <Source>{mainImageSource}</Source>
      <Title>{beforeSlashTitle}</Title>
    </>
  );
};

export default MainInfo;
