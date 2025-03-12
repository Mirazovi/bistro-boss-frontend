import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../Components/shared/navbar/Navbar'
import Footer from '../Components/shared/footer'

const CommonLayout = () => {
  return (
    <div>
       <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default CommonLayout