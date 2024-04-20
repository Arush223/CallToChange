import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';

const Layout = ({ children }) => {
  return (
    <ClerkProvider>
      <div className="flex h-screen" style={{ backgroundColor: 'black', color: 'black' }}>
        <div className="w-full flex-none md:w-64"></div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </ClerkProvider>
  );
};

export default Layout;
