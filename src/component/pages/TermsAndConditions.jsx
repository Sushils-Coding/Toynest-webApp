import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useEffect } from 'react';

const TermsAndConditions = () => {

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
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.02,
                                textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            Terms and Conditions
                        </motion.h2>

                        <motion.p
                            className="text-lg sm:text-xl text-gray-700 mb-8 font-medium"
                            initial={{ scale: 0.98 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                            whileHover={{
                                scale: 1.02,
                                textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                transition: { duration: 0.3 }
                            }}
                        >
                            Welcome to <span className="font-bold text-purple-800">ToyNest</span>. By using our website, services, or purchasing/subscribing to any offerings, you agree to comply with and be bound by the following terms and conditions.
                        </motion.p>

                        <div className="text-left text-gray-600 space-y-8 mt-8">
                            <motion.h3
                                className="text-2xl font-semibold text-gray-800"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                1. User Eligibility
                            </motion.h3>
                            <ul className="list-disc ml-6 space-y-4">
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    You must be 18 years or older or have parental consent to use our platform.
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    Accurate and up-to-date personal information is required for registration and transactions.
                                </motion.li>
                            </ul>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                2. Subscription Model
                            </motion.h3>
                            <ul className="list-disc ml-6 space-y-4">
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    Members can borrow toys based on their plan limits (e.g., 5 toys/month with 3 exchanges).
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    Membership renews automatically unless cancelled prior to the billing date.
                                </motion.li>
                            </ul>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                3. Toy Care & Responsibility
                            </motion.h3>
                            <ul className="list-disc ml-6 space-y-4">
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    Members are expected to handle toys with care. Damaged or lost toys may incur a replacement charge.
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    Toys must be returned clean and in good condition to avoid penalties.
                                </motion.li>
                            </ul>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                4. Intellectual Property
                            </motion.h3>
                            <p className="text-md text-gray-700">
                                All content, trademarks, and design elements on ToyNest are the property of ToyNest and may not be used without written consent.
                            </p>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                5. Limitation of Liability
                            </motion.h3>
                            <p className="text-md text-gray-700">
                                ToyNest is not liable for any injury or damage caused by improper use of toys. Always supervise children during playtime.
                            </p>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                6. Modifications
                            </motion.h3>
                            <p className="text-md text-gray-700">
                                We reserve the right to modify these terms at any time. Continued use of the service after updates constitutes acceptance of the changes.
                            </p>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Contact Us
                            </motion.h3>
                            <p className="text-md text-gray-700">
                                If you have any questions or concerns regarding these terms, please contact us at <strong className="text-purple-800">support@toynest.in</strong>.
                            </p>
                        </div>
                    </div>
                </motion.section>
            </div>
            <Footer />
        </div>
    );
};

export default TermsAndConditions;
