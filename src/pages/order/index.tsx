import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../../Components/menu/Cover'
import orderImg from '../../../public/assets/shop/banner2.jpg'
import useMenu from '../../hooks/useMenu';
import FoodCart from '../../Components/shared/FoodCart';
const OrderPage = () => {
    const [menus] = useMenu();
    // const [tabIndex,setTabIndex] = useState('salad')
    // const categories = ['salad,pizza,soup,dessert,drinks'];
    // const {category} = useParams();
    // const initialIndex = categories.indexOf(category)

    const popularMenu = menus.filter(menu => menu.category === 'popular')
    const saladMenu = menus.filter(menu => menu.category === 'salad')
    const pizzaMenu = menus.filter(menu => menu.category === 'pizza')
    const dessertMenu = menus.filter(menu => menu.category === 'dessert')
    const offeredMenu = menus.filter(menu => menu.category === 'offered')
    const soupMenu = menus.filter(menu => menu.category === 'soup')
    return (
        <div>
            <Cover coverImg={orderImg} heading='Order Now' subHeading='gobri gabri' />
            <div className='w-[70%] mx-auto my-10'>
            {/* <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}> */}
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                <TabList>
                    <Tab>Popular Menu</Tab>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                        {
                            popularMenu?.map((item,idx) => <FoodCart key={idx} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                        {
                            saladMenu?.map((item,idx) => <FoodCart key={idx} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                        {
                            pizzaMenu?.map((item,idx) => <FoodCart key={idx} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                        {
                            soupMenu?.map((item,idx) => <FoodCart key={idx} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                        {
                            dessertMenu?.map((item,idx) => <FoodCart key={idx} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
                        {
                            offeredMenu?.map((item,idx) => <FoodCart key={idx} item={item}></FoodCart>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
            </div>
        </div>
    )
}

export default OrderPage