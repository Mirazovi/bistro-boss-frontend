import axios from "axios"
import { useContext } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../firebase/AuthProvider";

 const axiosSecure = axios.create({
    baseURL:'http://localhost:8000'
})
const useAxiosSecure = () => {
  const navigate = useNavigate();
  const {logOut} = useContext(AuthContext)
        // request interceptor to add authorization header for secure call 
    axiosSecure.interceptors.request.use(function(config){
      const token = localStorage.getItem('access-token')
      console.log('requested stopped by interceptors',token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },function(error){
      return Promise.reject(error)
    })
            // intercepts 401 and 403 status 
    axiosSecure.interceptors.response.use(function(response){
      return response;
    },async(error)=>{
      const status = error.response.status;
      if(status === 401 || status === 403 ){
       await logOut()
        navigate('/login')
      }
      return Promise.reject(error)
    }
  )
  return axiosSecure;
}

export default useAxiosSecure