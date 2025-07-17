import React from 'react'
import { Link } from "react-router-dom"
import img from "../../assets/img.png"
const Navbar = () => {
  const item =[
    {path:"/", name:"Home"},
    {path:"/menu", name:"Menu"},
    {path:"/about", name:"About"},
    {path:"/contact", name:"Contact"},

  ];
  return (
    <div className='bg-red-500   shadow-2xl'>
      <div className='py-5 flex justify-between px-5'>
        {/* logo section  */}
        <div className='text-4xl text-black font-semibold flex '>
          <Link className='hover:text-blue-800 border-hidden hover:scale-105 duration-500 hover:underline flex gap-4 items-center ' >
           <img src={img} alt="?" className="h-12 w-12 hover:fill-blue-500" /> khaja ghar</Link>

        </div>
        {/* blogs */}
        <div className='text-2xl flex gap-7 text-cyan-300 items-center '>
          {item.map((i)=>(
            <div>
              <a className='hover:text-white duration-300 '
              id={i.name}
               href={i.path}>
                {i.name}
                </a>
            </div>
          ))}
        </div>

      </div>

    </div>
  )
}

export default Navbar
