import React, { useRef } from 'react';
import video1 from '../../assets/Toyvideo1.webm';
import video2 from '../../assets/Toyvideo2.mp4';
import video3 from '../../assets/Toyvideo3.webm';
import video5 from '../../assets/Toyvideo5.webm';

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
            <div className='text-center mt-7 mb-8 px-4'>
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


        </>
    );
};

export default Cards;
