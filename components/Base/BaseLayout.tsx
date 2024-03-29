import React, { ReactNode } from 'react';
import Header from 'components/Base/Header';
import Footer from 'components/Base/Footer';
import Head from 'next/head';

interface BaseLayoutProps {
  children: ReactNode;
}

export const links = [
  { name: 'About me', href: '/#about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
] as { name: string; href: string }[];

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Head>
        <title>Carl Johan Gützkow | Portfolio</title>
      </Head>
      <div className="flex flex-col overflow-hidden justify-between items-stretch min-h-screen bg-gradient-radial from-light-red to-light-blue">
        <Header />
        <main className="container relative">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
