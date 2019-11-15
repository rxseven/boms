import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import ScrollMemory from 'react-router-scroll-memory';

function Router({ children }) {
  return (
    <BrowserRouter>
      <>
        <ScrollMemory />
        <LastLocationProvider>{children}</LastLocationProvider>
      </>
    </BrowserRouter>
  );
}

export default Router;
