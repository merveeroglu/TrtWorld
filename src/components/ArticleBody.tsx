import React from "react";
import styled from "styled-components";

interface BodyItem {
  blockType?: string;
  value?: string;
  metadata?: { url?: string };
  id?: number;
  type?: string;
  title?: string;
  description?: string;
  mainImageUrl?: string;
}

interface Props {
  body?: BodyItem[];
}
// STYLED
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 20px;
  padding: 20px 100px;
      @media (max-width: 768px) {
  padding: 50px ;
  }     
   @media (max-width: 576px) {
  padding: 0 ;
  }
`;

const YoutubeWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
  margin-bottom: 20px;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

const ArticleWrapper = styled.div`
  display: flex;
  max-width: 600px;
  gap: 20px;
  align-items: center;
  position: relative;
  padding-left: 12px; 
`;

const BlueStrip = styled.div`
  width: 25px;
  background-color: #00b4ff; 
  height: 60%;
  position: absolute;
  left: -12px;
  top: 23%;
    @media (max-width: 768px) {
  height:50%;
  }    
  @media (max-width: 480px) {
  height:40%;
    top: 30%;
  }   
  @media (max-width: 390px) {
  height:30%;
    top: 35%;
  }    
  @media (max-width: 370px) {
    display: none;
  }
`;

const ArticleImage = styled.img`
  width: 40%;
  object-fit: cover;
`;

const ArticleContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ReadMore = styled.a`
  color: #666;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 5px;
`;

const ArticleTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
`;

const TextParagraph = styled.div`
  p {
    margin-bottom: 15px;
  }
`;

const ArticleBody = ({ body }: Props) => {
  if (!body) return null;

  const getYoutubeData = (
    htmlString: string = ""
  ): { src: string; title: string; allow: string } => {
    if (!htmlString) return { src: "", title: "", allow: "" };
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    const iframe = doc.querySelector("iframe");
    return {
      src: iframe?.getAttribute("src") || "",
      title: iframe?.getAttribute("title") || "",
      allow: iframe?.getAttribute("allow") || "",
    };
  };

  return (
    <Container>
      {body.map((item, index) => {
        switch (item.blockType) {
          case "text":
            // `value` HTML string olabilir, dangerouslySetInnerHTML ile yazdır
            return (
              <TextParagraph
                key={index}
                dangerouslySetInnerHTML={{ __html: item.value || "" }}
              />
            );

          case "youtube":
            const { src, title, allow } = getYoutubeData(item.value);
            return (
              <YoutubeWrapper key={index}>
                <iframe src={src} title={title} allow={allow} allowFullScreen />
              </YoutubeWrapper>
            );

          default:
            if (item.type === "article") {
              return (
                <ArticleWrapper key={index}>
                  <BlueStrip />
                  <ArticleImage src={item.mainImageUrl} alt={item.title} />
                  <ArticleContent>
                    <ReadMore>READ MORE</ReadMore>
                    <ArticleTitle>{item.title}</ArticleTitle>
                  </ArticleContent>
                </ArticleWrapper>
              );
            }
            return null;
        }
      })}
    </Container>
  );
};

export default ArticleBody;
