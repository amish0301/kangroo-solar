import React from 'react'
import IconCards from '../shared/IconCards'
import { serviceCardImgDesc, whyUsList } from '../constants'
import bgImg from '../assets/images/whyUs-img.jpg'
import { FaExternalLinkAlt } from "react-icons/fa";
import aboutImg from '../assets/images/about_img.webp'
import ServiceCards from '../shared/ServiceCards';

const Home2 = () => {
  return (
    <div className='w-full'>
      {/* Why Kangroo Solar? */}
      <section className='w-full flex flex-col justify-start gap-y-4 relative'>
        {/* description */}
        <div className='w-full p-5 text-white z-10 mt-10'>
          <h2 className='font-semibold text-2xl'>Why Kangroo Solars?</h2>
          <p className='py-2 my-5'>Family Owned Solar Installation Company</p>
          <p className='text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio voluptate aliquam laboriosam neque deserunt, harum incidunt in voluptas id unde sunt quisquam consectetur, dolores dolor quam magni enim illum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, optio voluptate aliquam laboriosam neque deserunt, harum incidunt in voluptas id unde sunt quisquam consectetur, dolores dolor quam magni enim illum</p>
        </div>

        {/* icons card */}
        <IconCards list={whyUsList} />

        {/* below is for black overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div> {/* Overlay */}

        <img src={bgImg} className='-z-10 absolute top-0 left-0 h-full w-full object-cover opacity-60' alt="bg-img" />
      </section>

      {/* Brief About  */}
      <section className='w-full bg-[#f2fff2] flex flex-col py-5 md:py-10 md:flex-row items-center gap-x-10 justify-between'>
        <div className='w-full md:w-1/2 p-4 relative'>
          {/* img */}
          <img src={aboutImg} className='w-full h-auto object-cover rounded-lg transform translate-z-10' alt="about_img" />

          {/* shadow */}
          <div className='absolute inset-x-0 bottom-0 rounded-lg h-24 bg-gradient-to-t from-green-500 to-transparent opacity-50 animate-gradient-y' />
        </div>

        {/* desc */}
        <div className='w-full md:w-1/2 p-4'>
          <h2 className='font-semibold text-xl sm:text-2xl md:text-4xl py-4'>About Kangroo Solar</h2>
          <p className='my-2 text-sm md:text-base'>
            Solar Kangroo is one of the most experienced solar panels companies across Brisbane, Melbourne & sydeny. At Solar Kangroo, we provide the best solar panels, solar batteries, and solar inverters. As top solar providers in Brisbane, Melbourne & Sydney, We self-assuredly stand by our comprehensive solar system with our years of capability and specialisation in the solar industry. By cutting out any middle-person, we offer solar panels in Brisbane, Melbourne & Sydney with affordable solar system deals. Our solar panels in Brisbane cost are highly level-headed with more exceptional system quality. Over the years, we have generated loyal business relationships with finest solar products. Solar system price with us are exceedingly cost-effective. We are considered as the best solar system suppliers & providers in and across Brisbane, Melbourne & Sydney.
          </p>
          <button type="button" className='primary-btn mt-4 cursor-pointer'>
            <span>Know More</span>
            <FaExternalLinkAlt className="ml-2" />
          </button>
        </div>

      </section>

      {/* 1 to 1 Service product provides */}
      <ServiceCards list={serviceCardImgDesc} />

    </div>
  )
}

export default Home2