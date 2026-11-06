import { useState } from 'react'

import './App.css'
import Navbar from './navbar/navbar'
import Home from './home/home'
import Service from './service/service'
import Aboutus from './aboutus/aboutus'
import Portfolio from './portfolio/portfolio'

function App() {

  return (
    <>
     <Navbar/>
     <Home/>
     <Service/>
     <Aboutus/>
     <Portfolio/>
    </>
  )
}

export default App
