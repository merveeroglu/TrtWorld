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
  @media (max-width: 1000px) {
    gap: 0;
    margin-top: 0;
    padding-top: 0;
  }
`;
const TopWrapper = styled.div`
  display: flex;
  gap: 30px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 50px;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const LeftGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 30px;
  border-right: 1px solid #ccc;
  padding-right: 30px;
  @media (max-width: 1000px) {
    border-right: none;
    padding-right: 0;
  }
`;

const RightGroup = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 480px) {
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
