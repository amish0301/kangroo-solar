import React, { useEffect, useRef } from 'react';
import brd1 from '../assets/images/solar-brands/1.webp'
import brd2 from '../assets/images/solar-brands/2.png'
import brd3 from '../assets/images/solar-brands/3.png'
import brd4 from '../assets/images/solar-brands/4.webp'
import brd5 from '../assets/images/solar-brands/5.png'
import brd6 from '../assets/images/solar-brands/6.webp'
import brd7 from '../assets/images/solar-brands/8.avif'
import brd8 from '../assets/images/solar-brands/9.avif'
import brd9 from '../assets/images/solar-brands/10.webp'
import { useInView } from 'react-intersection-observer';


const SolarBrands = () => {

    const scrollContainerRef = useRef(null);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      
    useEffect(() => {
        const handleScroll = (event) => {
            if (!scrollContainerRef.current) return;

            // Get the current scroll position
            const scrollAmount = event.deltaY > 0 ? 350 : -350;

            // Smoothly scroll horizontally
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            });
        };

        // Add event listener for the wheel event
        const scrollContainer = scrollContainerRef.current;
        scrollContainer.addEventListener("wheel", handleScroll, { passive: true });

        // Cleanup on component unmount
        return () => scrollContainer.removeEventListener("wheel", handleScroll);
    }, []);

    return (
        <div ref={ref} className={`fade-in ${inView ? 'fade-in-visible' : ''}`}>
            <h2 className='text-xl md:text-2xl font-semibold text-center pt-5'>Solar Brands We Install</h2>
            <section
                ref={scrollContainerRef}
                className="w-full flex overflow-x-auto gap-4 my-10 py-10 md:py-15 scroll-smooth"
                aria-labelledby="solar-brands"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {[
                    brd1,
                    brd2,
                    brd3,
                    brd4,
                    brd5,
                    brd6,
                    brd7,
                    brd8,
                    brd9,
                ].map((brand, index) => (
                    <div
                        key={index}
                        className="min-w-[200px] max-w-[250px] md:max-w-sm border shadow-lg rounded-lg p-4 flex-shrink-0"
                    >
                        <img
                            src={brand}
                            alt={`brand-img-${index + 1}`}
                            loading='lazy'
                            className="h-40 w-full object-contain md:h-48 lg:h-56"
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default SolarBrands