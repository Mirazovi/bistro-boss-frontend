import React from 'react'
import HeroSection from '../../Components/home/HeroSection'
import Category from '../../Components/home/Category'
import Recommended from '../../Components/home/Recommended'

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <Category/>
      <Recommended/>
    </div>
  )
}

export default HomePage