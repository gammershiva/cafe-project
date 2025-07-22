import React from 'react'
import Navbar from './pages/Nabvar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './pages/body/hero/Hero'
import About from './pages/body/about/About'
import Menue from './pages/body/menur/Menue'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <About/>
    <Menue/>
    
    </BrowserRouter>
    </>
  )
}

export default App
