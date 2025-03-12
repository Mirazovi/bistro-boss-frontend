import React from 'react'
interface propTypes {
    item:string
}
const FoodCart = ({item}:propTypes) => {
  return (
    <div className='bg-[#f3f3f3] rounded-lg p-4 text-center'>
    <img className='w-full h-[250px] rounded-lg' src={item?.image} alt="" />
    <h1 className='text-xl font-bold py-2'>{item?.name}</h1>
    <p className='text-sm font-semibold'>{item?.recipe}</p>
    <div className='flex justify-center items-center mt-4'>
    <button className='py-3 px-6 rounded-lg text-xl bg-[#e8e8e8] text-[#bb8506] border-b-4 border-[#bb8506] '>Order Now</button>
    </div>
</div>
  )
}

export default FoodCart