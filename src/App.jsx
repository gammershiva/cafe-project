import React from 'react'
import Navbar from './pages/Nabvar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './pages/body/hero/Hero'
import About from './pages/body/about/About'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    <About/>
    
    </BrowserRouter>
    </>
  )
}

export default App
