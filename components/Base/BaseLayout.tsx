import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

interface BaseLayoutProps {
  children: ReactNode;
}

export const links = [
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Courses', href: '/courses' },
] as { name: string; href: string }[];

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Head>
        <title>Carl Gützkow</title>
      </Head>
      <div className='flex flex-col justify-between items-stretch min-h-screen'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
