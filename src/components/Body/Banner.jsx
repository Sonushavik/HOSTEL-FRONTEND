import React from 'react'
import { ReactTyped } from "react-typed";

const Banner = () => {
  return (
    <div className='bg-red-900 w-full  py-[100px]'>
      <div className='max-w-[1240px] mx-auto my-[100px] text-center'>
                <div className='font-bold mb-4 '>
                    Learn with us
                </div>
                <h2 className='text-white font-bold text-3xl  md:text-[60px] mb-8'>Grow with us</h2>
                <div className='text-white text-2xl md:text-[50px] mt-4 font-bold '>
                    Book
                <ReactTyped
                className='pl-2' // for padding between animated string and book
                        strings={[
                            " single bed",
                            " Double bed",
                            " Tripal bed",
                        ]}
                        typeSpeed={140}
                        loop={true}
                        backSpeed={50}
                        // attr="placeholder"
                >
                </ReactTyped>

                
                </div>
                <button className= 'w-[30%] bg-black text-white p-3 font-bold rounded'>Book Now</button>
      </div>
    </div>
  )
}

export default Banner
