import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaExternalLinkAlt } from "react-icons/fa";

const ServiceCards = ({ list }) => {

    const navigate = useNavigate();

    return (
        <>
            {
                list && list.map((item, index) => (
                    <section key={index} className={`w-full bg-[#f2fff2] flex flex-col py-5 md:py-10 ${index % 2 == 0 ? 'md:flex-row' : 'md:flex-row-reverse'}  items-center justify-between gap-x-10`}>
                        <div className='w-full md:w-1/2 p-4 relative'>
                            {/* img */}
                            <img src={item.img} className='w-full md:max-w-lg h-auto object-conver rounded-lg transform translate-z-10' alt="service_img" />

                            {/* shadow */}
                            <div className='absolute inset-x-0 bottom-0 rounded-lg h-24 bg-gradient-to-t from-green-500 to-transparent opacity-50 animate-gradient-y' />
                        </div>

                        {/* desc */}
                        <div className='w-full md:w-1/2 p-4'>
                            <h2 className='font-semibold text-xl sm:text-2xl md:text-4xl py-4'>{item?.heading}</h2>
                            <p className='my-2 text-sm md:text-base text-balance'>
                                {item.desc}
                            </p>
                            <button type="button" onClick={() => navigate(item?.href)} className='primary-btn mt-4 cursor-pointer'>
                                <span>Learn More</span>
                                <FaExternalLinkAlt className="ml-2" />
                            </button>
                        </div>

                    </section>
                ))
            }
        </>
    )
}

export default ServiceCards