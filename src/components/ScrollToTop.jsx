import React, { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const scrollDuration = 300;
    const scrollStep = -window.scrollY / (scrollDuration / 10);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 10);
  };

  return (
    isVisible && (
      <motion.div
        className="fixed bottom-10 right-10 cursor-pointer"
        onClick={scrollToTop}
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <IoIosArrowDropupCircle size={50} color="red" />
      </motion.div>
    )
  );
};

export default ScrollToTop;
