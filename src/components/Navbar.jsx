import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/transparent-logo.png";
import { BiX, BiMenuAltRight } from "react-icons/bi";
import { useScroll, motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const { scrollYProgress } = useScroll();

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-10 bg-white  shadow-xl p-3  backdrop-filter backdrop-blur-lg bg-opacity-70">
        <div className="max-w-[1240px] w-full mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center justify-between w-full md:w-auto">
            <img src={logo} alt="metalogic-nepal" width={80} height={80} />
            <p className="hidden md:block ml-5 text-3xl font-bold text-gray-950">
              Metalogic
            </p>
            <div className="block md:hidden" onClick={toggleNav}>
              {nav ? (
                <BiX size={30} className="text-themeRed" />
              ) : (
                <BiMenuAltRight size={30} className="text-themeRed" />
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <ul
              className={`flex flex-col md:flex md:flex-row justify-center gap-7 font-semibold text-center ${
                nav ? "flex" : "hidden"
              } md:flex`}
            >
              <li className="relative group">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `hover:text-themeRed duration-300 ${
                      isActive
                        ? "text-themeRed after:content-[''] after:absolute after:left-0 after:-bottom-2  after:w-3/4 after:h-1 after:bg-themeRed"
                        : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `hover:text-themeRed duration-300 ${
                      isActive
                        ? "text-themeRed after:content-[''] after:absolute after:left-0 after:-bottom-2  after:w-3/4 after:h-1 after:bg-themeRed"
                        : ""
                    }`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/career"
                  className={({ isActive }) =>
                    `hover:text-themeRed duration-300 ${
                      isActive
                        ? "text-themeRed after:content-[''] after:absolute after:left-0 after:-bottom-2  after:w-3/4 after:h-1 after:bg-themeRed"
                        : ""
                    }`
                  }
                >
                  Careers
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `hover:text-themeRed duration-300 ${
                      isActive
                        ? "text-themeRed after:content-[''] after:absolute after:left-0 after:-bottom-2 after:w-3/4 after:h-1 after:bg-themeRed after:mt-2"
                        : ""
                    }`
                  }
                >
                  Blogs(i)
                </NavLink>
              </li>
              <li className="relative group">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `hover:text-themeRed duration-300 ${
                      isActive
                        ? "text-themeRed after:content-[''] after:absolute after:left-0 after:-bottom-2  after:w-3/4 after:h-1 after:bg-themeRed"
                        : ""
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>
            </ul>
            <div
              className={`bg-themeRed text-white font-medium rounded-[50px] px-3 py-2 ${
                nav ? "flex" : "hidden"
              } md:flex hover:opacity-80`}
            >
              Get in Touch
            </div>
          </div>
        </div>
      </nav>
      <motion.div
        className={`transform  sticky top-[97px] h-[10px] w-full bg-themeRed origin-left`}
        style={{
          scaleX: scrollYProgress,
        }}
      ></motion.div>
    </>
  );
};

export default Navbar;
