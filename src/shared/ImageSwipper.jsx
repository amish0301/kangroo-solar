import React, { useEffect, useState } from 'react'
import { SlArrowRight as RightArrow, SlArrowLeft as LeftArrow } from "react-icons/sl";

const ImageSwipper = ({ heroImages }) => {

    const [currentIndex, setCurrentIndex] = useState(0);


    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + 1) % heroImages.length
        );
    };


    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 4000);

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <main className="relative w-full mt-8 min-h-screen md:h-screen overflow-hidden bg-gray-900">
            {/* Slider Section */}
            <section className="relative flex transition-transform duration-500">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {heroImages.map((image, index) => (
                        <div
                            key={`slide-${index}`}
                            className="w-full flex-shrink-0 h-screen relative bg-gray-800"
                        >
                            {/* Image */}
                            <img
                                src={image}
                                className="w-full h-full object-cover"
                                alt={`Slide ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>

                {/* Left Arrow (Hidden on Mobile) */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 hidden md:block top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white rounded-full p-2 shadow-md z-10 hover:bg-opacity-90 focus:outline-none md:p-3"
                    aria-label="Previous Slide"
                >
                    <LeftArrow className="w-3 h-3 md:w-5 md:h-5" />
                </button>

                {/* Right Arrow (Hidden on Mobile) */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 hidden md:block top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-70 text-white rounded-full p-2 shadow-md z-10 hover:bg-opacity-90 focus:outline-none md:p-3"
                    aria-label="Next Slide"
                >
                    <RightArrow className="w-3 h-3 md:w-5 md:h-5" />
                </button>
            </section>
        </main>

    )
}

export default ImageSwipper