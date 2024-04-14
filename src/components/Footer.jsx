import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import logo from "../assets/images/transparent-logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    {
      title: "Services",
      links: [
        "Custom Software Development",
        "Web Development",
        "Mobile App Development",
        "Cloud Computing Services",
        "Quality Assurance and Testing",
        "UI/UX Designing",
        "Maintenance and Support",
        "Dev Ops",
        "Blockchain Solutions",
      ],
    },
    {
      title: "Company",
      links: ["Feedback", "Partnership", "Terms & Condition"],
    },
    {
      title: "Join",
      links: ["Careers at Metalogic", "Internships"],
    },
  ];

  return (
    <motion.div
      className="bg-gray-900 p-3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center items-center gap-4 py-6">
        <FaInstagram size={30} color="white" />
        <FaFacebook size={30} color="white" />
        <IoLogoWhatsapp size={30} color="white" />
        <FaLinkedin size={30} color="white" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-white">
        <p className="text-xl font-medium">Subscribe to our newsletter</p>
        <input
          type="email"
          className="max-w-[300px] w-full px-4 py-2 pl-10 rounded-lg text-black focus:outline-none focus:rounded-lg focus:border-transparent border-1"
          placeholder="Your Email Address"
        />
        <button className="bg-themeRed text-white p-2 rounded-lg hover:opacity-80">
          Subscribe
        </button>
      </div>
      <div className="max-w-[1240px] w-full mx-auto flex flex-wrap md:flex-row gap-y-4 justify-between items-start text-white mt-9 pb-4 px-5 md:px-0">
        <div>
          <div className="flex items-start gap-6">
            <img src={logo} alt="metalogic-nepal" width={80} height={80} />
            <div className="flex-col ">
              <p className="text-3xl text-white font-semibold">Metalogic</p>
              <p className="text-white font-semibold text-md">
                Software Private Company
              </p>
            </div>
          </div>
          <p className="text-white font-semibold text-sm flex items-center gap-3 mt-3">
            <FaLocationDot size={20} />
            Saptakhel, Lalitpur (Head office)
          </p>
          <p className="text-white font-semibold text-sm flex items-center gap-3 mt-3">
            <FaPhone size={20} />+ 977 9851353599
          </p>
          <p className="text-white font-semibold text-sm flex items-center gap-3 mt-3">
            <MdMarkEmailUnread size={20} />
            info@metalogic.com.np
          </p>
        </div>
        {footerLinks.map((link, index) => (
          <div key={index} className="flex-col">
            <p className="text-xl font-semibold">{link.title}</p>
            {link.links.map((item, i) => (
              <p key={i} className="font-semibold text-sm mt-1">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="max-w-[1240px] w-full mx-auto text-start text-md font-semibold text-white pb-4 px-5 md:px-0">
        &copy; Copyright 2024 MetaLogic. All rights reserved.
      </div>
    </motion.div>
  );
};

export default Footer;
