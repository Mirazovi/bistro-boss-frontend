import React from 'react'
import { NavLink, Outlet } from 'react-router'
import { AddItemIcon, AllUserIcon, ContactIcon, HomeIcon, MenuIcon, OrderIcon, ReservationIcon, ShoppingCart } from '../Components/Icons/Icons'
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {

  const [isAdmin] = useAdmin();
  return (
    <div className='flex w-[80%] mx-auto'>

      {/* side bar  */}
      <div className='w-64 min-h-screen bg-orange-400 p-6'>
        <ul>

          {
            isAdmin ? <>
              <li className='flex gap-2 items-center mt-4'>
                <NavLink to={'/dashboard/adminHome'} className={'btn btn-primary w-full text-xl'}><HomeIcon /> Admin Home</NavLink>
              </li>
              <li className='mt-4'>
                <NavLink to={'/dashboard/addItems'} className={'flex gap-2 items-center w-full text-xl'}><AddItemIcon />Add Items</NavLink>
              </li>
              <li className=' mt-4'>
                <NavLink to={'/dashboard/manageItems'} className={'flex gap-2 items-center  w-full text-xl'}><ShoppingCart />Manage Items</NavLink>
              </li>
              <li className=' mt-4'>
                <NavLink to={'/dashboard/manageBookings'} className={'flex gap-2 items-center  w-full text-xl'}><ShoppingCart />Manage Bookings</NavLink>
              </li>
              <li className=' mt-4'>
                <NavLink to={'/dashboard/allUsers'} className={'flex gap-2 items-center  w-full text-xl'}><AllUserIcon />All Users</NavLink>
              </li>
            </>
              :
              <>
                <li className='flex gap-2 items-center mt-4'>
                  <NavLink to={'/dashboard/home'} className={'btn btn-primary w-full text-xl'}><HomeIcon /> User Home</NavLink>
                </li>
                <li className='mt-4'>
                  <NavLink to={'/dashboard/reservation'} className={'flex gap-2 items-center w-full text-xl'}><ReservationIcon />Reservation</NavLink>
                </li>
                <li className=' mt-4'>
                  <NavLink to={'/dashboard/cart'} className={'flex gap-2 items-center  w-full text-xl'}><ShoppingCart />My Cart</NavLink>
                </li>
              </>
          }

          {/* divider  */}
          <div className="divider"></div>
          <li className=' mt-4'>
            <NavLink to={'/'} className={'flex gap-2 items-center  w-full text-xl'}><HomeIcon />Home</NavLink>
          </li>
          <li className=' mt-4'>
            <NavLink to={'/menu'} className={'flex gap-2 items-center  w-full text-xl'}><MenuIcon />Menu</NavLink>
          </li>
          <li className=' mt-4'>
            <NavLink to={'/order'} className={'flex gap-2 items-center  w-full text-xl'}><OrderIcon />Order</NavLink>
          </li>
          <li className=' mt-4'>
            <NavLink to={'/contact'} className={'flex gap-2 items-center w-full text-xl'}><ContactIcon />Contact</NavLink>
          </li>
        </ul>
      </div>

      {/* Outlet  */}
      <div className='flex-1 p-10'>
        <Outlet />
      </div>
    </div>
  )
}

export default DashboardLayout