import PropTypes from 'prop-types';
import React from 'react';

import Router from './Router';

const propTypes = {
  children: PropTypes.element.isRequired
};

function Providers({ children }) {
  return <Router>{children}</Router>;
}

Providers.propTypes = propTypes;

export default Providers;
