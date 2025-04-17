import React from 'react'
import Navbar from '../Navbar';
import Footer from '../Footer';

const ParentalInsights = () => {
  return (
    <>
      <div className=' p-[10px] h-[80px]'>
        <Navbar />
      </div>
      <div className=' h-[100vh] p-5'>
        <h1>Parent Insights</h1>
      </div>
      <Footer />
    </>
  )
}

export default ParentalInsights
