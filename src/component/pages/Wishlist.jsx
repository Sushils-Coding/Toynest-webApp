import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toys from '../../data/Toy';
import Navbar from "../Navbar";

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  // Load wishlist and ensure no duplicate IDs
  const loadWishlistData = () => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      const parsedWishlist = JSON.parse(storedWishlist);
      // Remove duplicates (convert all to string to avoid type mismatch)
      const uniqueWishlist = [...new Set(parsedWishlist.map(id => String(id)))];
      setWishlistItems(uniqueWishlist);
      localStorage.setItem('wishlist', JSON.stringify(uniqueWishlist)); // Optional: clean up localStorage
    }
  };

  useEffect(() => {
    loadWishlistData();
    window.addEventListener('wishlist-updated', loadWishlistData);
    return () => window.removeEventListener('wishlist-updated', loadWishlistData);
  }, []);

  const removeFromWishlist = (id) => {
    const stringId = String(id);
    const updatedWishlist = wishlistItems.filter(itemId => String(itemId) !== stringId);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    // Small delay to trigger update event after state is set
    setTimeout(() => {
      window.dispatchEvent(new Event('wishlist-updated'));
    }, 100);
  };

  const getToyById = (id) => {
    return toys.find(toy => String(toy.id) === String(id));
  };

  return (
    <>
      <div className='p-[10px] h-[80px]'>
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Wishlist</h1>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-4">Your wishlist is empty</p>
              <Link to="/toy" className="text-blue-600 hover:text-blue-800 font-medium">
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
                          className="h-6 w-6 text-red-500 fill-current"
                          viewBox="0 0 20 20"
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
