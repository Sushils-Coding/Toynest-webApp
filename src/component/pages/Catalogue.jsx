import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ToySearchUI from '../ToySearchUI';
import ToyCardComponent from '../ToyCardComponent';
import toys from '../../data/Toy';

const Catalogue = () => {
  const [filteredToys, setFilteredToys] = useState(toys);
  const toyCardRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='p-[10px] h-[80px]'>
        <Navbar />
      </div>
      <div className='min-h-[100vh]'>
        <ToySearchUI onSearch={setFilteredToys} scrollTargetRef={toyCardRef} />
        <div ref={toyCardRef}>
          <ToyCardComponent toys={filteredToys} showNavbar={false} showSearch={false} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalogue;
