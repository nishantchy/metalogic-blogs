import React from "react";
import BlogCard from "./BlogCard";
import { IoInformationCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  const redesignDetail = () => {
    navigate("/blog-redesign-details");
  };
  return (
    <div className="max-w-[1240px] mx-auto w-full mt-7 pb-3" id="blogs">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Blog Insights</p>
        <div className="flex items-center" onClick={redesignDetail}>
          <IoInformationCircleOutline
            className="text-gray-500 hover:text-gray-700 cursor-pointer"
            size={24}
            title="Why we redesigned the blog page"
          />
          <span
            className="text-gray-500 ml-2 hover:text-gray-700 cursor-pointer"
            title="Why we redesigned the blog page"
          >
            Redesigned blog page
          </span>
        </div>
      </div>
      <div className="w-full">
        <BlogCard />
      </div>
    </div>
  );
};

export default Blogs;
