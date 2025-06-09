import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Banner from './Components/banner/Banner'

function App() {


  return (
    <>
      <Navbar />
      <Banner/>
    </>
  )
}

export default App
