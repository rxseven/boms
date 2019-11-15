import React from 'react';
import { hot } from 'react-hot-loader';

import { Providers, Routes } from 'components/core';

function App() {
  return (
    <Providers>
      <Routes />
    </Providers>
  );
}

export default hot(module)(App);
