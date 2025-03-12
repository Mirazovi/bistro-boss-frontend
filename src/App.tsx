
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import CommonLayout from './layouts/CommonLayout'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ServicePage from './pages/Services'
import MenuPage from './pages/menu'

function App() {

  return (
    <>
      
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<CommonLayout/>} >
                  <Route index element={<HomePage/>}/>
                  <Route path='about' element={<AboutPage/>}/>
                  <Route path='menu' element={<MenuPage/>}/>
                  <Route path='services' element={<ServicePage/>}/>
            </Route>
          </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
