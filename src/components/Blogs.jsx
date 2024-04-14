import React from "react";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className=" max-w-[1240px] mx-auto w-full mt-7 pb-3" id="blogs">
      <p className="text-2xl font-semibold ">Blog Insights</p>
      <div className="w-full">
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
