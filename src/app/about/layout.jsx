import React from 'react';

const Layout = ({ children }) => {
  return (
      <div className="flex h-screen" style={{ backgroundColor: 'black', color: 'black' }}>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
  );
};

export default Layout;
