"use client";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import axios from "axios";
import styled from "styled-components";
import { format } from "date-fns";
import RelatedStory from "@/components/RelatedStory";
import MainInfo from "@/components/MainInfo";
import ArticleBody from "@/components/ArticleBody";
interface Article {
  id: number;
  title: string;
  description: string;
  body: BodyBlock[];
  path: string;
  type: string;
  fields: Fields;
  site: string;
  published: {
    date: string;
  };
  paths: string[];
}
type BodyBlock = TextBlock | YoutubeBlock | RelatedArticle;
interface TextBlock {
  blockType?: "text";
  value: string;
}

interface YoutubeBlock {
  blockType: "youtube";
  metadata: {
    url: string;
  };
  value: string;
}

interface RelatedArticle {
  id: number;
  type: string;
  title: string;
  description: string;
  mainImageUrl: string;
  overlayImageUrl: string;
  categories: Category[];
  path: string;
  publishedDate: string;
  authors: Author[];
}
interface Fields {
  search_title: {
    text: string;
  };
  search_description: {
    text: string;
  };
  topic_slug: {
    text: string;
  };
  mainImage: ImageInfo;
  overlayImage: ImageInfo;
  authors: AuthorBasic[];
  relatedStory: {
    id: number;
    type: string;
    title: string;
    mainImageUrl: string;
  };
  country: Country;
  tags: Tag[];
}
interface ImageInfo {
  //   type: string;
  //   assetId?: number;
  //   cdnUrl: string;
  url: string;
  title?: string;
  source?: string;
  //   author?: string;
}
interface AuthorBasic {
  firstName: {
    text: string;
  };
  lastName: {
    text: string;
  };
}

interface Category {
  contentId: number;
  title: string;
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
interface Author {
  userName: string;
  firstName: string;
  lastName: string;
  mainImage?: string;
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
  border-right: 1px solid #ccc;
  padding-right: 35px;
  min-width: 0;
  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0;
  }
`;
const Related = styled.div`
  flex: 1;
  min-width: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Contents = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  box-sizing: border-box;
  @media (max-width: 1000px) {
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
`;
const Description = styled.h2`
  font-size: 35px;
  color: #808080;
`;
const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
    padding: 30px 100px;
  border-top:1px solid #ccc;
    min-width: 0;
      @media (max-width: 1000px) {
       padding: 30px;
  }
  h3{
    font-size: 18px;
    font-weight: 800;
      font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
      letter-spacing: 2px;
  }
`;
const TagContent = styled.div`
  gap: 5px;
  display: flex;
  gap: 20px;
    flex-wrap: wrap;

  span {
    font-size: 15px;
    font-weight: 900;
    color: #808080;
    text-transform: uppercase;
    background-color: #edf2f7;
    padding: 5px;
  }
`;

const Page = () => {
  const [data, setData] = useState<Article | null>(null);

  //   Variables
  const relatedStory = data?.fields?.relatedStory;
  const country = data?.fields?.country?.value;
  const title = data?.title;
  const description = data?.description;
  const mainImageUrl = data?.fields?.mainImage?.url || "/placeholder.png";
  const mainImageTitle = data?.fields?.mainImage?.title || "image";
  const mainImageSource = data?.fields?.mainImage?.source;
  const tags = data?.fields?.tags;
  const publishedDate = data?.published?.date;
  const body = data?.body;
  const formattedDate = publishedDate
    ? format(new Date(publishedDate), "dd MMM yyyy").toUpperCase()
    : "";

  // Fetch
  const fetchData = async () => {
    const response = await axios.get("http://localhost:4000/content");
    setData(response?.data);
    console.log("data", response?.data);
  };

  // USEEFFECT
  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return <Loading />;

  return (
    <Container>
      <Country>
        {country} <Dates>{formattedDate}</Dates>
      </Country>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Contents>
        <MainContent>
          <MainInfo
            mainImageUrl={mainImageUrl}
            mainImageTitle={mainImageTitle}
            mainImageSource={mainImageSource}
          />
          <ArticleBody body={body} />
          <Tags>
            <h3>TAGS</h3>
            <TagContent>
            {tags?.map((tag, i) => (
              <span key={i}>{tag.value}</span>
            ))}</TagContent>
          </Tags>
        </MainContent>

        <Related>
          <RelatedStory related={relatedStory} />
        </Related>
      </Contents>
    </Container>
  );
};

export default Page;
