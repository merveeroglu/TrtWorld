// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import styled from "styled-components";
// import { FaSearch, FaBars } from "react-icons/fa";
// import { MdKeyboardArrowDown } from "react-icons/md";

// const RedDot = () => (
//   <span
//     style={{
//       display: "inline-block",
//       width: "5px",
//       height: "5px",
//       backgroundColor: "red",
//       borderRadius: "50%",
//       marginRight: "6px",
//     }}
//   />
// );

// const menu = [
//   {
//     name: (
//       <>
//         NEWS <MdKeyboardArrowDown />
//       </>
//     ),
//     url: "/news",
//   },
//   {
//     name: (
//       <>
//         FEATURES <MdKeyboardArrowDown />
//       </>
//     ),
//     url: "/features",
//   },
//   {
//     name: (
//       <>
//         TOPICS <MdKeyboardArrowDown />
//       </>
//     ),
//     url: "/topics",
//   },
//   {
//     name: (
//       <>
//         VIDEO <MdKeyboardArrowDown />
//       </>
//     ),
//     url: "/video",
//   },
//   {
//     name: (
//       <>
//         <RedDot />
//         LIVE
//       </>
//     ),
//     url: "/live",
//   },
// ];
// const menuWithoutIcons = [
//   { name: "NEWS", url: "/news" },
//   { name: "FEATURES", url: "/features" },
//   { name: "TOPICS", url: "/topics" },
//   { name: "VIDEO", url: "/video" },
//   { name: "LIVE", url: "/live" },
// ];

// const StyledHeader = styled.header`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   background-color: #005d90;
//   position: relative;
//   /* font-family: Arial, Helvetica, sans-serif; */
//   font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const DesktopNav = styled.nav`
//   display: flex;
//   gap: 25px;
//   font-size: 13px;

//   a {
//     text-decoration: none;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: white;
//     transition: color 0.2s;

//     &:hover {
//       color: #dbeafe;
//     }
//   }

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const RightGroup = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 20px;

//   @media (min-width: 769px) {
//     display: none;
//   }
// `;

// const MobileMenuToggle = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   font-size: 20px;
//   cursor: pointer;
// `;

// const MobileMenu = styled.div`
//   position: absolute;
//   top: 100%;
//   right: 0;
//   background-color: #005d90;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   z-index: 1000;

//   a {
//     padding: 12px 30px;
//     border-top: 1px solid #ffffff33;
//     color: white;
//     text-decoration: none;

//     &:hover {
//       background-color: #0367a6;
//     }
//   }
// `;

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <StyledHeader>
//       {/* Logo */}
//       <LogoContainer>
//         <Link href="/">
//           <Image src="/logo.png" alt="Logo" width={125} height={48} />
//         </Link>
//       </LogoContainer>

//       {/* Desktop Nav */}
//       <DesktopNav>
//         {menu.map((mn, i) => (
//           <Link href={mn.url} key={i}>
//             {mn.name}
//           </Link>
//         ))}
//         <Link href="/search">
//           <FaSearch color="white" size={16} />
//         </Link>
//       </DesktopNav>

//       {/* Mobile Right Side: Search + Hamburger */}
//       <RightGroup>
//         <Link href="/search">
//           <FaSearch color="white" size={18} />
//         </Link>
//         <MobileMenuToggle onClick={() => setMenuOpen(!menuOpen)}>
//           <FaBars />
//         </MobileMenuToggle>
//       </RightGroup>

//       {/* Mobile Menu Dropdown */}
//       {menuOpen && (
//         <MobileMenu>
//           {menuWithoutIcons.map((mn, i) => (
//             <Link href={mn.url} key={i} onClick={() => setMenuOpen(false)}>
//               {mn.name}
//             </Link>
//           ))}
//         </MobileMenu>
//       )}
//     </StyledHeader>
//   );
// };

// export default Header;
// Header.tsx (styled-components olmadan)

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch, FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

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
];
const menuWithoutIcons = [
  { name: "NEWS", url: "/news" },
  { name: "FEATURES", url: "/features" },
  { name: "TOPICS", url: "/topics" },
  { name: "VIDEO", url: "/video" },
  { name: "LIVE", url: "/live" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="custom-header">
      {/* Logo */}
      <div className="logo-container">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={125} height={48} />
        </Link>
      </div>
      {/* Desktop Nav */}
      <nav className="desktop-nav">
        {menu.map((mn, i) => (
          <Link href={mn.url} key={i}>
            {mn.name}
          </Link>
        ))}
        <Link href="/search">
          <FaSearch color="white" size={16} />
        </Link>
      </nav>
      {/* Mobile Right Side: Search + Hamburger */}
      <div className="right-group">
        <Link href="/search">
          <FaSearch color="white" size={18} />
        </Link>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FaBars />
        </button>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          {menuWithoutIcons.map((mn, i) => (
            <Link href={mn.url} key={i} onClick={() => setMenuOpen(false)}>
              {mn.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
