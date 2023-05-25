import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
