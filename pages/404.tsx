import type { NextPage } from 'next';
import Link from 'next/link';

const PageNotFound: NextPage = () => {
  return (
      <div className="p-64 h-screen bg-gradient-to-r from-ei-black-green to-ei-dark-green">
        <p className=" text-[100px] font-bold">404</p>
        <p>Couldn not find the page you were looking for</p>
        <p>
          <Link href="/" />
        </p>
      </div>
  );
};

export default PageNotFound;
