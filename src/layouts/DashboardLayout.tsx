import React from 'react'
import { NavLink, Outlet } from 'react-router'
import { AddItemIcon, AllUserIcon, ContactIcon, HomeIcon, MenuIcon, OrderIcon, ReservationIcon, ShoppingCart } from '../Components/Icons/Icons'
import useAdmin from '../hooks/useAdmin';

const DashboardLayout = () => {

  const [isAdmin] = useAdmin();
  return (
    <div className='flex w-[80%] mx-auto'>

    {/* Side bar */}
    <div className='w-64 min-h-screen bg-orange-400 p-6'>
      <ul>
        {
          isAdmin ? <>
            <li className='mt-4'>
              <NavLink to={'/dashboard/adminHome'} 
                className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
                <HomeIcon /> Admin Home
              </NavLink>
            </li>
            <li className='mt-4'>
              <NavLink to={'/dashboard/addItems'}
                className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
                <AddItemIcon /> Add Items
              </NavLink>
            </li>
            <li className='mt-4'>
              <NavLink to={'/dashboard/manageItems'}
                className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
                <ShoppingCart /> Manage Items
              </NavLink>
            </li>
            <li className='mt-4'>
              <NavLink to={'/dashboard/manageBookings'}
                className={({ isActive }) => isActive ? 'btn btn-primary w-full flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
                <ShoppingCart /> Manage Bookings
              </NavLink>
            </li>
            <li className='mt-4'>
              <NavLink to={'/dashboard/allUsers'}
                className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
                <AllUserIcon /> All Users
              </NavLink>
            </li>
          </>
            :
          <>
            <li className='mt-4'>
              <NavLink to={'/dashboard/home'}
                className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
                <HomeIcon /> User Home
              </NavLink>
            </li>
            <li className='mt-4'>
              <NavLink to={'/dashboard/reservation'}
                className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
                <ReservationIcon /> Reservation
              </NavLink>
            </li>
            <li className='mt-4'>
              <NavLink to={'/dashboard/cart'}
                className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
                <ShoppingCart /> My Cart
              </NavLink>
            </li>
          </>
        }

        {/* Divider */}
        <div className="divider"></div>

        <li className='mt-4'>
          <NavLink to={'/'}
            className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
            <HomeIcon /> Home
          </NavLink>
        </li>
        <li className='mt-4'>
          <NavLink to={'/menu'}
            className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
            <MenuIcon /> Menu
          </NavLink>
        </li>
        <li className='mt-4'>
          <NavLink to={'/order'}
            className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
            <OrderIcon /> Order
          </NavLink>
        </li>
        <li className='mt-4'>
          <NavLink to={'/contact'}
            className={({ isActive }) => isActive ? 'btn btn-primary w-full text-xl flex gap-2 items-center' : 'w-full text-xl flex gap-2 items-center'}>
            <ContactIcon /> Contact
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Outlet */}
    <div className='flex-1 p-10'>
      <Outlet />
    </div>
  </div>
  )
}

export default DashboardLayout