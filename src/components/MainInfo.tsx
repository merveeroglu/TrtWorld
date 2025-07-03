import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  mainImageUrl: string;
  mainImageTitle:string;
  mainImageSource?:string;
}

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const Source = styled.div`
  color: #868383;
  font-size: 18px;
  text-transform:uppercase;
  padding-bottom:0;
`;
const Title = styled.div`
  color: #676565;
    font-size: 20px;
      padding-top:0;

`;

const MainInfo = ({ mainImageUrl, mainImageTitle,mainImageSource }: Props) => {
    const beforeSlashTitle = mainImageTitle?.split("/")[0] || "";
  return (
    <>
      <StyledImage
        src={mainImageUrl}
        alt={mainImageTitle}
        width={600}
        height={400}
      />
      <Source>{mainImageSource}</Source>
      <Title>{beforeSlashTitle}</Title>
    </>
  );
};

export default MainInfo;
