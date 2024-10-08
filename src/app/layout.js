import React from 'react';
import { Poppins } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import PropTypes from 'prop-types';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins`}>
        <StoreProvider>
          <Header />
          {children}
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
