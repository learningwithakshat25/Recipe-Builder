import React from 'react'
import { IoIosTrendingUp } from "react-icons/io";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-full md:h-[400px] h-full flex flex-col items-center justify-center gap-6 container mx-auto'>
      <h1 className='md:text-6xl text-4xl text-center'>Welcome to <span className='font-medium text-[#DE752E]'>Recipe-Builder</span></h1>
      <div className="upper text-center md:w-[700px] font-medium">
      <p>This tool makes it super easy for anyone — whether you're a home cook or a chef — to create and manage your own recipes. Simply type in the ingredients you need, along with their quantity and units (like grams, cups, or ml).</p>
      </div>
      <Link to='/userDashboard'><button className='bg-[#DE752E] text-white rounded-md py-2 px-6 text-2xl font-medium shadow shadow-black  hover:scale-110 cursor-pointer flex flex-row items-center justify-center gap-3'>Get Started <IoIosTrendingUp/></button></Link>
    </div>
  )
}

export default Hero