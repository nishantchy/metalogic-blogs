import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BLOGS } from "../Blogs";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const { term } = useParams();
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const searchedData = () => {
      const data = BLOGS.filter((b) =>
        b.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchData(data);
    };
    searchedData();
  }, [term]);
  return (
    <div className="mt-[120px] pb-9">
      {searchData.length === 0 ? (
        <p className="text-center text-gray-900 font-semibold">No results</p>
      ) : (
        <div className="flex justify-center items-center">
          {searchData.map((blog) => (
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
                <Link
                  to={`/blogsdetail/${blog.id}`}
                  className="text-themeRed py-2 hover:opacity-80 mt-3 block"
                >
                  Learn More <FaArrowRightLong className="inline mx-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
