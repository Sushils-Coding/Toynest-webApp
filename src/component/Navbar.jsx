import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Catalogue', href: '/catalogue', current: true },
  { name: 'Plan & Pricing', href: '/pricing', current: false },
  { name: 'Parental Insights', href: '/parental-insights', current: false },
  { name: 'Be a Seller', href: '/seller', current: false },
  { name: 'About Us', href: '/about', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const [wishlistCount, setWishlistCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || []);
      // Remove duplicates just in case
      const uniqueItems = [...new Set(wishlist.map(id => String(id)))];
      setWishlistCount(uniqueItems.length);
    };

    updateWishlistCount();
    window.addEventListener('wishlist-updated', updateWishlistCount);

    return () => {
      window.removeEventListener('wishlist-updated', updateWishlistCount);
    };
  }, []);
  
  useEffect(() => {
    const updateCounts = () => {
      const wishlist = JSON.parse(localStorage.getItem('wishlist') || []);
      const cart = JSON.parse(localStorage.getItem('cart') || []);
      setWishlistCount(wishlist.length);
      setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
    };

    // Initial check
    updateCounts();

    // Listen for storage changes (from other tabs)
    window.addEventListener('storage', updateCounts);

    // Listen for custom events from same tab
    window.addEventListener('wishlist-updated', updateCounts);
    window.addEventListener('cart-updated', updateCounts);

    // Cleanup
    return () => {
      window.removeEventListener('storage', updateCounts);
      window.removeEventListener('wishlist-updated', updateCounts);
      window.removeEventListener('cart-updated', updateCounts);
    };
  }, []);

  return (
    <Disclosure as="nav" className="bg-gray-900 rounded-2xl z-50 fixed shadow-xl gradient-animation hover:shadow-2xl hover:shadow-gray-500 transition-all duration-300 ease-in-out">
      <div className="w-[97.5vw] px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <Disclosure.Button className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md focus:ring-2 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="block size-6 ui-open:hidden" />
              <XMarkIcon className="hidden size-6 ui-open:block" />
            </Disclosure.Button>
          </div>

          {/* Logo Section */}
          <Link to="/">
            <div className="w-[130px] sm:w-auto flex justify-end items-center md:space-x-4">
              <img src="/Logo_ToyNest.png" alt="ToyNest Logo" className="flex h-[49px] w-auto" />
              <img src="/BrandName.png" alt="ToyNest" className="h-[73px] hidden md:block" />
            </div>
          </Link>

          {/* Right Side: Links + Subscribe + Profile */}
          <div className="flex items-center justify-end sm:justify-between md:w-[65%]">
            {/* Navigation Links */}
            <div className="hidden sm:flex space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm sm:text-[15px] md:text-[17px] font-medium'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Wishlist + Cart + Profile with Left Gap */}
            <div className="flex items-center space-x-4 pl-6">

              {/* Wishlist Icon */}
              <Link to="/wishlist">
                <div className="relative">
                  <img
                    src={wishlistCount > 0 ? "/wishlist.png" : "/EmptyWishlist.png"}
                    alt="Wishlist"
                    className="w-[30px] h-[30px] cursor-pointer"
                  />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </div>
              </Link>

              {/* Cart Icon */}
              <Link to="/cart">
                <div className="relative">
                  <img
                    src={cartCount > 0 ? "/cart.png" : "/EmptyCart.png"}
                    alt="Cart"
                    className="w-[30px] h-[30px] cursor-pointer"
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>

              {/* Profile Dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User profile"
                  />
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                  {['Your Profile', 'Settings', 'Sign out'].map((item) => (
                    <MenuItem key={item}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </a>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      <Disclosure.Panel className="sm:hidden px-2 pt-2 pb-3 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            as="a"
            to={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'block rounded-md px-3 py-2 text-base font-medium'
            )}
          >
            {item.name}
          </Link>
        ))}
      </Disclosure.Panel>
    </Disclosure>
  );
};

export default Navbar;