import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [toggle, settoggle] = useState(false);
  const toggleHandle = () => {
    settoggle(!toggle);
  }

  return (
    <div className='w-full h-fit p-2 flex flex-row items-center justify-between container mx-auto sticky top-0  bg-transparent backdrop-blur'>
      <div className="left flex flex-row items-center justify-center gap-1">
        <img className='h-20' src="/logo.png" alt="" />
        <Link to='/'><h1 className='text-xl font-medium'>Recipe-<span className='text-[#DE752E]'>Builder</span></h1>
        </Link>
      </div>
      <div className="right">
        <ul className='hidden md:flex flex-row items-center justify-center gap-10 font-medium'>
          <Link to='/'><li className='hover:text-[#DE752E] cursor-pointer'>Home</li></Link>
          <Link to='/userDashboard'><li className='hover:text-[#DE752E] cursor-pointer'>Explore</li>
          </Link>
          <Link to='/why'><li className='hover:text-[#DE752E] cursor-pointer'>About US</li></Link>
        </ul>
        <FaBarsStaggered onClick={toggleHandle} className='text-2xl md:hidden' />
      </div>
      {toggle &&
        <ul className='md:hidden flex flex-col gap-10 font-semibold fixed top-20 p-3 items-center justify-center w-full h-fit inset-0 z-50 backdrop-blur-lg bg-amber-100'>
          <Link onClick={toggle} to='/'><li className='hover:text-[#DE752E] cursor-pointer'>Home</li></Link>
          <Link onClick={toggle} to='/userDashboard'><li className='hover:text-[#DE752E] cursor-pointer'>Explore</li>
          </Link>
          <Link onClick={toggle} to='/why'><li className='hover:text-[#DE752E] cursor-pointer'>About US</li></Link>
        </ul>}
    </div>
  )
}

export default Header