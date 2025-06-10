import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Banner from './Components/banner/Banner'
import MovieCards from './Components/cards/MovieCards'

function App() {


  return (
    <>
      <Navbar />
      <Banner/>
      <MovieCards catagory='Action Thrillers' genre={28}/>
      <MovieCards catagory='Comedy' genre={35}/>
      <MovieCards catagory='Horror' genre={27}/>
      <MovieCards catagory='Romance' genre={10749}/>      
    </>
  )
}

export default App
