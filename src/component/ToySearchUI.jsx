import React from 'react';
import catalog1 from '../assets/catalog1.svg';
import catalog2 from '../assets/catalog2.png';
import catalog3 from '../assets/catalog3.png';
import catalog4 from '../assets/catalog4.png';
import catalog5 from '../assets/catalog5.png';


const ToySearchUI = () => {
    const ageGroups = [
        { label: 'Babies', range: '0 - 12 Months', color: 'bg-purple-200', image: catalog1 },
        { label: 'Toddlers', range: '12 - 36 Months', color: 'bg-pink-200', image: catalog2 },
        { label: 'Preschoolers', range: '3-5 Years', color: 'bg-yellow-200', image: catalog3 },
        { label: 'Adolescent', range: '5 - 8 Years', color: 'bg-blue-200', image: catalog4 },
        { label: 'Pre-teens', range: '8 - 12 Years', color: 'bg-green-200', image: catalog5 },
    ];

    return (
        <div className="bg-purple-50 min-h-screen py-10 px-4 text-center">
            <h1 className="text-3xl md:text-6xl font-bold">
                Start Your Toy Quest, <span className="text-yellow-500">Search Here!</span>
            </h1>
            <p className="mt-5 text-gray-600 md:text-3xl">
                Spark imagination and unlock the magic of play, find the toy that's made for you!
            </p>

            {/* Search Bar */}
            <div className="mt-6 flex justify-center">
                <div className="flex justify-center w-1/2 h-[50px]">
                    <input
                        type="text"
                        placeholder="Search by product or brand name"
                        className="flex-grow border rounded-l-xl px-6 py-2 outline-none shadow transition duration-300 focus:ring-2 focus:ring-yellow-300"
                    />
                    <button className="w-[130px] md:text-2xl font-semibold tracking-wider bg-yellow-500 text-white px-6 rounded-r-full shadow hover:bg-yellow-600 transition duration-300">
                        Search
                    </button>
                </div>
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

                    return (
                        <div
                            key={index}
                            className={`${group.color} ${gridPosition} md:row-auto md:col-auto rounded-2xl p-3 sm:p-4 lg:p-5 flex flex-col items-center justify-between shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl`}
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



        </div >
    );
};

export default ToySearchUI;
