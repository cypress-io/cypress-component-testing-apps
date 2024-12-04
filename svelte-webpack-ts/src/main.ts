import App from './App.svelte'
import "./assets/main.css"
import { mount } from 'svelte'

import { worker } from './mocks'

// Start a mock API server to handle auth requests
worker.start({
  onUnhandledRequest: 'bypass'
});

const app = mount(App, {
  target: document.body,
})

export default app
