import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { worker } from './mocks';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: 'bypass',
});

