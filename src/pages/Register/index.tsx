import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../firebase/AuthProvider';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Social from '../../firebase/Social';

const RegisterPage = () => {

    const axiosPublic = useAxiosPublic();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {createUser} = useContext(AuthContext)
    const {reset} = useForm();
    const navigate = useNavigate()

        const handleRegister = (e) => {
            e.preventDefault();
            const from = e.target;
            const name = from.name.value;
            const email = from.email.value;
            const password = from.password.value;
            console.log(email,password);
            const userInfo = {
              name: name,
              email: email,
            }
            createUser(email,password)
            .then(result =>{
              axiosPublic.post('/users',userInfo)
              .then(res =>{
                if(res.data.insertedId){
                  Swal.fire({
                    title: "User Register Successfully",
                    icon: "success",
                    draggable: true
                  });
                  navigate('/')
                }
              })
               
            })
            .catch(error =>{
                alert(error.message)
            })
            reset();

        }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="w-96 p-6 shadow-lg rounded-2xl bg-white">
      <h2 className="text-center text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input 
            type="text" 
            name='name'
            placeholder="Enter your full name" 
            required 
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input 
            type="email" 
            name='email'
            placeholder="Enter your email" 
            required 
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div className="relative">
          <label className="block text-sm font-medium">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name='password'
              placeholder="Enter your password"
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>
        </div>
        <div className="relative">
          <label className="block text-sm font-medium">Confirm Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm your password"
              required
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁"}
            </button>
          </div>
        </div>
        <p>Already have an account please <Link to={'/login'} className='text-purple-800 font-bold'>Login</Link></p>
        <button type='submit' className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Register</button>
      </form>
      <Social/>
    </div>
  </div>
  )
}

export default RegisterPage