import * as React from 'react';
import { Link } from 'react-router-dom';

import PATHS from 'constants/common/routes';

function NotFound() {
  return (
    <div>
      <h2>404</h2>
      <p>This is not webpage you are looking for.</p>
      <Link to={PATHS.root}>Go back to Home page</Link>
    </div>
  );
}

export default NotFound;
