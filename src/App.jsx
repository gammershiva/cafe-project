import React from 'react'
import Navbar from './pages/Nabvar/Navbar'
import { BrowserRouter } from 'react-router-dom'
import Hero from './pages/body/hero/Hero'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Hero/>
    
    </BrowserRouter>
    </>
  )
}

export default App
