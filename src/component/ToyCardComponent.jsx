import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import toys from "../data/Toy";

const ToyCardComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [shouldScroll, setShouldScroll] = useState(false);

  const navigate = useNavigate();

  const topRef = useRef(null);
  const cardsPerPage = 5;
  const totalPages = Math.ceil(toys.length / cardsPerPage);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = toys.slice(indexOfFirstCard, indexOfLastCard);

  // Only scroll if user clicked the pagination
  useEffect(() => {
    if (shouldScroll && topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
      setShouldScroll(false); // reset after scrolling
    }
  }, [currentPage, shouldScroll]);

  return (
    <div ref={topRef} className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-200  p-6">
      <h1 className="text-auto md:text-xl font-semibold text-center mb-8">Your baby’s first year is a beautiful journey of growth—full of heartwarming milestones like their first roll, first sit, and those magical first steps.</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentCards.map((toy) => (
          <div
            key={toy.id}
            className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={toy.image}
              alt={toy.name}
              className="w-full h-80 object-fit"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{toy.name}</h2>
              <p className="text-gray-600 text-sm mb-1">
                <strong>Price:</strong> {toy.price}
              </p>
              <details className="text-sm text-gray-500 cursor-pointer mt-2">
                <summary className="cursor-pointer hover:text-blue-500">
                  View Description
                </summary>
                <p className="mt-1">{toy.description}</p>
              </details>

              {/* View Details Button */}
              <button
                onClick={() => navigate(`/toy/${toy.id}`)}
                className="mt-4 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-md transition"
              >
                View Details
              </button>
            </div>
          </div>

        ))}
      </div>

      {/* Pagination Controls */}
      <nav aria-label="Page navigation" className="mt-10 flex justify-center">
        <ul className="inline-flex -space-x-px text-sm">
          {/* Prev */}
          <li>
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.max(prev - 1, 1));
                setShouldScroll(true);
              }}
              disabled={currentPage === 1}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-e-0 border-gray-300 rounded-s-lg ${currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
            >
              &lt;
            </button>
          </li>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1}>
              <button
                onClick={() => {
                  setCurrentPage(index + 1);
                  setShouldScroll(true);
                }}
                className={`flex items-center justify-center px-3 h-8 leading-tight border ${currentPage === index + 1
                  ? "text-blue-600 border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
                  : "text-gray-500 bg-white border-gray-300 hover:bg-gray-100 hover:text-gray-700"
                  }`}
              >
                {index + 1}
              </button>
            </li>
          ))}

          {/* Next */}
          <li>
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                setShouldScroll(true);
              }}
              disabled={currentPage === totalPages}
              className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 rounded-e-lg ${currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
            >
              &gt;
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ToyCardComponent;
