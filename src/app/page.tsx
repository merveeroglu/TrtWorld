"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./loading";
import styled from "styled-components";
import HeadlineSection from "@/components/HeadlineSection";
import RelatedStories from "@/components/RelatedStories";
import NewsList from "@/components/NewsList";
import AuthorsPanel from "@/components/AuthorsPanel";
import PopularToday from "@/components/PopularToday";
import LatestNews from "@/components/LatestNews";
import CategoryNewsSection from "@/components/CategoryNewsSection";
import Footer from "@/components/Footer";
// Interface
interface Category {
  contentId: number;
  title: string;
}

interface Author {
  userName: string;
  firstName: string;
  lastName: string;
  path: string;
}

export interface NewsItem {
  id: number;
  type: string;
  title: string;
  description: string;
  mainImageUrl: string;
  overlayImageUrl: string;
  thumbnailSquare: string;
  categories: Category[];
  metaTitle: string;
  metaDescription: string;
  showName: string;
  showSlug: string;
  path: string;
  publishedDate: string;
  authors: Author[];
  showAuthor: boolean;
  showByLine: boolean;
  showSparkbox: boolean;
}
//STYLED
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px 40px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 0;
    padding-top: 0;
  }  
  @media (max-width: 320px) {
    box-sizing: border-box;
  }
`;
const TopWrapper = styled.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 35px;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const LeftGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-right: 1px solid #cccccc98;
  padding-right: 30px;
  min-width: 0;
  @media (max-width: 768px) {
    border-right: none;
    padding-right: 0;
    border-bottom: 1px solid #cccccc98;
    padding-bottom: 30px;    
    margin:20px;
    margin-top: 0;
  }  
  @media (max-width: 576px) {
    margin-inline:0;
  }
`;

const RightGroup = styled.div`
  display: flex;
  flex: 1;
  @media (max-width: 768px) {
    border-bottom: 1px solid #cccccc98;
    padding-bottom: 30px;    
  }
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
    
  }
`;
//
export default function Home() {
  const [headline, setHeadline] = useState<NewsItem | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [related, setRelated] = useState<NewsItem[]>([]);
  const [popular, setPopular] = useState<NewsItem[]>([]);
  const [latest, setLatest] = useState<NewsItem[]>([]);
  const [categoryNews, setCategoryNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  // FETCH
  const fetchData = async () => {
    setLoading(true);
    const [
      headlineRes,
      newsRes,
      relatedRes,
      popularRes,
      latestRes,
      categoryNewsRes,
    ] = await Promise.all([
      axios.get("http://localhost:4000/headline"),
      axios.get("http://localhost:4000/news"),
      axios.get("http://localhost:4000/related"),
      axios.get("http://localhost:4000/popular"),
      axios.get("http://localhost:4000/latest"),
      axios.get("http://localhost:4000/categoryNews"),
    ]);
    console.log("categoryNewsRes", categoryNewsRes);
    setHeadline(headlineRes.data[0]);
    setNews(newsRes.data);
    setRelated(relatedRes.data);
    setPopular(popularRes.data);
    setLatest(latestRes.data);
    setCategoryNews(categoryNewsRes.data);
    setLoading(false);
  };
  // USEEFFECT
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <Loading />;

  return (
    <>
      <Container>
        <TopWrapper>
          {/* Headline - RelatedStories*/}
          <LeftGroup>
            <HeadlineSection headline={headline} />
            <RelatedStories related={related} />
          </LeftGroup>
          {/* NewsList - Authors*/}
          <RightGroup>
            <NewsList news={news} />
            <AuthorsPanel authors={related} />
          </RightGroup>
        </TopWrapper>
        {/* Popular Today */}
        <PopularToday popular={popular} />
        {/* Latest */}
        <LatestNews latest={latest} />
        {/* Category News */}
        <CategoryNewsSection categoryNews={categoryNews} headline={headline} />
      </Container>
      <Footer />
    </>
  );
}
