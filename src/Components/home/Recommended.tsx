import React from 'react'
import SectionTitle from '../shared/SectionTitle'
import RecommendCart from './RecommendCart';
import useMenu from '../../hooks/useMenu';


const Recommended = () => {
  const [menus] = useMenu();
  const recommend = menus.filter(item => item.category === 'offered')
  return (
    <>
    <SectionTitle title={'-- Should I Try --'} subTitle={'CHEF RECOMMENDS'}>

    </SectionTitle>
    <div className='lg:w-[70%] mx-4 lg:mx-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        recommend?.map((item,idx) => <RecommendCart key={idx} item={item}></RecommendCart>)
      }
    </div>
    </>
  )
}

export default Recommended
