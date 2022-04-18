import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { worker } from './mocks';

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: 'bypass'
});

createApp(App).mount('#app')
