import React, { useState } from "react";

const ManualProgressBar = ({ value, label }) => {
    return (
        <div className="my-4">
            <div className="flex justify-between mb-1">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="relative w-full bg-gray-200 h-2 rounded-full">
                <div
                    className="bg-[#FD6F00] h-2 rounded-full"
                    style={{ width: `${value}%` }}
                ></div>
                {/* Smaller circle with a colored border and gray center */}
                <div
                    className="absolute top-0 transform -translate-y-1/2 w-4 h-4 rounded-full border border-[#FD6F00] bg-gray-200"
                    style={{ left: `${value}%`, top: '50%' }}
                ></div>
            </div>
        </div>
    );
};

const About_me = () => {
    const [progressValues] = useState([
        { label: 'UX', value: 90 },
        { label: 'Website Design', value: 80 },
        { label: 'App Design', value: 95 },
        { label: 'Graphics Design', value: 75 },
    ]);

    return (
        <div>
            <div className="font-poppins py-6 md:py-20 px-6 md:px-0 text-[#000000]">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="border border-red-200 h-[300px] w-[300px] md:h-[450px] md:w-[450px] rounded-full mt-8 lg:mt-0 relative">
                        <img
                            src="./second.png"
                            className="absolute inset-0 h-full w-full rounded-full"
                            alt="Profile"
                        />
                    </div>

                    <div className="text-center lg:text-left">
                        <h4 className="text-[#000000] font-semibold text-4xl md:text-6xl py-2">
                            About Me
                        </h4>
                        <p className="py-6 text-base md:text-xl text-[#000000]">
                            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa <br /> nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis <br /> tempus pharetra
                        </p>
                        <div className='w-full md:w-4/5 '>
                            {progressValues.map((progress, index) => (
                                <ManualProgressBar key={index} value={progress.value} label={progress.label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About_me;
