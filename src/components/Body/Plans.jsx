import React from 'react'

const Plans = () => {
  return (
    <>
      <div className='py-[100px]'>
            <div className='max-w-[1000px] mx-auto md:grid grid-cols-3 gap-7'>
                <div className="shadow-xl h-[300px] border border-black hover:scale-105 duration-300">first</div>
                <div className="shadow-xl h-[300px] border border-black bg-gray-300 hover:scale-105 duration-300">second</div>
                <div className="shadow-xl h-[300px] border border-black hover:scale-105 duration-300">third</div>
            </div>
      </div>
    </>
  )
}

export default Plans
