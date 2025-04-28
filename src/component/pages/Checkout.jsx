import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import toys from "../../data/Toy";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const getToyById = (id) => {
    return toys.find((toy) => toy.id.toString() === id.toString());
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => {
        const toy = getToyById(item.id);
        return total + parseFloat(toy?.price || 0) * item.quantity;
      }, 0)
      .toFixed(2);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.phone || !formData.address) {
      alert("Please fill in all required fields.");
      return;
    }

    // Clear the cart
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("cart-updated"));

    // Redirect or show confirmation
    alert("Thank you for your purchase! Your order has been placed successfully.");
    navigate("/toy"); // Redirect back to toys page or show Order Summary page
  };

  return (
    <>
      <div className="p-[10px] h-[80px]">
        <Navbar />
      </div>

      <div className="bg-gradient-to-b from-purple-50 to-purple-100 py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl mb-8">
            Checkout
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Form */}
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Billing Information
              </h3>

              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    Address
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 font-medium text-gray-700">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-medium text-gray-700">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 rounded-lg transition"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Order Summary
              </h3>

              {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const toy = getToyById(item.id);
                    if (!toy) return null;
                    return (
                      <div key={item.id} className="flex justify-between items-center">
                        <div>
                          <p className="text-sm font-medium text-gray-800">{toy.name}</p>
                          <p className="text-xs text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <p className="text-sm font-semibold text-gray-900">
                          ₹{(parseFloat(toy.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    );
                  })}

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between">
                      <p className="font-semibold text-gray-900">Total</p>
                      <p className="font-bold text-gray-900">₹{calculateTotal()}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Go back button */}
          <div className="mt-8 text-center">
            <Link
              to="/cart"
              className="inline-block text-purple-600 hover:underline"
            >
              &larr; Back to Cart
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
