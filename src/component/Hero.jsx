import react from 'react';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <div className='w-[100%] h-[97%]'>
            <video src={'/ProductVideo.mp4'} autoPlay loop muted className='absolute top-0 h-[100%] w-[100%] object-cover' />

            <div className='content absolute top-0 h-[100%] w-[100%] flex justify-between capitalize bg-gradient-to-r from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0)]'>
                <div className='flex flex-col justify-center items-start w-[100%] lg:w-[50%] px-[40px] bg-transparent'>
                    <div className='font-bold text-[30px] sm:text-[40px] md:text-[40px] text-white'>Why buy one toy when your child can <span className='text-amber-400'>enjoy them all?</span></div>

                    <p className='font-bold text-[20px] sm:text-2xl stroke-amber-100 text-white tracking-tighter'>Access 850+ toys and books with ease. Exchange anytime as your kid grows!</p>

                    <div className=' flex justify-between md:w-[45%] my-6'>
                        <Link to="/catalogue">
                            <button type="button" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-bold text-sm sm:text-[17px] rounded-full px-5 py-2.5 text-center me-2 mb-2 ">Browse Toys</button>
                        </Link>

                        <Link to="/pricing">
                            <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-bold rounded-full text-sm sm:text-[17px] px-5 py-2.5 text-center me-2 mb-2">Subscribe</button>
                        </Link>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Hero;