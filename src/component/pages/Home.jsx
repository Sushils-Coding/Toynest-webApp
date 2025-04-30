import React, { useEffect} from 'react';

import Navbar from '../../component/Navbar';
import Hero from '../../component/Hero';
import Cards from '../../component/Cards';
import FAQ from '../../component/FAQ';
import Footer from '../../component/Footer';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <div className=' h-[100vh] bg-gray-400 relative'>
      <div className=' p-[10px]'>
        <Navbar />
      </div>
      <Hero />
      <Cards />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
