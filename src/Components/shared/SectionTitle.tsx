import React from 'react'

const SectionTitle = ({heading,subheading}) => {
  return (
    <div className='flex justify-center flex-col items-center my-10 text-center'>
        <h1 className='text-purple-600 text-xl'>{heading}</h1>
        <p className='text-3xl border-t-4 border-b-4 mt-4'>{subheading}</p>
    </div>
  )
}

export default SectionTitle