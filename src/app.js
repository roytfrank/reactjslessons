import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

const App = function() {
    return <h1>This is react rendering as it should be</h1>
}

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);