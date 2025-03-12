import React from 'react'

const MenuItem = ({item}) => {
  return (
    <>
    <div className='bg-[#f3f3f3] rounded-lg p-4 text-center'>
    <img className='w-full h-[250px] rounded-lg' src={item?.image} alt="" />
    <p className='text-sm font-semibold pt-2'>{item?.recipe}</p>
    <div className='flex justify-between items-center '>
    <h1 className='text-xl font-bold py-2'>{item?.name}</h1>
    <p className='text-xl font-bold'>${item?.price}</p>
    </div>
</div>

 </>
  )
}

export default MenuItem