"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

interface SearchInputProps {
  onClose?: () => void;
}
// STYLED
const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  font-size: 14px;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.2s;
  background-color: white;

  &:focus {
    border-color: #005d90;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 6px;
  background: none;
  border: none;
  cursor: pointer;
  color: #005d90;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput: React.FC<SearchInputProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchTerm.trim().toLowerCase() === "palestinian") {
      router.push("/article");
    } else {
      alert("No matching article found.");
    }
    onClose?.();
  };

  // Optional: Click outside to close
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         inputRef.current &&
//         !inputRef.current.contains(event.target as Node)
//       ) {
//         onClose?.();
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [onClose]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <SearchButton type="submit" aria-label="Search">
        <FaSearch />
      </SearchButton>
    </Form>
  );
};

export default SearchInput;
