import React from "react";

const Projects = () => {
  return (
    <div className="py-12 font-poppins text-[#000000]">
      <h2 className="text-[#1E1E1E] text-4xl lg:text-6xl font-semibold text-center">
        My Projects
      </h2>
      <p className="text-center mt-6">
        Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris
        est risus <br /> lectus. Phasellus consequat urna tellus
      </p>

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

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {/* 1st */}
        <div>
          <div className="relative bg-[#FFEBDB] h-[489px] w-[425px] rounded-2xl">
            <img
              className="absolute right-6 top-0 w-64 h-[489px] object-cover object-right-bottom"
              src="./12.png"
              alt=""
            />
            <img
              className="absolute left-6 top-[84px] w-64 h-[405px] object-cover object-top"
              src="./11.png"
              alt=""
            />
          </div>
          <h4 className="text-xl text-[#FD6F00] mt-10">Web Design</h4>
          <h2 className="text-2xl font-bold mt-3">
            AirCalling Landing Page Design{" "}
          </h2>
        </div>

        {/* 2nd  */}
        <div>
          <div className="relative bg-[#FFEBDB] h-[489px] w-[425px] rounded-2xl">
            <img
              className="absolute right-6 top-0 w-64 h-[489px] object-cover object-right-bottom"
              src="./21.png"
              alt=""
            />
            <img
              className="absolute left-6 top-[84px] w-64 h-[405px] object-cover object-top"
              src="./22.png"
              alt=""
            />
          </div>
          <h4 className="text-xl text-[#FD6F00] mt-10">Web Design</h4>
          <h2 className="text-2xl font-bold mt-3">
            Business Landing Page Design
          </h2>
        </div>

        {/* 3rd  */}
        <div>
          <div className="relative bg-[#FFEBDB] h-[489px] w-[425px] rounded-2xl">
            <img
              className="absolute right-6 top-0 w-64 h-[489px] object-cover object-right-bottom"
              src="./31.png"
              alt=""
            />
            <img
              className="absolute left-6 top-[84px] w-64 h-[405px] object-cover object-top"
              src="./32.png"
              alt=""
            />
          </div>
          <h4 className="text-xl text-[#FD6F00] mt-10">Web Design</h4>
          <h2 className="text-2xl font-bold mt-3">Ecom Web Page Design</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
