"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import SearchInput from "./SearchInput";

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

const menuItems = [
  { label: "NEWS", url: "/news", hasArrow: true },
  { label: "FEATURES", url: "/features", hasArrow: true },
  { label: "TOPICS", url: "/topics", hasArrow: true },
  { label: "VIDEO", url: "/video", hasArrow: true },
  { label: "LIVE", url: "/live", isLive: true },
];
const renderMenuName = (item: {
  label: string;
  hasArrow?: boolean;
  isLive?: boolean;
}) => (
  <>
    {item.isLive && <RedDot />}
    {item.label}
    {item.hasArrow && <MdKeyboardArrowDown />}
  </>
);

const menuWithoutIcons = [
  { name: "NEWS", url: "/news" },
  { name: "FEATURES", url: "/features" },
  { name: "TOPICS", url: "/topics" },
  { name: "VIDEO", url: "/video" },
  { name: "LIVE", url: "/live" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="custom-header">
      {/* Logo */}
      <div className="logo-container">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={125} height={48} style={{ width: "auto", height: "auto" }} />
        </Link>
      </div>
      {/* Desktop Nav */}
      <nav className="desktop-nav">
        {menuItems.map((item, index) => (
          <Link href={item.url} key={index}>
            {renderMenuName(item)}
          </Link>
        ))}
        {/* Search */}
        {!searchOpen && (
          <button
            aria-label="Open search"
            onClick={() => setSearchOpen(true)}
            style={{ background: "none", border: "none", color: "white" }}
          >
            <FaSearch color="white" size={16} />
          </button>
        )}
        {searchOpen && <SearchInput onClose={() => setSearchOpen(false)} />}
      </nav>
      {/* Mobile Right Side: Search + Hamburger */}
      <div className="right-group">
        {!searchOpen && (
          <button
            aria-label="Open search"
            onClick={() => setSearchOpen(true)}
            style={{ background: "none", border: "none", color: "white" }}
          >
            <FaSearch color="white" size={18} />
          </button>
        )}
        {searchOpen && <SearchInput onClose={() => setSearchOpen(false)} />}

        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
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
