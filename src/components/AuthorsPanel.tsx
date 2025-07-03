import React from "react";
import styled from "styled-components";
import AuthorsPanelCard from "@/components/AuthorsPanelCard";
import { NewsItem } from "@/app/page";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 25px;
`;

interface AuthorsPanelProps {
  authors: NewsItem[];
}
const AuthorsPanel = ({ authors }: AuthorsPanelProps) => {
  if (!authors || authors.length === 0) return null;

  return (
    <Wrapper>
      {authors.map((item) => (
        <AuthorsPanelCard item={item} key={item.id} />
      ))}
    </Wrapper>
  );
};

export default AuthorsPanel;
