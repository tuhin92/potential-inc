import React from "react";

const Projects = () => {
  return (
    <div className="py-12 font-poppins text-[#000000] px-4 mx-auto">
      <h2 className="text-[#1E1E1E] text-4xl lg:text-6xl font-semibold text-center">
        My Projects
      </h2>
      <p className="text-center mt-6 max-w-xl mx-auto text-sm sm:text-base lg:text-lg">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus lectus. Phasellus consequat urna tellus
      </p>

      {/* Filter Buttons */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        <button className="btn btn-outline ring-0 bg-[#F8F8F8] text-[#000000]">
          All
        </button>
        <button className="btn btn-outline ring-0 bg-[#F8F8F8] text-[#000000]">
          UI & UX
        </button>
        <button className="btn bg-[#FD6F00] text-[#FFFFFF] border-none">
          Web Design
        </button>
        <button className="btn btn-outline ring-0 bg-[#F8F8F8] text-[#000000]">
          App Design
        </button>
        <button className="btn btn-outline ring-0 bg-[#F8F8F8] text-[#000000]">
          Graphics Design
        </button>
      </div>

      {/* Projects Section */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* 1st Project */}
        <div>
          <div className="relative bg-[#FFEBDB] h-[350px] sm:h-[489px] w-[280px] sm:w-[425px] rounded-2xl">
            <img
              className="absolute right-3 sm:right-6 top-0 w-32 sm:w-64 h-[350px] sm:h-[489px] object-cover object-right-bottom"
              src="./12.png"
              alt=""
            />
            <img
              className="absolute left-3 sm:left-6 top-[60px] sm:top-[84px] w-32 sm:w-64 h-[290px] sm:h-[405px] object-cover object-top"
              src="./11.png"
              alt=""
            />
          </div>
          <h4 className="text-lg sm:text-xl text-[#FD6F00] mt-6 sm:mt-10">
            Web Design
          </h4>
          <h2 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-3">
            AirCalling Landing Page Design
          </h2>
        </div>

        {/* 2nd Project */}
        <div>
          <div className="relative bg-[#FFEBDB] h-[350px] sm:h-[489px] w-[280px] sm:w-[425px] rounded-2xl">
            <img
              className="absolute right-3 sm:right-6 top-0 w-32 sm:w-64 h-[350px] sm:h-[489px] object-cover object-right-bottom"
              src="./21.png"
              alt=""
            />
            <img
              className="absolute left-3 sm:left-6 top-[60px] sm:top-[84px] w-32 sm:w-64 h-[290px] sm:h-[405px] object-cover object-top"
              src="./22.png"
              alt=""
            />
          </div>
          <h4 className="text-lg sm:text-xl text-[#FD6F00] mt-6 sm:mt-10">
            Web Design
          </h4>
          <h2 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-3">
            Business Landing Page Design
          </h2>
        </div>

        {/* 3rd Project */}
        <div>
          <div className="relative bg-[#FFEBDB] h-[350px] sm:h-[489px] w-[280px] sm:w-[425px] rounded-2xl">
            <img
              className="absolute right-3 sm:right-6 top-0 w-32 sm:w-64 h-[350px] sm:h-[489px] object-cover object-right-bottom"
              src="./31.png"
              alt=""
            />
            <img
              className="absolute left-3 sm:left-6 top-[60px] sm:top-[84px] w-32 sm:w-64 h-[290px] sm:h-[405px] object-cover object-top"
              src="./32.png"
              alt=""
            />
          </div>
          <h4 className="text-lg sm:text-xl text-[#FD6F00] mt-6 sm:mt-10">
            Web Design
          </h4>
          <h2 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-3">
            Ecom Web Page Design
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
