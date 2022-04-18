import { defineConfig } from 'cypress';
import { devServer } from '@cypress/react/plugins/next';

module.exports = defineConfig({
  component: {
    devServer,
  },
});
