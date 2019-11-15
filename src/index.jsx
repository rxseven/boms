import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from 'serviceWorker';
import App from 'components/core/skeleton/App';
import HTML from 'constants/common/elements';

// Get root HTML element with the specified ID
const root = document.getElementById(HTML.root);

// Validate root element
if (root == null) {
  throw new Error('No root element found');
}

// Render React element into the DOM
ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
