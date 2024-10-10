import React from "react";
import "@fontsource/montserrat";
import "@fontsource/poppins";

const Navbar = () => {
  const NavLinks = (
    <>
      <li>
        <a href="#home" className="text-black hover:text-[#FD6F00]">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="text-black hover:text-[#FD6F00]">
          About Me
        </a>
      </li>
      <li>
        <a href="#services" className="text-black hover:text-[#FD6F00]">
          Services
        </a>
      </li>
      <li>
        <a href="#projects" className="text-black hover:text-[#FD6F00]">
          Projects
        </a>
      </li>
      <li>
        <a href="#testimonials" className="text-black hover:text-[#FD6F00]">
          Testimonials
        </a>
      </li>
      <li>
        <a href="#contact" className="text-black hover:text-[#FD6F00]">
          Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white max-w-7xl mx-auto py-8 font-poppins sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#F8F8F8] rounded-box z-[1] mt-3 w-52 p-2 shadow" // Change the background color here
          >
            {NavLinks}
          </ul>
        </div>
        <div className="flex items-center">
          <img
            className="h-8 w-8 md:h-16 md:w-16"
            src="./Subtract.png"
            alt=""
          />
          <a className="btn btn-ghost hover:bg-transparent text-2xl md:text-5xl mt-4 md:mt-0 font-montserrat text-[#1E1E1E] inline-block font-bold">
            M<span className="text-[#545454]">umair</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#FD6F00] border-none text-[#FFFFFF] text-sm md:text-base font-normal">
          Download CV
        </a>
      </div>
    </div>
  );
};

export default Navbar;
