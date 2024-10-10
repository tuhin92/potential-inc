import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#F8F8F8] font-poppins text-[#000000] -mb-8">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-2">
            <img
              className="h-8 w-8 md:h-16 md:w-16"
              src="./Subtract.png"
              alt=""
            />
            <a className="btn btn-ghost hover:bg-transparent text-2xl md:text-5xl mt-4 md:mt-0 font-montserrat text-[#1E1E1E] inline-block font-bold">
              M<span className="text-[#545454]">umair</span>
            </a>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
              {[
                "Home",
                "About Me",
                "Services",
                "Projects",
                "Testimonials",
                "Contact",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm sm:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" className="text-[#000000] hover:text-gray-600">
              <FaFacebookF className="w-8 h-8" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-[#000000] hover:text-gray-600">
              <FaTwitter className="w-8 h-8" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-[#000000] hover:text-gray-600">
              <FaInstagram className="w-8 h-8" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-[#000000] hover:text-gray-600">
              <FaLinkedinIn className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#545454] py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-white">
            © 2023 <span className="text-[#FD6F00]">Mumair</span> All Rights Reserved, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
