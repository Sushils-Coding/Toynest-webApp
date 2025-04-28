import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toys from "../data/Toy";
import Navbar from "./Navbar";

const ToyCardComponent = ({
  showNavbar = true,
  showSearch = true,
  toys: filteredToysProp,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shouldScroll, setShouldScroll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const toysList = filteredToysProp || toys;
  const navigate = useNavigate();
  const topRef = useRef(null);

  const cardsPerPage = 8;

  // Filter toys by name or brand
  const filteredToys = toysList.filter(
    (toy) =>
      toy.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      toy.brand?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredToys.length / cardsPerPage);
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredToys.slice(indexOfFirstCard, indexOfLastCard);

  useEffect(() => {
    if (shouldScroll && topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
      setShouldScroll(false);
    }
  }, [currentPage, shouldScroll]);

  const addToCart = (toyId, e) => {
    e.stopPropagation();
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      const stringToyId = String(toyId);
      const existingItemIndex = cart.findIndex(
        (item) => String(item.id) === stringToyId
      );

      if (existingItemIndex >= 0) {
        cart[existingItemIndex].quantity += 1;
      } else {
        cart.push({ id: toyId, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      const cartUpdateEvent = new Event("cart-updated");
      window.dispatchEvent(cartUpdateEvent);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const buyNow = (toyId, e) => {
    e.stopPropagation();
    addToCart(toyId, e);
    navigate("/cart");
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  return (
    <>
      {showNavbar && (
        <div className="p-[10px] h-[80px]">
          <Navbar />
        </div>
      )}
      <div
        ref={topRef}
        className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200 p-6"
      >
        <h1 className="text-auto md:text-xl font-semibold text-center mb-8">
          Your baby's first year is a beautiful journey of growth—full of
          heartwarming milestones like their first roll, first sit, and those
          magical first steps.
        </h1>

        {/* Search Bar */}
        {showSearch && (
          <form
            className="flex items-center max-w-sm mx-auto mb-8"
            onSubmit={(e) => e.preventDefault()} // prevent form submission refresh
          >
            <label htmlFor="toy-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="toy-search"
                value={searchTerm}
                onChange={handleSearchChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                placeholder="Search toy name or brand..."
              />
            </div>
            <button
              type="submit"
              className=" cursor-pointer p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentCards.length > 0 ? (
            currentCards.map((toy) => (
              <div
                key={toy.id}
                className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => navigate(`/toy/${toy.id}`)}
              >
                <img
                  src={toy.image}
                  alt={toy.name}
                  className="w-full h-80 object-fit"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {toy.name}
                  </h2>
                  <p className="text-gray-600 text-sm mb-1">
                    <strong>Price:</strong> {toy.price}
                  </p>
                  <details
                    className="text-sm text-gray-500 cursor-pointer mt-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <summary className="cursor-pointer hover:text-blue-500">
                      View Description
                    </summary>
                    <p className="mt-1">{toy.description}</p>
                  </details>

                  {/* Action Buttons */}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={(e) => addToCart(toy.id, e)}
                      className="flex-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition"
                    >
                      Add to Cart
                    </button>
                    <button
                      onClick={(e) => buyNow(toy.id, e)}
                      className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-600">
              No toys found matching your search.
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {filteredToys.length > cardsPerPage && (
          <nav
            aria-label="Page navigation"
            className="mt-10 flex justify-center"
          >
            <ul className="inline-flex -space-x-px text-sm">
              <li>
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.max(prev - 1, 1));
                    setShouldScroll(true);
                  }}
                  disabled={currentPage === 1}
                  className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 border-gray-300 rounded-s-lg ${
                    currentPage === 1
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  &lt;
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1}>
                  <button
                    onClick={() => {
                      setCurrentPage(index + 1);
                      setShouldScroll(true);
                    }}
                    className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                      currentPage === index + 1
                        ? "text-blue-600 border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                        : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}

              <li>
                <button
                  onClick={() => {
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                    setShouldScroll(true);
                  }}
                  disabled={currentPage === totalPages}
                  className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 rounded-e-lg ${
                    currentPage === totalPages
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  &gt;
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default ToyCardComponent;
