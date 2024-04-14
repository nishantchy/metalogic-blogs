import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import BlogsPage from "../pages/Blogs";
import Services from "../pages/Services";
import Careers from "../pages/Careers";
import About from "../pages/About";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/services" element={<Services />}></Route>
      <Route path="/career" element={<Careers />}></Route>
      <Route path="/blogs" element={<BlogsPage />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default MyRoutes;
