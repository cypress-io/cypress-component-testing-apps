// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import { mount } from '@cypress/vue';

import '../../src/assets/main.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
Cypress.Commands.add('mount', (comp, options = {}) => {
  return mount(comp, options);
});

// Alternatively you can use CommonJS syntax:
// require('./commands')
