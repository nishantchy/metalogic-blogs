import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
  };
  return (
    <div className="h-[40vh] w-full bg-gray-900 flex justify-center items-center">
      <div className="max-w-[1240px] mx-auto w-full">
        <div className="text-center">
          <p className="text-white text-3xl md:text-5xl font-semibold">
            Explore our latest blogs
          </p>
          <p className="text-white font-semibold">Be a part of our journey</p>
        </div>
        <div className="relative z-1 shadow-md max-w-[300px] mx-auto mt-5">
          <form action="" onSubmit={handleSubmit}>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="w-full px-4 py-2 pl-10 rounded-lg bg-gray-100 focus:outline-none  focus-within:shadow-lg focus:border-transparent"
              placeholder="Search...Example:blockchain"
            />
            <button
              type="submit"
              className="absolute inset-y-0 left-0 flex items-center pl-3 focus:outline-none"
            >
              <CiSearch className="w-5 h-5 text-gray-400 hover:text-gray-600 focus:text-blue-500" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
