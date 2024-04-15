import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BLOGS } from "../Blogs";

const BlogDetails = () => {
  const params = useParams();
  const id = params.blogId;
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    const displayBlog = BLOGS.filter((blog) => blog.id == id);
    console.log(displayBlog);
    setBlogs(displayBlog[0]);
  }, [id]);
  return (
    <div className=" max-w-[1240px] w-full mx-auto mt-[150px] pb-[50px]">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        <img
          src={blogs.image}
          alt={blogs.title}
          className="w-full object-contain h-[400px]"
        />
        <div className="flex flex-col gap-2">
          <p>{blogs.date}</p>
          <p className="font-semibold text-3xl">{blogs.title}</p>
          <p className="">{blogs.detail}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
