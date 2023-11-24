import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <Outlet />
      Layout
    </main>
  );
};

export default Layout;
