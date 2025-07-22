import React from 'react'
import img from "../../../assets/coffee pic.jpg"

const Menue = () => {
    const menueitem = [
        {
            id: 1,
            name: "cappuccino",
            price: "$4.40",
            image: img,
            description: "rich expresso with stemed milk and silky "
        },
        {
            id: 2,
            name: "black coffee",
            price: "$3.40",
            image: img,
            description: "rich expresso with stemed milk and silky "
        },
        {
            id: 3,
            name: "tea ",
            price: "$2.40",
            image: img,
            description: "rich expresso with stemed milk and silky "
        },
        {
            id: 4,
            name: "black tea",
            price: "$1.40",
            image: img,
            description: "rich expresso with stemed milk and silky "
        },
    ]
    return (
        <div className='p-5 '>
            {/* title section */}
            <div className='flex justify-center '>
                <h1 className='text-6xl font-bold text-red-600 underline'>Our Delecous Menu</h1>
            </div>
            {/* card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
                {menueitem.map((i) => (
                    <div key={i.id}
                        className='bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-amber-100
            group '>
                        <div className='relative overflow-hidden h-48 '>
                            {/* image */}
                            <img src={i.image}
                                alt={i.name}
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />


                            {/* data section */}
                            <div className='p-6'>
                                <div className='flex justify-between items-start'>
                                    <h3 className='text-xl font-bold text-gray-800 group-hover:text-amber-700'>
                                        {i.name}


                                    </h3>
                                </div>
                            </div>

                        </div>


                    </div>
                ))}

            </div>
        </div>
    )
}

export default Menue
