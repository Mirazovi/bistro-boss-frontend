import React from 'react'
import MenuItem from './MenuItem'
import Cover from './Cover'
import SectionTitle from '../shared/SectionTitle'

const MenuCategory = ({items,heading,subHeading,coverImg,title,subTitle}) => {
  return (
    <>
    
    <div>
        <Cover heading='Our Menu' subHeading='Would Your try to dish' coverImg={coverImg}></Cover>
    </div>
    <div>
        <SectionTitle title={title} subTitle={subTitle}/>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:w-[70%] mx-4 lg:mx-auto'>
            {
                items?.map((item,idx) => <MenuItem key={idx} item={item}></MenuItem>)
            }
    </div>
            </>
  )
}

export default MenuCategory