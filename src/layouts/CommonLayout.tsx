import React from 'react'
import { Outlet, useLocation } from 'react-router'
import Navbar from '../Components/shared/navbar/Navbar'
import Footer from '../Components/shared/footer'

const CommonLayout = () => {
  const location = useLocation()
  const noNavAndFooter = location.pathname.includes('login')
  return (
    <div>
      {noNavAndFooter ||  <Navbar/>}
        <Outlet/>
      {noNavAndFooter ||   <Footer/>}
    </div>
  )
}

export default CommonLayout