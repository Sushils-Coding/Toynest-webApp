import React, { useRef } from 'react';

import video1 from '../assets/Toyvideo1.webm';
import video2 from '../assets/Toyvideo2.mp4';
import video3 from '../assets/Toyvideo3.webm';
import video5 from '../assets/Toyvideo5.webm';

import babies from '../assets/babies.svg';
import toddler from '../assets/toddler.svg';
import Preschoolers from '../assets/preschoolers.svg';
import Adolescent from '../assets/adolescent.svg';
import Preteens from '../assets/preteens.svg';

import babiesImg from '../assets/babies.png';
import toddlerImg from '../assets/toddler.png';
import PreschoolersImg from '../assets/preschool.png';
import AdolescentImg from '../assets/adolescent.png';
import PreteensImg from '../assets/preteens.png';

const cardsData = [
    {
        id: 1,
        video: video1,
        topText: "Fuel curiosity with fun learning!",
        bottomText: "Our toys make every moment a creative adventure.",
    },
    {
        id: 2,
        video: video2,
        topText: "Say goodbye to screen time battles!",
        bottomText: "Engage their senses with interactive, physical play.",
    },
    {
        id: 3,
        video: video3,
        topText: "Mess-free magic every day!",
        bottomText: "Designed to spark joy without the chaos.",
    },
    {
        id: 4,
        video: video5,
        topText: "Smart play starts here!",
        bottomText: "Built to evolve with your child’s imagination.",
    },
];

const AgeCard = ({ title, age, bgColor, iconBg, description, icons, image }) => {
    return (
        <div
            className={`relative ${bgColor} rounded-2xl text-center flex flex-col items-center p-4 h-full 
            transform transition duration-300 hover:scale-105 hover:shadow-xl`}
        >
            {/* Icon */}
            <div
                className={`absolute -top-7 w-16 h-16 ${iconBg} rounded-full flex items-center justify-center 
                transition duration-300 group-hover:translate-y-[-4px]`}
            >
                <img src={icons} alt="Icon" className="w-14 h-14" />
            </div>

            {/* Age Range */}
            <div className="mt-6 mb-2">
                <span className="bg-white px-4 py-1 rounded-full font-semibold text-sm">
                    {age}
                </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mt-2">{title}</h2>

            {/* Optional description */}
            {description ? (
                <>
                    <p className="text-center text-lg mt-4 px-2">{description}</p>
                    <div className="mt-16 w-60 h-44 flex items-center justify-center transition duration-300 hover:scale-105">
                        <img src={image} alt="images" className="" />
                    </div>
                </>
            ) : (
                <div className="mt-4 w-32 h-32 flex items-center justify-center transition duration-300 hover:scale-105">
                    <img src={image} alt="images" className="" />
                </div>
            )}
        </div>
    );
};


const Card = ({ videoSrc, topText, bottomText }) => {
    const videoRef = useRef(null);

    const handleMouseEnter = () => {
        videoRef.current?.play();
    };

    const handleMouseLeave = () => {
        videoRef.current?.pause();
    };

    return (
        <div
            className="relative min-w-[300px] max-w-[300px] h-[500px] rounded-xl overflow-hidden shadow-xl cursor-pointer group transition-all duration-300 hover:scale-105"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Video */}
            <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover z-0 filter grayscale group-hover:filter-none transition-all duration-500"
                muted
                loop
                playsInline
            >
                <source src={videoSrc} />
                Your browser does not support the video tag.
            </video>

            {/* Top Text */}
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-r from-amber-500 to-pink-500 text-gray-800 font-semibold p-4 rounded-b-[50%] z-10 transition-transform duration-500 group-hover:-translate-y-full">
                <p className="text-xl">{topText}</p>
            </div>

            {/* Bottom Reveal Section */}
            <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-t-2xl shadow-inner">
                <p className="animate-fadeIn">
                    {bottomText}
                </p>
            </div>
        </div>
    );
};

const Cards = () => {
    return (
        <>
            <div className='text-center mt-14 mb-8 px-4'>
                <h1 className='text-gray-800 text-3xl md:text-4xl tracking-wider font-semibold'>
                    Shape Inventive Thinkers—Inspire Imagination <span className='font-bold underline'>the Right Way!</span>
                </h1>
                <p className='text-lg md:text-xl mt-2'>
                    Why buy another toy they’ll forget in 16 days? Give them something that grows with their imagination.
                </p>
            </div>

            <div className="w-full overflow-x-auto">
                <div className="flex w-fit mx-auto gap-6 px-4 mb-10">
                    {cardsData.map((card) => (
                        <Card
                            key={card.id}
                            videoSrc={card.video}
                            topText={card.topText}
                            bottomText={card.bottomText}
                        />
                    ))}
                </div>
            </div>

            {/* Catalogue Preview */}

            <div className='text-center mt-14 mb-8 px-4'>
                <h1 className='text-gray-800 text-3xl md:text-4xl tracking-wider font-semibold'>
                    Browse Catalog <span className='font-semibold underline text-amber-500'> By Age</span>
                </h1>
                <p className='text-lg md:text-xl mt-2'>
                    Why buy another toy they’ll forget in 16 days? Give them something that grows with their imagination.
                </p>
            </div>

            <div className="max-w-screen-xl mx-auto px-4 py-10">
                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-none lg:grid-rows-2">

                    {/* 1 - Babies */}
                    <div>
                        <AgeCard
                            title="Babies"
                            age="0 - 12 Months"
                            bgColor="bg-purple-200"
                            iconBg="bg-purple-200"
                            icons={babies}
                            image={babiesImg}
                        />
                    </div>

                    {/* 2 - Toddlers */}
                    <div className="lg:col-start-1 lg:row-start-2">
                        <AgeCard
                            title="Toddlers"
                            age="12 - 36 Months"
                            bgColor="bg-pink-200"
                            iconBg="bg-pink-200"
                            icons={toddler}
                            image={toddlerImg}
                        />
                    </div>

                    {/* 3 - Preschoolers (center) */}
                    <div className="lg:row-span-2 lg:col-start-2 lg:row-start-1">
                        <AgeCard
                            title="Preschoolers"
                            age="3 - 5 Years"
                            bgColor="bg-amber-200"
                            iconBg="bg-amber-200"
                            description="Engaging, safe, and educational toys designed to spark joy and support early development in toddlers."
                            icons={Preschoolers}
                            image={PreschoolersImg}
                        />
                    </div>

                    {/* 4 - Adolescent */}
                    <div className="lg:col-start-3 lg:row-start-1">
                        <AgeCard
                            title="Adolescent"
                            age="5 - 8 Years"
                            bgColor="bg-blue-200"
                            iconBg="bg-blue-200"
                            icons={Adolescent}
                            image={AdolescentImg}
                        />
                    </div>

                    {/* 5 - Pre-teens */}
                    <div className="lg:col-start-3 lg:row-start-2">
                        <AgeCard
                            title="Pre-teens"
                            age="8 - 12 Years"
                            bgColor="bg-green-200"
                            iconBg="bg-green-200"
                            icons={Preteens}
                            image={PreteensImg}
                        />
                    </div>
                </div>

                <div className='text-center mt-14'>
                    <button className=" relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-[17px] font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-black focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <span className="flex justify-center items-center gap-2.5 relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-white rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                            Browse Catalog {" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                />
                            </svg>
                        </span>
                    </button>
                </div>

            </div>


        </>
    );
};

export default Cards;