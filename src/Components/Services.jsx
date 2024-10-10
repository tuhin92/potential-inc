import React from "react";

const Services = () => {
  return (
    <div className="text-[#000000] text-center my-6 font-poppins">
      <h2 className="text-4xl lg:text-6xl font-semibold">Services</h2>
      <p className="my-6">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus <br /> netus in. Aliquet donec morbi convallis pretium
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center  mt-6">
        <div className="w-64 h-[270px] bg-[#F8F8F8] rounded-2xl">
          <div className="p-6">
            <img className="w-20 h-20" src="./4.png" alt="" />
            <h2 className="text-2xl font-semibold text-left mt-2">UI & UX</h2>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
        </div>

        <div className="w-64 h-[270px] bg-[#F8F8F8] rounded-2xl">
          <div className="p-6">
            <img className="w-20 h-20" src="./3.png" alt="" />
            <h2 className="text-2xl font-semibold text-left mt-2">Web Design</h2>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
        </div>

        <div className="w-64 h-[270px] bg-[#F8F8F8] rounded-2xl">
          <div className="p-6">
            <img className="w-20 h-20" src="./2.png" alt="" />
            <h2 className="text-2xl font-semibold text-left mt-2">App Design</h2>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
        </div>

        <div className="w-64 h-[270px] bg-[#F8F8F8] rounded-2xl">
          <div className="p-6">
            <img className="w-20 h-20" src="./1.png" alt="" />
            <h2 className="text-2xl font-semibold text-left mt-2">Graphic Design </h2>
            <p className="mt-2 text-sm">Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
