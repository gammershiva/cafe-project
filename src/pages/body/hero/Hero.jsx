import React from 'react'
import img from "../../../assets/cafe.jpg"
const Hero = () => {
  return (
    <div className='relative h-screen'>

      <div className='absolute inset-0 overflow-hidden '>
        <img src={img}          alt="error" className='h-full w-full object-cover ' />
      </div>
      
      {/* content */}
      <div  className=' absolute inset-0 flex flex-col justify-center items-center text-center text-black px-4 '>
        <h1 className='mb-6 text-4xl font-bold sm:text-5xl md:text-7xl'>welcome to <span className='text-amber-300'>Brew Haven</span></h1>
        <p className='mb-8 text-md sm:text-4xl text-blue-600 font-semibold'>
         Where every cup of tells a story
        </p>


        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0'>
          
          <button className='rounded-full bg-amber-600 px-8 py-3 font-semibold text-white hover:text-red-600 transition hover:bg-gray-100'>
            View Menu
          </button>
          <button className='rounded-full bg-red-600 px-8 py-3 font-semibold text-white hover:text-black transition hover:bg-gray-100'>
            View Menu
          </button>

        </div>
      </div>
    </div>
  )
}

export default Hero
