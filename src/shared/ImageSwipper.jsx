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
        <main className='relative w-full mt-8 h-screen overflow-hidden'>
            <section className='flex transition-transform duration-500'>
                <div className='flex transition-transform duration-700 ease-in-out' style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }} >
                    {heroImages.map((image, index) => (
                        <div className="w-full flex-shrink-0 h-full" key={`original-${index}`}>
                            <img src={image} className='w-full h-full object-cover' alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 bg-gray-800 transform -translate-y-1/2 text-white rounded-full p-3 shadow-lg"
                >
                    <LeftArrow className="text-xl text-gray-400 opacity-50 hover:opacity-100" />
                </button>
                {/* Right Arrow */}
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 bg-gray-800 transform -translate-y-1/2 text-gray-600 rounded-full p-3 shadow-lg"
                >
                    <RightArrow className="text-xl text-gray-400 opacity-50 hover:opacity-100" />
                </button>
            </section>
        </main>
    )
}

export default ImageSwipper