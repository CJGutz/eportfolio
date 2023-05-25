import Link from 'next/link';
import { links } from './BaseLayout';

const Footer = () => {
  return (
    <footer className="p-4 bg-white md:flex md:items-center md:justify-around md:p-6 bg-off-white">
      <span className="text-sm text-gray-500 sm:text-center">
        © {new Date().getFullYear()}{' '}
        <Link
          href="https://github.com/cjgutz"
          className="underline"
          target="_blank"
        >
          Carl Gützkow
        </Link>
      </span>
      <ul className="flex flex-wrap items-center mt-3 md:mt-0">
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link
              className="mr-4 text-sm text-gray-500 hover:underline md:mr-6"
              href={href}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
