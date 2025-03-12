import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
    return (
       <div className='bg-white w-full shadow-lg fixed top-0 z-10'>
         <div className='flex justify-between items-center p-2 py-4 w-[90%] mx-auto '>
            <div>
                <h1>My Resturent</h1>
            </div>
            <div className='flex gap-6 items-center'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/order">Order</Link>
                <Link to="/services">Services</Link>
            <div>
                <button className='bg-[#2f96d3] py-1 px-3 rounded-md text-white'>Contact Now</button>
            </div>
            </div>
        </div>
       </div>
    )
}

export default Navbar