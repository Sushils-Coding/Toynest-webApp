import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

const navigation = [
  { name: "Catalogue", href: "/catalogue", current: true },
  { name: "Plan & Pricing", href: "/pricing", current: false },
  { name: "Parental Insights", href: "/parental-insights", current: false },
  { name: "Be a Seller", href: "/seller", current: false },
  { name: "About Us", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
      // Handle any post-logout cleanup
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      // Remove duplicates just in case
      const uniqueItems = [...new Set(wishlist.map((id) => String(id)))];
      setWishlistCount(uniqueItems.length);
    };

    updateWishlistCount();
    window.addEventListener("wishlist-updated", updateWishlistCount);

    return () => {
      window.removeEventListener("wishlist-updated", updateWishlistCount);
    };
  }, []);

  useEffect(() => {
    const updateCounts = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setWishlistCount(wishlist.length);
      setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    };

    // Initial check
    updateCounts();

    // Listen for storage changes (from other tabs)
    window.addEventListener("storage", updateCounts);

    // Listen for custom events from same tab
    window.addEventListener("wishlist-updated", updateCounts);
    window.addEventListener("cart-updated", updateCounts);

    // Cleanup
    return () => {
      window.removeEventListener("storage", updateCounts);
      window.removeEventListener("wishlist-updated", updateCounts);
      window.removeEventListener("cart-updated", updateCounts);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-gray-900 rounded-2xl z-50 fixed left-1/2 -translate-x-1/2 shadow-xl gradient-animation hover:shadow-2xl hover:shadow-gray-500 transition-all duration-300 ease-in-out w-[95%] md:w-[97.5%] max-w-[1920px] mt-2"
    >
      <div className="mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center sm:hidden">
            <Disclosure.Button className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block size-6 ui-open:hidden" />
              <XMarkIcon className="hidden size-6 ui-open:block" />
            </Disclosure.Button>
          </div>

          {/* Logo Section */}
          <Link to="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <img
                src="/Logo_ToyNest.png"
                alt="ToyNest Logo"
                className="h-[40px] w-auto sm:h-[49px]"
              />
              <img
                src="/BrandName.png"
                alt="ToyNest"
                className="h-[50px] hidden sm:block md:h-[73px]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="flex space-x-2 md:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-2 py-2 text-sm lg:px-3 xl:text-base font-medium whitespace-nowrap"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Wishlist Icon */}
            <Link to="/wishlist">
              <div className="relative p-1">
                <img
                  src={
                    wishlistCount > 0 ? "/wishlist.png" : "/EmptyWishlist.png"
                  }
                  alt="Wishlist"
                  className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] cursor-pointer"
                />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Cart Icon */}
            <Link to="/cart">
              <div className="relative p-1">
                <img
                  src={cartCount > 0 ? "/cart.png" : "/EmptyCart.png"}
                  alt="Cart"
                  className="w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] cursor-pointer"
                />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>

            {/* Profile Dropdown */}
            <Menu as="div" className="relative ml-1">
              <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white">
                {user ? (
                  <span className="h-7 w-7 sm:h-8 sm:w-8 rounded-full bg-amber-500 flex items-center justify-center text-white text-sm">
                    {user.displayName?.charAt(0) || user.email?.charAt(0)}
                  </span>
                ) : (
                  <Link
                    to="/login"
                    className="text-gray-300 hover:text-white px-2 py-1 sm:px-3 sm:py-2 text-sm"
                  >
                    Sign In
                  </Link>
                )}
              </MenuButton>
              {user && (
                <MenuItems className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 z-50">
                  <MenuItem>
                    <span className="block px-4 py-2 text-sm text-gray-700">
                      {user.displayName || user.email}
                    </span>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to="/order"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Order history
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </MenuItems>
              )}
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default Navbar;
