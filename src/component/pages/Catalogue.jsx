import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ToySearchUI from '../ToySearchUI';

const Catalogue = () => {
  return (
    <>
      <div className=' p-[10px] h-[80px]'>
        <Navbar />
      </div>
      <div className=' min-h-[100vh]'>
        <ToySearchUI />
      </div>
      <Footer />
    </>
  )
}

export default Catalogue;