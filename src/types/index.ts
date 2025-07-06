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
export interface NewsCardProps {
  item: NewsItem;
  showDate?: boolean;
  showImage?: boolean;
  showDescription?: boolean;
  index?: number;
}

export interface HeadlineProps {
  headline: NewsItem;
}

export interface CategoryNewsCardProps {
  item: NewsItem;
}

export interface RelatedStoriesProps {
  related: NewsItem[];
}

export interface HeadlineSectionProps {
  headline: NewsItem;
} 