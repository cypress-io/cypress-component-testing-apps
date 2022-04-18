import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { worker } from './mocks';

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: 'bypass'
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
