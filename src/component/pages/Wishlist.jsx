import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toys from '../../data/Toy';
import Navbar from "../Navbar";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter(item => item !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    window.dispatchEvent(new Event('wishlist-updated'));
  };

  const getToyById = (id) => {
    return toys.find(toy => toy.id.toString() === id);
  };

  return (
    <>
      <div className='p-[10px] h-[80px]'>
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-purple-500 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Wishlist</h1>
          
          {wishlistItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">Your wishlist is empty</p>
              <Link 
                to="/" 
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map(id => {
                const toy = getToyById(id);
                if (!toy) return null;
                
                return (
                  <div key={id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img 
                        src={toy.image} 
                        alt={toy.name} 
                        className="w-full h-48 object-contain p-4"
                      />
                      <button
                        onClick={() => removeFromWishlist(id)}
                        className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-red-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{toy.name}</h2>
                      <p className="text-gray-600 mb-4 line-clamp-2">{toy.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">₹{toy.price}</span>
                        <Link
                          to={`/toy/${id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;