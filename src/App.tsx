
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import CommonLayout from './layouts/CommonLayout'
import HomePage from './pages/Home'
// import AboutPage from './pages/About'
// import ServicePage from './pages/Services'
import MenuPage from './pages/menu'
import OrderPage from './pages/order'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import PrivateRoute from './firebase/PrivateRoute'
import DashboardLayout from './layouts/DashboardLayout'
import Cart from './Components/Dashboard/Cart'
import ContactPage from './pages/contact'
import AllUsers from './Components/Dashboard/AllUsers'

function App() {

  return (
    <>
      
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<CommonLayout/>} >
                  <Route index element={<HomePage/>}/>
                  {/* <Route path='about' element={<AboutPage/>}/> */}
                  <Route path='menu' element={<MenuPage/>}/>
                  <Route path='order' element={<PrivateRoute><OrderPage/></PrivateRoute>}/>
                  <Route path='contact' element={<ContactPage/>}/>
                  <Route path='login' element={<LoginPage/>}/>
                  <Route path='register' element={<RegisterPage/>}/>
                  {/* <Route path='services' element={<ServicePage/>}/> */}
            </Route>
            <Route path='dashboard' element={<PrivateRoute><DashboardLayout/></PrivateRoute>}>
                     <Route path='cart' element={<Cart/>}></Route> 
                     <Route path='allUsers' element={<AllUsers/>}></Route> 
            </Route>
          </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
