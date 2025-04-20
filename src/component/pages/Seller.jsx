import React, { useState } from "react";
import {
  FaHeadset,
  FaBoxOpen,
  FaPhone,
  FaMoneyBillWave,
  FaChartLine,
  FaBuilding,
  FaPen,
  FaCheck,
  FaRocket,
  FaBullseye,
} from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { sendEmails } from "../../services/emailService";

const Seller = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const categories = formData.getAll("categories");

    const data = {
      businessName: formData.get("businessName"),
      businessType: formData.get("businessType"),
      contactName: formData.get("contactName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      city: formData.get("city"),
      categories,
      message: formData.get("message"),
    };

    try {
      await sendEmails(data);
      setSubmitStatus("success");
      e.target.reset();
    } catch (error) {
      console.log(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const benefits = [
    {
      title: "Dedicated Support Team",
      description:
        "Get personalized assistance from our experienced partner support team",
      icon: <FaHeadset className="h-6 w-6" />,
    },
    {
      title: "Smart Inventory Management",
      description:
        "Access our advanced inventory management system with real-time tracking",
      icon: <FaBoxOpen className="h-6 w-6" />,
    },
    {
      title: "Marketing & Promotion",
      description:
        "Featured spots on homepage, social media promotion, and email campaigns",
      icon: <FaPhone className="h-6 w-6" />,
    },
    {
      title: "Flexible Payment Terms",
      description: "Weekly settlements and transparent payment tracking system",
      icon: <FaMoneyBillWave className="h-6 w-6" />,
    },
    {
      title: "Growth Insights",
      description:
        "Detailed analytics and performance reports to grow your business",
      icon: <FaChartLine className="h-6 w-6" />,
    },
    {
      title: "Brand Building",
      description: "Build your brand presence in the growing toy market",
      icon: <FaBuilding className="h-6 w-6" />,
    },
  ];

  return (
    <>
      <div className="p-[10px] h-[80px]">
        <Navbar />
      </div>
      <div className="bg-gray-50 min-h-screen py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Become a <span className="text-amber-500">ToyNest Partner</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Join our marketplace and reach thousands of parents looking for
              quality toys
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-12 text-center">
              Why Partner With <span className="text-amber-500">ToyNest</span>?
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <span className="text-amber-500">{benefit.icon}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8"
          >
            {/* Business Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Business Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Business Type
                  </label>
                  <select
                    name="businessType"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"
                  >
                    <option value="">Select type</option>
                    <option value="manufacturer">Manufacturer</option>
                    <option value="retailer">Retailer</option>
                    <option value="distributor">Distributor</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">City</label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Product Information */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Product Information
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Toy Categories
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Educational",
                      "Outdoor",
                      "Electronic",
                      "Board Games",
                      "Arts & Crafts",
                      "Building Blocks",
                    ].map((category) => (
                      <label
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          name="categories"
                          value={category}
                          className="form-checkbox text-amber-500 rounded"
                        />
                        <span>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-400"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-amber-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-amber-600 transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-lg text-center">
                Thank you for your application! We'll be in touch soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center">
                There was an error submitting your application. Please try
                again.
              </div>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Seller;
