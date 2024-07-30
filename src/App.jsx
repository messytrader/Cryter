import React from 'react'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Coin from './pages/Coin/Coin'
import Footer from './components/Navbar/Footer/Footer'
function App() {


  return (
  <>
  <div className='app'>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/coin/:coinId' element={<Coin/>}/>
   </Routes>
   <Footer/>
  </div>
  </>
  )
}

export default App
