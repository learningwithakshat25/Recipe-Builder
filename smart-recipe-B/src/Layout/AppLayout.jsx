import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import {Outlet} from 'react-router-dom'


const AppLayout = () => {
  return (
   <>
   <Header/>
   <div className='w-screen flex flex-col items-center justify-center gap-15 container mx-auto p-10'>
    <Outlet/>
   </div>
   <Footer/>
   </>
  )
}

export default AppLayout