import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toys from '../../data/Toy';
import Navbar from "../Navbar";

const ToyDetailPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const toy = toys.find((toy) => toy.id.toString() === id);
  const [selectedColor, setSelectedColor] = useState(toy?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [mainImage, setMainImage] = useState(toy?.image || '');
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [showWishlistNotification, setShowWishlistNotification] = useState(false);
  const [currentToy, setCurrentToy] = useState(toy);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Check if item is in wishlist when component mounts or id changes
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    setIsWishlisted(wishlist.includes(id));
  }, [id]);

  useEffect(() => {
    if (toy) {
      setCurrentToy(toy);
      setMainImage(toy.image);
      if (toy.colors) {
        setSelectedColor(toy.colors[0]);
      }
    }
  }, [toy]);

  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    let updatedWishlist;

    if (isWishlisted) {
      updatedWishlist = wishlist.filter(itemId => itemId !== id);
      setShowWishlistNotification({ show: true, message: "Removed from wishlist" });
    } else {
      updatedWishlist = [...wishlist, id];
      setShowWishlistNotification({ show: true, message: "Added to wishlist!" });
    }

    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setIsWishlisted(!isWishlisted);

    window.dispatchEvent(new Event('wishlist-updated'));

    setTimeout(() => {
      setShowWishlistNotification({ show: false, message: "" });
    }, 3000);
  };

  
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      
      cart.push({
        id,
        quantity,
        selectedColor
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    setShowCartNotification(true);

    window.dispatchEvent(new Event('cart-updated'));

    setTimeout(() => setShowCartNotification(false), 1000);
  };

  const buyNow = () => {
    const singleProductCheckout = [
      {
        id,
        quantity,
        selectedColor,
        ...currentToy
      }
    ];
    localStorage.setItem("singleProductCheckout", JSON.stringify(singleProductCheckout));
    navigate("/checkout?single=true");
  };

  if (!currentToy) {
    return <div className="p-6 text-center text-red-600">Toy not found!</div>;
  }

  // Calculate total price
  const priceAsNumber = parseFloat(currentToy.price);
  const totalPrice = (priceAsNumber * quantity).toFixed(2);

  return (
    <>
      <div className=' p-[10px] h-[80px]'>
        <Navbar />
      </div>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
        {/* Cart Notification */}
        {showCartNotification && (
          <div className="fixed top-4 right-4 z-[9999]">
            <div className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 animate-bounce">
              Item added to cart!
            </div>
          </div>
        )}

        {/* Wishlist Notification */}
        {showWishlistNotification.show && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[9999]">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 animate-bounce">
              {showWishlistNotification.message}
            </div>
          </div>
        )}

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Toy Images */}
            <div className="md:w-1/2">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                <img
                  src={mainImage}
                  alt={currentToy.name}
                  className="w-full h-96 object-contain transition-opacity duration-300 ease-in-out"
                />
                <button
                  onClick={toggleWishlist}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
                  aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${isWishlisted ? 'text-red-500 fill-current' : 'text-gray-400'}`}
                    viewBox="0 0 20 20"
                    fill={isWishlisted ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {currentToy.images && currentToy.images.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3">
                  {currentToy.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setMainImage(img)}
                      className={`rounded-lg overflow-hidden border-2 transition-all duration-200 ${mainImage === img ? 'border-blue-500' : 'border-transparent'}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-24 object-cover hover:opacity-80 transition-opacity duration-200"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Toy Info */}
            <div className="md:w-1/2">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentToy.name}</h1>
                  {currentToy.brand && (
                    <p className="text-gray-600 mb-2">Brand: {currentToy.brand}</p>
                  )}
                </div>
                {currentToy.stock && (
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${currentToy.stock > 10 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {currentToy.stock > 10 ? 'In Stock' : `Only ${currentToy.stock} left`}
                  </span>
                )}
              </div>

              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(currentToy.rating || 0) ? 'fill-current' : 'fill-none'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600 ml-2">({currentToy.reviews || 0} reviews)</span>
              </div>

              <p className="text-gray-700 mb-4">{currentToy.description}</p>
              {currentToy.detailedDescription && (
                <p className="text-gray-600 mb-6">{currentToy.detailedDescription}</p>
              )}

              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">&#8377;{currentToy.price}</span>
                {quantity > 1 && (
                  <span className="ml-2 text-green-600">
                    (Total: &#8377;{totalPrice})
                  </span>
                )}
              </div>

              {/* Color Selection */}
              {currentToy.colors && currentToy.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
                  <div className="flex space-x-2">
                    {currentToy.colors.map((color) => {
                      const colorMap = {
                        green: 'bg-green-500',
                        blue: 'bg-blue-500',
                        pink: 'bg-pink-500',
                        red: 'bg-red-500',
                        yellow: 'bg-yellow-500',
                        black: 'bg-black',
                        grey: 'bg-gray-500',
                        purple: 'bg-purple-500',
                        silver: 'bg-gray-300',
                        'multi-color': 'bg-gradient-to-r from-red-500 via-green-500 to-blue-500'
                      };

                      return (
                        <button
                          key={color}
                          onClick={() => setSelectedColor(color)}
                          className={`w-8 h-8 rounded-full border-2 transition-transform duration-200 ${selectedColor === color ? 'border-blue-500 scale-110' : 'border-transparent'} ${colorMap[color] || 'bg-gray-200'}`}
                          aria-label={color}
                        />
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Product Specifications */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {currentToy.ageRange && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Age Range</h3>
                    <p className="text-gray-600">{currentToy.ageRange}</p>
                  </div>
                )}
                {currentToy.material && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Material</h3>
                    <p className="text-gray-600">{currentToy.material}</p>
                  </div>
                )}
                {currentToy.category && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Category</h3>
                    <p className="text-gray-600">{currentToy.category}</p>
                  </div>
                )}
                {currentToy.batteryRequired && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Batteries</h3>
                    <p className="text-gray-600">{currentToy.batteryType || 'Required'}</p>
                  </div>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
                <div className="flex items-center">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                    </svg>
                  </button>
                  <span className="px-4 py-2 border-t border-b border-gray-300 bg-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={addToCart}
                  className="flex-1 bg-gray-900 text-white py-3 px-6 rounded-md font-medium hover:bg-gray-800 transition-colors duration-200 transform hover:scale-105 cursor-pointer"
                >
                  Add to Cart
                </button>
                <button
                  onClick={buyNow}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105 cursor-pointer"
                >
                  Buy Now
                </button>
              </div>

              {/* Features */}
              {currentToy.features && currentToy.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {currentToy.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Safety Info */}
              {currentToy.safetyInfo && (
                <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-yellow-800">Safety Information</h3>
                      <div className="mt-2 text-sm text-yellow-700">
                        <p>{currentToy.safetyInfo}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetailPage;