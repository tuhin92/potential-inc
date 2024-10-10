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
        <div className="font-sans text-gray-900 my-12">
            <h2 className="text-3xl lg:text-6xl font-semibold text-center">Testimonials</h2>
            <p className="text-center mt-4 max-w-2xl mx-auto text-sm lg:text-base">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus
                netus in. Aliquet donec morbi convallis pretium.
            </p>

            <div className="relative w-full mx-auto px-4 py-16 lg:overflow-hidden">
                <div className="flex justify-center items-center relative space-x-4 lg:space-x-8">
                    {[{ index: prevIndex, position: 'left' }, { index: currentIndex, position: 'center' }, { index: nextIndex, position: 'right' }]
                        .map(({ index, position }) => (
                            <motion.div
                                key={testimonials[index].id}
                                className={`w-5/6 sm:w-1/2 lg:w-1/3 flex-shrink-0 ${
                                    position === 'center' ? 'z-10' : 'z-0 opacity-50'
                                }`}
                                initial={{ opacity: 0, x: position === 'left' ? -100 : position === 'right' ? 100 : 0 }}
                                animate={{ opacity: position === 'center' ? 1 : 0.5, x: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="bg-[#F8F8F8] rounded-md p-4 lg:p-8 transform transition-transform">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={testimonials[index].image}
                                            alt={testimonials[index].name}
                                            className="w-12 h-12 lg:w-16 lg:h-16 rounded-full mr-4"
                                        />
                                    </div>
                                    <p className="text-gray-700 italic text-sm lg:text-base mb-8">&ldquo;{testimonials[index].quote}&rdquo;</p>
                                    <div className="absolute bottom-4 left-4">
                                        <h3 className="text-sm lg:text-lg font-semibold">{testimonials[index].name}</h3>
                                        <p className="text-gray-600 text-xs lg:text-sm">{testimonials[index].role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>

                <div className="flex justify-center mt-8">
                    {testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full mx-1 ${
                                index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
