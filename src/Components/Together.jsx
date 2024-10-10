import React from "react";

const Together = () => {
  return (
    <div className="text-[#000000] font-poppins max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-6xl font-semibold text-center mb-4">
        Lets Design Together
      </h2>
      <p className="text-center mb-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
        lectus netus in. Aliquet donec morbi convallis pretium
      </p>
      <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
        <input
          type="email"
          placeholder="Enter Your Email"
          className="flex-grow px-4 py-2 bg-[#F8F8F8] text-[#797979] rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-colors duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Together;
