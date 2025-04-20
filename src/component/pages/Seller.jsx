import React, { useState } from "react";
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

  return (
    <>
      <div className="p-[10px] h-[80px]">
        <Navbar />
      </div>
      <div className="bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 transform transition-all duration-300 hover:scale-105">
              Become a <span className="text-amber-500">ToyNest Partner</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Join our marketplace and reach thousands of parents looking for
              quality toys
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl"
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
