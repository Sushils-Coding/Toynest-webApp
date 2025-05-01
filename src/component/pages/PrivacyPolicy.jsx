import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useEffect } from 'react';

const PrivacyPolicy = () => {

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
                            Privacy Policy
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
                            At <span className="font-bold text-purple-800">ToyNest</span>, your privacy is important to us. This privacy policy outlines how we collect, use, and protect your information when you use our platform.
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
                                Information We Collect:
                            </motion.h3>
                            <ul className="list-disc ml-6 space-y-4">
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    <span className="font-bold">Personal Information:</span> Name, email, address, phone number, and payment details when you subscribe or purchase.
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    <span className="font-bold">Usage Data:</span> Interaction patterns on our website to help us improve our user experience.
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    <span className="font-bold">Device Information:</span> IP address, browser type, and device used to access the platform.
                                </motion.li>
                            </ul>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800 mt-6"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                How We Use Your Information:
                            </motion.h3>
                            <ul className="list-disc ml-6 space-y-4">
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    To process your subscriptions, orders, and transactions securely.
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    To provide customer support and notify you about updates or promotions.
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    To enhance your experience through analytics and personalized recommendations.
                                </motion.li>
                            </ul>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800 mt-6"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Data Protection:
                            </motion.h3>
                            <ul className="list-disc ml-6 space-y-4">
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    We implement secure servers, encryption protocols, and access controls to protect your data.
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    Your data is <span className="font-bold text-purple-800">never shared or sold</span> to third parties for marketing purposes.
                                </motion.li>
                            </ul>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800 mt-6"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{
                                    scale: 1.02,
                                    textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                                    transition: { duration: 0.3 }
                                }}
                            >
                                Your Rights:
                            </motion.h3>
                            <ul className="list-disc ml-6 space-y-4">
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    You may request to view, modify, or delete your personal data at any time.
                                </motion.li>
                                <motion.li whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                                    You can opt out of marketing communications through your account settings or unsubscribe links.
                                </motion.li>
                            </ul>

                            <motion.h3
                                className="text-2xl font-semibold text-gray-800 mt-6"
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
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
                                If you have any privacy concerns or inquiries, please contact us at <strong className="text-purple-800">support@toynest.in</strong> or through our <strong className="text-purple-800">Contact Us</strong> page. We respond to all queries within <span className="font-bold text-purple-800">3–5 business days</span>.
                            </motion.p>
                        </div>
                    </div>
                </motion.section>
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
