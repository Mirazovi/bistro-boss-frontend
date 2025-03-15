import React from 'react'
import useMenu from '../../hooks/useMenu'
import { DeleteIcon, EditIcon } from '../Icons/Icons'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../hooks/useAxiosSecure'

const ManageItems = () => {
    const axiosSecure = useAxiosSecure()
    const [menus,,refetch] = useMenu()
    const handleMenuDelete = (menu) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menus/${menu._id}`);
                if(res?.data?.deletedCount > 0){
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                }
          
            }
          });
    }
    console.log(menus);
  return (
    <div className="overflow-x-auto">
        <div className='flex justify-evenly items-center mb-10'>
            <h1 className='text-2xl'>Manage Item</h1>
            <p className='text-3xl font-bold'>Total Items : {menus.length}</p>
        </div>
    <table className="table-auto mx-auto w-[80%]">
        <thead>
            <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Image</th>
                <th className="px-4 py-2 text-left">Item Name</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Update</th>
                <th className="px-4 py-2 text-left">Delete</th>
            </tr>
        </thead>
        <tbody>
            {menus.map((menu, index) => (
                <tr key={menu._id} className="hover:bg-gray-100">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">
                        <img src={menu.image} alt={menu.name} className="w-16 h-16 object-cover rounded-2xl" />
                    </td>
                    <td className="px-4 py-2">{menu.name}</td>
                    <td className="px-4 py-2">${menu.price}</td>
                    <td className="px-4 py-2">
                        <button
                            className="text-blue-500 hover:text-orange-200  hover:underline flex justify-center items-center p-4 rounded-md bg-orange-400 text-2xl"
                        >
                            <EditIcon/>
                        </button>
                    </td>
                    <td className="px-4 py-2">
                        <button
                        onClick={()=>handleMenuDelete(menu)}
                            className="text-white hover:text-orange-200  hover:underline flex justify-center items-center p-4 rounded-md bg-orange-400 text-2xl"
                        >
                            <DeleteIcon/>
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
  )
}

export default ManageItems