import React from 'react'
import img from "../../../assets/coffee pic.jpg"
import img1 from "../../../assets/cafe.jpg"

const About = () => {
    return (
        <div className='mx-auto  max-w-7xl my-12'>
            <div className='flex flex-col md:flex-row items-center'>
                {/* image section */}
                <div className='relative'>
                    <img src={img} alt="error"
                        className='rounded-xl w-full h-96 object-cover'
                        priority />
                    <div className='absolute -bottom-5 -right-5 bg-white p-2 shadow-lg rounded'>
                        <img src={img1} alt="alt"
                            width={128}
                            height={128}
                            className='rounded-xl'
                        />

                    </div>

                </div>
                {/* content */}
                <div className='md:w1/2 md:pl-12 p-4'>
                <h2 className='text-3xl md:text-4xl font-serif font-bold mb-4'>
                    Our coffee story
                </h2>
                <p className='text-gray-600 mb-6'>
                    Founded in 2010,we source premium beans directly from sustainable farms. our master roasters craft each batch with precion and care.

                </p>
                  <div className='grid grid-cols-2 gap-4 mb-6'>
                    {[
                        "Ethical Sourcing",
                        "Small Batches",
                        "Artisan Roasting",
                        "community focus",
                    ].map((i)=>(
                        <div key={i} className='flex items-center '>
                            <div className='mr-2 text-amber-600'>✔</div>
                            <span>{i}</span>

                        </div>
                    ))
                    
                    
                    }

                  </div>
                </div>
            </div>
        </div>
    )
}

export default About
