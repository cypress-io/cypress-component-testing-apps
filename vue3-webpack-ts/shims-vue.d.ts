declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// adding a Cypress shim for mount here
import { mount } from "cypress/vue"

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}