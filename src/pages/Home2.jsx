import React from 'react'
import IconCards from '../shared/IconCards'
import { serviceCardImgDesc, testimonials, whyUsList } from '../constants'
import bgImg from '../assets/images/Gallery/11.webp'
import { FaExternalLinkAlt } from "react-icons/fa";
import aboutImg from '../assets/images/about_img.webp'
import ServiceCards from '../shared/ServiceCards';
import SolarBrands from '../components/SolarBrands';
import GallerySection from '../components/GallerySection';
import SolarBatteryStorage from '../components/SolarBatteryStorage';
import Testimonials from '../components/Testimonials';
import ProductAndService from '../components/ProductAndService';
import { useInView } from 'react-intersection-observer';

const Home2 = () => {

  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger only once
    threshold: 0.5,     // Load when 50% is visible
  });

  return (
    <div className='w-full'>
      {/* Brief About  */}
      <section ref={ref} className={`w-full bg-[#f2fff2] flex flex-col py-5 md:py-10 md:flex-row items-center gap-x-10 justify-between fade-in ${inView ? 'fade-in-visible' : ''}`}>
        <div className='w-full md:w-1/2 p-4 relative'>
          {/* img */}
          <img src={aboutImg} loading='lazy' className='w-full h-auto object-cover rounded-lg transform translate-z-10' alt="about_img" />

          {/* shadow */}
          <div className='absolute inset-x-0 bottom-0 rounded-lg h-24 bg-gradient-to-t from-green-500 to-transparent opacity-50 animate-gradient-y' />
        </div>

        {/* desc */}
        <div className='w-full md:w-1/2 p-4'>
          <h2 className='font-semibold text-xl sm:text-2xl md:text-4xl py-4'>About Kangroo Solar</h2>
          <p className='my-2 text-sm md:text-base text-balance'>
            Solar Kangroo is one of the most experienced solar panels companies across Brisbane, Melbourne & sydeny. At Solar Kangroo, we provide the best solar panels, solar batteries, and solar inverters. As top solar providers in Brisbane, Melbourne & Sydney, We self-assuredly stand by our comprehensive solar system with our years of capability and specialisation in the solar industry. By cutting out any middle-person, we offer solar panels in Brisbane, Melbourne & Sydney with affordable solar system deals. Our solar panels in Brisbane cost are highly level-headed with more exceptional system quality. Over the years, we have generated loyal business relationships with finest solar products. Solar system price with us are exceedingly cost-effective. We are considered as the best solar system suppliers & providers in and across Brisbane, Melbourne & Sydney.
          </p>
          <button type="button" className='primary-btn mt-4 cursor-pointer'>
            <span>Know More</span>
            <FaExternalLinkAlt className="ml-2" />
          </button>
        </div>

      </section>

      {/* Why Kangroo Solar? */}
      <section className='w-full flex py-5 px-5 md:px-10 flex-col justify-start gap-y-4 bg-cover bg-no-repeat relative' style={{ backgroundImage: `url(${bgImg})` }}>
        {/* description */}
        <div className='w-full px-5 md:px-10 text-white z-10 mt-10 max-w-5xl'>
          <h2 className='font-semibold text-2xl'>Why Kangroo Solars?</h2>
          <p className='py-2 my-5'>Family Owned Solar Installation Company</p>
          <p className='text-md tracking-wide '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio voluptate aliquam laboriosam neque deserunt, harum incidunt in voluptas id unde sunt quisquam consectetur, dolores dolor quam magni enim illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio voluptate aliquam laboriosam neque deserunt, harum incidunt in voluptas id unde sunt quisquam consectetur, dolores dolor quam magni enim illum</p>
        </div>

        <div className="w-full max-w-6xl mx-auto border-t-4 border-[white] mb-5" />

        {/* icons card */}
        <IconCards list={whyUsList} />

        {/* below is for black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </section>


      {/* Solar battery & Storage / Discount Component */}
      <SolarBatteryStorage />

      {/* 1 to 1 Service product provides */}
      <ServiceCards list={serviceCardImgDesc} />

      {/* Testimonials */}
      <section className='w-full py-10 md:py-14 px-5' aria-label='testimonial-section'>
        <h2 className='text-left md:text-center pb-2 font-semibold text-[#a9c37a] text-2xl md:text-3xl'>Clients Testimonials</h2>
        <h3 className='text-left md:text-center pb-2 font-semibold text-black text-2xl md:text-3xl'>Here's what our clients say about us</h3>
        <Testimonials list={testimonials} />
      </section>

      {/* Gallery Section */}
      <GallerySection />

      {/* Solar brand we install */}
      <section className='w-full h-full py-10 border-t-2 border-b-2 border-gray-300'>
        <SolarBrands />
      </section>

      {/* Solar System Products */}
      <ProductAndService />
    </div>
  )
}

export default Home2