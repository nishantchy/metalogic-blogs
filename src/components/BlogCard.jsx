import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { BLOGS } from "../Blogs";
import { CiCalendarDate } from "react-icons/ci";
import { motion } from "framer-motion";

const BlogCard = () => {
  const [limit, setLimit] = useState(3);

  const loadMore = () => {
    setLimit(() => limit + 3);
  };

  const loadLess = () => {
    setLimit(3);
  };

  return (
    <div>
      <motion.div
        className="w-full mx-auto flex flex-wrap justify-center gap-5"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        {BLOGS.slice(0, limit).map((blog, id) => (
          <div
            className="max-w-[400px] w-full rounded-2xl shadow-2xl p-3"
            key={blog.id}
          >
            <div>
              <motion.img
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.5 }}
                src={blog.image}
                alt={blog.title}
                className="max-w-[400px] h-auto w-full object-contain rounded-2xl"
              />
            </div>
            <div className="p-2">
              <p className="font-semibold text-[14px] flex justify-start items-center gap-2">
                <CiCalendarDate />
                {blog.date}
              </p>
              <p className="font-semibold text-2xl line-clamp-2">
                {blog.title}
              </p>
              <p className="font-semibold text-[#454545] line-clamp-3 mt-2">
                {blog.detail}
              </p>
              <a
                href="/blogsDetail"
                className="text-themeRed py-2 hover:opacity-80 mt-3 block"
              >
                Learn More <FaArrowRightLong className="inline mx-2" />
              </a>
            </div>
          </div>
        ))}
      </motion.div>
      <div className="flex justify-center mt-6">
        {limit < BLOGS.length ? (
          <button
            onClick={loadMore}
            className="text-white bg-themeRed py-2 px-4 font-medium rounded-[50px] hover:opacity-80"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={loadLess}
            className="text-white bg-themeRed py-2 px-4 font-medium rounded-[50px] hover:opacity-80"
          >
            Load Less
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
