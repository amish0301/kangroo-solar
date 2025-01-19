import React, { useEffect, useState } from 'react'
import { navLinks, services } from '../constants'
import { Link } from 'react-router-dom'
import { MdKeyboardArrowDown as ArrowDown } from "react-icons/md";
import DropDownMenu from '../shared/DropDownMenu';

const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isServiceHover, setIsServiceHover] = useState(false);

  useEffect(() => {
    function handleToggle() {
      if (window.scrollY > 100) setIsScrolled(true);
      else setIsScrolled(false);
    }

    window.addEventListener('scroll', handleToggle);
    return () => {
      window.removeEventListener('scroll', handleToggle);
    }
  }, []);


  return (
    <nav className={`flex items-center w-full md:px-28 mx-auto dark:dark-theme py-4 transition-all duration-300 ease-in-out ${!isScrolled ? 'bg-transparent' : 'bg-gray-800 text-primary shadow-lg bg-opacity-90 sticky top-0 z-50'}`}>
      <Link to="/" className='flex-1'>
        <h1 className='text-2xl font-semibold'>Kangroo Solar</h1>
      </Link>
      <ul className='flex items-center justify-end gap-x-10'>
        {
          navLinks.map((item) => (
            <li key={item.name} className='relative group'
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
    </nav>
  )
}

export default Navbar