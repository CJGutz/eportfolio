import type { NextPage } from 'next';
import Link from 'next/link';

const PageNotFound: NextPage = () => {
  return (
    <div className="p-64 h-screen bg-gradient-radial from-light-blue to-light-red">
      <p className="text-[100px] font-bold">404</p>
      <p>Could not find the page you were looking for</p>
      <div className="py-6">
        <Link href="/">
          <button
            className="py-4 px-8 text-xl font-semibold
          bg-transparent border-2 border-black rounded 
          hover:bg-off-white hover:border-transparent 
          mvn-button"
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
