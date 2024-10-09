import React from "react";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="font-poppins py-6 md:py-20">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left">
          <h4 className="text-[#000000] font-semibold text-[20px] md:text-[24px]">
            Hi I am
          </h4>
          <h3 className="text-[#FD6F00] text-xl md:text-2xl font-semibold">
            Muhammad Umair
          </h3>
          <div className="font-bold text-[60px] md:text-[100px] text-[#000000]">
            <h1 className="text-[50px] md:text-[70px] font-bold">UI & UX</h1>
            <h1 className="text-[50px] md:text-[70px] font-bold ml-0 md:ml-28">
              Designer
            </h1>
          </div>
          <p className="py-6 text-base md:text-xl text-[#000000]">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed <br />{" "}
            massa nibh lectus netus in. Aliquet donec morbi convallis <br />{" "}
            pretium. Turpis tempus pharetra.
          </p>
          <button className="btn border-none text-white font-normal bg-[#FD6F00] px-4 py-2 md:py-3 md:px-6">
            Hire Me
          </button>
        </div>

        <div>
          <div className="border border-red-200 h-[300px] w-[300px] md:h-[450px] md:w-[450px] rounded-full mt-8 lg:mt-0 relative">
            <img
              src="./first.png"
              className="absolute inset-0 h-full w-full rounded-full"
              alt="Profile"
            />
          </div>
          <div className="gap-4 flex justify-center mt-6">
            <FaFacebook className="text-black h-8 w-8"/>
            <FaTwitter className="text-black h-8 w-8"/>
            <FiInstagram className="text-black h-8 w-8"/>
            <IoLogoLinkedin className="text-black h-8 w-8"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
