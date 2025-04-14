import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Cards from './component/Cards';
import FAQ from './component/FAQ';


function App() {
  

  return (
    <>
      <div className=' h-[100vh] bg-gray-400 relative'>
        <div className=' p-[10px]'>
        <Navbar/>
        </div>
        <Hero/>
        <Cards/>
        <FAQ/>
        {/* <BgAnimation/> */}
      </div>
    </>
  )
}

export default App