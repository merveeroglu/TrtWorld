"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const RedDot = () => (
  <span
    style={{
      display: "inline-block",
      width: "5px",
      height: "5px",
      backgroundColor: "red",
      borderRadius: "50%",
      marginRight: "6px",
    }}
  />
);

const menu = [
  {
    name: (
      <>
        NEWS <MdKeyboardArrowDown />
      </>
    ),
    url: "/news",
  },
  {
    name: (
      <>
        FEATURES <MdKeyboardArrowDown />
      </>
    ),
    url: "/features",
  },
  {
    name: (
      <>
        TOPICS <MdKeyboardArrowDown />
      </>
    ),
    url: "/topics",
  },
  {
    name: (
      <>
        VIDEO <MdKeyboardArrowDown />
      </>
    ),
    url: "/video",
  },
  {
    name: (
      <>
        <RedDot />
        LIVE
      </>
    ),
    url: "/live",
  },
  { name: <FaSearch />, url: "/search" },
];

// Styled Components
const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 40px 10px 20px;
  background-color: #005d90;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  font-size: 13px;

  // @media (min-width: 768px) {
  //   gap: 1.5rem;
  // }

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: color 0.2s;

    &:hover {
      color: #dbeafe;
    }
  }
`;
const Content = styled.main`
  font-family: "Times New Roman", Times, serif;
  /* padding: 0; */

  /* @media (max-width: 768px) {
    width: 100%;
    padding: 0;
    margin: 0; 
  } */
`;
const Footer = styled.footer`
  background-color: #001733;
  height: 60px;
  width: 100%;
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StyledHeader>
          <LogoContainer>
            <Image src="/logo.png" alt="Logo" width={125} height={48} />
          </LogoContainer>
          <Nav>
            {menu.map((mn, i) => (
              <Link href={mn.url} key={i}>
                {mn.name}
              </Link>
            ))}
          </Nav>
        </StyledHeader>
        <Content>{children}</Content>
        <Footer />
      </body>
    </html>
  );
}
