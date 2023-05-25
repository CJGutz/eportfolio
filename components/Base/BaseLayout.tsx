import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <Head>
        <title>Carl Gützkow</title>
      </Head>
      <div>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
