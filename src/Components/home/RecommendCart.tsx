import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../firebase/AuthProvider';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCarts from '../../hooks/useCarts';

interface ItemType {
  _id: string;
  name: string;
  image: string;
  price: number;
  recipe?: string;
}

interface PropTypes {
  item: ItemType;
}
const RecommendCart = ({item}:PropTypes) => {

  const {_id,name,image,price} = item;
  const axiosSecure = useAxiosSecure();

  const {user} = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation()
  const [,refetch] = useCarts()


  const handleAddCart = () =>{

   if(user && user.email){
        // send cart to the database 
        const cartItem = {
          menuId:_id,
          email:user.email,
          name,
          image,
          price,
        }
        axiosSecure.post('/carts',cartItem)
        .then(res  =>{
          console.log(res.data);
         if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} Added To the Cart`,
            showConfirmButton: false,
            timer: 1500
          });
          // refetch cart 
          refetch();
         }
        })
   }else{
    Swal.fire({
      title: "Your are not Login",
      text: "Please Login Then Add To Cart",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Login!"
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/login',{state:{from:location}})

      }
    });
   }
  }
  return (
    <div className='bg-[#f3f3f3] rounded-lg p-4 text-center'>
          <img className='w-full h-[250px] rounded-lg' src={image} alt="" />
          <h1 className='text-xl font-bold py-2'>{name}</h1>
          <p className='text-sm font-semibold'>{item?.recipe}</p>
          <div className='flex justify-center items-center mt-4'>
          <button onClick={handleAddCart} className='py-3 px-6 rounded-lg text-xl bg-[#e8e8e8] text-[#bb8506] border-b-4 border-[#bb8506] '>Add To Cart</button>
          </div>
    </div>
  )
}

export default RecommendCart