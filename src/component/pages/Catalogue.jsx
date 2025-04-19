import React, { useEffect} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ToySearchUI from '../ToySearchUI';
import ToyCardComponent from '../ToyCardComponent';

const Catalogue = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  })
  return (
    <>
      <div className=' p-[10px] h-[80px]'>
        <Navbar />
      </div>
      <div className=' min-h-[100vh]'>
        <ToySearchUI />
        <ToyCardComponent/>
      </div>
      <Footer />
    </>
  )
}

export default Catalogue;