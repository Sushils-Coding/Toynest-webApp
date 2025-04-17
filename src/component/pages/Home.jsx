import React from 'react';

import Navbar from '../../component/Navbar';
import Hero from '../../component/Hero';
import Cards from '../../component/Cards';
import FAQ from '../../component/FAQ';
import Footer from '../../component/Footer';
import { SpotlightCard } from '../spotlight-card';

const Home = () => {
  return (
    <div className=' h-[100vh] bg-gray-400 relative'>
      <div className=' p-[10px]'>
        <Navbar />
      </div>
      <Hero />
      <Cards />
      <FAQ />
      {/* <SpotlightCard /> */}
      <Footer />
    </div>
  )
}

export default Home
