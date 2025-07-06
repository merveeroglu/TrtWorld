"use client";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import axios from "axios";
import styled from "styled-components";
import { format } from "date-fns";
import RelatedStory from "@/components/RelatedStory";
import MainInfo from "@/components/MainInfo";
import ArticleBody from "@/components/ArticleBody";
import Tags from "@/components/Tags";
interface Article {
  title: string;
  description: string;
  body: BodyBlock[];
  fields: Fields;
  published: {
    date: string;
  };
}

type BodyBlock = TextBlock;

interface TextBlock {
  blockType?: "text";
  value: string;
}

interface Fields {
  mainImage: ImageInfo;
  relatedStory: RelatedStoryType;
  country: Country;
  tags: Tag[];
}

interface ImageInfo {
  url: string;
  title?: string;
  source?: string;
}

interface RelatedStoryType {
  id: number;
  type: string;
  title: string;
  mainImageUrl: string;
}

interface Country {
  key: string;
  value: string;
  metadata: {
    code: string;
    region: string;
    subregion: string;
  };
}

interface Tag {
  key: string;
  value: string;
}

//STYLED
const Container = styled.div`
  margin: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: normal;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  gap: 20px;
  border-right: 1px solid #cccccc98;
  padding-right: 35px;
  min-width: 0;
  @media (max-width: 950px) {
    border-right: none;
    padding-right: 0;
  }
`;
const Related = styled.div`
  flex: 1;
  min-width: 0;
  @media (max-width: 950px) {
    display: none;
  }
`;
const Contents = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  align-items: flex-start;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Country = styled.div`
  color: #0089cc;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bold;
  font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
`;
const Dates = styled.span`
  color: #8080809e;
  font-size: 15px;
  margin-left: 5px;
`;
const Title = styled.h1`
  font-size: 60px;
  font-weight: bold;
  padding-right: 27vw;
  @media (max-width: 1000px) {
    padding-right: 0;
  }
`;
const Description = styled.h2`
  font-size: 27px;
  color: #808080;
  padding-right: 30vw;
  @media (max-width: 1000px) {
    padding-right: 0;
  }
`;

const Page = () => {
  const [data, setData] = useState<Article | null>(null);
  const [formattedDate, setFormattedDate] = useState<string>("");

  // Fetch
  const fetchData = async () => {
    const response = await axios.get(
      "https://www.trtworld.com/api/content?path=/middle-east/palestinian-detainees-in-israeli-jails-increased-130-after-october-7-17811425"
    );
    setData(response?.data.content);
  };

  // USEEFFECT
  useEffect(() => {
    fetchData();
  }, []);

  // Format date only on client
  const publishedDate = data?.published?.date;

  useEffect(() => {
    if (publishedDate) {
      const date = format(new Date(publishedDate), "dd MMM yyyy").toUpperCase();
      setFormattedDate(date);
    }
  }, [publishedDate]);

  if (!data) return <Loading />;

  const {
    title,
    description,
    body,
    fields: {
      mainImage,
      relatedStory,
      country: { value: country } = {},
      tags,
    } = {},
  } = data;

  const mainImageUrl = mainImage?.url || "/placeholder.png";
  const mainImageTitle = mainImage?.title || "image";
  const mainImageSource = mainImage?.source;

  return (
    <Container>
      {/* Header Section: Title and Description grouped */}
      <Country>
        {country} {formattedDate && <Dates>{formattedDate}</Dates>}
      </Country>
      <Title>{title}</Title>
      <Description>{description}</Description>
      {/* Image Section */}
      <Contents>
        <MainContent>
          <MainInfo
            mainImageUrl={mainImageUrl}
            mainImageTitle={mainImageTitle}
            mainImageSource={mainImageSource}
          />
          {/* Body */}
          <ArticleBody body={body} />
          <Tags tags={tags} />
        </MainContent>
        {/* Related */}
        <Related>
          <RelatedStory related={relatedStory} />
        </Related>
      </Contents>
    </Container>
  );
};

export default Page;
