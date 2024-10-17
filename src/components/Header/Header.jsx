import React, { useState } from 'react';
import { RiMenuFold3Fill, RiMenuUnfold3Fill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi"; 
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-scroll';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='navbar max-w-[1240px] mx-auto bg-gradient-to-r from-red-900 to-black px-4 py-1 border-b border-black shadow sticky top-0 z-50 opacity-95'>
        <div className='max-w-[1240px] flex justify-between mx-2 py-[10px] items-center'>
          {/* Logo or Brand Name */}
          <div className='text-[10px] font-semibold sm:text-[20px] md:text-3xl text-white'>
            <p>JKT Boys Hostel</p>
            <p className='text-[8px] flex'>
              <FaLocationDot className="mt-1 sm:mt-[13px] mr-1" />
              <a 
                href="https://maps.app.goo.gl/pdero7HMEtvVSmnG9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:underline sm:mt-[10px]"
              >
                Muzaffarpur, Bihar
              </a>
            </p>
          </div>

          {/* Hamburger Icon for Mobile Menu */}
          <div className='flex items-center'>
            {toggle ? 
              <RiMenuUnfold3Fill onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
              :
              <RiMenuFold3Fill onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block' />
            }

            {/* Main Navigation for Desktop */}
            <ul className='hidden md:flex text-white gap-10'>

                <li >
                  <Link to="banner" smooth={true} duration={500} className='hover:text-gray-400 hover:font-bold cursor-pointer'>Home</Link>
                </li>
              <li>
                <Link to="about" smooth={true} duration ={500}  className='hover:text-gray-400 hover:font-bold cursor-pointer'>About</Link>
              </li>
              <li>
                <Link to="service" smooth={true} duration={500}  className='hover:text-gray-400 hover:font-bold cursor-pointer'>Facility</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500}  className='hover:text-gray-400 hover:font-bold cursor-pointer'>Contact</Link>
              </li>
              <li>
                <Link to="gallery" smooth="true" duration={500}  className='hover:text-gray-400 hover:font-bold cursor-pointer'>Gallery</Link>
              </li>
            </ul>

            {/* Responsive Login Button (remains outside of the mobile menu) */}
            <div className='ml-5'>
              <button className='flex items-center gap-2 bg-white text-red-900 px-3 py-2 rounded-md hover:bg-gray-200 transition-all'>
                <FiLogIn className='text-xl' /> {/* Login icon */}
                <span className='hidden md:inline'>Admin</span> {/* Show 'Login' only on medium screens and above */}
              </button>
            </div>
          </div>
        </div>

        {/* Responsive Mobile Menu */}
        <ul className={`py-2 duration-300 md:hidden text-white fixed bg-black top-[65px] text-center w-full ${toggle ? 'left-0' : 'left-[100%]'}`}>
          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
                <Link to="banner" smooth={true} duration={500}>Home</Link>
          </li>
          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
                <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
                <Link to="service" smooth={true} duration={500}>Facility</Link>
          </li>
          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
          </li>
          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
          <Link to="gallery" smooth={true} duration={500}>Gallery</Link>
          </li>

          <li className='pt-2 hover:text-gray-400 hover:font-bold cursor-pointer'>
          <Link to="testonomials" smooth={true} duration={500}>Testonomials</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
