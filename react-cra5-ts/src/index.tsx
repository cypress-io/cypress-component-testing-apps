import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { worker } from './mocks';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: 'bypass',
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
