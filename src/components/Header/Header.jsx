import React, { useState } from 'react'
import { RiMenuFold3Fill } from "react-icons/ri";
import { RiMenuUnfold3Fill } from "react-icons/ri";

// import Navbar from '../Navbar/Navbar'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className='bg-red-900 p-4'>
        <div className='max-w [1240px  flex justify-between   mx-2 py-3 items-center' >
          <div className='text-3xl'>
            JKT Hostel
          </div>

          {
            toggle ? 
            <RiMenuUnfold3Fill onClick={() =>  setToggle(!toggle)} className='text-white 2xl md:hidden block' /> 
            :
            <RiMenuFold3Fill onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden  block' />

          }



          <ul className= ' hidden md:flex text-white gap-10'>
            <li>Home</li>
            <li>About</li>
            <li>Facility</li>
            <li>Contact</li>
          </ul>

          {/* // responsive menu */}

          <ul className= {` duration-300  md:hidden text-white fixed bg-black left-[100%] top-[56px] text-center w-full ${toggle ? 'left-[0] ': 'left-[100%]' } `}>
            <li className='p-5 '>Home</li>
            <li className='p-5'>About</li>
            <li className='p-5'>Facility</li>
            <li className='p-5' >Contact</li>
          </ul>
          
        </div>
      </div>
        
    </>
  )
}

export default Header
