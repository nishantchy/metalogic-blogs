import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogsPage from "../pages/Blogs";
import Services from "../pages/Services";
import Careers from "../pages/Careers";
import About from "../pages/About";
import BlogDetails from "../pages/BlogDetails";
import SearchPage from "../pages/SearchPage";
import BlogRedesignDetails from "../pages/BlogRedesignDetails";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/career" element={<Careers />}></Route>
      <Route path="/blogs" element={<BlogsPage />}></Route>
      <Route path="/blogsdetail/:blogId" element={<BlogDetails />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/search/:term" element={<SearchPage />}></Route>
      <Route
        path="/blog-redesign-details"
        element={<BlogRedesignDetails />}
      ></Route>
    </Routes>
  );
};

export default MyRoutes;
