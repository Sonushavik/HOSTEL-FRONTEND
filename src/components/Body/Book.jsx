import React from 'react'
import hostel from '../../assets/img/hostel_pic.jpg';


const Book = () => {
  return (
    <>
      <div className='max-w-[1240px] mx-auto my-10  h-[200px] border border-black md:grid grid-cols-2' >
            <div className='border border-[blue] h-[200px] col-span-1 md:w-[80%] text-center'>
                <img src={hostel} className='inline'></img>
            </div>
            <div className='border border-[blue] h-[200px] col-span-1 flex flex-col text-center  items-center'>
                <h1 className='text-red-900 font-bold m-2'>Something</h1>
                <p className='my-2 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum illum illo, molestiae iusto consequuntur non?</p>
                <button className= 'w-[30%] bg-black text-white p-3 font-bold rounded'>Book Now</button>
            </div>
      </div>
    </>
  )
}

export default Book
