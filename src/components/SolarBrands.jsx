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


const SolarBrands = () => {

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = (event) => {
            if (!scrollContainerRef.current) return;

            // Get the current scroll position
            const scrollAmount = event.deltaY > 0 ? 40 : -40;

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
        <section ref={scrollContainerRef} className='w-full flex overflow-x-auto gap-4 mt-5 py-10 scroll-smooth' aria-labelledby='solar-brands' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className='max-w-sm border shadow-lg border-none rounded-lg p-4 flex-shrink-0'>
                <img src={brd1} alt="brand-img" className='h-full w-full object-contain' />
            </div>
            <div className='max-w-sm border shadow-lg rounded-lg border-none p-4 flex-shrink-0'><img src={brd2} alt="brand-img" className='h-full w-full object-contain' /></div>
            <div className='max-w-sm border shadow-lg rounded-lg border-none p-4 flex-shrink-0'><img src={brd3} alt="brand-img" className='h-full w-full object-contain' /></div>
            <div className='max-w-sm border shadow-lg rounded-lg border-none p-4 flex-shrink-0'><img src={brd4} alt="brand-img" className='h-full w-full object-contain ' /></div>
            <div className='max-w-sm border shadow-lg rounded-lg border-none p-4 flex-shrink-0'><img src={brd5} alt="brand_1" className='h-full w-full object-contain ' /></div>
            <div className='max-w-sm border shadow-lg rounded-lg border-none p-4 flex-shrink-0'>
                <img src={brd6} alt="brand-img" className='h-full w-full object-contain ' />
            </div>
            <div className='max-w-sm border shadow-lg rounded-lg border-none p-4 flex-shrink-0'>
                <img src={brd7} alt="brand-img" className='h-full w-full object-contain ' />
            </div>
            <div className='max-w-sm border shadow-lg rounded-lg border-none p-4 flex-shrink-0'>
                <img src={brd8} alt="brand-img" className='h-full w-full object-contain' />
            </div>
            <div className='max-w-sm border shadow-lg rounded-lg border-none p-4 flex-shrink-0'>
                <img src={brd9} alt="brand-img" className='h-full w-full object-contain' />
            </div>
        </section>
    )
}

export default SolarBrands