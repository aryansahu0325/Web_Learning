import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Notfound from './Pages/Notfound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Kids from './Pages/Kids'
import ProductDetail from './Pages/ProductDetail'
import Navbar2 from './Components/Navbar2'


const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Navbar2/>
      <Footer/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />}/>
          <Route path='kids' element={<Kids />}/>
        </Route>
        <Route path='*' element={<Notfound />} />
        <Route path='/product/:id' element={<ProductDetail />}/>
      </Routes>

    </div>
  )
}

export default App