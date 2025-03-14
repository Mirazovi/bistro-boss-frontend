import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import useAxiosPublic from '../hooks/useAxiosPublic'
import { useNavigate } from 'react-router'

const Social = () => {

    const {googleLogin} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const signInWithGoogle = () =>{
        googleLogin()
        .then(result =>{
            const userInfo ={
                name: result?.user?.displayName,
                email: result?.user?.email,
            }
            axiosPublic.post('/users',userInfo)
            .then(res =>{
                console.log(res.data);
                    navigate('/')
            })
        })
    }
  return (
    <div className='flex flex-col justify-center'>
        <p className='py-2 text-center'>Sign In With Google</p>
        <button onClick={signInWithGoogle} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Google</button>
    </div>
  )
}

export default Social