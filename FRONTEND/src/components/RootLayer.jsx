import React from 'react';
import { Outlet } from 'react-router';

import MainNavigation from './MainNavigation';

const RootLayer = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>

    </>
  )
}

export default RootLayer