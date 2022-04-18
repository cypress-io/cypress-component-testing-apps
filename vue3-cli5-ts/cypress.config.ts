import { defineConfig } from 'cypress'
import { devServer } from '@cypress/webpack-dev-server'
import webpackConfig from '@vue/cli-service/webpack.config'

export default defineConfig({
  component: {
    devServer,
    devServerConfig: {
      webpackConfig,
    },
  },
})