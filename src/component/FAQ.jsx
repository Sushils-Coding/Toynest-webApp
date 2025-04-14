import React, { useState } from 'react';
import Earth from './3DModel/Earth';
import './bgAnimation/bganimation.css';

const FAQ_DATA = [
    {
        question: 'How to create an account?',
        answer:
            "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
    },
    {
        question: 'Have any trust issue?',
        answer:
            'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.',
    },
    {
        question: 'How can I reset my password?',
        answer:
            'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.',
    },
    {
        question: 'What is the payment process?',
        answer:
            'Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.',
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <div className="area absolute z-[-1] h-[1000px] sm:h-[900px] lg:h-[800px] w-[100%] bg-gradient-to-b from-[#ffffff] to-[#15deed]">
                <ul className="circles">
                    {[...Array(10)].map((_, i) => (
                        <li key={i}></li>
                    ))}
                </ul>
            </div>

            <section className="w-full h-full absolute py-14">
                <h1 className='text-center text-3xl md:text-4xl tracking-wider font-semibold'>Frequently Asked Questions</h1>
                <div className="mx-auto my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-start gap-x-16 gap-y-5 xl:gap-28 max-lg:max-w-2xl mx-auto max-w-full h-auto">

                        {/* Global */}
                        <div className=" w-full lg:w-1/2 hidden lg:flex items-center h-[450px] md:h-[500px] lg:h-[650px]">
                            <Earth />
                        </div>
                        {/* faqs */}
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-xl">
                                <div className="mb-6 lg:mb-16">

                                    <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-left">
                                        Looking for answers?
                                    </h2>
                                </div>
                                <div className="accordion-group">
                                    {FAQ_DATA.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`accordion py-8 border-b border-solid border-gray-200 ${openIndex === index ? 'active' : ''
                                                }`}
                                        >
                                            <button
                                                onClick={() => toggleAccordion(index)}
                                                className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                                            >
                                                <h5>{item.question}</h5>
                                                <svg
                                                    className={`text-gray-900 transition duration-500 group-hover:text-indigo-600 ${openIndex === index ? 'rotate-180 text-indigo-600' : ''
                                                        }`}
                                                    width="22"
                                                    height="22"
                                                    viewBox="0 0 22 22"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                                                        stroke="currentColor"
                                                        strokeWidth="1.6"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </button>
                                            <div
                                                className={`accordion-content w-full px-0 overflow-hidden pr-4 transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-60' : 'max-h-0'
                                                    }`}
                                            >
                                                <p className="text-base font-normal text-gray-600 pt-4">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FAQ;
