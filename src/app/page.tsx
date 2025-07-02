"use client";
import Headline from "@/components/Headline";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./loading";
import NewsCard from "@/components/NewsCard";
import styled from "styled-components";
import AuthorsPanelCard from "@/components/AuthorsPanelCard";
import CategoryNewsCard from "@/components/CategoryNewsCard";
import EditorsPick from "@/components/EditorsPick";

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

const HeadlineWrapper = styled.div`
  @media (max-width: 1000px) {
    width: 100%;
    padding-top: 0;
    margin-top: 0;
  }
`;

const NewsListWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
// const RelatedStories = styled.div`
//   display: flex;
//   gap: 20px;
//   > *:not(:last-child) {
//     border-right: 1px solid #ccc;
//     padding-right: 40px;
//   }
// `;
const RelatedWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PopularWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const RelatedText = styled.div`
  color: #808080d5;
  margin-bottom: 10px;
`;
const PopularList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  > * {
    border-right: 1px solid #ccc;
    padding-right: 40px;
  }
  > *:last-child {
    border-right: none;
    padding-right: 0;
  }
  @media (min-width: 1001px) and (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
    > *:nth-child(3n) {
      border-right: none;
      padding-right: 0;
    }
  }
  @media (min-width: 1501px) {
    grid-template-columns: repeat(4, 1fr);
    > *:nth-child(4n) {
      border-right: none;
      padding-right: 0;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    > *:nth-child(2n) {
      border-right: none;
      padding-right: 0;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    > * {
      border-right: none;
      padding-right: 0;
    }
  }
`;
const RelatedStories = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  > * {
    border-right: 1px solid #cccccc98;
    padding-right: 40px;
  }
  > *:last-child {
    border-right: none;
    padding-right: 0;
  }
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    > * {
      border-right: none;
      padding-right: 0;
    }
  }
  @media (min-width: 1001px) and (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
    > *:nth-child(3n) {
      border-right: none;
      padding-right: 0;
    }
  }
  @media (min-width: 1501px) {
    grid-template-columns: repeat(4, 1fr);
    > *:nth-child(4n) {
      border-right: none;
      padding-right: 0;
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    > *:nth-child(2n) {
      border-right: none;
      padding-right: 0;
    }
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    > * {
      border-right: none;
      padding-right: 0;
    }
  }
`;
const LatestWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); // repeat:belirli sayıda sütun oluşturmak için. auto-fit:mümkün olduğu kadar ekle
  gap: 40px;
  margin-left: -70px;
  margin-right: -70px;
  background-color: #edf2f7;
  padding: 55px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const PopularText = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
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
  /* @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: 0;
  } */
`;
const RightGroup = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;
const AuthorsPanel = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 25px;
`;
const CategoryNewsWrapper = styled.div`
  display: flex;
  gap: 20px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
`;
const CategoryNews = styled.div`
  flex: 3;
  border-right: 1px solid #ccc;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1000px) {
    border-right: none;
    padding-right: 0;
  }
  > *:not(:last-child) {
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 20px;
  }
`;
const EditorsPickWrapper = styled.div`
  flex: 0.7;
  padding: 15px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const EditorsPickText = styled.h2`
  font-weight: bold;
  margin-bottom: 15px;
  text-align: start;
`;

export default function Home() {
  const [headline, setHeadline] = useState<NewsItem | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [related, setRelated] = useState<NewsItem[]>([]);
  const [popular, setPopular] = useState<NewsItem[]>([]);
  const [latest, setLatest] = useState<NewsItem[]>([]);
  const [categoryNews, setCategoryNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(false);
  // console.log("headline2", headline);
  // console.log("news2", news);

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

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) return <Loading />;

  return (
    <Container>
      <TopWrapper>
        <LeftGroup>
          <HeadlineWrapper>
            {headline && <Headline headline={headline} />}
          </HeadlineWrapper>
          <RelatedWrapper>
            <RelatedText>RELATED STORIES</RelatedText>
            <RelatedStories>
              {related.map((item, idx) => {
                const columns = Math.floor(
                  window.innerWidth >= 1000 ? window.innerWidth / 220 : 1
                );
                const isLastInRow =
                  columns > 1 ? (idx + 1) % columns === 0 : false;
                return (
                  <NewsCard
                    item={item}
                    key={item.id}
                    showImage={false}
                    showDescription={false}
                    isLastInRow={isLastInRow}
                  />
                );
              })}
            </RelatedStories>
          </RelatedWrapper>
        </LeftGroup>

        <RightGroup>
          <NewsListWrapper>
            {news.map((item) => (
              <NewsCard item={item} key={item.id} />
            ))}
          </NewsListWrapper>

          <AuthorsPanel>
            {related.map((item) => (
              <AuthorsPanelCard item={item} key={item.id} />
            ))}
          </AuthorsPanel>
        </RightGroup>
      </TopWrapper>

      <PopularWrapper>
        <PopularText>POPULAR TODAY</PopularText>
        <PopularList>
          {popular.map((item, i) => (
            <NewsCard
              item={item}
              key={item.id}
              showImage={false}
              showDescription={false}
              index={i}
            />
          ))}
        </PopularList>
      </PopularWrapper>
      <LatestWrapper>
        {latest.map((item) => (
          <NewsCard
            item={item}
            key={item.id}
            showDescription={false}
            $latest={true}
            showDate={true}
          />
        ))}
      </LatestWrapper>
      <CategoryNewsWrapper>
        <CategoryNews>
          {categoryNews.map((item, index) => (
            <CategoryNewsCard
              item={item}
              key={item.id}
              isFourth={(index + 1) % 4 === 0}
            />
          ))}
        </CategoryNews>
        <EditorsPickWrapper>
          <EditorsPickText>EDITOR&apos;S PICK</EditorsPickText>
          {headline && <EditorsPick item={headline} />}
        </EditorsPickWrapper>
      </CategoryNewsWrapper>
    </Container>
  );
}
