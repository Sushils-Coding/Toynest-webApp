import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const NotFound = () => {
  return (
    <>
      <div className="p-[10px] h-[80px]">
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-bounce mb-8">
            <h1 className="text-9xl font-bold text-amber-400">404</h1>
          </div>
          <div className="animate-pulse mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Oops! Page Not Found</h2>
            <p className="text-xl text-gray-600">Looks like this toy wandered off to another playground!</p>
          </div>
          <Link 
            to="/"
            className="inline-block bg-amber-400 text-white font-bold px-8 py-3 rounded-full 
                     hover:bg-amber-500 transition-colors duration-300 
                     transform hover:scale-105 hover:rotate-2"
          >
            Return to Toy Box
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
