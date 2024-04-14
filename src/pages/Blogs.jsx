import React from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Blogs from "../components/Blogs";

const BlogsPage = () => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Blogs />
    </div>
  );
};

export default BlogsPage;
