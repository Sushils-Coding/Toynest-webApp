import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, LinkIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

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
  return (
    <Disclosure as="nav" className="bg-black rounded-2xl z-50 fixed shadow-xl gradient-animation hover:shadow-2xl hover:shadow-gray-500 transition-all duration-300 ease-in-out">
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

            {/* Subscribe + Profile with Left Gap */}
            <div className="flex items-center space-x-4 pl-6">
              <button className="bg-gray-700 text-gray-400 hover:text-white px-3 py-2 rounded-full text-sm focus:ring-2 focus:ring-white">
                Subscribe
              </button>

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

