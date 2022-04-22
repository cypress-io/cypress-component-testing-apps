import { defineConfig } from 'cypress';
import webpackConfig from './webpack.config';

export default defineConfig({
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'webpack',
      webpackConfig,
    },
  },
});
