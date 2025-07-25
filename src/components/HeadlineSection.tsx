"use client";
import React from "react";
import styled from "styled-components";
import Headline from "./Headline";
import { NewsItem } from "@/app/page";

interface Props {
  headline: NewsItem | null;
}
const HeadlineWrapper = styled.div`
  @media (max-width: 1000px) {
    width: 100%;
    padding-top: 0;
    margin-top: 0;
  }
  @media (max-width: 768px) {
    width: 100vw;
    margin: 0;
    padding: 0;
    position: relative;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
  }
`;

const HeadlineSection = ({ headline }: Props) => {
  return (
    <HeadlineWrapper>
      {headline && <Headline headline={headline} />}
    </HeadlineWrapper>
  );
};

export default HeadlineSection;
