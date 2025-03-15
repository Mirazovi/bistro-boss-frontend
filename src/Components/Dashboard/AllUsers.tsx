import { useQuery } from '@tanstack/react-query'
import React from 'react'
import useAxiosSecure from '../../hooks/useAxiosSecure'
import { AllUserIcon } from '../Icons/Icons';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })


    const handleMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user?._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is an Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const handleDelete = (user) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/users/${user?._id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Item has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <>
            <div className='flex justify-evenly items-center text-2xl'>
                <h1>All Users</h1>
                <h1>Total users : {users.length}</h1>
            </div>

            <div className="p-6">
                <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 text-left ">#</th>
                                <th className="px-4 py-2 text-left ">Name</th>
                                <th className="px-4 py-2 text-left ">Email</th>
                                <th className="px-4 py-2 text-left ">Role</th>
                                <th className="px-4 py-2 text-center ">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className=" hover:bg-gray-50">
                                    <td className="px-4 py-2 ">{index + 1}</td>
                                    <td className="px-4 py-2 ">{user.name}</td>
                                    <td className="px-4 py-2 ">{user.email}</td>
                                    <td className="px-4 py-2 ">
                                        {
                                            user.role === 'admin' ? 'Admin' :
                                                <button
                                                    onClick={() => handleMakeAdmin(user)}
                                                    className='bg-orange-400 btn btn-lg'><AllUserIcon /></button>
                                        }
                                    </td>
                                    <td className="px-4 py-2  flex justify-center space-x-2">
                                        <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600">
                                            Edit
                                        </button>
                                        <button
                                            className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
                                            onClick={() => handleDelete(user)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default AllUsers