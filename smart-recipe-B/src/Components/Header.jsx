import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full h-fit p-2 flex flex-row items-center justify-between container mx-auto sticky top-0  bg-transparent backdrop-blur'>
        <div className="left flex flex-row items-center justify-center gap-1">
        <img className='h-20' src="/logo.png" alt="" />
        <Link to='/'><h1 className='text-xl font-medium'>Recipe-<span className='text-[#DE752E]'>Builder</span></h1>
</Link>
        </div>
        <div className="right">
            <ul className='flex flex-row items-center justify-center gap-10 font-medium'>
                <li className='hover:text-[#DE752E] cursor-pointer'>Home</li>
                <li className='hover:text-[#DE752E] cursor-pointer'>Explore</li>
                <li className='hover:text-[#DE752E] cursor-pointer'>About US</li>
            </ul>
        </div>
    </div>
  )
}

export default Header