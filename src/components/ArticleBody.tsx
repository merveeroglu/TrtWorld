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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-size: 22px;
  padding: 20px 100px;
      @media (max-width: 576px) {
  padding: 20px ;
  }
`;

// YouTube video container with overlay
const YoutubeWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  aspect-ratio: 16 / 9;
  iframe {
    width: 100%;
    height: 100%;
  }
`;

// Article card container
const ArticleWrapper = styled.div`
  display: flex;
  max-width: 600px;
  gap: 20px;
  align-items: center;
  position: relative;
  padding-left: 12px; // Şerit için boşluk
`;

const BlueStrip = styled.div`
  width: 25px;
  background-color: #00b4ff; // Görseldeki maviye yakın
  height: 60%;
  position: absolute;
  left: -12px;
  top: 23%;
    @media (max-width: 675px) {
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
