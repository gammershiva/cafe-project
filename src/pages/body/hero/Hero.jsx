import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className=' p-5 m-5'>
        <div className='flex justify-between '>
            <div>
                <img src="https://media.istockphoto.com/id/1400194993/photo/cappuccino-art.jpg?s=612x612&w=0&k=20&c=_nYOcyQ15cYEeUYgUzkC5qG946nkCwU06NiWKt1s8SE="
                 alt="error" className='w-[50rem]' />
            </div>
            {/* data */}
            <div className='absoulate border-hidden '>
                <div className='text-7xl flex text-center h-screen items-center  relative bottom-40 right-20'>
                   <div className='  hover:text-red-600 duration-300'> Hellow <br  />wellcome to our cafe </div>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
