import React, { useContext, useState } from 'react'
import { AuthContext } from '../../firebase/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import Social from '../../firebase/Social';

const LoginPage = () => {

  const [showPassword, setShowPassword] = useState(false);
  const { loginUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    loginUser(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          title: "User Login Successfully",
          icon: "success",
          draggable: true
        });
        navigate(from, { replace: true })
      })
      .catch((error) => {
        console.error("Login Error:", error);
        alert(error.message)
      });
  }



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-center text-xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name='name'
              placeholder="Enter your name"
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
                placeholder="Enter your password"
                required
                name='password'
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
          <div className="text-right text-sm">
            <a href="#" className="text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <p>Are you knew please <Link to={'/register'} className='text-purple-800 font-bold'>Register</Link></p>
          <button type='submit' className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Submit</button>
        </form>
        <Social/>
      </div>
    </div>
  )
}

export default LoginPage