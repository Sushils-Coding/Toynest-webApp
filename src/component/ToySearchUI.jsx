import React, { useState } from 'react';
import toys from '../data/Toy';
import { motion } from 'framer-motion';

const ToySearchUI = ({ onSearch, scrollTargetRef }) => {

    const [query, setQuery] = useState('');

    const ageGroups = [
        { label: 'Babies', range: '0 - 1 Year', color: 'bg-purple-200', image: '/catalog1.svg' },
        { label: 'Toddlers', range: '1 - 3 Years', color: 'bg-pink-200', image: '/catalog2.png' },
        { label: 'Preschoolers', range: '3 - 5 Years', color: 'bg-yellow-200', image: '/catalog3.png' },
        { label: 'Adolescent', range: '5 - 8 Years', color: 'bg-blue-200', image: '/catalog4.png' },
        { label: 'Pre-teens', range: '8 - 12 Years', color: 'bg-green-200', image: '/catalog5.png' },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        const filteredToys = toys.filter(toy =>
            toy.name.toLowerCase().includes(query.toLowerCase()) ||
            toy.brand.toLowerCase().includes(query.toLowerCase())
        );

        onSearch && onSearch(filteredToys);

        if (scrollTargetRef?.current) {
            scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <div className="bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen pt-10 px-4 text-center">
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
                Start Your Toy Quest, <span className='text-amber-400'>Search Here</span><span>!</span>
            </motion.h2>
            <motion.p
                className="text-xl sm:text-2xl text-gray-600 mx-auto mb-8 font-semibold tracking-wide"
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
                Spark imagination and unlock the magic of play, find the toy that's made for you!
            </motion.p>

            {/* Search Bar */}
            <div className="mt-6 flex justify-center">
                <form
                    className="w-full max-w-2xl px-4"
                    onSubmit={handleSearch}
                >
                    <label htmlFor="product-search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        {/* Icon */}
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg
                                className="w-5 h-5 text-gray-500"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>

                        {/* Input */}
                        <input
                            type="search"
                            id="product-search"
                            placeholder="Search by product or brand name"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 shadow-sm focus:ring-yellow-400 focus:border-yellow-400 transition duration-300"
                        />

                        {/* Button */}
                        <button
                            type="submit"
                            className="absolute right-2.5 bottom-1.5 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg text-sm px-4 py-2 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition duration-300"
                        >
                            Search
                        </button>
                    </div>
                </form>
            </div>

            {/* Age Catalog */}
            <h2 className="text-2xl md:text-5xl font-semibold mt-12 mb-12">
                Browse Catalog By Age <span className="text-yellow-500 underline"> </span>
            </h2>

            <div className="grid grid-cols-3 grid-rows-2 gap-4 md:grid-cols-3 md:auto-rows-auto lg:grid-cols-5 px-2 sm:px-4 md:px-6 mt-6">
                {ageGroups.map((group, index) => {
                    let gridPosition = "";

                    if (index === 0) gridPosition = "row-start-1 col-start-1";
                    else if (index === 1) gridPosition = "row-start-2 col-start-1";
                    else if (index === 2) gridPosition = "row-span-2 col-start-2 row-start-1";
                    else if (index === 3) gridPosition = "row-start-1 col-start-3";
                    else if (index === 4) gridPosition = "row-start-2 col-start-3";

                    const handleAgeGroupClick = () => {
                        const normalize = str => str.replace(/\s+/g, '').toLowerCase();

                        const filteredToys = toys.filter(toy =>
                            normalize(toy.ageRange) === normalize(group.range)
                        );

                        onSearch && onSearch(filteredToys);

                        if (scrollTargetRef?.current) {
                            scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
                        }
                    };


                    return (
                        <div
                            key={index}
                            onClick={handleAgeGroupClick}
                            className={`${group.color} ${gridPosition} md:row-auto md:col-auto rounded-2xl p-3 sm:p-4 lg:p-5 flex flex-col items-center justify-between shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer`}
                        >
                            <div className="text-center">
                                <h3 className="text-base sm:text-lg md:text-xl font-semibold">{group.label}</h3>
                                <div className="mt-1 mb-3 bg-white text-black px-3 py-1 rounded-full font-medium text-sm sm:text-base inline-block">
                                    {group.range}
                                </div>
                            </div>
                            <img
                                src={group.image}
                                alt={group.label}
                                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain transition duration-300 hover:scale-110"
                            />
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default ToySearchUI;
