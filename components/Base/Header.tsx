import { useState } from 'react';
import cross from '/static/icons/cross.svg';
import hamburger from '/static/icons/hamburger.svg';
import Image from 'next/image';

const Header = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900">
      <nav
        x-data="{ isOpen: false }"
        className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between"
      >
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
              href="#"
            >
              Brand
            </a>
          </div>

          <div className="flex lg:hidden">
            <button
              x-cloak
              onClick={(_) => setOpenMobileNav(!openMobileNav)}
              type="button"
              className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
                {!openMobileNav ? (
                    <Image
                        src={hamburger}
                        alt="Hamburger Menu"
                    />
                    ): (                 
                    <Image
                        src={cross}
                        alt="Cross"
                    />
                  )}
            </button>
            </div>
            </div>
            
            <div
            x-cloak
            className={`${
                openMobileNav
                ? 'translate-x-0 opacity-100 '
                : 'opacity-0 -translate-x-full'
          } absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent`}
        >
          <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            <a
              className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
              href="#"
            >
              Home
            </a>
            <a
              className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
              href="#"
            >
              Components
            </a>
            <a
              className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
              href="#"
            >
              Contact
            </a>
            <a
              className="text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-6"
              href="#"
            >
              FAQ
            </a>
          </div>

          <a
            className="mt-4 block h-10 transform rounded-md border px-5 py-2 text-center text-sm capitalize text-gray-700 transition-colors duration-300 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 lg:mt-0 lg:w-auto"
            href="#"
          >
            {' '}
            Contact Us{' '}
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
