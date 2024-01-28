'use client'
import { AlignRight, X } from 'lucide-react';
import React, { useState } from 'react';
import { Profile } from '../profile';
import Link from 'next/link';
import { BsGlobe } from 'react-icons/bs';
import Logo from '../logo';


const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 3, text: 'Dashboard' },
    { id: 4, text: 'Login' },
    { id: 5, text: 'Register' },
  ];

  return (
    <div className='bg-gray-100 flex items-center h-24 w-full px-4 text-gray-700 font-bold'>
      {/* Logo */}
      <Link href='/' className='text-xl font-bold  mr-auto md:mr-0'><Logo /></Link>
      <div className='md:order-1 mr-2 md:mr-1'>
        <Profile />
      </div>
            <div className='hidden md:block w-full ml-2'>
              <form>   
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative w-full flex-1">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input type="search" id="default-search" className="block flex-1 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required />
                      <button type="submit" className="absolute end-2.5 bottom-2.5 mb-1 font-medium rounded-lg text-sm px-4 py-2.8"><BsGlobe size={20}/></button>
                  </div>
              </form>
            </div>
      

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <X /> : <AlignRight />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-300 ease-in-out duration-500 z-10'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>Eatier</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <Link href='/'
            key={item.id}
            className='p-4 block border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>
            {item.text}
          </Link>
        ))}

            <div className='w-full mr-1'>
              <form>   
                  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                  <div className="relative w-full">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                          </svg>
                      </div>
                      <input type="search" id="default-search" className="block flex-1 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search " required />
                      <button type="submit" className="absolute end-2.5 bottom-2.5 mb-1 font-medium rounded-lg text-sm px-4 py-2.8"><BsGlobe size={20}/></button>
                  </div>
              </form>
            </div>

      </ul>
    </div>
  );
};

export default Navbar;