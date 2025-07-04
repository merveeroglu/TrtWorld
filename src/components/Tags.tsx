import React from "react";
import styled from "styled-components";

interface Tag {
  key: string;
  value: string;
}

interface Props {
  tags: Tag[] | undefined;
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 100px;
  border-top: 1px solid #ccc;
  min-width: 0;
  @media (max-width: 1000px) {
    padding: 30px;
  }
  h3 {
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

const Tags = ({ tags }: Props) => {
    if (!tags) return null;
  return (
    <Container>
      <h3>TAGS</h3>
      <TagContent>
        {tags?.map((tag, i) => (
          <span key={i}>{tag.value}</span>
        ))}
      </TagContent>
    </Container>
  );
};

export default Tags;
