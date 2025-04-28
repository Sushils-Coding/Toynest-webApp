import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';
import FAQ from '../FAQ';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-gradient-to-b from-purple-50 to-purple-100'>
      <div className='p-[10px] h-[80px]'>
        <Navbar />
      </div>
      <div className='min-h-[50vh] p-5'>
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h2
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.02,
                textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              A Subscription Designed to <span className='text-amber-400'>Grow</span> with Your <span className='text-amber-400'>Child</span>
            </motion.h2>

            {/* Tagline para */}
            <motion.p
              className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-bold tracking-wide"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.02,
                textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              Explore <span className='text-purple-800'>1000+ expertly curated toys, delivered to your doorstep,</span> and <span className='text-purple-800'>exchange them</span> when it's time for something new!
            </motion.p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                className="px-8 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/pricing')}
              >
                Explore Plans
              </motion.button>
              <motion.button
                className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/catalogue')}
              >
                Explore Catalogue
              </motion.button>
            </div>
          </div>
        </section>
      </div>
      <FAQ />
      <Footer />
    </div>
  )
}

export default About;