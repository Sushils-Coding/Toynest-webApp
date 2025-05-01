import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import FAQ from "../FAQ";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Pricing = () => {

  useEffect(() => {
          window.scrollTo(0, 0);
      }, []);

  const plans = [
    {
      name: "Starter Plan",
      price: 499,
      period: "month",
      billing: "Billed monthly",
      toys: 2,
      features: [
        "2 Toys at a time",
        "Monthly exchanges",
        "Standard delivery",
        "Basic toy selection",
        "Sanitized toys",
        "Age-appropriate recommendations",
      ],
    },
    {
      name: "Standard Plan",
      price: 799,
      period: "month",
      billing: "Billed monthly",
      toys: 3,
      features: [
        "3 Toys at a time",
        "Bi-weekly exchanges",
        "Free delivery",
        "Extended toy selection",
        "Sanitized toys",
        "Personalized recommendations",
        "Educational guides",
      ],
    },
    {
      name: "Premium Plan",
      price: 999,
      period: "month",
      billing: "Billed montly",
      toys: 4,
      features: [
        "4 Toys at a time",
        "Unlimited exchanges",
        "Priority free delivery",
        "Access to premium toys",
        "Sanitized toys",
        "Personalized recommendations",
        "Early access to new toys",
        "Priority customer support",
      ],
    },
  ];

  const stats = [
    { number: "74", label: "Toys enjoyed" },
    { number: "9+", label: "New skills unlocked!" },
    { number: "Rs.72014", label: "Saved by rotating" },
    { number: "1652.4 kg", label: "CO2 saved" },
  ];

  const testimonials = [
    {
      text: "The ToyNest toy library has been a game-changer! My kids get excited every time we exchange toys, and I love how much money we're saving.",
      author: "Priya Sharma, Mom of 2",
    },
    {
      text: "Finally, a sustainable solution to my children's changing toy preferences. The quality of toys is excellent, and the delivery service is prompt.",
      author: "Rahul Verma, Dad of 3",
    },
    {
      text: "The selection of educational toys is incredible. My son has learned so much through different activities, and we're not breaking the bank!",
      author: "Amit Kumar, Parent",
    },
  ];

  return (
    <>
      <div className="p-[10px] h-[80px]">
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 className="text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-300 hover:scale-105">
              Become a member today and{" "}
              <span className="text-amber-500 inline-block hover:scale-110 transition-transform duration-300">
                avail benefits!
              </span>
            </motion.h2>
            <motion.p className="text-lg md:text-xl text-gray-600 animate-fade-in"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{
                scale: 1.02,
                textShadow: "0px 2px 8px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}>
              *Pricing displayed are inclusive of taxes & might get further
              reduced as per your location
            </motion.p>
          </div>

          {/* Pricing Cards Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 relative
                  ${plan.name === "Standard Plan"
                    ? "border-amber-400 scale-105 z-10"
                    : "border-amber-100"
                  }`}
              >
                {plan.name === "Standard Plan" && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-amber-400 text-white px-6 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">₹{plan.price}</span>
                  <span className="text-lg text-gray-600">/{plan.period}</span>
                  <p className="text-base text-gray-500 mt-2">{plan.billing}</p>
                </div>
                <button className="w-full bg-amber-400 text-white text-base font-bold rounded-full py-3 mb-6 hover:bg-amber-500 transition-colors duration-300">
                  Subscribe Now
                </button>
                <div className="space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-5 h-5 text-amber-500 mr-3"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          className="fill-current"
                        />
                        <path
                          d="M9 12l2 2 4-4"
                          stroke="white"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                      <span className="text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* More Info Section */}
          <div className="mt-24">
            <h3 className="text-3xl md:text-5xl font-bold text-center mb-12 transform transition-all duration-300 hover:scale-105">
              The more you play,{" "}
              <span className="text-amber-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-amber-300">
                the less you pay
              </span>
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-amber-100 group">
                <div className="mb-6 bg-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors duration-300">
                  <svg
                    className="w-12 h-12 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Premium Quality
                </h4>
                <p className="text-gray-600">
                  Carefully curated, sanitized, and safety-certified toys
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-amber-100 group">
                <div className="mb-6 bg-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors duration-300">
                  <svg
                    className="w-12 h-12 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Flexible Exchanges
                </h4>
                <p className="text-gray-600">
                  Switch toys anytime based on your plan
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-amber-100 group">
                <div className="mb-6 bg-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors duration-300">
                  <svg
                    className="w-12 h-12 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Skill Development
                </h4>
                <p className="text-gray-600">
                  Age-appropriate toys for continuous learning
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-amber-100 group">
                <div className="mb-6 bg-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors duration-300">
                  <svg
                    className="w-12 h-12 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Timely Delivery
                </h4>
                <p className="text-gray-600">
                  Scheduled deliveries at your convenience
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-amber-100 group">
                <div className="mb-6 bg-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors duration-300">
                  <svg
                    className="w-12 h-12 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Easy Returns
                </h4>
                <p className="text-gray-600">
                  Hassle-free pickup when you're done
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-amber-100 group">
                <div className="mb-6 bg-amber-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-amber-100 transition-colors duration-300">
                  <svg
                    className="w-12 h-12 text-amber-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  Eco-Friendly
                </h4>
                <p className="text-gray-600">
                  Reduce waste through toy sharing
                </p>
              </div>
            </div>
          </div>

          {/* Did You Know Section */}
          <div className="bg-white rounded-2xl p-16 mt-24 text-center shadow-xl transform transition-all duration-500 hover:shadow-2xl border-2 border-emerald-100">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 flex items-center justify-center gap-4">
                <svg
                  className="w-10 h-10 text-emerald-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Did you know?
              </h3>
              <p className="text-2xl md:text-3xl mb-8 text-gray-700 font-semibold">
                Parents in India spend roughly{" "}
                <span className="text-emerald-600">₹38,000</span> on toys in a
                year
              </p>
              <div className="space-y-4 text-xl text-gray-600">
                <p className="flex items-center justify-center gap-2 transform transition-all duration-300 hover:translate-x-2">
                  <svg
                    className="w-6 h-6 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  More expenses as the child's age and interests change
                </p>
                <p className="flex items-center justify-center gap-2 transform transition-all duration-300 hover:translate-x-2">
                  <svg
                    className="w-6 h-6 text-emerald-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  Extra cost of storing and disposing of unused ones
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24 text-center">
            <p className="text-2xl md:text-4xl mb-12 leading-relaxed max-w-4xl mx-auto">
              With{" "}
              <span className="text-amber-500 font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-amber-300">
                the ToyNest
              </span>
              , you save money, stay green, and spark your child's
              <span className="text-amber-500 font-bold relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-amber-300">
                {" "}
                growth
              </span>
              !
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.number}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-purple-100"
                >
                  <div className="text-4xl font-bold text-purple-600 mb-3">
                    {stat.number}
                  </div>
                  <div className="text-lg text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mt-24 text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold mb-12">
              Join{" "}
              <span className="text-amber-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-amber-300">
                5,000+ Parents
              </span>{" "}
              Who Trust the ToyNest
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-amber-100"
                >
                  <svg
                    className="w-8 h-8 text-amber-400 mb-4 mx-auto"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                  <p className="text-lg mb-6 text-gray-600 italic">
                    "{testimonial.text}"
                  </p>
                  <p className="text-amber-600 font-semibold">
                    - {testimonial.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <FAQ />
      <Footer />
    </>
  );
};

export default Pricing;
