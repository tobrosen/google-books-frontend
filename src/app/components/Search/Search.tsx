"use client";
import { BookContext } from "@/app/providers/BookProvider";
import { useContext } from "react";

const Search = () => {
  const { setSearchQuery } = useContext(BookContext);
  return (
    <input
      type="search"
      name="search"
      id="search"
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default Search;
