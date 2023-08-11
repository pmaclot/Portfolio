import React from 'react';

// App
import App from './src/App';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => <App {...props}>{element}</App>;
