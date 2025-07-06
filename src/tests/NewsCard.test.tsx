import { render, screen } from "@testing-library/react";
import { NewsItem } from "@/app/page";
import '@testing-library/jest-dom';
import NewsCard from "@/components/NewsCard";

describe("NewsCard", () => {
  const mockItem: NewsItem = {
    id: 1,
    type: "news",
    title: "Test News Title",
    description: "Test news description.",
    mainImageUrl: "/test-image.jpg",
    overlayImageUrl: "",
    thumbnailSquare: "",
    categories: [],
    metaTitle: "",
    metaDescription: "",
    showName: "",
    showSlug: "",
    path: "",
    publishedDate: "2023-01-01",
    authors: [],
    showAuthor: false,
    showByLine: false,
    showSparkbox: false,
  };

  it("renders the title, image, and description", () => {
    render(<NewsCard item={mockItem} />);

    // Title
    expect(screen.getByText("Test News Title")).toBeInTheDocument();

    // Description
    expect(screen.getByText("Test news description.")).toBeInTheDocument();

    // Image (alt text = title)
    const img = screen.getByAltText("Test News Title");
    expect(img).toBeInTheDocument();
expect(img).toHaveAttribute("src", expect.stringContaining("test-image.jpg"));
  });

  it("renders the formatted date when showDate is true", () => {
    render(<NewsCard item={mockItem} showDate={true} />);

    expect(screen.getByText("01 JAN 2023")).toBeInTheDocument();
  });

  it("renders index number when index is provided", () => {
    render(<NewsCard item={mockItem} index={0} />);

    expect(screen.getByText("1")).toBeInTheDocument();  // index + 1
  });

  it("does not render image when showImage is false", () => {
    render(<NewsCard item={mockItem} showImage={false} />);

    expect(screen.queryByAltText("Test News Title")).not.toBeInTheDocument();
  });

  it("does not render description when showDescription is false", () => {
    render(<NewsCard item={mockItem} showDescription={false} />);

    expect(screen.queryByText("Test news description.")).not.toBeInTheDocument();
  });
});
