import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar/Navbar';
import Hero from './component/hero/Hero';
import Cards from './component/videoCards/Cards';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='h-[100vh] bg-gray-400 relative'>
        <div className='p-[10px]'>
        <Navbar/>
        </div>
        <Hero/>
        <Cards/>
      </div>
    </>
  )
}

export default App