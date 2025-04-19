import { useState } from 'react'
import './App.css'
import Home from './component/pages/Home';
import Catalogue from './component/pages/Catalogue';
import Pricing from './component/pages/Pricing';
import ParentalInsights from './component/pages/ParentalInsights';
import Seller from './component/pages/Seller';
import About from './component/pages/About'; 
import ToyDetailPage from './component/Pages/ToyDetailPage';
import Wishlist from './component/pages/Wishlist';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/catalogue",
      element: <Catalogue />
    },
    {
      path:'/wishlist',
      element: <Wishlist />
    },
    {
      path: "/pricing",
      element: <Pricing />
    },
    {
      path: "/parental-insights",
      element: <ParentalInsights />
    },
    {
      path: "/seller",
      element: <Seller />
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/toy/:id",
       element: <ToyDetailPage />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App