import React from 'react'
import Navbar from './components/Navber'
import Home from './components/Home'
import Products from './components/Products'
import Featured from './components/Featured'
import Smartphones from './components/Smartphones'
import Footer from './components/Footer'

export default function page() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Products/>
      <Featured/>
      <Smartphones/>
      <Footer/>
    </div>
  )
}
