import React, { useEffect, useRef, useState } from 'react'
import { navLinks, services } from '../constants'
import { Link, useLocation } from 'react-router-dom'
import { MdKeyboardArrowDown as ArrowDown } from "react-icons/md";
import { FiPhoneCall as Call } from "react-icons/fi";
import { TfiEmail as Email } from "react-icons/tfi";
import DropDownMenu from '../shared/DropDownMenu';
// add logo

const TopBar = () => {
  const topbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (topbarRef.current)
        if (window.scrollY > 70) {
          topbarRef.current.classList.add('hidden-bar');
        } else {
          topbarRef.current.classList.remove('hidden-bar');
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={topbarRef} className="fade-out border underline-offset-auto fixed top-0 left-0 w-full bg-white flex justify-between items-center md:px-28 py-4 z-50 transition-all duration-300 ease-in-out">
      <Link to={'/'} className='flex items-center w-1/4'>
        {/* <img src={logo} aria-labelledby='company-logo' alt="Company Logo" className='h-14 w-auto inline-block' /> */}
        <span className="font-bold text-2xl">Kangroo Solar</span>
      </Link>
      <div className='flex items-center justify-between cursor-pointer px-6'>
        <div className='flex items-center justify-between gap-x-6'>
          <div className='flex items-center gap-x-2'>
            <Call className='text-2xl text-[#]' />
            <div className='flex flex-col justify-start'>
              <p className='text-xs text-gray-400'>Phone</p>
              <p className="font-semibold text-blue-500">+1 234 567 890</p>
            </div>
          </div>

          <div className='flex items-center gap-x-2'>
            <Email className='text-2xl text-[#627945]' />
            <div className='flex flex-col justify-start'>
              <p className='text-xs text-gray-400'>Send Email</p>
              <a className="font-semibold text-blue-500" href='mailto:info@solar.com'>
                info@solar.com
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceHover, setIsServiceHover] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleToggle() {
      if (window.scrollY > 70) setIsScrolled(true);
      else setIsScrolled(false);
    }

    window.addEventListener('scroll', handleToggle);
    return () => {
      window.removeEventListener('scroll', handleToggle);
    }
  }, []);


  return (
    <>
      <TopBar />
      <nav className={`w-full shadow-lg flex items-center justify-between md:px-28 mx-auto fixed py-4 left-0 z-40 transition-all duration-300 ease-in-out ${isScrolled
        ? 'top-0 bg-gray-800 text-primary bg-opacity-90 text-gray-300'
        : 'top-[4rem] bg-transparent text-gray-800'
        }`}>
        <ul className='flex items-center justify-start gap-x-10 py-2'>
          {
            navLinks.map((item) => (
              <li key={item.name} className={`relative group ${location.pathname == item.href ? 'text-blue-600' : ''}`}
                onMouseEnter={() => item.isDropdown && setIsServiceHover(true)}
                onMouseLeave={() => item.isDropdown && setIsServiceHover(false)}
              >
                <Link to={item.href} className='flex items-center max-md:hidden max-md:text-sm text-lg'>
                  <item.icon style={{ marginRight: '6px', width: '1.2rem', height: '1.2rem' }} />
                  {item.name}

                  {/* rendering arrow down for services */}
                  {item.name === "Services" && (
                    <ArrowDown className='ml-1 w-6 h-6 transition-transform duration-300 transform group-hover:rotate-180' />
                  )}

                  {/* Render dropdown on hover for 'Services' */}
                  {isServiceHover && item.isDropdown && <DropDownMenu list={services} />}
                  <span className='absolute left-0 bottom-[-4px] w-0 h-[4px] bg-blue-500 transition-all duration-300 group-hover:w-full'></span>
                </Link>
              </li>
            ))
          }
        </ul>
        <button className='primary-btn' aria-labelledby='button-for-demo'>Request A Quote</button>
      </nav>
    </>
  )
}

export default Navbar