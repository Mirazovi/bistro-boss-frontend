import React, { useContext } from 'react'
import { Link } from 'react-router'
import { AuthContext } from '../../../firebase/AuthProvider'
import { ShoppingCart } from '../../Icons/Icons';
import useCarts from '../../../hooks/useCarts';
import useAdmin from '../../../hooks/useAdmin';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin()
    const [cart] = useCarts();
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className='bg-white w-full shadow-lg fixed top-0 z-10'>
            <div className='flex justify-between items-center p-2 py-4 w-[90%] mx-auto '>
                <div>
                    <h1>My Resturent</h1>
                </div>
                <div className='flex gap-6 items-center'>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/order">Order</Link>
                    {
                        user && isAdmin && <Link to={'/dashboard/adminHome'}>Dashboard</Link>
                    }
                    {
                        user && !isAdmin && <Link to={'/dashboard/home'}>Dashboard</Link>
                    }
                    <Link to={'/dashboard/cart'} className="btn">
                        <div className="badge badge-secondary text-xl p-2"><ShoppingCart/>+{cart.length}</div>
                    </Link>
                    {
                        user ?
                            <div className='flex gap-2 items-center '>
                                <span className='text-purple-800'>{user?.email}</span>
                                <button onClick={handleLogOut} className='text-red-600 text-xl font-bold'>Logout</button>
                            </div>
                            :
                            <Link to="/login">Login</Link>

                    }
                    <div>
                        <button className='bg-[#2f96d3] py-1 px-3 rounded-md text-white'>Contact Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar