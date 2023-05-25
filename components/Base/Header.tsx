import { useState } from 'react';
import cross from '/static/icons/cross.svg';
import hamburger from '/static/icons/hamburger.svg';
import Image from 'next/image';
import Link from 'next/link';
import { links } from './BaseLayout';

const Header = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  return (
    <header className="bg-off-white">
      <nav className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between">
        <div className="flex items-center justify-between">
          <div className="z-20">
            <Link
              className="text-2xl font-bold text-gray-800 hover:text-gray-700 lg:text-3xl"
              href="/"
            >
              Carl Gützkow
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button
              onClick={(_) => setOpenMobileNav(!openMobileNav)}
              className="text-gray-500 hover:text-gray-600 z-30"
              aria-label="toggle menu"
            >
              {!openMobileNav ? (
                <Image src={hamburger} alt="Hamburger Menu" />
              ) : (
                <Image src={cross} alt="Cross" />
              )}
            </button>
          </div>
        </div>

        <div
          className={`${
            openMobileNav
              ? 'translate-y-0 opacity-100'
              : 'opacity-0 -translate-y-full'
          } absolute z-10 inset-x-0 w-full bg-off-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-y-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none`}
        >
          <div className="flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
            {links.map(({ name, href }) => (
              <Link
                key={name}
                className="text-sm font-medium text-gray-700 hover:text-blue-500 lg:mx-4 lg:my-0 lg:mvn-button"
                href={href}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
