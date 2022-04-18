import { mount } from '@cypress/vue';

type MountParams = Parameters<typeof mount>;
type OptionsParam = MountParams[1];

declare global {
  namespace Cypress {    
    interface Chainable {
      /**
       * Helper mount function for Vue Components
       * @param component Vue Component or JSX Element to mount
       * @param options Options passed to Vue Test Utils
       */
      // mount: typeof mount
      // mount(component: any, options?: OptionsParam): Chainable<any>;
      mount(component: any, options?: any): Chainable<any>;
    }
  }
}
