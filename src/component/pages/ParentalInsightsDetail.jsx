import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import blogPosts from '../../data/BlogPosts';

const ImageWithLoader = ({ src, alt, className, fallback }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
    
    img.onerror = () => {
      setImageSrc(fallback);
      setIsLoading(false);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src, fallback]);

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <img 
            src="/Logo_ToyNest.png" 
            alt="Loading placeholder" 
            className="w-16 h-16 object-contain opacity-20 blur-sm"
          />
        </div>
      )}
      <img
        src={imageSrc || fallback}
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onError={(e) => {
          e.target.src = fallback;
        }}
      />
    </div>
  );
};

const ParentalInsightsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [imagesLoaded, setImagesLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Preload all images
    const preloadImages = async () => {
      const imagePromises = blogPosts.map(post => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = post.image;
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Still resolve even if image fails
        });
      });
      
      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  const currentPost = blogPosts.find(post => post.id === parseInt(id));
  const otherPosts = blogPosts.filter(post => post.id !== parseInt(id));

  if (!currentPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h1>
          <button
            onClick={() => navigate('/parental-insights')}
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
          >
            Back to Insights
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className='p-[10px] h-[80px] sticky top-0 z-50 bg-white shadow-sm'>
        <Navbar />
      </div>

      <main className="flex-1">
        {!imagesLoaded && (
          <div className="fixed inset-0 bg-white bg-opacity-80 flex items-center justify-center z-50">
            <div className="animate-pulse flex flex-col items-center">
              <img 
                src="/Logo_ToyNest.png" 
                alt="Loading" 
                className="w-24 h-24 object-contain opacity-70 blur-sm mb-4"
              />
              <p className="text-gray-500">Loading content...</p>
            </div>
          </div>
        )}
        
        <div className={`w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-opacity ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Main Content Area (70%) */}
            <div className="xl:w-[70%] xl:pr-8">
              <button
                onClick={() => {
                  navigate(-1);
                  window.scrollTo(0, 0);
                }}
                className="mb-8 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors group"
              >
                <svg 
                  className="w-6 h-6 mr-2 animate-[bounceLeft_1.5s_infinite] group-hover:animate-none group-hover:translate-x-[-4px] transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="text-lg font-medium">Back to All Articles</span>
              </button>

              {/* Featured Article Card */}
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <ImageWithLoader 
                  src={currentPost.image}
                  alt={currentPost.title}
                  className="w-full h-[400px]"
                  fallback="/Logo_ToyNest.png"
                />
                
                <div className="p-8">
                  <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
                    <span className="inline-block px-4 py-1.5 text-sm font-semibold text-indigo-800 bg-indigo-100 rounded-full">
                      {currentPost.category}
                    </span>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">{currentPost.date}</span>
                      <span className="text-sm font-medium text-gray-700">{currentPost.author}</span>
                    </div>
                  </div>
                  
                  <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    {currentPost.title}
                  </h1>
                  
                  {currentPost.authorTitle && (
                    <p className="text-gray-500 italic mb-8">By {currentPost.authorTitle}</p>
                  )}
                  
                  <div className="prose max-w-none text-gray-700 space-y-6">
                    <p className="text-xl leading-relaxed">
                      {currentPost.excerpt}
                    </p>
                    
                    <div className="space-y-6 text-lg leading-relaxed">
                      <p>
                        Parenting is a journey filled with both challenges and rewards. As you navigate this path, 
                        remember that every child is unique and what works for one may not work for another.
                      </p>
                      <p>
                        The key is to stay patient, be consistent with your approach, and don't hesitate to ask for 
                        help when you need it. Building a support network of other parents can be invaluable.
                      </p>
                      <p>
                        Remember, there's no such thing as a perfect parent. What matters most is the love and care 
                        you provide to your child every day.
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar (30%) */}
            <div className="xl:w-[30%]">
              <div className="bg-white p-6 rounded-xl shadow-lg sticky top-28 h-[calc(100vh-180px)] overflow-hidden">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-4 border-b border-gray-100">
                  More Articles
                </h2>
                
                <div className="space-y-6 h-[calc(100%-60px)] overflow-y-auto pr-2 custom-scrollbar">
                  {otherPosts.map(post => (
                    <div 
                      key={post.id} 
                      className="group bg-gray-50 rounded-lg overflow-hidden cursor-pointer transition-all hover:bg-white hover:shadow-md border border-gray-100"
                      onClick={() => {
                        navigate(`/parental-insights/${post.id}`);
                        window.scrollTo(0, 0);
                      }}
                    >
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/3 h-40 sm:h-full">
                          <ImageWithLoader 
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full"
                            fallback="/Logo_ToyNest.png"
                          />
                        </div>
                        <div className="sm:w-2/3 p-4">
                          <span className="inline-block px-2 py-1 text-xs font-semibold text-indigo-800 bg-indigo-100 rounded-full mb-2">
                            {post.category}
                          </span>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex justify-between items-center text-xs text-gray-500">
                            <span>{post.author}</span>
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Global Styles */}
      <style jsx global>{`
        @keyframes bounceLeft {
          0%, 100% {
            transform: translateX(0) scale(1);
          }
          25% {
            transform: translateX(-4px) scale(1.05);
          }
          50% {
            transform: translateX(0) scale(1);
          }
          75% {
            transform: translateX(-4px) scale(1.05);
          }
        }
        
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c7d2fe;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #a5b4fc;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ParentalInsightsDetail;