import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Todo from './todos';

const App = function() {
    return <div>
      <Todo></Todo>
    </div>
}

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);