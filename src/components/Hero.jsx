import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="h-[60vh] px-6 pt-[100px] bg-fixed bd-no-repeat bg-cover">
      <div className="flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-gray-600 text-center">
          Welcome to Our Blogs
        </h1>
        <p className="mt-3 text-xl sm:mt-5 sm:text-2xl max-w-3xl text-center">
          Discover the latest insights and stories from our team of experts.
        </p>
        <div className="mt-5 sm:mt-8 flex justify-center">
          <Link
            to="blogs"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-[50px] text-white bg-themeRed hover:opacity-80 sm:px-10"
          >
            Explore Our Posts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
