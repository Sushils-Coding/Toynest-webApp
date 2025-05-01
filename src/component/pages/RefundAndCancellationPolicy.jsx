import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useEffect } from 'react';

const RefundAndCancellationPolicy = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <div className='bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen'>
            <Navbar />
            <div className='p-5'>
                <motion.section
                    className="py-16 px-4 sm:px-6 lg:px-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="max-w-7xl mx-auto text-center">
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
                            Refund and Cancellation Policy
                        </motion.h2>
                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 mb-8 font-medium"
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
                            At <span className="font-bold text-purple-800">ToyNest</span>, we aim to provide a joyful and flexible toy experience for every child. Below is our refund and cancellation policy tailored to both our <span className="font-bold text-purple-800">subscribers</span> and <span className="font-bold text-purple-800">non-subscribers</span>.
                        </motion.p>

                        <div className="text-left text-gray-600 space-y-8 mt-8">
                            <motion.h3
                                className="text-2xl font-semibold text-gray-800"
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
                                For Subscribers:
                            </motion.h3>
                            <ul className="list-disc ml-6 space-y-4">
                                <motion.li
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="font-bold">Cancellation:</span> You may cancel your subscription at any time. However, <span className="font-bold text-purple-800">partial or prorated refunds</span> are not applicable for the ongoing billing cycle.
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="font-bold">Technical Issues:</span> In case of a technical issue or accidental double payment, please contact us within <span className="font-bold text-purple-800">3 days</span> of payment for resolution.
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <span className="font-bold">Defective Toys:</span> If any toys are not delivered or are defective upon arrival, we offer an <span className="font-bold text-purple-800">exchange or replacement</span> as per our exchange policy.
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Once you become a member, all toys become ₹0 and function under the subscription borrowing model. These are <span className="font-bold text-purple-800">not eligible for monetary refund</span>.
                                </motion.li>
                            </ul>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800 mt-6"
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
                                For Non-Subscribers:
                            </motion.h3>
                            <ul className="list-disc ml-6 space-y-4">
                                <motion.li
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    All purchases made as a regular user (non-subscriber) are <span className="font-bold text-purple-800">final</span>. Refunds are not entertained unless the product is <span className="font-bold text-purple-800">damaged or undelivered</span>.
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    If your toy arrives damaged, please contact us within <span className="font-bold text-purple-800">3 days</span> of delivery with images for verification and replacement.
                                </motion.li>
                            </ul>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800 mt-6"
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
                                Cancellations:
                            </motion.h3>
                            <ul className="list-disc ml-6 space-y-4">
                                <motion.li
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Subscription cancellations can be managed from your <span className="font-bold text-purple-800">account dashboard</span> before the renewal date.
                                </motion.li>
                                <motion.li
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    Orders once confirmed for toy purchases or borrowings cannot be cancelled once <span className="font-bold text-purple-800">dispatched</span>.
                                </motion.li>
                            </ul>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800 mt-6"
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
                                Contact Us:
                            </motion.h3>
                            <motion.p
                                className="text-lg text-gray-700"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                For any issues or refund-related queries, please reach out via our <strong className="text-purple-800">Contact Us</strong> page or email <strong className="text-purple-800">support@toynest.in</strong>. We aim to resolve all issues within <span className="font-bold text-purple-800">3–5 business days</span>.
                            </motion.p>
                        </div>
                    </div>
                </motion.section>
            </div>
            <Footer />
        </div>
    );
};

export default RefundAndCancellationPolicy;
