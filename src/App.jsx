import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar/Navbar'
import Banner from './Components/banner/Banner'
import MovieCards from './Components/cards/MovieCards'
import Footer from './Components/footer/Footer'
import { action,comedy,horror,romance,originals } from './urls'

function App() {


  return (
    <>
      <Navbar />
      <Banner/>
      <MovieCards catagory='Netflix orginals' genre={originals}/>
      <MovieCards catagory='Action Thrillers' genre={action}/>
      <MovieCards catagory='Comedy' genre={comedy}/>
      <MovieCards catagory='Horror' genre={horror}/>
      <MovieCards catagory='Romance' genre={romance}/>   
      <Footer/>
    </>
  )
}

export default App
