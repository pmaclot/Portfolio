import React from 'react';

// App
import App from './src/App';

// Contexts
import { RoomProvider } from './src/context/room';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => (
  <RoomProvider>
    <App {...props}>{element}</App>
  </RoomProvider>
);
