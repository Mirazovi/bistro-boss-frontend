import React from 'react'
import offeredImg from '../../../public/assets/menu/banner3.jpg'
import dessertImg from '../../../public/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../public/assets/menu/pizza-bg.jpg'
import saladImg from '../../../public/assets/menu/salad-bg.jpg'
import soupImg from '../../../public/assets/menu/soup-bg.jpg'
import MenuCategory from '../../Components/menu/MenuCategory'


import useMenu from '../../hooks/useMenu'

const MenuPage = () => {
  const [menus] = useMenu();
  const popularMenu = menus.filter(menu => menu.category === 'popular')
  const saladMenu = menus.filter(menu => menu.category === 'salad')
  const pizzaMenu = menus.filter(menu => menu.category === 'pizza')
  const dessertMenu = menus.filter(menu => menu.category === 'dessert')
  const offeredMenu = menus.filter(menu => menu.category === 'offered')
  const soupMenu = menus.filter(menu => menu.category === 'soup')
  return (
    <div>
      <MenuCategory title={'---Don not miss---'} subTitle={'TODAYS DESSERTS'} heading={'Our Menu'} subHeading={'Would you like to try dish'} coverImg={offeredImg} items={popularMenu}></MenuCategory>

      <MenuCategory title={'---Don not miss---'} subTitle={'TODAYS OFFER'} heading={'DESSERTS'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={dessertImg} items={dessertMenu}></MenuCategory>

      <MenuCategory title={'---Don not miss---'} subTitle={'TODAYS OFFER'} heading={'DESSERTS'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={pizzaImg} items={pizzaMenu}></MenuCategory>

      <MenuCategory title={'---Don not miss---'} subTitle={'TODAYS OFFER'} heading={'DESSERTS'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={saladImg} items={saladMenu}></MenuCategory>

      <MenuCategory title={'---Don not miss---'} subTitle={'TODAYS OFFER'} heading={'DESSERTS'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={offeredImg} items={offeredMenu}></MenuCategory>

      <MenuCategory title={'---Don not miss---'} subTitle={'TODAYS OFFER'} heading={'DESSERTS'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} coverImg={soupImg} items={soupMenu}></MenuCategory>

    </div>
  )
}

export default MenuPage