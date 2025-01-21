import React, { useEffect, useRef, useState } from 'react'
import { navLinks, services } from '../constants'
import { Link, useLocation } from 'react-router-dom'
import { MdKeyboardArrowDown as ArrowDown } from "react-icons/md";
import { FiPhoneCall as Call } from "react-icons/fi";
import { TfiEmail as Email } from "react-icons/tfi";
import DropDownMenu from '../shared/DropDownMenu';
import { FaBars as HamburgerIcon, FaTimes as CloseIcon } from 'react-icons/fa';

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
    <div ref={topbarRef} className="hidden fade-out border underline-offset-auto fixed top-0 left-0 w-full md:flex justify-between items-center md:px-28 py-4 z-50 transition-all duration-300 ease-in-out">
      <Link to={'/'} className='items-center flex w-full md:w-1/4 mb-4 md:mb-0'>
        {/* <img src={logo} aria-labelledby='company-logo' alt="Company Logo" className='h-14 w-auto inline-block' /> */}
        <div className="font-bold text-lg md:text-2xl whitespace-nowrap text-center md:text-left">Kangroo Solar</div>
      </Link>

      <div className="md:flex flex-col hidden gap-x-5 md:flex-row md:items-center justify-between cursor-pointer gap-y-4 md:gap-y-0 px-6">
        {/* Phone */}
        <div className="flex items-center gap-x-2">
          <Call className="text-xl md:text-2xl text-gray-600" />
          <div className="flex flex-col justify-start text-center md:text-left">
            <p className="text-xs text-gray-400">Phone</p>
            <p className="font-semibold text-blue-500">+1 234 567 890</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-x-2">
          <Email className="text-xl md:text-2xl text-[#627945]" />
          <div className="flex flex-col justify-start text-center md:text-left">
            <p className="text-xs text-gray-400">Send Email</p>
            <a
              className="font-semibold text-blue-500"
              href="mailto:info@solar.com"
            >
              info@solar.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceHover, setIsServiceHover] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const location = useLocation();

  const toggleDrawer = () => setIsMenuOpen(prev => !prev);

  const handleAccordionToggle = (index) => setActiveAccordion((prev) => (prev === index ? null : index));

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
      {/* TopBar Component */}
      <TopBar />

      {/* Navbar Component */}
      <nav
        className={`w-full shadow-lg flex pt-4 pb-0 md:pb-4 items-center justify-between md:px-28 mx-auto fixed left-0 z-40 transition-all duration-300 ease-in-out ${isScrolled
          ? 'top-0 bg-gray-800 text-primary bg-opacity-90 text-gray-300'
          : 'md:top-[4rem] top-0 bg-transparent bg-white text-gray-800'
          }`}
      >

        {/* Mobile-only: Hide navbar and keep hamburger in topbar */}
        <div className="flex items-center justify-between md:hidden w-full">
          <Link to={'/'} className='items-center flex w-full mb-3 px-2'>
            {/* <img src={logo} aria-labelledby='company-logo' alt="Company Logo" className='h-14 w-auto inline-block' /> */}
            <div className="font-bold text-lg md:text-2xl whitespace-nowrap text-center md:text-left truncate">Kangroo Solar</div>
          </Link>

          <button
            className="text-gray-800 bg-gray-200 p-2 rounded-md focus:outline-none absolute top-2 right-2"
            onClick={toggleDrawer}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <CloseIcon className="w-6 h-6" />
            ) : (
              <HamburgerIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex md:flex-row flex-col md:items-center items-start justify-start md:justify-center gap-y-4 md:gap-y-0 gap-x-10 py-2 absolute md:relative md:top-auto md:left-auto top-full left-0 w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out ${isMenuOpen ? 'hidden' : 'hidden'} md:flex`}
        >
          {navLinks.map((item) => (
            <li
              key={item.name}
              className={`relative group ${location.pathname === item.href ? 'text-blue-600' : ''
                }`}
              onMouseEnter={() => item.isDropdown && setIsServiceHover(true)}
              onMouseLeave={() => item.isDropdown && setIsServiceHover(false)}
            >
              {item.isDropdown ? (
                <div className="flex items-center text-sm md:text-lg cursor-pointer">
                  <item.icon
                    style={{ marginRight: '6px', width: '1.2rem', height: '1.2rem' }}
                  />
                  {item.name}
                  <ArrowDown className="ml-1 w-6 h-6 transition-transform duration-300 transform group-hover:rotate-180" />

                  {/* render sublist  */}
                  {isServiceHover && item.isDropdown && (
                    <DropDownMenu list={services} />
                  )}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[4px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </div>
              ) : (
                <Link to={item.href} className="flex items-center text-sm md:text-lg">
                  <item.icon
                    style={{ marginRight: '6px', width: '1.2rem', height: '1.2rem' }}
                  />
                  {item.name}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[4px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Drawer Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}
          onClick={toggleDrawer}
        ></div>

        {/* Drawer */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          <button
            className="absolute top-2 right-3 z-50 text-white p-2 focus:outline-none"
            onClick={toggleDrawer}
            aria-label="Close Drawer"
          >
            <CloseIcon className="w-6 h-6" />
          </button>


          <div className="flex flex-col items-start gap-y-4 px-4 py-6 bg-gray-800 text-white h-full w-full md:w-72 lg:w-80 shadow-lg">
            <h2 className="text-2xl font-bold text-blue-500 mb-6">Menu</h2>
            {navLinks.map((item, index) => (
              <li
                key={item.name}
                className={`relative list-none group flex flex-col w-full ${location.pathname === item.href
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-blue-500'
                  } rounded-lg px-4 py-3 cursor-pointer transition-all duration-300`}
              >
                {item.isDropdown ? (
                  <>
                    <div
                      className="flex items-center justify-between w-full"
                      onClick={() => handleAccordionToggle(index)}
                    >
                      <div className="flex items-center gap-x-3">
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm md:text-lg font-medium">{item.name}</span>
                      </div>
                      <span
                        className={`w-6 h-6 transition-transform duration-300 transform ${activeAccordion === index ? 'rotate-180' : ''
                          }`}
                      >
                        <ArrowDown className='w-full h-full' />
                      </span>
                    </div>

                    {/* Accordion smooth animation*/}
                    <ul
                      className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${activeAccordion === index ? 'max-h-screen' : 'max-h-0'
                        }`}
                    >
                      {services.map((service) => (
                        <li key={service.name} className="pl-9 py-2">
                          <Link
                            to={service.href}
                            className="text-sm text-gray-300 hover:text-blue-500 transition-all"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center gap-x-3 w-full"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-sm md:text-lg font-medium">{item.name}</span>
                  </Link>
                )}
              </li>
            ))}
          </div>

        </div>
      </nav>
    </>

  )
}

export default Navbar