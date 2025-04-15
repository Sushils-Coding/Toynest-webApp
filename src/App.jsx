import { useState } from 'react'
import './App.css'
// import Navbar from './component/Navbar';
// import Hero from './component/Hero';
// import Cards from './component/Cards';
// import FAQ from './component/FAQ';
import Home from './component/pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter([
    {
      path: "/about",
      element: <App />,
    },
  ])

  return (
    <>
      <Home />
    </>
  )
}

export default App