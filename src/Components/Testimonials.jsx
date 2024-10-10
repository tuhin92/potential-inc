import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        role: "CEO",
        image: "https://i.ibb.co/QKq15D3/profile.jpg",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum.",
    },
    {
        id: 2,
        name: "Jane Smith",
        role: "Designer",
        image: "https://i.ibb.co/KjwVvLb/profile1.jpg",
        quote: "Praesent volutpat, urna eu tincidunt consectetur, nisi libero ultricies nunc, at ultrices risus nibh non nisi. Nullam euismod, nisi vel aliquam ultricies.",
    },
    {
        id: 3,
        name: "Mike Johnson",
        role: "Developer",
        image: "https://i.ibb.co/3WnjDrr/photo-2024-10-10-20-02-12.jpg",
        quote: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
        id: 4,
        name: "Emily Brown",
        role: "Marketing",
        image: "https://i.ibb.co/JxNSfmY/photo-2024-10-10-20-02-32.jpg",
        quote: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;

    return (
        <div className="font-sans text-gray-900 my-8 lg:my-12">
            <h2 className="text-2xl sm:text-3xl lg:text-6xl font-semibold text-center">Testimonials</h2>
            <p className="text-center mt-2 lg:mt-4 max-w-2xl mx-auto text-xs sm:text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
                netus in. Aliquet donec morbi convallis pretium.
            </p>

            <div className="relative w-full mx-auto px-4 py-8 sm:py-12 lg:py-16 lg:overflow-hidden">
                <div className="flex justify-center items-center relative space-x-2 sm:space-x-4 lg:space-x-8">
                    {/* For large screens show previous card */}
                    <motion.div
                        key={testimonials[prevIndex].id}
                        className="hidden lg:block w-1/3 flex-shrink-0 z-0 opacity-50"
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 0.5, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-[#F8F8F8] rounded-md p-4 lg:p-8 transform transition-transform">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonials[prevIndex].image}
                                    alt={testimonials[prevIndex].name}
                                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full mr-4"
                                />
                            </div>
                            <p className="text-gray-700 italic text-sm lg:text-base mb-8">&ldquo;{testimonials[prevIndex].quote}&rdquo;</p>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-sm lg:text-lg font-semibold">{testimonials[prevIndex].name}</h3>
                                <p className="text-gray-600 text-xs lg:text-sm">{testimonials[prevIndex].role}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Always show the center card */}
                    <motion.div
                        key={testimonials[currentIndex].id}
                        className="w-full sm:w-2/3 lg:w-1/3 flex-shrink-0 z-10"
                        initial={{ opacity: 0, x: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-[#F8F8F8] rounded-md p-4 sm:p-6 lg:p-8 transform transition-transform">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full mr-4"
                                />
                            </div>
                            <p className="text-gray-700 italic text-xs sm:text-sm lg:text-base mb-4 sm:mb-6 lg:mb-8">
                                &ldquo;{testimonials[currentIndex].quote}&rdquo;
                            </p>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-xs sm:text-sm lg:text-lg font-semibold">{testimonials[currentIndex].name}</h3>
                                <p className="text-gray-600 text-xs sm:text-sm">{testimonials[currentIndex].role}</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* For large screens show next card */}
                    <motion.div
                        key={testimonials[nextIndex].id}
                        className="hidden lg:block w-1/3 flex-shrink-0 z-0 opacity-50"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 0.5, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="bg-[#F8F8F8] rounded-md p-4 lg:p-8 transform transition-transform">
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonials[nextIndex].image}
                                    alt={testimonials[nextIndex].name}
                                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full mr-4"
                                />
                            </div>
                            <p className="text-gray-700 italic text-sm lg:text-base mb-8">&ldquo;{testimonials[nextIndex].quote}&rdquo;</p>
                            <div className="absolute bottom-4 left-4">
                                <h3 className="text-sm lg:text-lg font-semibold">{testimonials[nextIndex].name}</h3>
                                <p className="text-gray-600 text-xs lg:text-sm">{testimonials[nextIndex].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="flex justify-center mt-6 lg:mt-8">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mx-1 ${
                                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
