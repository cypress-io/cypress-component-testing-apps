import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { worker } from './mocks';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: 'bypass',
});

