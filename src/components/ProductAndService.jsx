import React from 'react'
import { useNavigate } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";
import { useInView } from 'react-intersection-observer';

const cards = [
    {
        name: 'Commercial Solar',
        desc: 'Reduce your energy overheads and let your business shield electricity charges.',
        img: '../assets/images/product_service/commercial_solar.webp',
    },
    {
        name: 'Residential Solar',
        desc: 'High-quality solar power system, effectively trim down your residential energy costs.',
        img: '../assets/images/product_service/residential_solar.webp',
    },
    {
        name: 'Hybrid & Battery Storage',
        desc: 'Maximise your solar consumption and offer backup power right in a blackout situation.',
        img: '../assets/images/product_service/battery_storage.webp',
    },
    {
        name: 'EV Chargers',
        desc: 'Reduce your energy overheads and let your business shield electricity charges.',
        img: '../assets/images/product_service/ev_charges.webp',
    },
    {
        name: 'Heat Pump systems',
        desc: 'Hot Water Systems uses electricity or gas and provides hot water to family\'s daily...',
        img: '../assets/images/product_service/heat_pump.webp',
    },
    {
        name: 'Roof cleaning',
        desc: 'Maximise your solar consumption and offer backup power right in a blackout situation.',
        img: '../assets/images/product_service/root_cleaning.avif'
    }
]


const ProductAndService = () => {

    const navigate = useNavigate();
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section className="w-full px-4 py-6 md:py-12">
            <div
                className="flex flex-col justify-start items-start text-left md:text-center"
                aria-label="product-service-offer"
            >
                <h1 className="w-full font-bold tracking-tight text-xl md:text-3xl lg:text-4xl text-pretty text-left md:text-center">
                    Our Solar System Products and Services
                </h1>
                <p className="text-justify md:text-center tracking-wide text-sm md:text-base py-5 text-gray-700 leading-relaxed">
                    We are a professional supplier of solar power panels and provide all our customers with services that ensure energy efficiency. We offer the best commercial and home-based solar power systems in Brisbane. Our solar panel systems are shaped to meet local energy requirements, capitalizing on solar energy needs. We offer highly effective solar panels from global brands. Our high-quality solar batteries are needed by those who live off the grid or desire to store energy for future use. Our Solar battery in Brisbane comes in handy for saving extra power and enabling you to keep the energy formed at peak hours.
                </p>

                {/* Render cards */}
                <div ref={ref} className={`w-full my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 fade-in ${inView ? 'fade-in-visible' : ''}`}>
                    {cards &&
                        cards.map((item, index) => (
                            <div
                                key={index}
                                className={`flex flex-col justify-between items-center p-5 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out hover:shadow-2xl bg-white`}
                            >
                                <div className="w-full h-40 md:h-48 lg:h-64 overflow-hidden rounded-lg">
                                    <img
                                        src={item.img}
                                        alt="service-product-img"
                                        className="w-full h-full object-cover rounded-lg"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="font-semibold text-lg md:text-xl tracking-wide py-3 text-center text-gray-900">
                                    {item.name}
                                </h3>
                                <p className="text-sm md:text-base text-gray-600 tracking-wide opacity-80 mt-2 mb-4 text-center">
                                    {item.desc}
                                </p>
                                <button
                                    type="button"
                                    className="text-[#66cc00] hover:text-white hover:bg-[#191d1f] px-4 py-2 text-center text-sm md:text-base tracking-wide rounded-lg transition-all duration-300 flex items-center"
                                    onClick={() => navigate('/')}
                                    aria-label="learn more"
                                >
                                    Read More
                                    <GoArrowUpRight className="text-lg ml-2" />
                                </button>
                            </div>
                        ))}
                </div>
            </div>
        </section>

    )
}

export default ProductAndService