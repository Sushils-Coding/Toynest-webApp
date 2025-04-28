import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import blogPosts from '../../data/BlogPosts';
import { motion, AnimatePresence } from 'framer-motion';

const BlogCard = ({ post, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={() => onClick(post.id)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="w-full h-48 relative bg-gray-100 overflow-hidden">
        {!imageLoaded && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: imageLoaded ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src="/Logo_ToyNest.png" 
              alt="Loading placeholder" 
              className="w-16 h-16 object-contain opacity-20 blur-sm animate-pulse"
            />
          </motion.div>
        )}
        <motion.img
          src={imageError ? '/Logo_ToyNest.png' : post.image}
          alt={post.title}
          onLoad={handleImageLoad}
          onError={handleImageError}
          initial={{ opacity: 0 }}
          animate={{ opacity: imageLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-contain"
        />
      </div>
      <motion.div className="p-6">
        <motion.span 
          className="inline-block px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {post.category}
        </motion.span>
        <motion.h3 
          className="text-xl font-semibold mb-2"
          initial={{ x: -10 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.1 }}
        >
          {post.title}
        </motion.h3>
        <motion.p 
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {post.excerpt}
        </motion.p>
        <motion.div 
          className="flex justify-between items-center text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span>{post.author}</span>
          <span>{post.date}</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const ParentalInsights = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);
  const postsPerLoad = 3;
  const navigate = useNavigate();

  // Preload all images on component mount
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = blogPosts.map(post => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = post.image;
          img.onload = () => resolve();
          img.onerror = () => resolve();
        });
      });
      
      await Promise.all(imagePromises);
      setImagesPreloaded(true);
    };

    preloadImages();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + postsPerLoad);
  };

  const handleCardClick = (postId) => {
    navigate(`/parental-insights/${postId}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className='p-[10px] h-[80px]'>
        <Navbar />
      </div>

      <AnimatePresence>
        {!imagesPreloaded && (
          <motion.div 
            className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col items-center"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/Logo_ToyNest.png" 
                alt="Loading" 
                className="w-24 h-24 object-contain blur-sm mb-4"
              />
              <p className="text-gray-500">Loading content...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        className={`min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ 
          y: imagesPreloaded ? 0 : 20,
          opacity: imagesPreloaded ? 1 : 0
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.h1 
              className="text-3xl font-extrabold text-gray-900 sm:text-4xl"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              Parent Insights
            </motion.h1>
            <motion.p 
              className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Expert advice and shared experiences for every parenting journey
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {blogPosts.slice(0, visiblePosts).map((post, index) => (
              <BlogCard 
                key={post.id} 
                post={post} 
                onClick={handleCardClick} 
              />
            ))}
          </motion.div>

          {visiblePosts < blogPosts.length && (
            <motion.div 
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={loadMorePosts}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Articles
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.div>

      <Footer />
    </motion.div>
  );
};

export default ParentalInsights;